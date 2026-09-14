import styles from './LocationSection.module.css';

export default function LocationSection({ locationDetails }) {
  return (
    <section id="location" className={styles.section} aria-labelledby="location-heading">
      <h2 id="location-heading" className={styles.heading}>Where you'll be</h2>
      <p className={styles.city}>{locationDetails.city}</p>
      
      {/* Map Placeholder */}
      <div className={styles.mapContainer} aria-label="Map showing property location">
        <div className={styles.mapBg}>
          <div className={styles.water}></div>
          <div className={styles.land}>
            <div className={styles.gridLines}></div>
            <div className={styles.highlightCircle1}></div>
            <div className={styles.highlightCircle2}></div>
            {/* Map Pin */}
            <div className={styles.mapPin}>
              <div className={styles.pinBg}>
                <svg viewBox="0 0 32 32" width="20" height="20" fill="white">
                  <path d="M16 2L2 14h4v14h6v-8h8v8h6V14h4L16 2z"/>
                </svg>
              </div>
            </div>
          </div>
        </div>
        {/* Zoom Controls */}
        <div className={styles.mapControls}>
          <button className={styles.zoomBtn} aria-label="Zoom in">
            <svg viewBox="0 0 32 32" width="16" height="16" fill="currentColor"><path d="M16 4v24M4 16h24" stroke="currentColor" strokeWidth="4"/></svg>
          </button>
          <button className={styles.zoomBtn} aria-label="Zoom out">
            <svg viewBox="0 0 32 32" width="16" height="16" fill="currentColor"><path d="M4 16h24" stroke="currentColor" strokeWidth="4"/></svg>
          </button>
        </div>
        <button className={styles.searchMapBtn} aria-label="Search as I move the map">
           <svg viewBox="0 0 32 32" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="3"><circle cx="14" cy="14" r="10"/><path d="M22 22l8 8"/></svg>
        </button>
      </div>

      <p className={styles.exactLocation}>Exact location will be provided after booking.</p>

      <div className={styles.highlights}>
        <h3 className={styles.highlightTitle}>Neighbourhood highlights</h3>
        <p className={styles.highlightDesc}>{locationDetails.description}</p>
        <button className={styles.showMoreBtn}>Show more &gt;</button>
      </div>
    </section>
  );
}
