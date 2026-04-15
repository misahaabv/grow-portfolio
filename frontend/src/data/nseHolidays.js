// NSE Market Holidays — 2023, 2024, 2025
// Format: { date: 'YYYY-MM-DD', name: 'Holiday Name' }

export const NSE_HOLIDAYS = [
  // ── 2023 ──────────────────────────────────────────────
  { date: '2023-01-26', name: 'Republic Day' },
  { date: '2023-03-07', name: 'Holi' },
  { date: '2023-03-30', name: 'Ram Navami' },
  { date: '2023-04-04', name: 'Mahavir Jayanti' },
  { date: '2023-04-07', name: 'Good Friday' },
  { date: '2023-04-14', name: 'Dr. Ambedkar Jayanti' },
  { date: '2023-05-01', name: 'Maharashtra Day' },
  { date: '2023-06-29', name: 'Bakri Eid' },
  { date: '2023-08-15', name: 'Independence Day' },
  { date: '2023-09-19', name: 'Ganesh Chaturthi' },
  { date: '2023-10-02', name: 'Gandhi Jayanti' },
  { date: '2023-10-24', name: 'Dussehra' },
  { date: '2023-11-14', name: 'Diwali Balipratipada' },
  { date: '2023-11-27', name: 'Guru Nanak Jayanti' },
  { date: '2023-12-25', name: 'Christmas' },

  // ── 2024 ──────────────────────────────────────────────
  { date: '2024-01-22', name: 'Ram Mandir Pran Pratishtha' },
  { date: '2024-01-26', name: 'Republic Day' },
  { date: '2024-03-08', name: 'Mahashivratri' },
  { date: '2024-03-25', name: 'Holi' },
  { date: '2024-03-29', name: 'Good Friday' },
  { date: '2024-04-11', name: 'Eid-ul-Fitr' },
  { date: '2024-04-17', name: 'Ram Navami' },
  { date: '2024-05-01', name: 'Maharashtra Day' },
  { date: '2024-06-17', name: 'Bakri Eid' },
  { date: '2024-07-17', name: 'Muharram' },
  { date: '2024-08-15', name: 'Independence Day' },
  { date: '2024-10-02', name: 'Gandhi Jayanti' },
  { date: '2024-11-01', name: 'Diwali — Laxmi Pujan' },
  { date: '2024-11-15', name: 'Guru Nanak Jayanti' },
  { date: '2024-12-25', name: 'Christmas' },

  // ── 2025 ──────────────────────────────────────────────
  { date: '2025-02-26', name: 'Mahashivratri' },
  { date: '2025-03-14', name: 'Holi' },
  { date: '2025-03-31', name: 'Eid-ul-Fitr' },
  { date: '2025-04-10', name: 'Mahavir Jayanti' },
  { date: '2025-04-14', name: 'Dr. Ambedkar Jayanti' },
  { date: '2025-04-18', name: 'Good Friday' },
  { date: '2025-05-01', name: 'Maharashtra Day' },
  { date: '2025-08-15', name: 'Independence Day' },
  { date: '2025-08-27', name: 'Ganesh Chaturthi' },
  { date: '2025-10-02', name: 'Gandhi Jayanti / Dussehra' },
  { date: '2025-10-21', name: 'Diwali — Laxmi Pujan' },
  { date: '2025-10-22', name: 'Diwali Balipratipada' },
  { date: '2025-11-05', name: 'Guru Nanak Jayanti' },
  { date: '2025-12-25', name: 'Christmas' },
];

/**
 * Returns today's holiday if markets are closed, otherwise null.
 */
export function getTodayHoliday() {
  const today = new Date();
  const todayStr = today.toISOString().slice(0, 10); // 'YYYY-MM-DD'
  return NSE_HOLIDAYS.find(h => h.date === todayStr) || null;
}

/**
 * Returns the next upcoming NSE holiday from today's date.
 */
export function getNextHoliday() {
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const upcoming = NSE_HOLIDAYS
    .map(h => ({ ...h, dateObj: new Date(h.date) }))
    .filter(h => h.dateObj >= today)
    .sort((a, b) => a.dateObj - b.dateObj);
  return upcoming[0] || null;
}

/**
 * Returns the holiday that falls on the next trading day (tomorrow),
 * so we can warn users the night before.
 */
export function getTomorrowHoliday() {
  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  const tomorrowStr = tomorrow.toISOString().slice(0, 10);
  return NSE_HOLIDAYS.find(h => h.date === tomorrowStr) || null;
}

/**
 * Format a date string 'YYYY-MM-DD' to a readable label like '14 April 2025'.
 */
export function formatHolidayDate(dateStr) {
  const d = new Date(dateStr + 'T00:00:00');
  return d.toLocaleDateString('en-IN', { day: 'numeric', month: 'long', year: 'numeric' });
}

/**
 * Returns the next market open date (skips weekends and holidays).
 */
export function getNextMarketOpen(fromDateStr) {
  const holidaySet = new Set(NSE_HOLIDAYS.map(h => h.date));
  let d = new Date(fromDateStr + 'T00:00:00');
  d.setDate(d.getDate() + 1);
  while (true) {
    const dayOfWeek = d.getDay(); // 0=Sun, 6=Sat
    const dateStr = d.toISOString().slice(0, 10);
    if (dayOfWeek !== 0 && dayOfWeek !== 6 && !holidaySet.has(dateStr)) {
      return d.toLocaleDateString('en-IN', { day: 'numeric', month: 'long' });
    }
    d.setDate(d.getDate() + 1);
  }
}
