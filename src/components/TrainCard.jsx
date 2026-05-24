import { useNavigate } from "react-router-dom";
import styles from "./TrainCard.module.css";

export function TrainCard({ train }) {
  const navigate = useNavigate();

  const dep = new Date(train.departure);
  const time = dep.toLocaleTimeString("uk-UA", {
    hour: "2-digit",
    minute: "2-digit",
  });
  const date = dep.toLocaleDateString("uk-UA", {
    day: "numeric",
    month: "short",
  });

  return (
    <div className={styles.card}>
      <div className={styles.header}>
        <span className={styles.number}>{train.number}</span>
        <span className={styles.duration}>{train.duration}</span>
      </div>

      <div className={styles.route}>
        <div className={styles.city}>
          <span className={styles.time}>{time}</span>
          <span className={styles.cityName}>{train.from}</span>
        </div>

        <div className={styles.arrow}>
          <span className={styles.line} />
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path
              d="M3 8h10M9 4l4 4-4 4"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>

        <div className={styles.city}>
          <span className={styles.time}>{time}</span>
          <span className={styles.cityName}>{train.to}</span>
        </div>
      </div>

      <div className={styles.footer}>
        <span className={styles.date}>{date}</span>
        <span className={styles.wagons}>
          {train.wagons.length} вагон{train.wagons.length > 1 ? "и" : ""}
        </span>
        <button
          className={styles.btn}
          onClick={() => navigate(`/booking/${train.id}`)}
        >
          Обрати місця
        </button>
      </div>
    </div>
  );
}
