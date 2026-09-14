import styles from './ReviewsSection.module.css';

function CategoryIcon({ icon }) {
  const icons = {
    cleanliness: <svg viewBox="0 0 32 32" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M10 16c0-6 12-6 12 0v8H10v-8z"/><path d="M10 16l-6 4M22 16l6 4"/><path d="M14 8c0-2 4-2 4 0v8H14V8z"/></svg>,
    accuracy: <svg viewBox="0 0 32 32" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="16" cy="16" r="12"/><path d="M10 16l4 4 8-8"/></svg>,
    checkin: <svg viewBox="0 0 32 32" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="16" cy="16" r="12"/><circle cx="16" cy="16" r="4"/><path d="M16 4v4M16 24v4M4 16h4M24 16h4"/></svg>,
    communication: <svg viewBox="0 0 32 32" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 4h24v18H4z" rx="2"/><path d="M4 22l4 6 4-6"/></svg>,
    location: <svg viewBox="0 0 32 32" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 4h10v10H4zM18 4h10v10H18zM4 18h10v10H4zM18 18h10v10H18z"/></svg>,
    value: <svg viewBox="0 0 32 32" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M16 2L2 12l14 18 14-18L16 2z"/></svg>,
  };
  return icons[icon] || null;
}

export default function ReviewsSection({ property }) {
  const { rating, reviewCount, categoryRatings, ratingDistribution, reviews, reviewTags } = property;
  const totalReviews = ratingDistribution.reduce((sum, r) => sum + r.count, 0);

  return (
    <section id="reviews" className={styles.section} aria-labelledby="reviews-heading">
      {/* Hero Rating */}
      <div className={styles.heroRating}>
        <div className={styles.wreathRow} aria-hidden="true">
          {/* Simple wreath using unicode */}
          <span className={styles.wreath}>🏆</span>
          <span className={styles.bigRating}>{rating}</span>
          <span className={styles.wreath} style={{ transform: 'scaleX(-1)', display: 'inline-block' }}>🏆</span>
        </div>
        <h2 id="reviews-heading" className={styles.guestFav}>Guest favourite</h2>
        <p className={styles.guestFavDesc}>
          This home is a guest favourite based on ratings, reviews and reliability
        </p>
        <button className={styles.howReviewsLink}>How reviews work</button>
      </div>

      {/* Rating Breakdown */}
      <div className={styles.breakdown}>
        {/* Overall Rating Bar */}
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

        {/* Category Ratings */}
        <div className={styles.categories}>
          {categoryRatings.map((cat) => (
            <div key={cat.label} className={styles.categoryItem}>
              <span className={styles.catValue}>{cat.value.toFixed(1)}</span>
              <span className={styles.catIcon} aria-hidden="true"><CategoryIcon icon={cat.icon} /></span>
              <span className={styles.catLabel}>{cat.label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Review Tags */}
      <div className={styles.tags} role="list" aria-label="Review categories">
        {reviewTags.map((tag) => (
          <button key={tag.label} className={styles.tag} role="listitem">
            <span className={styles.tagEmoji}>
              {tag.label === 'Comfort' ? '🛋️' :
               tag.label === 'Accuracy' ? '✅' :
               tag.label === 'Hot tub' ? '🛁' :
               tag.label === 'Condition' ? '🔧' :
               tag.label === 'Hospitality' ? '🤝' :
               tag.label === 'Cleanliness' ? '✨' : '⭐'}
            </span>
            {tag.label} {tag.count}
          </button>
        ))}
      </div>

      {/* Individual Reviews */}
      <div className={styles.reviewsGrid}>
        {reviews.map((review) => (
          <article key={review.id} className={styles.reviewCard}>
            <header className={styles.reviewHeader}>
              <div className={styles.reviewerAvatar} aria-hidden="true">
                {review.avatar}
              </div>
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
