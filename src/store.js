import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import rootReducer from './reducers'
import { logger } from './middleware/logger';
import { cache } from './middleware/cache';

const initialState = {}
const middleware = [thunk, logger, cache]

export default createStore(rootReducer, initialState, applyMiddleware(...middleware))