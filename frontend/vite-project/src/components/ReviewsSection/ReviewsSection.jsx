import styles from './ReviewsSection.module.css';

/* ── Laurel wreath SVG (matches reference screenshot) ── */
function LaurelLeft() {
  return (
    <svg viewBox="0 0 60 100" width="36" height="60" fill="none" aria-hidden="true">
      <path d="M30 90 C10 70, 5 50, 20 30" stroke="#555" strokeWidth="2.5" strokeLinecap="round" fill="none"/>
      <ellipse cx="12" cy="78" rx="9" ry="6" transform="rotate(-30 12 78)" fill="#666"/>
      <ellipse cx="8"  cy="62" rx="9" ry="6" transform="rotate(-50 8 62)"  fill="#777"/>
      <ellipse cx="10" cy="46" rx="9" ry="6" transform="rotate(-65 10 46)" fill="#666"/>
      <ellipse cx="16" cy="32" rx="9" ry="6" transform="rotate(-75 16 32)" fill="#777"/>
      <ellipse cx="26" cy="20" rx="9" ry="6" transform="rotate(-85 26 20)" fill="#666"/>
    </svg>
  );
}

function LaurelRight() {
  return (
    <svg viewBox="0 0 60 100" width="36" height="60" fill="none" aria-hidden="true" style={{ transform: 'scaleX(-1)' }}>
      <path d="M30 90 C10 70, 5 50, 20 30" stroke="#555" strokeWidth="2.5" strokeLinecap="round" fill="none"/>
      <ellipse cx="12" cy="78" rx="9" ry="6" transform="rotate(-30 12 78)" fill="#666"/>
      <ellipse cx="8"  cy="62" rx="9" ry="6" transform="rotate(-50 8 62)"  fill="#777"/>
      <ellipse cx="10" cy="46" rx="9" ry="6" transform="rotate(-65 10 46)" fill="#666"/>
      <ellipse cx="16" cy="32" rx="9" ry="6" transform="rotate(-75 16 32)" fill="#777"/>
      <ellipse cx="26" cy="20" rx="9" ry="6" transform="rotate(-85 26 20)" fill="#666"/>
    </svg>
  );
}

/* ── Per-category icons ── */
function CategoryIcon({ icon }) {
  const icons = {
    cleanliness: (
      <svg viewBox="0 0 32 32" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M10 18c0-5 12-5 12 0v7H10v-7z"/>
        <path d="M14 9c0-2 4-2 4 0v9H14V9z"/>
        <path d="M10 18l-5 3M22 18l5 3"/>
      </svg>
    ),
    accuracy: (
      <svg viewBox="0 0 32 32" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="16" cy="16" r="12"/>
        <path d="M10 16l4 4 8-8"/>
      </svg>
    ),
    checkin: (
      <svg viewBox="0 0 32 32" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="14" cy="14" r="10"/>
        <path d="M22 22l8 8" strokeLinecap="round"/>
      </svg>
    ),
    communication: (
      <svg viewBox="0 0 32 32" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="2" y="4" width="28" height="18" rx="2"/>
        <path d="M2 22l5 6 5-6"/>
      </svg>
    ),
    location: (
      <svg viewBox="0 0 32 32" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="2" y="2" width="12" height="12" rx="1"/>
        <rect x="18" y="2" width="12" height="12" rx="1"/>
        <rect x="2" y="18" width="12" height="12" rx="1"/>
        <rect x="18" y="18" width="12" height="12" rx="1"/>
      </svg>
    ),
    value: (
      <svg viewBox="0 0 32 32" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M4 16L16 4l12 12-12 12L4 16z"/>
      </svg>
    ),
  };
  return icons[icon] || null;
}

export default function ReviewsSection({ property }) {
  const { rating, reviewCount, categoryRatings, ratingDistribution, reviews, reviewTags } = property;
  const totalReviews = ratingDistribution.reduce((sum, r) => sum + r.count, 0);

  return (
    <section id="reviews" className={styles.section} aria-labelledby="reviews-heading">

      {/* ── Hero Rating ── */}
      <div className={styles.heroRating}>
        <div className={styles.wreathRow} aria-hidden="true">
          <LaurelLeft />
          <span className={styles.bigRating}>{rating}</span>
          <LaurelRight />
        </div>
        <h2 id="reviews-heading" className={styles.guestFav}>Guest favourite</h2>
        <p className={styles.guestFavDesc}>
          This home is a guest favourite based on ratings, reviews and reliability
        </p>
        <button className={styles.howReviewsLink}>How reviews work</button>
      </div>

      {/* ── Rating Breakdown — single horizontal row ── */}
      <div className={styles.breakdown}>

        {/* Overall rating + bars */}
        <div className={styles.overallRating}>
          <p className={styles.overallLabel}>Overall rating</p>
          <div className={styles.bars}>
            {[5, 4, 3, 2, 1].map((star) => {
              const row = ratingDistribution.find(r => r.stars === star);
              const pct = totalReviews > 0 ? ((row?.count || 0) / totalReviews) * 100 : 0;
              return (
                <div key={star} className={styles.barRow}>
                  <span className={styles.starLabel}>{star}</span>
                  <div className={styles.barTrack}>
                    <div className={styles.barFill} style={{ width: `${pct}%` }} />
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Category columns — label top, value middle, icon bottom */}
        {categoryRatings.map((cat) => (
          <div key={cat.label} className={styles.categoryItem}>
            <span className={styles.catLabel}>{cat.label}</span>
            <span className={styles.catValue}>{cat.value.toFixed(1)}</span>
            <span className={styles.catIcon} aria-hidden="true">
              <CategoryIcon icon={cat.icon} />
            </span>
          </div>
        ))}

      </div>

      {/* ── Review Tags — horizontally scrollable ── */}
      <div className={styles.tagsWrapper}>
        <div className={styles.tags} role="list" aria-label="Review categories">
          {reviewTags.map((tag) => (
            <button key={tag.label} className={styles.tag} role="listitem">
              <span className={styles.tagEmoji}>
                {tag.label === 'Comfort'        ? '🛋️' :
                 tag.label === 'Accuracy'       ? '✅' :
                 tag.label === 'Hot tub'        ? '🛁' :
                 tag.label === 'Condition'      ? '🔧' :
                 tag.label === 'Hospitality'    ? '🤝' :
                 tag.label === 'Cleanliness'    ? '✨' :
                 tag.label === 'Amenities'      ? '🏠' :
                 tag.label === 'Location'       ? '📍' :
                 tag.label === 'Pool'           ? '🏊' :
                 tag.label === 'Check-in'       ? '🗝️' :
                 tag.label === 'Communication'  ? '💬' :
                 tag.label === 'Value'          ? '💎' :
                 tag.label === 'Privacy'        ? '🔒' :
                 tag.label === 'Kitchen'        ? '🍳' :
                 tag.label === 'Decor'          ? '🎨' :
                 tag.label === 'Parking'        ? '🚗' : '⭐'}
              </span>
              {tag.label} {tag.count}
            </button>
          ))}
        </div>
      </div>

      {/* ── Individual Reviews ── */}
      <div className={styles.reviewsGrid}>
        {reviews.map((review) => (
          <article key={review.id} className={styles.reviewCard}>
            <header className={styles.reviewHeader}>
              {review.image ? (
                <div className={styles.reviewerAvatar} aria-hidden="true" style={{ background: 'none', padding: 0, overflow: 'hidden' }}>
                  <img
                    src={review.image}
                    alt={review.author}
                    style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '50%' }}
                  />
                </div>
              ) : (
                <div className={styles.reviewerAvatar} aria-hidden="true">
                  {review.avatar}
                </div>
              )}
              <div>
                <p className={styles.reviewerName}>{review.author}</p>
                <p className={styles.reviewDate}>{review.date}</p>
              </div>
            </header>
            <p className={styles.reviewText}>{review.text}</p>
          </article>
        ))}
      </div>

      <button className={styles.showMoreBtn} aria-label={`Show all ${reviewCount} reviews`}>
        Show all {reviewCount} reviews
      </button>

    </section>
  );
}
