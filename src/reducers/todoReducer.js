import { FETCH_TODOS, ADD_TODO, TOGGLE_TODO, ONCHANGE_TODO, ONCHANGE_EXISTING_TODO, ONDELETE_TODO } from '../actions/types'

const initialState = {
  todos: [],
  newTodo: ''
}

// ================
// Reducer functors
// ================
<<<<<<< HEAD

=======
>>>>>>> e96d1d0... Initial commit
const fetchTodos = (state, payload) => {
  return {
    ...state,
    todos: payload
  }
}

const toggleTodos = (state, payload) => {
  const newTodos = state.todos.map(todo => {
    if (todo.id === payload) 
      todo.completed = !todo.completed
    return todo
  })

  return {
    ...state,
    todos: newTodos
  }
}

const onChangeTodo = (state, payload) => {
  return {
    ...state,
    newTodo: payload
  }
}

const addTodo = (state, _) => {
  const { todos, newTodo: title } = state
  const newId = state.todos.length + 1
  const newTodo = {
    id: newId,
    title: title
  }
  return {
    ...state,
    todos: [...todos, newTodo],
    newTodo: ''
  }
}

const onChangeExistingTodo = ({ todos, ...prevState }, { id, title }) => ({
  ...prevState,
  todos: todos.map(todo => todo.id === id ? { ...todo, title: title } : todo)
})

const onDeleteTodo = ({ todos, ...prevState }, { id }) => ({
  ...prevState,
  todos: todos.filter(todo => todo.id !== id)
})

// =========================
// Mapping: type-to-functor.
// ========================= 
const reducers = {
  [FETCH_TODOS]: fetchTodos,
  [TOGGLE_TODO]: toggleTodos,
  [ONCHANGE_TODO]: onChangeTodo,
  [ADD_TODO]: addTodo,
  [ONCHANGE_EXISTING_TODO]: onChangeExistingTodo,
  [ONDELETE_TODO]: onDeleteTodo
}


const todoReducer = (state = initialState, { type, payload }) => {
  const reducer = reducers[type]
  return reducer ? reducer(state, payload) : state
}

export default todoReducer