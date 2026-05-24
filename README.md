# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

# 🚂 Система продажу залізничних квитків

Навчальний React-проєкт — аналог системи бронювання квитків Укрзалізниці.  
Лабораторні роботи 9–10 з курсу Web-розробки.

---

## 📌 Опис

Веб-застосунок для моделювання роботи системи продажу залізничних квитків.  
Користувач може переглядати список рейсів, обирати вагон, вибирати місця та бронювати квиток з введенням персональних даних.

---

## ✨ Функціонал

### Лабораторна робота 9 — Список потягів
- Відображення рейсів у вигляді карток
- Інформація про номер потяга, маршрут, час відправлення, тривалість
- Пошук за маршрутом або номером потяга
- Адаптивна сітка карток

### Лабораторна робота 10 — Бронювання місць
- Вибір вагона
- Інтерактивна схема місць (вільні / обрані / заброньовані)
- Форма бронювання з валідацією (ім'я, телефон, email)
- Збереження бронювань у `localStorage`
- Сповіщення про успішне бронювання

---

## 🛠️ Технології

| Технологія | Версія |
|---|---|
| React | 18+ |
| Vite | 5+ |
| React Router DOM | 6+ |
| React Toastify | 10+ |
| CSS Modules | — |
| Node.js | 18 або 20 LTS |

---

## 🚀 Запуск проєкту

```bash
# Клонувати репозиторій
git clone https://github.com/ТВІЙ_НІКНЕЙМ/lab9-10.git

# Перейти в папку
cd lab9-10

# Встановити залежності
npm install

# Запустити у режимі розробки
npm run dev
```

Відкрий у браузері: `http://localhost:5173`

---

## 📁 Структура проєкту

```
src/
├── components/
│   ├── TrainCard.jsx          # Картка рейсу
│   ├── TrainList.jsx          # Список рейсів + пошук
│   ├── WagonSelector.jsx      # Вибір вагона
│   ├── SeatMap.jsx            # Схема місць
│   └── BookingForm.jsx        # Форма бронювання з валідацією
├── data/
│   └── trains.js              # Дані про рейси
├── pages/
│   ├── Home.jsx               # Головна сторінка
│   └── Booking.jsx            # Сторінка бронювання
├── services/
│   └── BookingService.js      # Робота з localStorage
├── App.jsx                    # Роутинг
└── main.jsx                   # Точка входу
```

---

## 🗺️ Маршрути

| URL | Сторінка |
|---|---|
| `/` | Список рейсів |
| `/booking/:trainId` | Бронювання місць |

---

## 🎨 Візуальна індикація місць

| Колір | Статус |
|---|---|
| 🟢 Зелений | Вільне місце |
| 🔵 Синій | Обране користувачем |
| 🔴 Червоний | Заброньоване |

---

## 👤 Автор

Виконав студент у рамках курсу Web-розробки (Лаб. 9–10).
