# FoodBridge — Food Redistribution System

A responsive frontend website for a food redistribution platform connecting food donors, NGOs and volunteers.

## Features

- Responsive landing page
- Food donation listing form
- Available food cards with filtering
- Donation claim demo workflow
- Impact dashboard
- Demo login modal
- GitHub-ready static project
- No backend required for the demo

## Project structure

```text
food-redistribution-system/
├── index.html
├── assets/
│   ├── style.css
│   └── app.js
└── README.md
```

## Run locally

### Option 1 — Open directly
Double-click `index.html`.

### Option 2 — VS Code
Install the **Live Server** extension and open `index.html` with Live Server.

### Option 3 — Python
```bash
python -m http.server 5500
```
Then open `http://localhost:5500`.

## GitHub Pages

1. Create a new GitHub repository.
2. Upload `index.html`, `assets/`, and `README.md`.
3. Go to **Settings → Pages**.
4. Select the `main` branch and `/root`.
5. Save. GitHub will publish the website.

## Important

This package is a frontend/demo implementation. Login, database storage, real-time notifications, maps, image uploads and authentication are simulated in the browser.

## Reference projects

The feature ideas were informed by public food-redistribution projects such as:
- https://github.com/SurplusSync/Food-Redistribution-Platform
- https://github.com/amritanshu-kishor/food-redistribution-platform
- https://github.com/ankesh15/Food-Distribution-Platform
