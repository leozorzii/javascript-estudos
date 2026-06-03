# 🎬 VidFlow

A video streaming platform inspired by YouTube, developed as a study project at [Alura](https://www.alura.com.br/).

![VidFlow Preview](./vidflow.png)

## 🚀 Live Demo

👉 **[Check it out here](https://nodejs-vidflow-vite-sigma-three.vercel.app/)**

---

## 📋 About

VidFlow is a web application that simulates a video platform where users can browse, search, and filter videos by category. Data is fetched from a REST API — mocked with `json-server` locally and served via a GitHub Gist in production.

---

## ✨ Features

- 📺 Video listing with title, channel name, and thumbnail
- 🔍 Real-time search by video title
- 🏷️ Category filtering (Programming, Mobile, Data Science, etc.)
- ⚠️ Error handling for failed requests and missing data validation
- 🌐 Separate dev/production API URLs via Vite environment variables

---

## 🛠️ Tech Stack

| Technology | Purpose |
|---|---|
| HTML5 + CSS3 | Structure and styling |
| JavaScript (ES Modules) | Application logic |
| [Axios](https://axios-http.com/) | HTTP requests |
| [Vite](https://vitejs.dev/) | Bundler and dev server |
| [JSON Server](https://github.com/typicode/json-server) | Fake REST API for local development |
| [ESLint](https://eslint.org/) + [Prettier](https://prettier.io/) | Code quality and formatting |
| [Vercel](https://vercel.com/) | Production deployment |

---

## 📚 What I Learned

This project was built during the **Node.js and HTTP Requests** course at Alura. Key concepts covered:

- **REST API consumption** using `axios` with `async/await`
- **Error handling** with `try/catch` in asynchronous flows
- **Environment variables** with Vite's `import.meta.env` to switch between dev and production URLs
- **DOM manipulation** for dynamic content rendering
- **Frontend filtering** — real-time text search and category filtering without extra API calls
- **JSON Server** as a REST API mock during development
- **Deploying to Vercel** with production environment configuration

---

## ⚙️ Getting Started

### Prerequisites

- Node.js installed
- npm

### Installation

```bash
# Clone the repository
git clone https://github.com/leozorzii/nodejs-vidflow-vite.git

# Navigate to the project folder
cd nodejs-vidflow-vite

# Install dependencies
npm install
```

### Running locally

You'll need **two terminals** running simultaneously:

**Terminal 1 — Local API (json-server):**
```bash
npm run api-local
```

**Terminal 2 — Dev server (Vite):**
```bash
npm run dev
```

Open in your browser: `http://localhost:5173`

---

## 📁 Project Structure

```
vidflow/
├── backend/
│   └── videos.json       # Video data (fake API)
├── css/
│   ├── estilos.css
│   ├── flexbox.css
│   └── reset.css
├── img/                  # UI assets
├── index.html
├── script.js             # Main application logic
└── package.json
```

---

## 📝 License

This project was built for educational purposes.

---

<p align="center">Developed by <strong>Leonardo Zorzi</strong> 🚀</p>
