type RateLimitEntry = {
  count: number;
  resetAt: number;
};

const entries = new Map<string, RateLimitEntry>();
const limit = 5;
const windowMs = 10 * 60 * 1000;

export function checkContactRateLimit(
  key: string,
  now = Date.now(),
): { allowed: boolean; retryAfterSeconds: number } {
  const entry = entries.get(key);

  if (!entry || entry.resetAt <= now) {
    entries.set(key, { count: 1, resetAt: now + windowMs });
    removeExpiredEntries(now);
    return { allowed: true, retryAfterSeconds: 0 };
  }

  if (entry.count >= limit) {
    return {
      allowed: false,
      retryAfterSeconds: Math.max(1, Math.ceil((entry.resetAt - now) / 1000)),
    };
  }

  entry.count += 1;
  return { allowed: true, retryAfterSeconds: 0 };
}

function removeExpiredEntries(now: number): void {
  if (entries.size < 1000) {
    return;
  }

  for (const [key, entry] of entries) {
    if (entry.resetAt <= now) {
      entries.delete(key);
    }
  }
}
