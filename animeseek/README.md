# Anime Picker – React + Gemini + Jikan API

## Description

A React app that asks Gemini for anime recommendations based on user-entered genres, then fetches real anime details from the Jikan API. Shows images, synopsis, and ratings.

## Features

- Add genres dynamically
- Get AI-generated anime titles
- Fetch anime info from Jikan
- Loading states and basic error handling
- Modular components

## Tech Stack

React, CSS, Axios, Gemini API, Jikan API.

## How It Works

1. User enters genres.
2. App sends genres to Gemini to get titles.
3. For each title, app queries Jikan for details.
4. UI renders cards with the fetched data.

## Example API Flow

```js
// Gemini
const prompt = `List 5 best anime titles for ${genre.join(", ")}`;
const response = await axios.post("http://localhost:5000/api/gemini", {
  prompt,
});

// Result example:
["Naruto", "Attack on Titan", "Bleach", "One Piece", "Demon Slayer"];

// Jikan
const res = await axios.get(
  `https://api.jikan.moe/v4/anime?q=${title}&limit=1`
);
```

## Setup

```bash

git clone https://github.com/jxkz3/ReactProjects.git
cd anime-picker
npm install
npm run dev


```
