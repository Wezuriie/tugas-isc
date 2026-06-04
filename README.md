# 🎵 WeSic — A Special Music Space

WeSic is a simple, responsive, and aesthetically pleasing single-page website dedicated to music and memories. Built using Semantic HTML, CSS Layouts (Flexbox & Grid), and vanilla JavaScript, this project is crafted as a special room to celebrate melodies and cherished moments.

---

## ✨ Features

- **Semantic HTML Structure**: Built with clean, modern, and SEO-friendly structural elements.
- **Integrated Audio Player**: A unified JavaScript audio system that synchronizes the main hero song and the 3-song playlist without overlapping audio.
- **Dynamic Flexbox Playlist**: A beautifully aligned music card layout that adapts effortlessly to different device widths.
- **Aesthetic CSS Grid Gallery**: A 3-column memory gallery with smooth image-zoom hover transitions.
- **Fully Responsive Design**: Mobile-first approach using CSS Media Queries, ensuring a seamless experience from smartphones to desktops.

---

## 📂 Project Structure

Ensure your local project folder is structured as follows for the audio and images to load correctly:

```text
📁 WeSic/
├── index.html          # Core structure and semantic elements
├── style.css           # Styling, Flexbox, Grid, and Media Queries
├── script.js           # Responsive menu and synchronized audio logic
├── lagu1.mp3           # Audio file for 'you! - LANY' (also acts as main song)
├── lagu2.mp3           # Audio file for 'I'd like to watch you sleeping - Sal Priadi'
├── lagu3.mp3           # Audio file for 'Megamix - Taylor Swift'
├── foto1.jpg           # Gallery Image 1 (First Concert)
├── foto2.jpg           # Gallery Image 2 (Our Tickets)
└── foto3.jpg           # Gallery Image 3 (Favorite Band)
```

---

## 🛠️ Tech Stack Used

- **HTML5**: Semantic tags (`<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<footer>`)
- **CSS3**: Custom layouts using CSS Flexbox, Grid, and Responsive Media Queries
- **JavaScript (ES6)**: Vanilla JS for dynamic DOM manipulation and HTML5 Audio API controls

---

## 🚀 How to Run Locally

1. **Clone or Download** this repository to your local computer.
2. Place your own music files (`.mp3`) and photos (`.jpg`/`.png`) inside the project folder, matching the filenames listed in the directory structure above.
3. Open `index.html` directly in any modern web browser (Google Chrome, Microsoft Edge, Safari, Brave, etc.).
4. Enjoy the music and the memories! 💖

---

## 📝 Customization Notes

- **Changing Songs**: To change the tracks, replace the `.mp3` files in the folder or update the `data-src` attributes inside the `<article>` tags in `index.html`.
- **Replacing Images**: Add your custom photos to the folder and ensure the file extensions (`.jpg`, `.png`, `.webp`) match exactly with the `src` attribute in the HTML `<img>` tags.
