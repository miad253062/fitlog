# 💪 FitLog - Workout Library

## 📖 Description
FitLog is a dark, no-nonsense gym companion application built for fitness enthusiasts. It allows users to browse a library of workouts, view detailed instructions, and seamlessly lock selected exercises into their "Today's Plan" or save them for later. The app provides a highly interactive experience with live metrics tracking and dynamic UI updates to watch the week's work add up.

## Live Link: https://assignment06-fitlog.vercel.app/
## 🛠️ Technologies Used
*   **Framework:** Next.js
*   **Language:** TypeScript
*   **Styling:** Tailwind CSS
*   **State Management:** React Context API
*   **Notifications:** React-Toastify
*   **Icons:** React Icons

## ✨ Key Features
1.  **Dynamic Workout Library:** A fully responsive grid layout displaying twelve lifts covering major muscle groups, complete with dynamic routing for detailed views.
2.  **Live Metrics Tracking:** Real-time calculation of total exercises, total duration (minutes), and calories burned based on the user's active "Today's Plan" or "Saved" lists.
3.  **Smart Filtering & Sorting:** Users can easily sort their planned or saved workouts by Duration, Calories, or Rating using an interactive dropdown menu.
4.  **State-Driven Validation & Empty States:** Features a plan capacity validation (cap of 5 lifts) that dynamically disables buttons, along with aesthetic "Empty States" when lists are clear.
5.  **Instant User Feedback:** Integrated toast notifications for every user action (adding, deleting, or marking a workout as done) to ensure a smooth, modern user experience.