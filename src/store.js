import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import rootReducer from './reducers'
import { logger } from './middleware/logger';
import { cache } from './middleware/cache';
import { deleteConfirmation } from './middleware/deleteConfirmation';

const initialState = {}
const middleware = [thunk, logger, deleteConfirmation, cache]

export default createStore(rootReducer, initialState, applyMiddleware(...middleware))