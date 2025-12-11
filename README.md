<div align="center">
  <br />
    <a href="#">
      <img src="public/assets/images/logo.png" alt="Polar Stocks Logo" width="150">
    </a>
  <br />

  <h1>Polar Stocks</h1>
  <p><strong>Real-Time Financial Intelligence & Market Analysis Platform</strong></p>

  <div>
    <img src="https://img.shields.io/badge/-Next.js-000000?style=flat-square&logo=next.js&logoColor=white"/>
    <img src="https://img.shields.io/badge/-TypeScript-3178C6?style=flat-square&logo=typescript&logoColor=white"/>
    <img src="https://img.shields.io/badge/-MongoDB-00A35C?style=flat-square&logo=mongodb&logoColor=white"/>
    <img src="https://img.shields.io/badge/-TailwindCSS-38B2AC?style=flat-square&logo=tailwindcss&logoColor=white"/>
    <img src="https://img.shields.io/badge/-Better_Auth-000000?style=flat-square&logo=shield&logoColor=white"/>
    <img src="https://img.shields.io/badge/-Inngest-000000?style=flat-square&logo=inngest&logoColor=white"/>
  </div>
</div>

<br />

## 📖 Executive Summary

**Polar Stocks** is an advanced technological solution designed for financial market monitoring and analysis. Utilizing a modern and scalable architecture, the platform integrates real-time data feeds, generative artificial intelligence, and automated notification systems to provide investors with critical information instantly.

The system is built to offer high availability, secure identity management, and an institutional-grade data visualization experience.

## 🚀 Key Capabilities

### 📊 Real-Time Market Dashboard
Advanced visualization of financial assets via interactive charts (candlestick and line) with historical data and live updates. Includes filtering by industry, market cap, and performance metrics.

### 🤖 AI-Driven Insights
Analysis engine powered by **Gemini AI** that processes financial news and earnings reports to generate executive summaries, sentiment analysis, and personalized "Daily Digests" for strategic decision-making.

### 🔔 Automated Alert System
Robust notification infrastructure powered by **Inngest**. Allows users to set custom thresholds (price, volume, volatility) and receive instant alerts via email using **Nodemailer**.

### 🔐 Security & Identity Management
Implementation of **Better Auth** for secure authentication and session management, supporting modern user data protection standards.

### 📈 Fundamental Analysis
Deep access to key corporate metrics:
* PE Ratio, EPS, and revenue reports.
* SEC filings and corporate news.
* Analyst ratings and market sentiment scores.

## 🛠 Technical Architecture

The project follows a **Modular Monorepo** architecture based on Next.js 15, optimized for performance and scalability.

| Component | Technology | Description |
| :--- | :--- | :--- |
| **Frontend** | Next.js, React, TailwindCSS | Reactive interface, Server-Side Rendering (SSR), and reusable UI components (Shadcn). |
| **Backend** | Next.js API Routes | Integrated RESTful API for handling business logic. |
| **Database** | MongoDB | Flexible NoSQL database for storing user profiles and watchlist configurations. |
| **Orchestration** | Inngest | Event-driven architecture for async jobs and background workflows. |
| **Data Feed** | Finnhub API | Institutional-grade market data provider. |
| **AI** | Google Gemini | Natural Language Processing (NLP) for financial analysis. |

## 💻 Installation & Local Deployment

Follow these steps to deploy the development instance in your local environment.

### Prerequisites
* Node.js (LTS)
* npm or yarn
* Git

### Setup

1.  **Clone the repository:**
    ```bash
    git clone [https://github.com/your-username/polar-stocks.git](https://github.com/your-username/polar-stocks.git)
    cd polar-stocks
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

3.  **Configure environment variables:**
    Create a `.env` file in the project root and configure credentials for external services (MongoDB, Finnhub, Better Auth, Gemini, Nodemailer).

4.  **Start the development server:**
    ```bash
    npm run dev
    ```

5.  **Start the event server (Inngest):**
    In a separate terminal:
    ```bash
    npx inngest-cli@latest dev
    ```

The application will be available at `http://localhost:3000`.

---

<div align="center">
  <p>© 2025 Polar Stocks. All rights reserved.</p>
</div>