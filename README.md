# Groww Clone — Live Trading Dashboard

A high-fidelity clone of the [Groww](https://groww.in) trading platform with **live NSE/BSE market data** via a Yahoo Finance proxy backend, and full portfolio data for Aakash Mehta (Jan 2020 – Dec 2023).

## Project Structure

```
├── frontend/           ← Static HTML/CSS/JS dashboard
│   ├── index.html
│   ├── css/dashstyle.css
│   ├── js/dashboard.js
│   └── assets/Images/
│
└── backend/            ← Express.js API server
    ├── package.json
    └── src/
        ├── server.js
        ├── config/db.js
        └── controller/livestocks.controller.js
```

## Features

- 📈 **Live Ticker Bar** — NIFTY, SENSEX, BANKNIFTY, MIDCPNIFTY, FINNIFTY updated every 10s
- 💼 **Holdings Tab** — Equity portfolio (2020–2021): 12 stocks, +56.7% cumulative return
- 📊 **Positions Tab** — F&O Monthly P&L (2022–2023): 24 months, +₹64,49,800 net
- 📋 **Orders Tab** — Sample trade log showing strategy execution
- 👤 **Profile Dropdown** — Aakash Mehta's account details and stats
- 🔄 **SPA Navigation** — Instant tab switching without page reload

## Running Locally

### 1. Start the Backend
```bash
cd backend
npm install
npm run dev          # uses nodemon — auto-restarts on file changes
# OR: npm start      # plain node
```
Backend runs at: `http://localhost:6334`

### 2. Start the Frontend
```bash
npx serve frontend
```
Frontend runs at: `http://localhost:3000` (or the port printed in terminal)

Open `http://localhost:3000` in your browser.

## Tech Stack

| Layer | Technology |
|---|---|
| Frontend | HTML5, Vanilla CSS, Vanilla JS |
| Backend | Node.js, Express.js |
| Database | MongoDB (local) |
| Live Data | Yahoo Finance v8 API (proxied) |
| Fonts/Icons | Google Fonts (Roboto), Material Icons |

## Data Source

Live market prices are fetched server-side from Yahoo Finance's chart API to bypass CORS restrictions. Indices tracked: `^NSEI`, `^BSESN`, `^NSEBANK`, `MIDCPNIFTY.NS`, `NIFTY_FIN_SERVICE.NS`.
