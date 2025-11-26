# 🎬 Movie Search App

A simple and interactive **Movie Search Application** built with **HTML, CSS, and Vanilla JavaScript**.  
Users can search for movies by typing **full or partial titles** or **genres**, and matching movies will dynamically appear on the screen.

---

## 🚀 Features

### 🔍 Search by Title or Genre
- Case-insensitive search
- Partial matches supported
- Examples:
  - `"dark"` → The Dark Knight
  - `"sci"` → Inception, Interstellar
  - `"animation"` → Moana, Coco

### 🎴 Dynamic Movie Cards
Each movie result displays:
- **Title**
- **Year**
- **Genre**

Cards are generated dynamically via JavaScript.

### ❌ No Results Display
If no matching movie is found, a fallback message is shown:
> *No movies found.*

---

## 🧠 How It Works

1. User enters a search term into the input box.
2. The input is converted to **lowercase** and **trimmed**.
3. The movie list is filtered using:
   ```js
