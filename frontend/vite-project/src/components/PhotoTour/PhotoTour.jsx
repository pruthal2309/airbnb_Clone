import { useEffect, useRef } from 'react';
import { useEscapeKey } from '../../hooks/useEscapeKey';
import { useScrollLock } from '../../hooks/useScrollLock';
import styles from './PhotoTour.module.css';

export default function PhotoTour({ images, onClose, onOpenLightbox }) {
  const containerRef = useRef(null);
  const closeBtnRef = useRef(null);

  useScrollLock(true);
  useEscapeKey(onClose, true);

  // Focus close button on mount
  useEffect(() => {
    closeBtnRef.current?.focus();
  }, []);

  // Group images by category for the sticky sections
  const groupedImages = images.reduce((acc, img) => {
    const category = img.category || 'Gallery';
    if (!acc[category]) acc[category] = [];
    acc[category].push(img);
    return acc;
  }, {});

  return (
    <div
      className={styles.overlay}
      role="dialog"
      aria-modal="true"
      aria-label="Photo tour"
    >
      {/* Header */}
      <div className={styles.header}>
        <button
          ref={closeBtnRef}
          className={styles.closeBtn}
          onClick={onClose}
          aria-label="Close photo tour"
        >
          <svg viewBox="0 0 32 32" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
            <path d="M6 6l20 20M26 6L6 26"/>
          </svg>
          <span>Close</span>
        </button>
        <div className={styles.headerActions}>
          <button className={styles.headerBtn} aria-label="Share">
            <svg viewBox="0 0 32 32" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M27 6L16 17M27 6h-8M27 6v8"/><path d="M13 7H8a2 2 0 0 0-2 2v15a2 2 0 0 0 2 2h15a2 2 0 0 0 2-2v-5"/></svg>
            Share
          </button>
          <button className={styles.headerBtn} aria-label="Save to wishlist">
            <svg viewBox="0 0 32 32" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M16 28C6.3 20.1 4 16.4 4 12.5 4 8.4 7.2 5 11 5c2.2 0 4.2 1.1 5.5 2.8A6.97 6.97 0 0 1 22 5c3.8 0 7 3.4 7 7.5 0 3.9-2.3 7.6-11.2 15.2z"/></svg>
            Save
          </button>
        </div>
      </div>

      {/* Photo Grid / Sticky Tour Layout */}
      <div ref={containerRef} className={styles.scrollArea}>
        <div className={styles.contentLayout}>
          {Object.entries(groupedImages).map(([category, categoryImages]) => (
            <div key={category} className={styles.sectionRow}>
              
              {/* Left text column - sticky */}
              <div className={styles.textCol}>
                <h2 className={styles.stickyText}>{category}</h2>
              </div>

              {/* Right image column - scrolling */}
              <div className={styles.imageCol}>
                {categoryImages.map((img) => {
                  const globalIdx = images.findIndex((i) => i.id === img.id);
                  return (
                    <button
                      key={img.id}
                      className={styles.photoCard}
                      onClick={(e) => onOpenLightbox(globalIdx, e)}
                      aria-label={`View full size: ${img.alt}`}
                    >
                      <img
                        src={img.src}
                        alt={img.alt}
                        className={styles.photo}
                        loading="lazy"
                      />
                      <div className={styles.photoOverlay} aria-hidden="true" />
                    </button>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
