# Cura Link - Revolutionizing Medicine Resale & Donation 🚀💊

Cura Link is an innovative platform that transforms the way surplus or hard-to-obtain medicines are redistributed. By connecting sellers with buyers through a secure, verified marketplace, Cura Link enhances medicine accessibility while reducing waste. The platform leverages dynamic pricing, real-time geolocation, and AI-powered quality control to ensure that essential drugs are efficiently and fairly distributed.

## 📚 Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Technology Stack](#technology-stack)
- [Installation](#installation)
- [Usage](#usage)
- [Environment Variables](#environment-variables)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

## Overview 🌐

The global pharmaceutical market faces significant challenges, including inefficient distribution, inconsistent pricing, and high levels of unused medications. Cura Link aims to tackle these issues by:

- **Connecting Sellers and Buyers:** Facilitating the resale and donation of medicines.
- **Dynamic Pricing:** Implementing an algorithm that sets fair prices based on real-time market data (demand, drug condition, expiry dates, etc.) 📊.
- **Geolocation Search:** Enabling users to quickly find the nearest available source of the medicine 📍.
- **AI-Powered Insights:** Utilizing advanced AI for quality control and predictive analytics 🤖.

## Features ✨

- **🔒 Secure User Registration & Verification:** Ensuring only authenticated users can list or purchase medicines.
- **💰 Dynamic Pricing Engine:** Automatically adjusts prices to reflect market trends and drug specifics.
- **📍 Real-Time Geolocation:** Provides accurate, location-based search results.
- **🖼️ Comprehensive Listings:** Detailed information for each medicine, including images, IDs, and seller contacts.
- **⚙️ Robust Backend:** Powered by Node.js, Express, and MongoDB for reliable data management.
- **🚀 Modern Frontend:** Built with Vite and React for a fast, responsive user experience.
- **🤖 AI Integration:** QWEN2 model assists in tasks such as quality control and predictive analytics.

## Technology Stack 🛠️

- **Frontend:** [Vite](https://vitejs.dev/) + [React](https://reactjs.org/) ⚛️
- **Backend:** [Node.js](https://nodejs.org/), [Express](https://expressjs.com/), [MongoDB](https://www.mongodb.com/) 🍃
- **AI Model:** [QWEN2](#) (Integrated for dynamic pricing and quality assurance)
- **Other Tools:** Git, and modern CSS frameworks for styling.

## Installation 💻

### Prerequisites

- [Node.js](https://nodejs.org/en/download/) (v14 or later) 🔗
- [MongoDB](https://www.mongodb.com/try/download/community) (Ensure MongoDB is running on your machine or accessible via cloud) ☁️
- Git 🐙

### Clone the Repository

```bash
git clone https://github.com/yourusername/curalink.git
cd curalink
```
### Frontend Setup
```bash
cd frontend
npm install
npm run dev
```
### Backend Setup
```bash
cd ../backend
npm install
npm start
```
- The backend server should now be running (default port: 5000). Ensure the frontend is configured to communicate with the backend server.

### Usage 📖
- User Registration: Create an account on the platform.
- Medicine Listing: Sellers can list medicines by providing detailed information, including images and descriptions.
- Dynamic Pricing: The platform uses a dynamic pricing algorithm to suggest fair prices.
- Search & Purchase: Buyers can search for medicines using a geolocation-based search and contact sellers directly.

### Environment Variables ⚙️
- Create a .env file in the backend directory with the following :
```bash
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
AI_MODEL_API_KEY=your_qwen2_model_api_key
```

