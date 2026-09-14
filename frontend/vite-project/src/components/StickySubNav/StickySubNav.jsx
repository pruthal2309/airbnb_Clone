import { useState, useRef, useEffect } from 'react';
import styles from './StickySubNav.module.css';

const tabs = ['Photos', 'Amenities', 'Reviews', 'Location'];

export default function StickySubNav({ price, nights, currency, rating, reviewCount }) {
  const [activeTab, setActiveTab] = useState('Photos');
  const [isStuck, setIsStuck] = useState(false);
  const navRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsStuck(!entry.isIntersecting),
      { threshold: 1, rootMargin: '-1px 0px 0px 0px' }
    );
    if (navRef.current) observer.observe(navRef.current);
    return () => observer.disconnect();
  }, []);

  const handleTabClick = (tab) => {
    setActiveTab(tab);
    const sectionId = tab.toLowerCase();
    const el = document.getElementById(sectionId);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <nav
      ref={navRef}
      className={`${styles.nav} ${isStuck ? styles.stuck : ''}`}
      aria-label="Property sections"
    >
      <div className={styles.inner}>
        <div className={styles.tabs} role="tablist">
          {tabs.map((tab) => (
            <button
              key={tab}
              role="tab"
              aria-selected={activeTab === tab}
              className={`${styles.tab} ${activeTab === tab ? styles.activeTab : ''}`}
              onClick={() => handleTabClick(tab)}
            >
              {tab}
            </button>
          ))}
        </div>
        <div className={styles.rightSide}>
          <div className={styles.priceInfo}>
            <span className={styles.price}>{currency}{price.toLocaleString('en-IN')} for {nights} nights</span>
            <span className={styles.ratingInfo}>
              <svg viewBox="0 0 32 32" width="12" height="12" fill="#222" aria-hidden="true">
                <path d="M15.094 1.579l-4.124 8.885-9.86 1.27a1 1 0 0 0-.542 1.736l7.293 6.565-1.965 9.852a1 1 0 0 0 1.483 1.061L16 26.064l8.625 4.884a1 1 0 0 0 1.483-1.061l-1.965-9.852 7.293-6.565a1 1 0 0 0-.542-1.736l-9.86-1.27-4.124-8.885a1 1 0 0 0-1.812 0z"/>
              </svg>
              {rating} · {reviewCount} reviews
            </span>
          </div>
          <button className={styles.reserveBtn} aria-label="Reserve this property">
            Reserve
          </button>
        </div>
      </div>
    </nav>
  );
}
