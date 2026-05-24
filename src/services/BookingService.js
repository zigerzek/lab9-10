const STORAGE_KEY = "railway_bookings";

export const BookingService = {
  getAll() {
    try {
      return JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
    } catch {
      return [];
    }
  },

  save(booking) {
    const all = this.getAll();
    const newBooking = { ...booking, id: Date.now() };
    all.push(newBooking);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(all));
    return newBooking;
  },

  getBookedSeats(trainId, wagonId) {
    return this.getAll()
      .filter((b) => b.trainId === trainId && b.wagonId === wagonId)
      .flatMap((b) => b.seats);
  },
};
