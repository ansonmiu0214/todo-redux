import { ONDELETE_TODO } from '../actions/types'

/**
 * Middleware: deleteConfirmation.
 */
export const deleteConfirmation = store => next => action => {
  if (action.type === ONDELETE_TODO && 
      !window.confirm('Delete?'))
    return

  return next(action)
}

