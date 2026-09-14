import styles from './Header.module.css';

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        {/* Logo */}
        <a href="/" className={styles.logo} aria-label="Airbnb home">
          <svg viewBox="0 0 32 32" width="30" height="30" fill="#FF385C" aria-hidden="true">
            <path d="M16 1C9.924 1 5 5.924 5 12c0 3.49 1.574 6.6 4.055 8.687L16 31l6.945-10.313C25.426 18.6 27 15.49 27 12c0-6.076-4.924-11-11-11zm0 15.5c-2.485 0-4.5-2.015-4.5-4.5S13.515 7.5 16 7.5s4.5 2.015 4.5 4.5-2.015 4.5-4.5 4.5z"/>
          </svg>
          <span className={styles.logoText}>airbnb</span>
        </a>

        {/* Search Bar */}
        <div className={styles.searchBar} role="search">
          <button className={styles.searchPill} aria-label="Search anywhere, anytime, for any guests">
            <span className={styles.searchItem}>Anywhere</span>
            <span className={styles.searchDivider} aria-hidden="true" />
            <span className={styles.searchItem}>Anytime</span>
            <span className={styles.searchDivider} aria-hidden="true" />
            <span className={`${styles.searchItem} ${styles.searchGuests}`}>Add guests</span>
            <span className={styles.searchBtn} aria-hidden="true">
              <svg viewBox="0 0 32 32" width="14" height="14" fill="white">
                <path d="M13 24C6.925 24 2 19.075 2 13S6.925 2 13 2s11 4.925 11 11-4.925 11-11 11zm16.707 4.293l-6.376-6.376A10.94 10.94 0 0 0 24 13C24 6.373 18.627 1 12 1S0 6.373 0 13s5.373 12 12 12a11.94 11.94 0 0 0 8.917-3.669l6.376 6.376a1 1 0 1 0 1.414-1.414z"/>
              </svg>
            </span>
          </button>
        </div>

        {/* Right Actions */}
        <div className={styles.rightActions}>
          <a href="#" className={styles.becomeHost}>Become a host</a>
          <button className={styles.iconBtn} aria-label="Select language and region">
            <svg viewBox="0 0 16 16" width="16" height="16" fill="currentColor">
              <path d="M8 0C3.589 0 0 3.589 0 8s3.589 8 8 8 8-3.589 8-8-3.589-8-8-8zM7 14.931A7.014 7.014 0 0 1 1.069 9H3a1 1 0 0 0 0-2H1.069A7.014 7.014 0 0 1 7 1.069V3a1 1 0 0 0 2 0V1.069A7.014 7.014 0 0 1 14.931 7H13a1 1 0 0 0 0 2h1.931A7.014 7.014 0 0 1 9 14.931V13a1 1 0 0 0-2 0v1.931z"/>
            </svg>
          </button>
          <button className={styles.menuBtn} aria-label="Open menu" aria-expanded="false">
            <svg viewBox="0 0 32 32" width="16" height="16" fill="currentColor" aria-hidden="true">
              <path d="M2 7h28v2H2zm0 8h28v2H2zm0 8h28v2H2z"/>
            </svg>
            {/* Avatar placeholder */}
            <span className={styles.userAvatar} aria-hidden="true">
              <svg viewBox="0 0 32 32" width="22" height="22" fill="#717171">
                <path d="M16 17a7 7 0 1 0 0-14 7 7 0 0 0 0 14zm0 2c-7.18 0-13 5.82-13 13h26c0-7.18-5.82-13-13-13z"/>
              </svg>
            </span>
          </button>
        </div>
      </div>
    </header>
  );
}
