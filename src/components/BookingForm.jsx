import { useState } from "react";
import styles from "./BookingForm.module.css";

function validate(fields) {
  const errors = {};
  if (!fields.name.trim()) errors.name = "Введіть ім'я";
  else if (fields.name.trim().length < 2) errors.name = "Мінімум 2 символи";

  if (!fields.phone.trim()) errors.phone = "Введіть телефон";
  else if (!/^\+?[\d\s\-()]{9,15}$/.test(fields.phone))
    errors.phone = "Невірний формат телефону";

  if (!fields.email.trim()) errors.email = "Введіть email";
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(fields.email))
    errors.email = "Невірний email";

  return errors;
}

export function BookingForm({ onSubmit, disabled }) {
  const [fields, setFields] = useState({ name: "", phone: "", email: "" });
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});

  const set = (key, val) => {
    setFields((f) => ({ ...f, [key]: val }));
    if (touched[key]) {
      const errs = validate({ ...fields, [key]: val });
      setErrors((e) => ({ ...e, [key]: errs[key] }));
    }
  };

  const blur = (key) => {
    setTouched((t) => ({ ...t, [key]: true }));
    const errs = validate(fields);
    setErrors((e) => ({ ...e, [key]: errs[key] }));
  };

  const handleSubmit = () => {
    const errs = validate(fields);
    setErrors(errs);
    setTouched({ name: true, phone: true, email: true });
    if (Object.keys(errs).length === 0) {
      onSubmit(fields);
    }
  };

  return (
    <div className={styles.form}>
      <h3 className={styles.title}>Дані пасажира</h3>

      {["name", "phone", "email"].map((key) => (
        <div key={key} className={styles.field}>
          <label className={styles.label}>
            {key === "name" ? "Ім'я та прізвище" : key === "phone" ? "Телефон" : "Email"}
          </label>
          <input
            className={`${styles.input} ${errors[key] ? styles.inputError : ""}`}
            type={key === "email" ? "email" : "text"}
            placeholder={
              key === "name" ? "Іваненко Іван" : key === "phone" ? "+380 50 000 0000" : "ivan@example.com"
            }
            value={fields[key]}
            onChange={(e) => set(key, e.target.value)}
            onBlur={() => blur(key)}
          />
          {errors[key] && <span className={styles.error}>{errors[key]}</span>}
        </div>
      ))}

      <button
        className={styles.btn}
        onClick={handleSubmit}
        disabled={disabled}
      >
        {disabled ? "Оберіть місця" : "Забронювати квиток"}
      </button>
    </div>
  );
}
