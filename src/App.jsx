import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Home } from "./pages/Home";
import { Booking } from "./pages/Booking";
import styles from "./App.module.css";

function App() {
  return (
    <BrowserRouter>
      <div className={styles.app}>
        <header className={styles.header}>
          <Link to="/" className={styles.logo}>
            🚂 УкрЗалізниця
          </Link>
          <nav>
            <Link to="/" className={styles.navLink}>Рейси</Link>
          </nav>
        </header>

        <main className={styles.main}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/booking/:trainId" element={<Booking />} />
          </Routes>
        </main>

        <footer className={styles.footer}>
          <p>© 2026 Залізниця. Навчальний проєкт.</p>
        </footer>
      </div>

      <ToastContainer />
    </BrowserRouter>
  );
}

export default App;
