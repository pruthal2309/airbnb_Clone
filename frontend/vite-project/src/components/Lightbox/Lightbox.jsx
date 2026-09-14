import { useEffect, useRef } from 'react';
import { useEscapeKey } from '../../hooks/useEscapeKey';
import { useScrollLock } from '../../hooks/useScrollLock';
import styles from './Lightbox.module.css';

export default function Lightbox({ images, activeIndex, onClose, onNext, onPrevious }) {
  const closeBtnRef = useRef(null);
  const image = images[activeIndex];
  const hasPrev = activeIndex > 0;
  const hasNext = activeIndex < images.length - 1;

  useScrollLock(true);
  useEscapeKey(onClose, true);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowRight' && hasNext) onNext();
      if (e.key === 'ArrowLeft' && hasPrev) onPrevious();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [hasNext, hasPrev, onNext, onPrevious]);

  // Focus close button on mount
  useEffect(() => {
    closeBtnRef.current?.focus();
  }, []);

  if (!image) return null;

  return (
    <div
      className={styles.overlay}
      role="dialog"
      aria-modal="true"
      aria-label={`Photo ${activeIndex + 1} of ${images.length}: ${image.alt}`}
      onClick={(e) => e.target === e.currentTarget && onClose()}
    >
      {/* Close Button */}
      <button
        ref={closeBtnRef}
        className={styles.closeBtn}
        onClick={onClose}
        aria-label="Close lightbox"
      >
        <svg viewBox="0 0 32 32" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
          <path d="M6 6l20 20M26 6L6 26"/>
        </svg>
      </button>

      {/* Image Counter */}
      <div className={styles.counter} aria-live="polite" aria-atomic="true">
        {activeIndex + 1} / {images.length}
      </div>

      {/* Previous Button */}
      <button
        className={`${styles.navBtn} ${styles.prevBtn}`}
        onClick={onPrevious}
        disabled={!hasPrev}
        aria-label="Previous photo"
      >
        <svg viewBox="0 0 32 32" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
          <path d="M20 6L10 16l10 10"/>
        </svg>
      </button>

      {/* Main Image */}
      <div className={styles.imageWrapper}>
        <img
          key={image.id}
          src={image.src}
          alt={image.alt}
          className={styles.image}
        />
      </div>

      {/* Next Button */}
      <button
        className={`${styles.navBtn} ${styles.nextBtn}`}
        onClick={onNext}
        disabled={!hasNext}
        aria-label="Next photo"
      >
        <svg viewBox="0 0 32 32" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
          <path d="M12 6l10 10-10 10"/>
        </svg>
      </button>
    </div>
  );
}
