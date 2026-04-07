# Ruhit's Developer Portfolio

A modern, responsive developer portfolio built with React and Vite. Features a fully integrated blog with tag-based filtering, syntax-highlighted code blocks, dark/light theme support, and smooth animations.

## ✨ Features

- **Dark / Light Theme** — Persists across sessions via `localStorage`
- **Smooth Animations** — Powered by Framer Motion
- **Blog Platform** — Markdown-based blog with individual post pages
- **Tag Filtering** — Filter blog posts by topic
- **Syntax Highlighting** — Code blocks rendered with `react-syntax-highlighter` (Dracula / Prism themes)
- **Pagination** — Blog list automatically paginates for scalability
- **Responsive Design** — Mobile-first layout using Tailwind CSS
- **Multi-page Routing** — Client-side routing with React Router

## 🛠️ Tech Stack

| Layer       | Technology                                    |
| ----------- | --------------------------------------------- |
| Framework   | [React 18](https://react.dev)                 |
| Build Tool  | [Vite 5](https://vitejs.dev)                  |
| Styling     | [Tailwind CSS 3](https://tailwindcss.com)     |
| Typography  | [@tailwindcss/typography](https://github.com/tailwindlabs/tailwindcss-typography) |
| Animations  | [Framer Motion](https://motion.dev)           |
| Routing     | [React Router v6](https://reactrouter.com)    |
| Markdown    | [react-markdown](https://github.com/remarkjs/react-markdown) |
| Syntax      | [react-syntax-highlighter](https://github.com/react-syntax-highlighter/react-syntax-highlighter) |
| Icons       | [Lucide React](https://lucide.dev)            |

## 📂 Project Structure

```
portfolio/
├── public/
│   └── blogs/              # Individual markdown blog files
├── src/
│   ├── components/
│   │   ├── Blog/
│   │   │   ├── BlogCard.jsx    # Blog post summary card
│   │   │   ├── BlogList.jsx    # Blog index with tag filter & pagination
│   │   │   └── BlogPost.jsx    # Individual post reader with syntax highlighting
│   │   ├── Home.jsx            # Portfolio landing (all sections)
│   │   ├── Navbar.jsx          # Navigation with theme toggle
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── Skills.jsx
│   │   ├── Experience.jsx
│   │   ├── Education.jsx
│   │   ├── Projects.jsx
│   │   ├── Resume.jsx
│   │   ├── Contact.jsx
│   │   └── Footer.jsx
│   ├── data/
│   │   ├── blogs.js            # Blog metadata index (id, title, tags, date)
│   │   ├── experience.js
│   │   ├── education.js
│   │   ├── projects.js
│   │   └── skills.js
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── tailwind.config.js
├── vite.config.js
└── package.json
```

## 🚀 Getting Started

**Prerequisites:** Node.js (v18+)

```bash
# 1. Install dependencies
npm install

# 2. Start the development server
npm run dev

# 3. Build for production
npm run build
```

## 🌐 Deployment to GitHub Pages

I've already set up the project for zero-friction deployment using GitHub Actions.

1.  **Push your code** to a GitHub repository.
2.  In your repository, go to **Settings** > **Pages**.
3.  Under **Build and deployment** > **Source**, select **GitHub Actions**.
4.  Pushing any change to the `develop` branch will now automatically build and deploy your site!

The site will be live at `https://<your-username>.github.io/<your-repo-name>/`.

## ✍️ Adding a New Blog Post

1. Create a new markdown file in `public/blogs/`:
   ```
   public/blogs/my-new-post.md
   ```

2. Add an entry to the metadata array in `src/data/blogs.js`:
   ```javascript
   {
     "id": "my-new-post",          // Must match the filename
     "title": "My New Post",
     "excerpt": "A short description for the card.",
     "tags": ["React", "Tutorial"],
     "date": "2026-04-07",
     "readTime": 3
   }
   ```

3. That's it — the blog system handles routing, rendering, and filtering automatically.
