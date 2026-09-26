# 💪 FitLog — Workout Library

> **Train with intent. Log every set.**

FitLog is a modern, responsive workout library and workout planning web application. It allows users to explore exercises, view detailed workout information, save workouts for later, and build a personalized plan for today's workout.

The application provides a clean dark-themed gym experience designed to make discovering and managing workouts simple and efficient.

---

## 🚀 Technologies Used

* **Next.js** — React framework and application development
* **React** — Building reusable UI components
* **Tailwind CSS** — Responsive styling and modern UI design
* **Next.js App Router** — Page navigation and routing
* **REST API** — Fetching workout data dynamically
* **JavaScript** — Application logic and interactivity
* **React-Toastify** — Adding Toast for notifying
* **Daisy-UI** — Adding reusuable Component
* **React-Icons** — For Icons used in the app

---

## ✨ Key Features

### 1. 🏋️ Workout Library

Browse a complete collection of workouts displayed in a responsive card-based grid. Each workout includes:

* Workout image
* Category
* Equipment
* Duration
* Calories
* Rating

Users can also sort workouts by **Duration, Calories, or Rating**.

### 2. 📋 Today's Workout Plan

Users can add workouts to their **Today's Plan** and manage their daily workout list.

The My Plan page provides live statistics for:

* Number of exercises
* Total workout minutes
* Total calories

Users can also remove workouts or mark completed exercises as done.

### 3. 🔖 Save Workouts for Later

Users can save their favorite workouts for later access. Saved workouts are organized separately from the active daily workout plan.

### 4. 🔎 Detailed Workout Pages

Every workout has a dedicated detail page containing:

* Large workout illustration
* Description
* Categories
* Equipment
* Difficulty
* Sets and reps
* Duration
* Calories
* Rating
* Step-by-step instructions

Users can directly add the workout to their plan or save it for later.

### 5. 📱 Fully Responsive Design

FitLog is designed to work smoothly across:

* 📱 Mobile devices
* 📲 Tablets
* 💻 Desktops

The layout, workout grid, navigation, hero section, and workout cards adapt to different screen sizes.

---

## 🎯 Additional Features

* ⚡ Loading states while workout data is being fetched
* 🔔 Toast notifications for user actions
* 🚫 Custom 404 page for invalid routes
* 🔢 Live Plan and Saved counters in the navbar
* 🎨 Dark, modern gym-focused UI
* 🧭 Easy navigation between Library, Workout Details, and My Plan
* ✅ Mark workouts as completed
* ❌ Remove workouts from the plan
* 📊 Sort workouts by duration, calories, and rating

---

## 📂 Project Structure

```text
fitlog/
├── app/
│   ├── page
│   ├── my-plan/
│   └── workout/
├── components/
├── public/
├── ...
├── package.json
└── README.md
```

---

## 🌐 API

FitLog uses the FitLog REST API to retrieve workout data.

**All workouts:**

```text
https://api.api-store.workers.dev/api/fitlog
```

**Single workout:**

```text
https://api.api-store.workers.dev/api/fitlog:id
```

---

## 📱 Responsive Experience

The application follows a responsive-first approach so users can browse and manage workouts comfortably regardless of their device size.

---

## 🚀 Getting Started

Clone the repository and install the dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Then open:

```text
http://localhost:3000
```

---

## 👨‍💻 Developer

**Fayjullah Haque Emon**

Built with ❤️ using Next.js and Tailwind CSS.

---

> **FITLOG — Train hard. Log honest.**
