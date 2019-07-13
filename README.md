# todo-redux

Simple to-do list styled like iOS Reminders -- to learn React and Redux.

## Features
* Initialised to external data from [JSON placeholder](https://jsonplaceholder.typicode.com/)
* CRUD (create-read-update-delete) operations
* Persistent state via `localStorage`
* 'Reset' to default JSON placeholder settings

## Takeways
* React
  * Functional components using Hooks
* Redux
  * The basic workflow (types, actions, reducers, store)
  * Integration with `thunk` to directly access the dispatch callback
  * Writing custom middleware (for `localStorage` support and logger just for learning purposes)

## Getting started
Runs locally on `localhost:3000`. Retains same setup from `create-react-app` boilerplate.

1. `npm install`
2. `npm start`

## Extensions
* Gesture support for deletion (like iOS)
* Full PWA support (offline mode)