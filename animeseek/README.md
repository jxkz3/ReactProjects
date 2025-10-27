# 🧩 Anime Picker – React + Gemini + Jikan API

## 🎯 Description

**Anime Picker** is a smart React-based web app that blends **AI recommendations** with **real anime data**.  
Users can input their favorite genres, and the app uses **Gemini AI** to suggest anime titles.  
Then, for each suggested title, it fetches detailed information — such as images, synopsis, and ratings — from the **Jikan API** (MyAnimeList data).

This project showcases real-world skills in **React**, **API chaining**, and **frontend data rendering**.

---

## 🖼️ Preview

![Anime Picker Screenshot](./preview.png)

> _(i will update soon.)_

---

## 🚀 Features

- 🎭 Add multiple anime genres dynamically
- 🤖 Get AI-powered anime suggestions from Gemini
- 🖼️ Fetch anime images and descriptions via Jikan API
- ⏳ Loading indicators & clean error handling
- 🌗 Optional dark mode
- 🧱 Modular component structure (Main, Anime, List, Card)

---

## 🧠 Tech Stack

- **Frontend:** React (CRA)
- **Styling:** CSS
- **APIs:**
  - 🧩 **Gemini AI API** (for generating anime titles)
  - 📚 **Jikan REST API** (for fetching anime details by title)
- **HTTP:** Axios
- **State:** useState, useEffect hooks

---

## ⚙️ How It Works

1. User enters favorite genres.
2. App sends those genres to the **Gemini API** to generate top anime titles.
3. For each returned title, it calls **Jikan API** to fetch:
   - Anime image
   - Description (synopsis)
   - Rating and popularity
4. Displays everything beautifully on the screen (react cards).

---

## 🔗 Example API Flow

```js
// Gemini AI (backend)
const prompt = `List 5 best anime titles for ${genre.join(", ")}`;
const response = await axios.post("http://localhost:5000/api/gemini", {
  prompt,
});

// Example Gemini response:
["Naruto", "Attack on Titan", "Bleach", "One Piece", "Demon Slayer"];

// Frontend calls Jikan for each title
const res = await axios.get(
  `https://api.jikan.moe/v4/anime?q=${title}&limit=1`
);
```

---

## ⚙️ Installation & Setup

```bash
# Clone this repository
git clone https://github.com/jxkz3/ReactProjects.git

# Navigate to project folder
cd anime-picker

# Install dependencies
npm install

# Run frontend
npm run dev
```

> Backend (`/api/gemini`) should be running locally or on your hosted server.

---

## 💡 Learning Outcomes

- Combining AI with real-world APIs
- Using Axios for async API chaining
- Rendering dynamic UI based on fetched data
- Managing React state and loading conditions
- Clean frontend component architecture

---

## 👨‍💻 Author

**Jasik MJ**  
📧 jasikmj02@gmail.com
🌐 [LinkedIn](https://linkedin.com/in/jxkz) • [GitHub](https://github.com/jxkz)

---

## 📝 License

This project is licensed under the **MIT License** — feel free to use and modify it.
