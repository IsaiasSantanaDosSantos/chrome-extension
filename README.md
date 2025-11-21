
# Lottery Results Extension (Chrome Extension)

A Chrome extension that displays **real-time results** from the main Brazilian Federal Lottery games, such as Mega-Sena, Quina, Lotofácil, and others.  
The extension integrates directly with an **external API** to fetch the latest lottery game results as soon as the user opens the extension popup.

---

## 🚀 Features

- Fetches and displays the most recent lottery results.
- Simple, lightweight, and responsive interface.
- Automatic updates via API integration.
- Supports multiple lottery games (Mega-Sena, Quina, Lotofácil, and more).
- Organized codebase following React best practices.
- Designed for future improvements and feature expansion.

---

## 🧰 Technologies Used

- **ReactJS**
- **JavaScript (ES6+)**
- **Create React App**
- **Chrome Extensions API**
- **Fetch API (async/await)**
- **HTML / CSS**
- **Git & GitHub**

---

## 📦 Installation & Development Setup

Clone the repository:

```bash
git clone https://github.com/your-username/your-repository.git
cd your-repository

Install the dependencies:

npm install

Start the development server:

npm start

The app will run at http://localhost:3000/.


---

🧪 Building the Chrome Extension

To generate the production build:

npm run build

This will create a build/ folder with the final files.

To install the extension in Chrome:

1. Open chrome://extensions


2. Enable Developer mode


3. Click Load unpacked


4. Select the build/ folder




---

🧩 Project Structure

src/
 ├── components/
 │    ├── LotteryList.jsx
 │    ├── LotteryCard.jsx
 │    └── ...
 ├── services/
 │    └── lotteryApi.js     # API integration logic
 ├── assets/
 ├── App.jsx
 ├── index.js
 └── manifest.json          # Chrome extension configuration


---

🔗 API Integration

This extension uses a public API that provides updated results from Brazilian Federal Lottery games.

The API returns:

Game name

Drawn numbers

Contest information

Draw date



---

🛠️ Planned Improvements

Display historical results and past contests.

Push notifications when new results are available.

Settings screen for selecting favorite games.

Dark mode support.



---

👨‍💻 About the Developer

Developed by Mr Isaias, a Front-End Developer focused on React, JavaScript, and Chrome extension development.
Passionate about building practical tools and improving user experiences.


---

📸 Screenshots (Optional)

Add popup screenshots here.


---

📄 License

This project is licensed under the MIT License.

