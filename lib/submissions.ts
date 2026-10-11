import fs from 'fs';
import path from 'path';

export interface StoredSubmission {
  id: string;
  createdAt: string;
  fullName: string;
  phone: string;
  email?: string | null;
  eventType: string;
  selectedDate?: string | null;
  formattedDate: string;
  timeSlot: 'aksam' | 'gunduz';
  guestCount: number;
  notes?: string | null;
  ip?: string;
  userAgent?: string;
  emailStatus: 'sent' | 'simulated' | 'failed' | 'spam_blocked';
  emailProvider?: 'resend' | 'sendgrid' | 'smtp' | 'none';
  emailError?: string | null;
  isSpam?: boolean;
  spamReason?: string | null;
}

const DATA_DIR = path.join(process.cwd(), 'data');
const SUBMISSIONS_FILE = path.join(DATA_DIR, 'submissions.json');

// Ensure directory and JSON file exist
function ensureStorageExists(): void {
  try {
    if (!fs.existsSync(DATA_DIR)) {
      fs.mkdirSync(DATA_DIR, { recursive: true });
    }
    if (!fs.existsSync(SUBMISSIONS_FILE)) {
      fs.writeFileSync(SUBMISSIONS_FILE, JSON.stringify([], null, 2), 'utf-8');
    }
  } catch (err) {
    console.error('[Submissions Storage] Initialization error:', err);
  }
}

// Read all submissions safely
export async function getAllSubmissions(): Promise<StoredSubmission[]> {
  ensureStorageExists();
  try {
    const raw = await fs.promises.readFile(SUBMISSIONS_FILE, 'utf-8');
    const data = JSON.parse(raw);
    return Array.isArray(data) ? data : [];
  } catch (err) {
    console.error('[Submissions Storage] Read error:', err);
    return [];
  }
}

// Save a new submission atomically
export async function saveSubmission(
  submission: Omit<StoredSubmission, 'id' | 'createdAt'>
): Promise<StoredSubmission> {
  ensureStorageExists();

  const newEntry: StoredSubmission = {
    id: `sub_${Date.now()}_${Math.random().toString(36).substring(2, 8)}`,
    createdAt: new Date().toISOString(),
    ...submission,
  };

  try {
    const currentList = await getAllSubmissions();
    currentList.unshift(newEntry); // Newest first

    // Atomic write to prevent file corruption
    const tempFile = `${SUBMISSIONS_FILE}.tmp.${Date.now()}`;
    await fs.promises.writeFile(tempFile, JSON.stringify(currentList, null, 2), 'utf-8');
    await fs.promises.rename(tempFile, SUBMISSIONS_FILE);

    return newEntry;
  } catch (err) {
    console.error('[Submissions Storage] Save error:', err);
    return newEntry;
  }
}

// Update status of an existing submission (e.g. after email delivery outcome)
export async function updateSubmissionEmailStatus(
  id: string,
  update: {
    emailStatus: 'sent' | 'simulated' | 'failed' | 'spam_blocked';
    emailProvider?: 'resend' | 'sendgrid' | 'smtp' | 'none';
    emailError?: string | null;
  }
): Promise<void> {
  try {
    const list = await getAllSubmissions();
    const idx = list.findIndex((item) => item.id === id);
    if (idx !== -1) {
      list[idx] = { ...list[idx], ...update };
      const tempFile = `${SUBMISSIONS_FILE}.tmp.${Date.now()}`;
      await fs.promises.writeFile(tempFile, JSON.stringify(list, null, 2), 'utf-8');
      await fs.promises.rename(tempFile, SUBMISSIONS_FILE);
    }
  } catch (err) {
    console.error('[Submissions Storage] Update status error:', err);
  }
}
