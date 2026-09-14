import { useState, useEffect, useRef } from 'react';
import styles from './StickySubNav.module.css';

const tabs = [
  { label: 'Photos',    id: 'photos' },
  { label: 'Amenities', id: 'amenities' },
  { label: 'Reviews',   id: 'reviews' },
  { label: 'Location',  id: 'location' },
];

export default function StickySubNav({ price, nights, currency, rating, reviewCount }) {
  const [activeTab, setActiveTab] = useState('Photos');
  const [isStuck, setIsStuck] = useState(false);
  const navRef = useRef(null);

  /* ── Shadow when stuck ── */
  useEffect(() => {
    const el = navRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => setIsStuck(!entry.isIntersecting),
      { threshold: 1, rootMargin: '-1px 0px 0px 0px' }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  /* ── Highlight active tab as sections scroll into view ── */
  useEffect(() => {
    const observers = [];

    tabs.forEach(({ label, id }) => {
      const el = document.getElementById(id);
      if (!el) return;

      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveTab(label);
        },
        { rootMargin: '-40% 0px -55% 0px', threshold: 0 }
      );
      obs.observe(el);
      observers.push(obs);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  const handleTabClick = (tab, id) => {
    setActiveTab(tab);
    const el = document.getElementById(id);
    if (el) {
      // offset for only the sticky subnav (no global header)
      const offset = 56 + 8; // subnav height + small breathing gap
      const top = el.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  return (
    <nav
      ref={navRef}
      className={`${styles.nav} ${isStuck ? styles.stuck : ''}`}
      aria-label="Property sections"
    >
      <div className={styles.inner}>
        {/* Tabs */}
        <div className={styles.tabs} role="tablist">
          {tabs.map(({ label, id }) => (
            <button
              key={label}
              role="tab"
              aria-selected={activeTab === label}
              className={`${styles.tab} ${activeTab === label ? styles.activeTab : ''}`}
              onClick={() => handleTabClick(label, id)}
            >
              {label}
            </button>
          ))}
        </div>

        {/* Right side — price + reserve */}
        <div className={styles.rightSide}>
          <div className={styles.priceInfo}>
            <span className={styles.price}>
              {currency}{price.toLocaleString('en-IN')} for {nights} nights
            </span>
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
