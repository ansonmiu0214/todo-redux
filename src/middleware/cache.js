<<<<<<< HEAD
/**
 * Middleware: local storage cache.
 */
=======
>>>>>>> e96d1d0... Initial commit
export const cache = store => next => action => {
  const result = next(action)
  const todos = store.getState().todos.todos
  localStorage.setItem('todos', JSON.stringify(todos))
  return result
}