import { ONDELETE_TODO, DELETE_ALL } from '../actions/types'

/**
 * Middleware: deleteConfirmation.
 */

const actionsToPrompt = {
  [ONDELETE_TODO]: 'Delete todo?',
  [DELETE_ALL]: 'Delete all todos?'
}

export const deleteConfirmation = store => next => action => {
  const prompt = actionsToPrompt[action.type]
  if (prompt !== undefined && !window.confirm(prompt))
    return

  return next(action)
}

