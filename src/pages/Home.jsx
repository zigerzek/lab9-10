import { TrainList } from "../components/TrainList";
import { trains } from "../data/trains";
import styles from "./Home.module.css";

export function Home() {
  return (
    <div className={styles.page}>
      <div className={styles.hero}>
        <h1 className={styles.heading}>Квитки на потяг</h1>
        <p className={styles.sub}>Знайдіть та забронюйте місця на зручний рейс</p>
      </div>
      <TrainList trains={trains} />
    </div>
  );
}
