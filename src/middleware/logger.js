/**
 * Middleware: logger.
 */
export const logger = store => next => action => {
  console.log(`[LOG] dispatching action "${action.type}"`)
  return next(action)
}

