import nodemailer from 'nodemailer';
import path from 'path';
import fs from 'fs';

export interface EmailSendOptions {
  to: string;
  replyTo?: string;
  subject: string;
  html: string;
}

export interface EmailSendResult {
  success: boolean;
  provider: 'resend' | 'sendgrid' | 'smtp' | 'none';
  messageId?: string;
  error?: string;
}

/**
 * Multi-provider Email Sender:
 * 1. Resend API (if RESEND_API_KEY is present)
 * 2. SendGrid API (if SENDGRID_API_KEY is present)
 * 3. SMTP / Mailpit (if SMTP_HOST is present)
 * 4. Simulation mode (logs to console)
 */
export async function sendNotificationEmail(options: EmailSendOptions): Promise<EmailSendResult> {
  const receiverEmail = options.to || process.env.CONTACT_RECEIVER_EMAIL || 'iletisim@koskdugunsalonu.com';
  const senderEmail = process.env.EMAIL_FROM || 'Köşk Düğün Salonu <onboarding@resend.dev>';

  // Logo path for attachments
  const logoFilePath = path.join(process.cwd(), 'public', 'kosk_logo.jpg');
  const hasLogo = fs.existsSync(logoFilePath);
  const logoBase64 = hasLogo ? fs.readFileSync(logoFilePath).toString('base64') : null;

  // 1. RESEND API
  if (process.env.RESEND_API_KEY) {
    try {
      const resendAttachments = logoBase64
        ? [
            {
              filename: 'kosk_logo.jpg',
              content: logoBase64,
            },
          ]
        : undefined;

      const res = await fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${process.env.RESEND_API_KEY}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          from: senderEmail,
          to: [receiverEmail],
          reply_to: options.replyTo || undefined,
          subject: options.subject,
          html: options.html,
          attachments: resendAttachments,
        }),
      });

      const data = await res.json();
      if (!res.ok) {
        throw new Error(data?.message || `Resend error HTTP ${res.status}`);
      }

      return {
        success: true,
        provider: 'resend',
        messageId: data.id,
      };
    } catch (err: any) {
      console.error('[Email Service] Resend dispatch failed:', err);
      // Fall through to SMTP if configured, else return failure
      if (!process.env.SMTP_HOST) {
        return {
          success: false,
          provider: 'resend',
          error: err.message,
        };
      }
    }
  }

  // 2. SENDGRID API
  if (process.env.SENDGRID_API_KEY) {
    try {
      const sendgridAttachments = logoBase64
        ? [
            {
              content: logoBase64,
              filename: 'kosk_logo.jpg',
              type: 'image/jpeg',
              disposition: 'inline',
              content_id: 'kosk_logo',
            },
          ]
        : undefined;

      const res = await fetch('https://api.sendgrid.com/v3/mail/send', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${process.env.SENDGRID_API_KEY}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          personalizations: [
            {
              to: [{ email: receiverEmail }],
              subject: options.subject,
            },
          ],
          from: { email: senderEmail.includes('<') ? senderEmail.replace(/.*<([^>]+)>.*/, '$1') : senderEmail, name: 'Köşk Düğün Salonu' },
          reply_to: options.replyTo ? { email: options.replyTo } : undefined,
          content: [
            {
              type: 'text/html',
              value: options.html,
            },
          ],
          attachments: sendgridAttachments,
        }),
      });

      if (!res.ok) {
        const errorText = await res.text();
        throw new Error(`SendGrid HTTP ${res.status}: ${errorText}`);
      }

      return {
        success: true,
        provider: 'sendgrid',
      };
    } catch (err: any) {
      console.error('[Email Service] SendGrid dispatch failed:', err);
      if (!process.env.SMTP_HOST) {
        return {
          success: false,
          provider: 'sendgrid',
          error: err.message,
        };
      }
    }
  }

  // 3. SMTP (Nodemailer / Mailpit / Production SMTP)
  if (process.env.SMTP_HOST) {
    try {
      const smtpHost = process.env.SMTP_HOST;
      const smtpPort = Number(process.env.SMTP_PORT) || 587;
      const smtpUser = process.env.SMTP_USER;
      const smtpPass = process.env.SMTP_PASS;

      const transporter = nodemailer.createTransport({
        host: smtpHost,
        port: smtpPort,
        secure: smtpPort === 465,
        ...(smtpUser && smtpPass
          ? {
              auth: {
                user: smtpUser,
                pass: smtpPass,
              },
            }
          : {}),
      });

      // Embed corporate logo if file exists
      const logoFilePath = path.join(process.cwd(), 'public', 'kosk_logo.jpg');
      const attachments = fs.existsSync(logoFilePath)
        ? [
            {
              filename: 'kosk_logo.jpg',
              path: logoFilePath,
              cid: 'kosk_logo',
            },
          ]
        : [];

      const info = await transporter.sendMail({
        from: `"Köşk Düğün Salonu Web" <${smtpUser || 'web@koskdugunsalonu.com'}>`,
        to: receiverEmail,
        replyTo: options.replyTo || undefined,
        subject: options.subject,
        html: options.html,
        attachments,
      });

      return {
        success: true,
        provider: 'smtp',
        messageId: info.messageId,
      };
    } catch (err: any) {
      console.error('[Email Service] SMTP dispatch failed:', err);
      return {
        success: false,
        provider: 'smtp',
        error: err.message,
      };
    }
  }

  // 4. Fallback simulation (dev preview)
  console.log('[Email Service] No active email provider configured. Simulating delivery.');
  return {
    success: true,
    provider: 'none',
  };
}
