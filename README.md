Personality Quiz Web App

You can check it out live on https://mellow-flow.vercel.app/

![MellowFlow-Demo](https://github.com/user-attachments/assets/35dc6fd0-e372-4355-a6c4-e1d0b60a25c3)


A mobile-only quiz application built with React, TypeScript, TailwindCSS, and Zustand as part of a frontend technical task.
The app walks users through a short personality-style quiz and finishes with a personalized checkout screen.

🚀 Features

Landing Page – user selects their gender and starts the quiz

Quiz Page – six dynamic questions with interactive feedback (color and icon changes)

Progress Bar & Top Bar – show quiz progress and current question number

Checkout Page – includes a looping 15:00 timer and gender-based “before/after” imagery

Auto Redirect on Refresh – refreshing the page returns users to the landing page

Global State with Zustand – simple, lightweight state management

Mobile-Only Layout – designed and optimized specifically for mobile view

🧠 Development Notes

Key decisions and assumptions made during development:

Used Create React App with TypeScript for easy setup and built-in type safety.

Managed all shared data (quiz state, progress, gender selection) using Zustand for clarity and minimal boilerplate.

Implemented a custom redirect handler to ensure a consistent start flow even after refreshing on mobile browsers.

Used TailwindCSS utility classes directly for quick, precise styling without extra CSS files.

No backend — all quiz data and logic live entirely on the client side.

🛠️ Tech Stack

React (Create React App + TypeScript)

Zustand

TailwindCSS

Vercel (for hosting)
