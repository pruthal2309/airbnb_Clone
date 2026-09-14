import styles from './HostSection.module.css';

export default function HostSection({ host, coHosts }) {
  return (
    <section id="host" className={styles.section} aria-labelledby="host-heading">
      <h2 id="host-heading" className={styles.heading}>Meet your host</h2>

      <div className={styles.hostCardContainer}>

        {/* ── LEFT COLUMN: Host Card + host personal info ── */}
        <div className={styles.leftCol}>
          <div className={styles.hostCard}>
            <div className={styles.hostCardInner}>
              <div className={styles.avatarSection}>
                {host.avatarImage ? (
                  <div className={styles.avatar}>
                    <img src={host.avatarImage} alt={host.name} className={styles.avatarImage} />
                    <div className={styles.verifiedBadge}>
                      <svg viewBox="0 0 32 32" width="14" height="14" fill="white">
                         <path d="M16 31c-8.28 0-15-6.72-15-15s6.72-15 15-15 15 6.72 15 15-6.72 15-15 15zm-3.5-8l12-12-2.12-2.12L12.5 18.76l-4.88-4.88-2.12 2.12 7 7z" fill="#E31C5F"/>
                      </svg>
                    </div>
                  </div>
                ) : (
                  <div className={styles.avatar} style={{ background: host.avatarColor }}>
                    <span className={styles.avatarInitials}>{host.initials}</span>
                    <div className={styles.verifiedBadge}>
                      <svg viewBox="0 0 32 32" width="14" height="14" fill="white">
                         <path d="M16 31c-8.28 0-15-6.72-15-15s6.72-15 15-15 15 6.72 15 15-6.72 15-15 15zm-3.5-8l12-12-2.12-2.12L12.5 18.76l-4.88-4.88-2.12 2.12 7 7z" fill="#E31C5F"/>
                      </svg>
                    </div>
                  </div>
                )}
                <h3 className={styles.hostName}>{host.name}</h3>
                <p className={styles.hostLabel}>Host</p>
              </div>

              <div className={styles.statsSection}>
                <div className={styles.statItem}>
                  <span className={styles.statValue}>{host.reviews}</span>
                  <span className={styles.statLabel}>Reviews</span>
                </div>
                <div className={styles.statDivider}></div>
                <div className={styles.statItem}>
                  <span className={styles.statValue}>{host.rating}<span className={styles.star}>★</span></span>
                  <span className={styles.statLabel}>Rating</span>
                </div>
                <div className={styles.statDivider}></div>
                <div className={styles.statItem}>
                  <span className={styles.statValue}>{host.yearsHosting}</span>
                  <span className={styles.statLabel}>Years hosting</span>
                </div>
              </div>
            </div>
          </div>

          {/* Host personal info — directly below card */}
          <div className={styles.hostInfoList}>
            <div className={styles.infoItem}>
              <svg viewBox="0 0 32 32" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="16" cy="16" r="5"/><path d="M16 2v4M16 26v4M2 16h4M26 16h4"/></svg>
              <span>Born in the {host.bornIn}</span>
            </div>
            <div className={styles.infoItem}>
              <svg viewBox="0 0 32 32" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 10h24v16H4z"/><path d="M8 6h16v4H8z"/><path d="M12 10v4M20 10v4"/></svg>
              <span>Where I went to school: {host.school}</span>
            </div>
          </div>
        </div>

        {/* ── RIGHT COLUMN: Co-Hosts + Host Details + Trust Badge ── */}
        <div className={styles.hostDetailsWrapper}>
          <div className={styles.coHostsSection}>
            <h4 className={styles.subHeading}>Co-Hosts</h4>
            <div className={styles.coHostsGrid}>
              {coHosts.map((coHost, index) => (
                <div key={index} className={styles.coHostItem}>
                  {coHost.image ? (
                     <div className={styles.coHostAvatar}>
                        <img src={coHost.image} alt={coHost.name} />
                     </div>
                  ) : (
                     <div className={styles.coHostAvatarText} style={{background: '#f0f0f0', color: '#222'}}>
                        {coHost.initial}
                     </div>
                  )}
                  <span className={styles.coHostName}>{coHost.name}</span>
                </div>
              ))}
            </div>
          </div>

          <div className={styles.communicationDetails}>
             <h4 className={styles.subHeading}>Host details</h4>
             <p>Response rate: {host.responseRate}</p>
             <p>Responds {host.responseTime}</p>
             <button className={styles.messageHostBtn}>Message host</button>
          </div>

          <div className={styles.trustBadge}>
             <svg viewBox="0 0 32 32" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M16 2l12 6v10c0 8-12 12-12 12S4 26 4 18V8l12-6z"/><path d="M11 16l4 4 8-8"/></svg>
             <p>To help protect your payment, always use Airbnb to send money and communicate with hosts.</p>
          </div>
        </div>

      </div>
    </section>
  );
}
