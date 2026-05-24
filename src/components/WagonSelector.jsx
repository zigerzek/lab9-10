import styles from "./WagonSelector.module.css";

export function WagonSelector({ wagons, selectedWagon, onSelect }) {
  return (
    <div className={styles.container}>
      <h3 className={styles.title}>Виберіть вагон</h3>
      <div className={styles.list}>
        {wagons.map((wagon) => (
          <button
            key={wagon.id}
            className={`${styles.wagon} ${
              selectedWagon?.id === wagon.id ? styles.active : ""
            }`}
            onClick={() => onSelect(wagon)}
          >
            <span className={styles.wagonNum}>Вагон {wagon.id}</span>
            <span className={styles.wagonType}>{wagon.type}</span>
            <span className={styles.seats}>{wagon.seats} місць</span>
          </button>
        ))}
      </div>
    </div>
  );
}
