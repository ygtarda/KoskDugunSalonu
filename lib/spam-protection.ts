// Sliding window in-memory rate limiter per IP address
const ipRequestsMap = new Map<string, number[]>();

const WINDOW_MS = 10 * 60 * 1000; // 10 minutes
const MAX_REQUESTS = 6; // Max 6 requests per 10 minutes

/**
 * Checks if a given IP exceeds the allowed request threshold
 */
export function checkRateLimit(ip: string): { allowed: boolean; remaining: number } {
  const now = Date.now();
  const timestamps = ipRequestsMap.get(ip) || [];

  // Filter out timestamps older than WINDOW_MS
  const validTimestamps = timestamps.filter((t) => now - t < WINDOW_MS);

  if (validTimestamps.length >= MAX_REQUESTS) {
    ipRequestsMap.set(ip, validTimestamps);
    return { allowed: false, remaining: 0 };
  }

  validTimestamps.push(now);
  ipRequestsMap.set(ip, validTimestamps);

  // Periodic cleanup if map grows too large
  if (ipRequestsMap.size > 2000) {
    ipRequestsMap.forEach((list, key) => {
      const active = list.filter((t) => now - t < WINDOW_MS);
      if (active.length === 0) {
        ipRequestsMap.delete(key);
      } else {
        ipRequestsMap.set(key, active);
      }
    });
  }

  return { allowed: true, remaining: MAX_REQUESTS - validTimestamps.length };
}

export interface SpamCheckResult {
  isSpam: boolean;
  reason?: 'honeypot' | 'fast_submit' | 'suspicious_content';
}

/**
 * Multi-layer anti-bot validation
 */
export function evaluateSpamSignals(body: {
  _hp_website?: string;
  _form_loaded_at?: number | string;
  fullName?: string;
  phone?: string;
  notes?: string;
}): SpamCheckResult {
  // 1. Honeypot trap: Humans never see or fill this hidden field
  if (body._hp_website && body._hp_website.trim().length > 0) {
    return {
      isSpam: true,
      reason: 'honeypot',
    };
  }

  // 2. Submission speed check: Filling out the form takes at least 2 seconds
  if (body._form_loaded_at) {
    const loadedAt = Number(body._form_loaded_at);
    if (!isNaN(loadedAt) && loadedAt > 0) {
      const elapsedMs = Date.now() - loadedAt;
      if (elapsedMs < 1800) {
        return {
          isSpam: true,
          reason: 'fast_submit',
        };
      }
    }
  }

  // 3. Obvious script injection attempt
  const contentToCheck = `${body.fullName || ''} ${body.notes || ''}`;
  if (/<script|javascript:|data:text\/html/i.test(contentToCheck)) {
    return {
      isSpam: true,
      reason: 'suspicious_content',
    };
  }

  return { isSpam: false };
}

/**
 * Basic HTML sanitization to prevent XSS in email and admin displays
 */
export function sanitizeString(input: string | undefined | null): string {
  if (!input) return '';
  return input
    .replace(/[<>]/g, '') // Strip angle brackets
    .trim();
}
