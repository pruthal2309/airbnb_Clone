import { useState } from 'react';
import styles from './BookingCard.module.css';

export default function BookingCard({ pricing }) {
  const { totalPrice, nights, currency, checkIn, checkOut, cancellationDate, discountOffer } = pricing;
  const [guests, setGuests] = useState(2);
  const [showGuestMenu, setShowGuestMenu] = useState(false);

  const pricePerNight = Math.round(totalPrice / nights);

  return (
    <aside className={styles.card} aria-label="Booking information">
      {/* Discount Banner */}
      <div className={styles.discountBanner}>
        <svg viewBox="0 0 32 32" width="18" height="18" fill="#008A05" aria-hidden="true">
          <path d="M16 2L2 12l14 18 14-18L16 2zm0 5l9 11.5L16 25 7 18.5 16 7z"/>
          <path d="M16 8l-6 10h12L16 8z"/>
        </svg>
        <span>
          {discountOffer}{' '}
          <a href="#" className={styles.termsLink}>Terms apply</a>
        </span>
        <button className={styles.claimBtn}>Claim</button>
      </div>

      <div className={styles.cardBody}>
        {/* Price */}
        <div className={styles.priceRow}>
          <span className={styles.price}>{currency}{pricePerNight.toLocaleString('en-IN')}</span>
          <span className={styles.priceLabel}> night</span>
        </div>

        {/* Date/Guest Picker */}
        <div className={styles.dateGrid}>
          <div className={styles.dateBox}>
            <label className={styles.dateLabel}>CHECK-IN</label>
            <span className={styles.dateValue}>{checkIn}</span>
          </div>
          <div className={styles.dateBox}>
            <label className={styles.dateLabel}>CHECKOUT</label>
            <span className={styles.dateValue}>{checkOut}</span>
          </div>
          <div
            className={`${styles.dateBox} ${styles.guestBox}`}
            onClick={() => setShowGuestMenu(!showGuestMenu)}
            role="button"
            tabIndex={0}
            aria-label={`${guests} guests, click to change`}
            onKeyDown={(e) => e.key === 'Enter' && setShowGuestMenu(!showGuestMenu)}
          >
            <div className={styles.guestInner}>
              <div>
                <label className={styles.dateLabel}>GUESTS</label>
                <span className={styles.dateValue}>{guests} guest{guests > 1 ? 's' : ''}</span>
              </div>
              <svg viewBox="0 0 32 32" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="3" aria-hidden="true">
                <path d="M6 12l10 10 10-10"/>
              </svg>
            </div>
          </div>
        </div>

        {/* Cancellation */}
        <p className={styles.cancellation}>
          Free cancellation before <strong>{cancellationDate}</strong>
        </p>

        {/* Reserve Button */}
        <button className={styles.reserveBtn} aria-label="Reserve this property">
          Reserve
        </button>

        <p className={styles.noCharge}>You won't be charged yet</p>

        {/* Price breakdown */}
        <div className={styles.breakdown}>
          <div className={styles.breakdownRow}>
            <span className={styles.breakdownLabel}>
              <u>{currency}{pricePerNight.toLocaleString('en-IN')} × {nights} nights</u>
            </span>
            <span>{currency}{totalPrice.toLocaleString('en-IN')}</span>
          </div>
        </div>
        <div className={styles.totalRow}>
          <span className={styles.totalLabel}>Total before taxes</span>
          <span className={styles.totalValue}>{currency}{totalPrice.toLocaleString('en-IN')}</span>
        </div>
      </div>

      {/* Report */}
      <div className={styles.report}>
        <button className={styles.reportBtn} aria-label="Report this listing">
          <svg viewBox="0 0 32 32" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
            <path d="M6 4v24M6 4l16 8-16 8"/>
          </svg>
          Report this listing
        </button>
      </div>
    </aside>
  );
}
