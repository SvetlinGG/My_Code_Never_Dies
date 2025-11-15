# Fullstack Application

Angular 18 + Node.js/Express fullstack application.

## Getting Started

1. Install dependencies:
   ```bash
   npm run install:all
   ```

2. Run development servers:
   ```bash
   npm run dev
   ```

## Project Structure

- `/frontend` - Angular 18 application (runs on http://localhost:5000)
- `/backend` - Node.js + Express API (runs on http://localhost:3000)
- `/.kiro` - Kiro configuration, specs, steering, and hooks

## Available Scripts

- `npm run dev` - Run both frontend and backend
- `npm run dev:frontend` - Run Angular dev server only
- `npm run dev:backend` - Run Express API only
- `npm run build` - Build frontend for production
- `npm start` - Start production backend server
