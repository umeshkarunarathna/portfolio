# Umesh Karunarathna Portfolio

GitHub Pages-ready portfolio website.

## Quick setup

1. Replace `resume.pdf` with your real resume PDF.
2. Open `index.html` and update your LinkedIn URL.
3. Open `projects.js` to add/edit projects.
4. Upload all files to a GitHub repository.
5. Go to repository **Settings > Pages**.
6. Under **Build and deployment**, select:
   - Source: `Deploy from a branch`
   - Branch: `main`
   - Folder: `/root`
7. Save and wait for GitHub Pages to publish.

## How to add a new project

Open `projects.js`.

Copy this block and paste it inside the `PROJECTS` array:

```js
{
  title: "New Project Name",
  category: "Project Category",
  period: "2025",
  associatedWith: "Douglas College",
  description: "Short description of what the project does.",
  highlights: [
    "Main achievement one",
    "Main achievement two",
    "Main achievement three"
  ],
  tags: ["Tool 1", "Tool 2", "Tool 3"],
  links: [
    { label: "GitHub", url: "https://github.com/umeshkarunarathna" }
  ]
}
```

Save the file and push changes to GitHub.

## Files

- `index.html` — main website structure
- `styles.css` — design and responsive layout
- `script.js` — menu and animations
- `projects.js` — all project content
- `resume.pdf` — add your actual resume using this exact filename


## Adding project images

1. Put your images inside the `images` folder.
2. Add the image path in the project block:

```js
image: "images/my-project-image.jpg",
```

Example:

```js
{
  title: "My Project",
  image: "images/my-project.jpg"
}
```

Recommended image size:
- 1200x700 or similar landscape image
