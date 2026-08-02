# 🍿 SnackHub

SnackHub is a React + Vite storefront for browsing and ordering snacks from popular Indian brands — chips, Indian snacks, cookies, chocolates, drinks, and healthy snacks. It includes product browsing, search, cart, wishlist, order tracking, reviews, and a phone-OTP style login flow.

> 📸 *Screenshots coming soon — see the [Screenshots](#-screenshots) section below.*

## ✨ Features

- **Product catalog** — 70+ snack products across 6 categories (Chips, Indian Snacks, Cookies, Chocolates, Drinks, Healthy Snacks)
- **Smart search** — normalized search that ignores punctuation/casing differences
- **Category browsing** — dedicated pages per category, plus Best Sellers and Offers
- **Product details** — variant selection with quantity controls
- **Cart & Wishlist** — add, update, and manage saved/favourite items
- **Recently viewed & recommended** — personalized product surfaces
- **Orders & delivery tracking** — view order history, track, cancel, or request returns
- **Reviews** — submit and view star ratings with an average rating summary
- **Auth** — email/password sign up & login, plus a phone OTP flow
- **Profile management** — edit profile info and manage saved addresses

## 🛠️ Tech Stack

- [React 19](https://react.dev/)
- [React Router 7](https://reactrouter.com/)
- [Vite 8](https://vitejs.dev/) — dev server & build tool
- [ESLint](https://eslint.org/) — linting

## 📂 Project Structure

```
snackhub/
├── public/               # Static assets (favicon, icons)
├── src/
│   ├── assets/
│   │   ├── data/         # Product catalog data
│   │   └── images/       # Product images
│   ├── App.jsx           # All pages, routes & app logic
│   ├── App.css           # App styling
│   ├── index.css         # Global styling
│   └── main.jsx          # App entry point
├── index.html
├── vite.config.js
└── package.json
```

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or later recommended)
- npm

### Installation

```bash
# Clone the repository
git clone https://github.com/<your-username>/snackhub.git
cd snackhub

# Install dependencies
npm install
```

### Environment Variables

SnackHub optionally talks to a backend API (used for the phone OTP login flow). Create a `.env` file in the project root if you want to point it at your own backend:

```
VITE_API_URL=http://localhost:5000/api
```

If not set, it defaults to `http://localhost:5000/api`.

### Running the app

```bash
npm run dev
```

This starts the Vite dev server — open the printed local URL (typically `http://localhost:5173`) in your browser.

### Building for production

```bash
npm run build
npm run preview   # preview the production build locally
```

### Linting

```bash
npm run lint
```

## 🖼️ Screenshots

_Add screenshots here once available:_

<!-- Example:
![Home page](docs/screenshots/home.png)
![Product details](docs/screenshots/product-details.png)
-->

## 📄 License

This project currently has no license specified. Add one (e.g. MIT) if you plan to share or open-source it.
