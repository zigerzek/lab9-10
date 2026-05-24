import { useState } from "react";
import { TrainCard } from "./TrainCard";
import styles from "./TrainList.module.css";

export function TrainList({ trains }) {
  const [query, setQuery] = useState("");

  const filtered = trains.filter((t) => {
    const q = query.toLowerCase();
    return (
      t.number.toLowerCase().includes(q) ||
      t.from.toLowerCase().includes(q) ||
      t.to.toLowerCase().includes(q)
    );
  });

  return (
    <div className={styles.container}>
      <div className={styles.searchWrap}>
        <svg className={styles.searchIcon} width="18" height="18" viewBox="0 0 24 24" fill="none">
          <circle cx="11" cy="11" r="8" stroke="currentColor" strokeWidth="2"/>
          <path d="m21 21-4.35-4.35" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        </svg>
        <input
          className={styles.search}
          type="text"
          placeholder="Пошук за маршрутом або номером потяга..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        {query && (
          <button className={styles.clear} onClick={() => setQuery("")}>✕</button>
        )}
      </div>

      {filtered.length === 0 ? (
        <div className={styles.empty}>
          <p>Рейсів не знайдено. Спробуйте інший запит.</p>
        </div>
      ) : (
        <div className={styles.grid}>
          {filtered.map((train) => (
            <TrainCard key={train.id} train={train} />
          ))}
        </div>
      )}
    </div>
  );
}
