# Project 09 — React Task Manager

**Difficulty:** Hard  
**Technology:** React / Vite  
**Time target:** 25–30 minutes

## Problem Statement

Complete the input change handler, addTask(), and deleteTask(indexToDelete).

## Requirements

- Complete the input change handler, addTask(), and deleteTask(indexToDelete).
- Add a non-empty task to the list and clear the input after adding. Treat whitespace-only input as empty.
- Delete only the selected task; keep the other tasks and their order.
- Keep the two provided initial tasks.

## Constraints

Use React state and immutable array updates; do not manipulate the DOM directly. No API, database, or additional package is needed.

## Expected Behaviour / Manual Checks

- [ ] Initially the two supplied tasks are visible.
- [ ] Type Read React docs and add: a third item appears and input clears.
- [ ] Empty or whitespace-only input adds nothing.
- [ ] Delete the middle of three tasks: only that item disappears.
- [ ] Add duplicate labels and delete one: the other remains.

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

The starter compiles, but controlled input handlers are empty, so input values will not change until you implement them. The initial tasks render; Add and Delete are unfinished. No exercise solutions are included. A successful page load or build verifies the scaffold, not completion of the exercise.
