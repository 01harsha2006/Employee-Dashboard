# 🏢 Employee Dashboard

A clean, responsive, and minimal Employee Dashboard web application built with **React**, **Vite**, and **React Router**. Developed as part of the **ICT Academy of Kerala (ICTAK)** Full Stack Development program (Assignment 2).

[![React](https://img.shields.io/badge/React-19.3-blue.svg)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-8.3-646CFF.svg)](https://vitejs.dev/)
[![React Router](https://img.shields.io/badge/React_Router-v7-CA4245.svg)](https://reactrouter.com/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)

---

## 📌 Project Overview

This application demonstrates fundamental frontend concepts in React:
- Client-side routing with `react-router-dom`
- Consuming external REST APIs (`useEffect`, `fetch`) and handling async states (loading, error)
- Controlled form state handling and client-side data passing
- Clean, responsive UI with custom Vanilla CSS without heavy dependencies

---

## ✨ Features

- **🧭 Responsive Navigation Bar**:
  - Direct links to **Home** and **Employee Form**.
  - Active route highlighting.
  - Fully responsive across mobile, tablet, and desktop viewports.

- **📊 Home / Employee Dashboard**:
  - Automatically fetches employee details from the [JSONPlaceholder API](https://jsonplaceholder.typicode.com/users).
  - Clean tabular display showing **ID**, **Name**, and **Email**.
  - Includes loading indicators and graceful error handling.
  - Displays newly submitted employee records seamlessly.

- **📝 Employee Registration Form**:
  - Interactive form with required inputs: **Name**, **Designation**, **Location**, and **Salary**.
  - Full client-side validation and controlled state management.
  - Submits details and navigates directly back to the dashboard with the updated data.

- **🎨 Minimal & Elegant Design**:
  - Cohesive navy-blue color palette (`#243b64`) and card-based layout.
  - Smooth hover states, clear typography, and responsive horizontal table scrolling.

---

## 🛠️ Tech Stack

| Technology | Purpose |
| :--- | :--- |
| **React 19** | Frontend UI Library & Component Architecture |
| **Vite** | Fast Next-Generation Frontend Tooling & Dev Server |
| **React Router v7** | Client-Side Declarative Routing (`BrowserRouter`, `Routes`, `Route`, `NavLink`) |
| **CSS3** | Custom styling, Flexbox, responsive media queries |
| **JSONPlaceholder** | Mock REST API data source for external user records |

---

## 📂 Project Structure

```text
Employee-Dashboard/
└── employee-dashboard/
    ├── public/
    ├── src/
    │   ├── pages/
    │   │   ├── Dashboard.jsx      # Home view fetching & displaying API users
    │   │   └── EmployeeForm.jsx   # Form view to input new employee details
    │   ├── App.css                # Application styling & layout
    │   ├── App.jsx                # Root component, routing, and shared state
    │   ├── index.css              # Base styling & resets
    │   ├── main.jsx               # Application entry point
    │   └── Navbar.jsx             # Navigation bar component
    ├── index.html                 # HTML template
    ├── package.json               # Dependencies and scripts
    └── vite.config.js             # Vite configuration
```

---

## 🚀 Getting Started

Follow these steps to run the project locally on your machine:

### Prerequisites
- [Node.js](https://nodejs.org/) (version 18+ recommended)
- `npm` (bundled with Node.js)

### Installation & Run

1. **Clone the repository**:
   ```bash
   git clone https://github.com/01harsha2006/Employee-Dashboard.git
   cd Employee-Dashboard/employee-dashboard
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start the development server**:
   ```bash
   npm run dev
   ```

4. **Open in browser**:
   Visit the local URL shown in your terminal (typically `http://localhost:5173` or `http://localhost:5175`).

### Build for Production

To create an optimized production build:
```bash
npm run build
```

---

## 📋 Assignment Requirements Checklist

| Requirement | Status | Implementation Details |
| :--- | :---: | :--- |
| Employee Dashboard using React library | ✅ | Built with React 19 and Vite |
| Navbar with Home and Employee Form links | ✅ | Implemented in `Navbar.jsx` with active route indicators |
| Home page displays data from external API | ✅ | Fetches from `https://jsonplaceholder.typicode.com/users` |
| Dashboard data in tabular view (id, name, email) | ✅ | Rendered in a structured table with ID, Name, Email columns |
| Employee Form with Name, Designation, Location, Salary | ✅ | Fully controlled inputs with validation in `EmployeeForm.jsx` |
| Appropriate routes between Dashboard/Home and Form | ✅ | Configured using `react-router-dom` in `App.jsx` |
| CSS styling | ✅ | Custom responsive design in `App.css` |

---

## 👤 Author

- **Harsha** - [@01harsha2006](https://github.com/01harsha2006)
- ICT Academy of Kerala (ICTAK) - Full Stack Development
