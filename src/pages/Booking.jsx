import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { trains } from "../data/trains";
import { WagonSelector } from "../components/WagonSelector";
import { SeatMap } from "../components/SeatMap";
import { BookingForm } from "../components/BookingForm";
import { BookingService } from "../services/BookingService";
import styles from "./Booking.module.css";

export function Booking() {
  const { trainId } = useParams();
  const navigate = useNavigate();

  const train = trains.find((t) => t.id === Number(trainId));

  const [selectedWagon, setSelectedWagon] = useState(null);
  const [selectedSeats, setSelectedSeats] = useState([]);

  if (!train) {
    return (
      <div className={styles.notFound}>
        <p>Рейс не знайдено.</p>
        <button onClick={() => navigate("/")}>← Назад</button>
      </div>
    );
  }

  const bookedSeats = selectedWagon
    ? BookingService.getBookedSeats(train.id, selectedWagon.id)
    : [];

  const toggleSeat = (num) => {
    setSelectedSeats((prev) =>
      prev.includes(num) ? prev.filter((s) => s !== num) : [...prev, num]
    );
  };

  const selectWagon = (wagon) => {
    setSelectedWagon(wagon);
    setSelectedSeats([]);
  };

  const handleSubmit = (passenger) => {
    if (!selectedWagon || selectedSeats.length === 0) return;

    BookingService.save({
      trainId: train.id,
      wagonId: selectedWagon.id,
      seats: selectedSeats,
      passenger,
    });

    toast.success(
      `✅ Квиток заброньовано! Місця: ${selectedSeats.sort((a, b) => a - b).join(", ")} у вагоні ${selectedWagon.id}`,
      { position: "top-center", autoClose: 4000 }
    );

    setSelectedSeats([]);
  };

  return (
    <div className={styles.page}>
      <div className={styles.header}>
        <button className={styles.back} onClick={() => navigate("/")}>
          ← Всі рейси
        </button>
        <div>
          <h2 className={styles.trainNum}>{train.number}</h2>
          <p className={styles.route}>
            {train.from} → {train.to}
          </p>
        </div>
      </div>

      <div className={styles.layout}>
        <div className={styles.left}>
          <WagonSelector
            wagons={train.wagons}
            selectedWagon={selectedWagon}
            onSelect={selectWagon}
          />

          {selectedWagon && (
            <SeatMap
              wagon={selectedWagon}
              bookedSeats={bookedSeats}
              selectedSeats={selectedSeats}
              onToggle={toggleSeat}
            />
          )}
        </div>

        <div className={styles.right}>
          <BookingForm
            onSubmit={handleSubmit}
            disabled={selectedSeats.length === 0}
          />
        </div>
      </div>
    </div>
  );
}
