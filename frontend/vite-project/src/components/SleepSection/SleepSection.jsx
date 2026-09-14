import styles from './SleepSection.module.css';

export default function SleepSection({ rooms }) {
  return (
    <section id="sleep" className={styles.section} aria-labelledby="sleep-heading">
      <h2 id="sleep-heading" className={styles.heading}>Where you'll sleep</h2>
      <div className={styles.grid}>
        {rooms.map((room) => (
          <div key={room.id} className={styles.roomCard}>
            <div className={styles.imageWrapper}>
              <img
                src={room.image}
                alt={room.name}
                className={styles.image}
              />
            </div>
            <div className={styles.cardBody}>
              <p className={styles.roomName}>{room.name}</p>
              <p className={styles.roomDesc}>{room.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
