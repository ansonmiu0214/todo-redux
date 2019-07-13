<<<<<<< HEAD
/**
 * Middleware: logger.
 */
=======
>>>>>>> e96d1d0... Initial commit
export const logger = store => next => action => {
  console.log(`[LOG] dispatching action "${action.type}"`)
  return next(action)
}

