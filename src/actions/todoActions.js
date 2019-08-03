import { FETCH_TODOS, ADD_TODO, TOGGLE_TODO, ONCHANGE_TODO, ONCHANGE_EXISTING_TODO, ONDELETE_TODO, DELETE_ALL } from './types'

const LIMIT = 3

const remoteFetch = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/todos')
  const data = await response.json()
  return data.slice(0, LIMIT)
}

export const fetchTodos = () => async dispatch => {
  const cache = localStorage.getItem('todos')
  return dispatch({
    type: FETCH_TODOS,
    payload: cache ? JSON.parse(cache) : await remoteFetch()
  })
}

export const toggleTodo = id => dispatch => {
  dispatch({
    type: TOGGLE_TODO,
    payload: id
  })
}

export const addTodo = () => dispatch => {
  dispatch({
    type: ADD_TODO
  })
}

export const onChangeTodo = textboxValue => dispatch => {
  dispatch({
    type: ONCHANGE_TODO,
    payload: textboxValue
  })
}

export const onChangeExistingTodo = (id, title) => dispatch => {
  dispatch({
    type: ONCHANGE_EXISTING_TODO,
    payload: { id, title }
  })
}

export const onDeleteTodo = id => dispatch => {
  dispatch({
    type: ONDELETE_TODO,
    payload: { id }
  })
}

export const resetToRemote = () => async dispatch => {
  dispatch({
    type: FETCH_TODOS,
    payload: await remoteFetch()
  })
}

export const deleteAll = () => dispatch => {
  dispatch({
    type: DELETE_ALL,
    payload: {}
  })
}