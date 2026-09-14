import { useState } from 'react';
import styles from './AmenitiesSection.module.css';

function AmenityIcon({ icon }) {
  const icons = {
    kitchen: (
      <svg viewBox="0 0 32 32" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2"><rect x="4" y="4" width="24" height="24" rx="2"/><path d="M4 12h24M12 4v8"/></svg>
    ),
    wifi: (
      <svg viewBox="0 0 32 32" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 14c6.6-6.6 17.4-6.6 24 0M8 18c4.4-4.4 11.6-4.4 16 0M12 22c2.2-2.2 5.8-2.2 8 0M16 27a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"/></svg>
    ),
    workspace: (
      <svg viewBox="0 0 32 32" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2"><rect x="4" y="8" width="24" height="16" rx="2"/><path d="M10 28h12M16 24v4"/></svg>
    ),
    parking: (
      <svg viewBox="0 0 32 32" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2"><rect x="4" y="4" width="24" height="24" rx="2"/><path d="M12 8h6a5 5 0 0 1 0 10h-6V8zM12 18v8"/></svg>
    ),
    pool: (
      <svg viewBox="0 0 32 32" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 22c2 2 4 2 6 0s4-2 6 0 4 2 6 0"/><path d="M4 16c2 2 4 2 6 0s4-2 6 0 4 2 6 0"/><circle cx="22" cy="8" r="3"/><path d="M22 11v5"/></svg>
    ),
    hottub: (
      <svg viewBox="0 0 32 32" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2"><rect x="4" y="14" width="24" height="14" rx="2"/><path d="M8 14v-4M14 14V8M20 14v-4M26 14V8"/></svg>
    ),
    pets: (
      <svg viewBox="0 0 32 32" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="10" cy="8" r="3"/><circle cx="22" cy="8" r="3"/><circle cx="6" cy="15" r="3"/><circle cx="26" cy="15" r="3"/><path d="M16 14c-4 0-8 3-8 8v4h16v-4c0-5-4-8-8-8z"/></svg>
    ),
    camera: (
      <svg viewBox="0 0 32 32" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="10" width="28" height="18" rx="2"/><circle cx="16" cy="19" r="5"/><path d="M12 10l2-4h8l2 4"/></svg>
    ),
    coalarm: (
      <svg viewBox="0 0 32 32" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="16" cy="16" r="12"/><path d="M10 16l4 4 8-8"/></svg>
    ),
    smokealarm: (
      <svg viewBox="0 0 32 32" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="16" cy="16" r="12"/><path d="M8 20h16M12 12c0-2 4-4 4-6M18 12c0-2-4-4-4-6"/></svg>
    ),
  };
  return icons[icon] || null;
}

export default function AmenitiesSection({ amenities, totalAmenities }) {
  const [showAll, setShowAll] = useState(false);
  const displayedAmenities = showAll ? amenities : amenities.slice(0, 8);

  return (
    <section id="amenities" className={styles.section} aria-labelledby="amenities-heading">
      <h2 id="amenities-heading" className={styles.heading}>What this place offers</h2>
      <div className={styles.grid}>
        {displayedAmenities.map((amenity) => (
          <div
            key={amenity.icon}
            className={`${styles.amenity} ${!amenity.available ? styles.unavailable : ''}`}
          >
            <span className={styles.icon} aria-hidden="true">
              <AmenityIcon icon={amenity.icon} />
            </span>
            <span className={styles.label}>{amenity.label}</span>
          </div>
        ))}
      </div>
      {!showAll && (
        <button
          className={styles.showAllBtn}
          onClick={() => setShowAll(true)}
          aria-label={`Show all ${totalAmenities} amenities`}
        >
          Show all {totalAmenities} amenities
        </button>
      )}
    </section>
  );
}
