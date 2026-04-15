import { NSE_HOLIDAYS, formatHolidayDate } from '../../data/nseHolidays';

// Group holidays by year, only show future ones (or current year if all past)
function getRelevantHolidays() {
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const currentYear = today.getFullYear();

  // Try upcoming first
  const upcoming = NSE_HOLIDAYS.filter(h => new Date(h.date + 'T00:00:00') >= today);
  if (upcoming.length > 0) return { holidays: upcoming.slice(0, 8), label: 'Upcoming Holidays' };

  // All dates passed — show current/last year
  const yearHolidays = NSE_HOLIDAYS.filter(h => h.date.startsWith(currentYear.toString()));
  if (yearHolidays.length > 0) return { holidays: yearHolidays, label: `NSE Holidays ${currentYear}` };

  // Fallback: show last year in list
  return { holidays: NSE_HOLIDAYS.slice(-8), label: 'NSE Holidays 2025' };
}

export default function HolidayWidget() {
  const { holidays, label } = getRelevantHolidays();

  return (
    <div className="widget">
      <h3 className="widget-title">
        <span className="material-icons widget-icon">event_busy</span>
        {label}
      </h3>
      <div className="holiday-list">
        {holidays.map(h => {
          const d = new Date(h.date + 'T00:00:00');
          const today = new Date();
          today.setHours(0, 0, 0, 0);
          const isPast = d < today;
          const isToday = d.toDateString() === today.toDateString();

          return (
            <div
              key={h.date}
              className={`holiday-row ${isToday ? 'holiday-today' : isPast ? 'holiday-past' : ''}`}
            >
              <div className="holiday-date-box">
                <span className="holiday-day">
                  {d.toLocaleDateString('en-IN', { day: '2-digit' })}
                </span>
                <span className="holiday-month">
                  {d.toLocaleDateString('en-IN', { month: 'short' })}
                </span>
              </div>
              <div className="holiday-info">
                <span className="holiday-name">{h.name}</span>
                {isToday && <span className="holiday-badge today-badge">Today</span>}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
