import { useState } from 'react';
import styles from './CalendarSection.module.css';

const MONTHS = ['January','February','March','April','May','June','July','August','September','October','November','December'];
const DAYS = ['S','M','T','W','T','F','S'];

function getDaysInMonth(year, month) {
  return new Date(year, month + 1, 0).getDate();
}

function getFirstDayOfMonth(year, month) {
  return new Date(year, month, 1).getDay();
}

function CalendarMonth({ year, month, checkIn, checkOut, onDateClick }) {
  const daysInMonth = getDaysInMonth(year, month);
  const firstDay = getFirstDayOfMonth(year, month);
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const cells = [];
  for (let i = 0; i < firstDay; i++) cells.push(null);
  for (let d = 1; d <= daysInMonth; d++) cells.push(d);

  return (
    <div className={styles.month}>
      <h3 className={styles.monthName}>{MONTHS[month]} {year}</h3>
      <div className={styles.dayHeaders}>
        {DAYS.map((d, i) => <span key={i} className={styles.dayHeader}>{d}</span>)}
      </div>
      <div className={styles.daysGrid}>
        {cells.map((day, idx) => {
          if (!day) return <span key={`e${idx}`} />;
          const date = new Date(year, month, day);
          date.setHours(0, 0, 0, 0);
          const isPast = date < today;
          const isCheckIn = checkIn && date.getTime() === checkIn.getTime();
          const isCheckOut = checkOut && date.getTime() === checkOut.getTime();
          const isInRange = checkIn && checkOut && date > checkIn && date < checkOut;

          return (
            <button
              key={day}
              className={`
                ${styles.day}
                ${isPast ? styles.past : ''}
                ${isCheckIn ? styles.checkIn : ''}
                ${isCheckOut ? styles.checkOut : ''}
                ${isInRange ? styles.inRange : ''}
              `}
              disabled={isPast}
              onClick={() => !isPast && onDateClick(date)}
              aria-label={`${MONTHS[month]} ${day}, ${year}${isCheckIn ? ' (check-in)' : ''}${isCheckOut ? ' (check-out)' : ''}`}
              aria-pressed={isCheckIn || isCheckOut}
            >
              {day}
            </button>
          );
        })}
      </div>
    </div>
  );
}

export default function CalendarSection({ pricing }) {
  const parseDate = (str) => {
    const [m, d, y] = str.split('/');
    const dt = new Date(parseInt(y), parseInt(m) - 1, parseInt(d));
    dt.setHours(0, 0, 0, 0);
    return dt;
  };

  const [checkIn, setCheckIn] = useState(parseDate(pricing.checkIn));
  const [checkOut, setCheckOut] = useState(parseDate(pricing.checkOut));
  const [selecting, setSelecting] = useState(null); // null | 'checkIn' | 'checkOut'

  const [viewYear, setViewYear] = useState(2026);
  const [viewMonth, setViewMonth] = useState(9); // 0-based, October = 9

  const nights = checkIn && checkOut
    ? Math.round((checkOut - checkIn) / (1000 * 60 * 60 * 24))
    : pricing.nights;

  const handleDateClick = (date) => {
    if (!checkIn || (checkIn && checkOut) || date < checkIn) {
      setCheckIn(date);
      setCheckOut(null);
    } else {
      setCheckOut(date);
    }
  };

  const prevMonth = () => {
    if (viewMonth === 0) { setViewMonth(11); setViewYear(y => y - 1); }
    else setViewMonth(m => m - 1);
  };

  const nextMonth = () => {
    if (viewMonth === 11) { setViewMonth(0); setViewYear(y => y + 1); }
    else setViewMonth(m => m + 1);
  };

  const month2 = viewMonth === 11 ? 0 : viewMonth + 1;
  const year2 = viewMonth === 11 ? viewYear + 1 : viewYear;

  const formatDate = (d) => d ? `${d.getDate()} ${MONTHS[d.getMonth()].slice(0,3)} ${d.getFullYear()}` : '';

  return (
    <section className={styles.section} aria-labelledby="calendar-heading">
      <h2 id="calendar-heading" className={styles.heading}>
        {nights} night{nights !== 1 ? 's' : ''} in Candolim
      </h2>
      <p className={styles.dateRange}>
        {formatDate(checkIn)} – {formatDate(checkOut)}
      </p>

      <div className={styles.calendarWrapper}>
        <button className={styles.navBtn} onClick={prevMonth} aria-label="Previous month">
          <svg viewBox="0 0 32 32" width="12" height="12" fill="none" stroke="currentColor" strokeWidth="3"><path d="M20 6L10 16l10 10"/></svg>
        </button>
        <div className={styles.calendars}>
          <CalendarMonth
            year={viewYear}
            month={viewMonth}
            checkIn={checkIn}
            checkOut={checkOut}
            onDateClick={handleDateClick}
          />
          <CalendarMonth
            year={year2}
            month={month2}
            checkIn={checkIn}
            checkOut={checkOut}
            onDateClick={handleDateClick}
          />
        </div>
        <button className={styles.navBtn} onClick={nextMonth} aria-label="Next month">
          <svg viewBox="0 0 32 32" width="12" height="12" fill="none" stroke="currentColor" strokeWidth="3"><path d="M12 6l10 10-10 10"/></svg>
        </button>
      </div>
    </section>
  );
}
