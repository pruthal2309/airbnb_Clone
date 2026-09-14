import styles from './PropertyDetails.module.css';

function OutdoorIcon() {
  return (
    <svg viewBox="0 0 32 32" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
      <path d="M16 2L2 20h4v10h6v-6h8v6h6V20h4L16 2z"/>
    </svg>
  );
}

function CoolIcon() {
  return (
    <svg viewBox="0 0 32 32" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
      <circle cx="16" cy="16" r="12"/>
      <path d="M16 6v20M6 16h20M9 9l14 14M23 9L9 23"/>
    </svg>
  );
}

function CheckinIcon() {
  return (
    <svg viewBox="0 0 32 32" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
      <rect x="4" y="4" width="24" height="24" rx="2"/>
      <path d="M4 14h24"/>
      <path d="M16 4v10"/>
      <path d="M11 20h10M16 17v6"/>
    </svg>
  );
}

const iconMap = { outdoor: OutdoorIcon, cool: CoolIcon, selfcheckin: CheckinIcon };

export default function PropertyDetails({ property }) {
  const { type, location, specs, rating, reviewCount, isGuestFavourite, host, highlights } = property;

  return (
    <section id="photos" className={styles.wrapper} aria-labelledby="property-type-heading">
      {/* Type & Location */}
      <div className={styles.typeRow}>
        <h2 id="property-type-heading" className={styles.type}>
          {type} in {location}
        </h2>
        <p className={styles.specs}>
          {specs.guests} guests · {specs.bedrooms} bedroom · {specs.beds} bed · {specs.bathrooms} bathroom
        </p>
      </div>

      <hr className={styles.divider} />

      {/* Guest Favourite Badge */}
      <div className={styles.badge} aria-label={`Guest favourite, rated ${rating} with ${reviewCount} reviews`}>
        {/* Wreath left */}
        <span className={styles.wreath} aria-hidden="true">
          <svg viewBox="0 0 32 32" width="36" height="36" fill="none" aria-hidden="true">
            <path d="M10 26c-3-2-6-5-6-10a8 8 0 0 1 8-8c2 0 4 .7 5.5 2" stroke="#222" strokeWidth="1.5" strokeLinecap="round"/>
            <path d="M4 18c-1-2-1-4 0-6M6 23c-1-1-2-2-2-4M10 26c-1 0-2-1-3-2" stroke="#222" strokeWidth="1.5" strokeLinecap="round"/>
          </svg>
        </span>
        <div className={styles.badgeCenter}>
          <span className={styles.badgeLabel}>Guest</span>
          <span className={styles.badgeLabel}>favourite</span>
        </div>
        {/* Wreath right (mirrored) */}
        <span className={`${styles.wreath} ${styles.wreathRight}`} aria-hidden="true">
          <svg viewBox="0 0 32 32" width="36" height="36" fill="none" aria-hidden="true" style={{transform:'scaleX(-1)'}}>
            <path d="M10 26c-3-2-6-5-6-10a8 8 0 0 1 8-8c2 0 4 .7 5.5 2" stroke="#222" strokeWidth="1.5" strokeLinecap="round"/>
            <path d="M4 18c-1-2-1-4 0-6M6 23c-1-1-2-2-2-4M10 26c-1 0-2-1-3-2" stroke="#222" strokeWidth="1.5" strokeLinecap="round"/>
          </svg>
        </span>
        <div className={styles.badgeRating}>
          <span className={styles.ratingNum}>{rating}</span>
          <div className={styles.stars} aria-hidden="true">
            {'★★★★★'.split('').map((s, i) => (
              <span key={i} style={{ color: '#222', fontSize: '12px' }}>{s}</span>
            ))}
          </div>
        </div>
        <div className={styles.badgeReviews}>
          <span className={styles.reviewNum}>{reviewCount}</span>
          <span className={styles.reviewLabel}>Reviews</span>
        </div>
      </div>

      <hr className={styles.divider} />

      {/* Host Info */}
      <div className={styles.host}>
        {host.avatarImage ? (
          <div className={styles.hostAvatar}>
            <img src={host.avatarImage} alt={host.name} style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '50%' }} />
          </div>
        ) : (
          <div
            className={styles.hostAvatar}
            style={{ background: host.avatarColor }}
            aria-hidden="true"
          >
            {host.initials}
          </div>
        )}
        <div>
          <p className={styles.hostedBy}>Hosted by {host.name}</p>
          <p className={styles.hostingYears}>{host.yearsHosting} years hosting</p>
        </div>
      </div>

      <hr className={styles.divider} />

      {/* Highlights */}
      <div className={styles.highlights}>
        {highlights.map((h) => {
          const Icon = iconMap[h.icon] || OutdoorIcon;
          return (
            <div key={h.icon} className={styles.highlight}>
              <span className={styles.highlightIcon} aria-hidden="true">
                <Icon />
              </span>
              <div>
                <p className={styles.highlightTitle}>{h.title}</p>
                <p className={styles.highlightDesc}>{h.description}</p>
              </div>
            </div>
          );
        })}
      </div>

      <hr className={styles.divider} />

      {/* Translation Notice */}
      <div className={styles.translationNotice} role="note">
        Some info has been automatically translated.{' '}
        <button className={styles.showOriginal}>Show original</button>
      </div>
    </section>
  );
}
