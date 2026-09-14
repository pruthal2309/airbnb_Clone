import styles from './ThingsToKnowSection.module.css';

export default function ThingsToKnowSection({ policies }) {
  return (
    <section className={styles.section} aria-labelledby="things-to-know-heading">
      <h2 id="things-to-know-heading" className={styles.heading}>Things to know</h2>
      
      <div className={styles.grid}>
        {/* Cancellation Policy */}
        <div className={styles.column}>
          <div className={styles.iconHeading}>
             <img src="/images/free_cancellation_24dp_E3E3E3_FILL0_wght400_GRAD0_opsz24.svg" alt="" width="24" height="24" />
             <h3 className={styles.colTitle}>Cancellation policy</h3>
          </div>
          <ul className={styles.list}>
             {policies.cancellation.map((item, index) => (
                <li key={index} className={styles.listItem}>{item}</li>
             ))}
          </ul>
          <button className={styles.learnMoreBtn}>Learn more</button>
        </div>

        {/* House Rules */}
        <div className={styles.column}>
          <div className={styles.iconHeading}>
             <img src="/images/key_24dp_E3E3E3_FILL0_wght400_GRAD0_opsz24.svg" alt="" width="24" height="24" />
             <h3 className={styles.colTitle}>House rules</h3>
          </div>
          <ul className={styles.list}>
             {policies.rules.map((item, index) => (
                <li key={index} className={styles.listItem}>{item}</li>
             ))}
          </ul>
          <button className={styles.learnMoreBtn}>Learn more</button>
        </div>

        {/* Safety & Property */}
        <div className={styles.column}>
          <div className={styles.iconHeading}>
             <img src="/images/safety_check_24dp_E3E3E3_FILL0_wght400_GRAD0_opsz24.svg" alt="" width="24" height="24" />
             <h3 className={styles.colTitle}>Safety & property</h3>
          </div>
          <ul className={styles.list}>
             {policies.safety.map((item, index) => (
                <li key={index} className={styles.listItem}>{item}</li>
             ))}
          </ul>
          <button className={styles.learnMoreBtn}>Learn more</button>
        </div>
      </div>
    </section>
  );
}
