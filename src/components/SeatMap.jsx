import styles from "./SeatMap.module.css";

export function SeatMap({ wagon, bookedSeats, selectedSeats, onToggle }) {
  const total = wagon.seats;

  return (
    <div className={styles.container}>
      <h3 className={styles.title}>Схема місць — Вагон {wagon.id} ({wagon.type})</h3>

      <div className={styles.legend}>
        <span className={styles.legendItem}>
          <span className={`${styles.dot} ${styles.free}`} /> Вільне
        </span>
        <span className={styles.legendItem}>
          <span className={`${styles.dot} ${styles.selected}`} /> Обране
        </span>
        <span className={styles.legendItem}>
          <span className={`${styles.dot} ${styles.booked}`} /> Заброньовано
        </span>
      </div>

      <div className={styles.grid}>
        {Array.from({ length: total }, (_, i) => {
          const num = i + 1;
          const isBooked = bookedSeats.includes(num);
          const isSelected = selectedSeats.includes(num);

          return (
            <button
              key={num}
              disabled={isBooked}
              onClick={() => !isBooked && onToggle(num)}
              className={`${styles.seat} ${
                isBooked
                  ? styles.booked
                  : isSelected
                  ? styles.selected
                  : styles.free
              }`}
              title={`Місце ${num}`}
            >
              {num}
            </button>
          );
        })}
      </div>

      {selectedSeats.length > 0 && (
        <p className={styles.summary}>
          Обрано: <strong>{selectedSeats.sort((a, b) => a - b).join(", ")}</strong>
        </p>
      )}
    </div>
  );
}
