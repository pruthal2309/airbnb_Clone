import { useState, useEffect } from 'react';
import styles from './PropertyHeader.module.css';

export default function PropertyHeader({ title }) {
  const [isSaved, setIsSaved] = useState(false);
  const [activePopup, setActivePopup] = useState(null);

  const handleShare = () => {
    setActivePopup('share');
  };

  const handleSave = () => {
    setIsSaved(!isSaved);
    setActivePopup('save');
  };

  useEffect(() => {
    if (activePopup) {
      const timer = setTimeout(() => setActivePopup(null), 3000);
      return () => clearTimeout(timer);
    }
  }, [activePopup]);
  return (
    <div className={styles.wrapper}>
      <h1 className={styles.title}>{title}</h1>
      <div className={styles.actions}>
        
        <div className={styles.actionWrapper}>
          <button className={styles.actionBtn} aria-label="Share this listing" onClick={handleShare}>
            <svg viewBox="0 0 32 32" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
              <path d="M27 6L16 17M27 6h-8M27 6v8"/>
              <path d="M13 7H8a2 2 0 0 0-2 2v15a2 2 0 0 0 2 2h15a2 2 0 0 0 2-2v-5"/>
            </svg>
            <span>Share</span>
          </button>
          {activePopup === 'share' && (
            <div className={styles.popup}>Share options</div>
          )}
        </div>

        <div className={styles.actionWrapper}>
          <button className={styles.actionBtn} aria-label="Save to wishlist" onClick={handleSave}>
            {isSaved ? (
              <svg viewBox="0 0 32 32" width="16" height="16" fill="#FF385C" aria-hidden="true">
                <path d="M16 28c-.3 0-.6-.1-.8-.3C6.3 20.1 4 16.4 4 12.5 4 8.4 7.2 5 11 5c2.2 0 4.2 1.1 5.5 2.8A6.97 6.97 0 0 1 22 5c3.8 0 7 3.4 7 7.5 0 3.9-2.3 7.6-11.2 15.2-.2.2-.5.3-.8.3z"/>
              </svg>
            ) : (
              <svg viewBox="0 0 32 32" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
                <path d="M16 28c-.3 0-.6-.1-.8-.3C6.3 20.1 4 16.4 4 12.5 4 8.4 7.2 5 11 5c2.2 0 4.2 1.1 5.5 2.8A6.97 6.97 0 0 1 22 5c3.8 0 7 3.4 7 7.5 0 3.9-2.3 7.6-11.2 15.2-.2.2-.5.3-.8.3z"/>
              </svg>
            )}
            <span className={isSaved ? styles.savedText : ''}>{isSaved ? 'Saved' : 'Save'}</span>
          </button>
          {activePopup === 'save' && (
            <div className={styles.popup}>{isSaved ? 'Saved to wishlists' : 'Removed from wishlists'}</div>
          )}
        </div>

      </div>
    </div>
  );
}
