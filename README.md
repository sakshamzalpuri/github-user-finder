# 🔍 GitHub User Finder

A clean, responsive web app that lets you search any GitHub user and instantly view their profile, repositories, followers, and more — powered by the GitHub REST API.

![GitHub User Finder Preview](https://img.shields.io/badge/Status-Live-brightgreen?style=flat-square) ![HTML](https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=html5&logoColor=white) ![CSS](https://img.shields.io/badge/CSS3-1572B6?style=flat-square&logo=css3&logoColor=white) ![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black)

---

## ✨ Features

- 🔎 **Instant User Search** — Look up any GitHub username with a single click or by pressing `Enter`
- 👤 **Rich Profile Card** — Displays avatar, name, bio, location, join date, company, blog, and Twitter
- 📊 **Stats at a Glance** — Followers, following, public repos, and public gists
- 📁 **Repository Browser** — Fetches and sorts repositories by star count, showing language, stars, forks, and last updated date
- 🕐 **Search History** — Quick-access chips for recent searches (stored in `localStorage`)
- 💀 **Skeleton Loading** — Smooth skeleton placeholders while data is being fetched
- ❌ **Error Handling** — User-friendly messages for not-found users or network issues
- 🌐 **Language Color Badges** — GitHub-style language color dots for 20+ languages
- 📱 **Fully Responsive** — Works seamlessly on desktop, tablet, and mobile

---

## 🛠️ Tech Stack

| Technology | Purpose |
|---|---|
| HTML5 | Structure & semantics |
| CSS3 | Styling, animations, responsive layout |
| Vanilla JavaScript | Logic, API calls, DOM manipulation |
| [GitHub REST API](https://docs.github.com/en/rest) | User & repository data |
| [Font Awesome 6](https://fontawesome.com/) | Icons |
| [Google Fonts – Poppins](https://fonts.google.com/specimen/Poppins) | Typography |

---

## 🚀 Getting Started

No build tools or dependencies needed — this is a pure HTML/CSS/JS project.

### Run Locally

```bash
# Clone the repository
git clone https://github.com/sakshamzalpuri/github-user-finder.git

# Navigate into the folder
cd github-user-finder

# Open index.html in your browser
start index.html   # Windows
open index.html    # macOS
```

> You can also use the [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) VS Code extension for hot-reloading during development.

---

## 📂 Project Structure

```
github-user-finder/
├── index.html       # App markup & layout
├── style.css        # All styles, animations & responsive design
├── script.js        # GitHub API calls, rendering & search history logic
└── .gitignore
```

---

## 🔌 API Reference

This app uses the public [GitHub REST API v3](https://docs.github.com/en/rest) — no authentication required for basic usage.

| Endpoint | Usage |
|---|---|
| `GET /users/{username}` | Fetch user profile data |
| `GET /users/{username}/repos` | Fetch user's public repositories |

> **Note:** The unauthenticated GitHub API has a rate limit of **60 requests/hour** per IP. If you hit the limit, requests will temporarily fail.

---

## 📸 Demo

Search any GitHub username (e.g. `torvalds`, `gaearon`, `sindresorhus`) to see the app in action.

🔗 **Live Demo:** [github-user-finder](https://sakshamzalpuri.github.io/github-user-finder) *(if deployed via GitHub Pages)*

---

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

---

<p align="center">Made with ❤️ by <a href="https://github.com/sakshamzalpuri">Saksham Zalpuri</a></p>
