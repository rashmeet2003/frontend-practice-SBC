# Project 10 — React Product Search + Category Filter

**Difficulty:** Hard  
**Technology:** React / Vite  
**Time target:** 30–40 minutes

## Problem Statement

Complete the search and category change handlers.

## Requirements

- Complete the search and category change handlers.
- Derive filteredProducts from the provided products using both search AND category.
- Search product names case-insensitively; All includes every category. An empty search imposes no name restriction.
- Render each matching product’s name, category, and price in rupees. Use product ids as React keys.
- When no product matches, show no product cards; a helpful empty-state message is optional.

## Constraints

Use React state and immutable array updates; do not manipulate the DOM directly. No API, database, or additional package is needed.

## Expected Behaviour / Manual Checks

- [ ] After implementation, empty search + All shows all four products.
- [ ] lap, LAP, and Laptop each match Laptop.
- [ ] Empty search + Electronics shows Laptop and Headphones.
- [ ] lap + Stationery shows no cards.
- [ ] Empty search + Stationery shows Notebook and Pen.
- [ ] A Laptop card shows Laptop, Electronics, and ₹55000.

## Files to Modify

Complete TODOs in src/App.jsx. Supporting setup and styles are already provided.

## Run

Install Node.js 22.12+ (Node.js 24 recommended), including npm. In a terminal inside this project folder, run:

```sh
npm install
npm run dev
```

Open the local URL printed by Vite. Stop with Ctrl+C. Run npm run build to check the production build; npm run preview serves that build locally. Each React project is independent. The first install needs internet access. See the [Vite guide](https://vite.dev/guide/) for tooling details.

## Starter Status

The starter compiles, but controlled input handlers are empty, so input values will not change until you implement them. Product data is supplied, but the result area is intentionally empty until you implement filtering and rendering. No exercise solutions are included. A successful page load or build verifies the scaffold, not completion of the exercise.
