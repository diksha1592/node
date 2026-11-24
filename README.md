# Static Node.js Application

A simple and lightweight static web application built using native Node.js (`http`, `fs`, `path`) with **zero external dependencies**.

## Project Structure

```
├── app.js             # Built-in HTTP server and static file router
├── package.json       # Project metadata and start script
├── .gitignore         # Ignored files for version control
└── public/            # Static assets served to the browser
    ├── index.html     # Main HTML page
    ├── style.css      # CSS styling
    └── script.js      # Client-side JavaScript
```

## Getting Started

1. **Start the application:**
   ```bash
   npm start
   ```
   *(or run `node app.js` directly)*

2. **Open in your browser:**
   Navigate to [http://localhost:3000](http://localhost:3000)
