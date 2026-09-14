import styles from './PropertyGallery.module.css';

export default function PropertyGallery({ images, onOpenPhotoTour, onOpenLightbox }) {
  const galleryImages = images.slice(0, 5);

  return (
    <div className={styles.gallery}>
      <div
        className={`${styles.imageWrapper} ${styles.hero}`}
        onClick={(e) => onOpenPhotoTour(e)}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => e.key === 'Enter' && onOpenPhotoTour(e)}
        aria-label="View all photos"
      >
        <img
          src={galleryImages[0]?.src}
          alt={galleryImages[0]?.alt}
          className={styles.image}
        />
        <div className={styles.imageOverlay} aria-hidden="true" />
      </div>

      {/* Right 2×2 grid */}
      <div className={styles.rightGrid}>
        {galleryImages.slice(1).map((img, idx) => (
          <div
            key={img.id}
            className={`${styles.imageWrapper} ${styles[`pos${idx}`]}`}
            onClick={(e) => onOpenLightbox(idx + 1, e)}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => e.key === 'Enter' && onOpenLightbox(idx + 1, e)}
            aria-label={`View photo: ${img.alt}`}
          >
            <img
              src={img.src}
              alt={img.alt}
              className={styles.image}
              loading="lazy"
            />
            <div className={styles.imageOverlay} aria-hidden="true" />
            {/* Show all photos button on last image */}
            {idx === 3 && (
              <button
                className={styles.showAllBtn}
                onClick={(e) => { e.stopPropagation(); onOpenPhotoTour(e); }}
                aria-label="Show all photos"
              >
                <svg viewBox="0 0 16 16" width="12" height="12" fill="currentColor" aria-hidden="true">
                  <rect x="1" y="1" width="6" height="6" rx="1"/>
                  <rect x="9" y="1" width="6" height="6" rx="1"/>
                  <rect x="1" y="9" width="6" height="6" rx="1"/>
                  <rect x="9" y="9" width="6" height="6" rx="1"/>
                </svg>
                Show all photos
              </button>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
