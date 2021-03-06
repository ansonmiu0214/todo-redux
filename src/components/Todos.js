import React, { useEffect } from 'react';
import PropTypes from 'prop-types'
import './Todos.css'
import Todo from './Todo';

import { Route } from 'react-router-dom'
import { connect } from 'react-redux'
import { fetchTodos, toggleTodo, addTodo, onChangeTodo, resetToRemote, onChangeExistingTodo, onDeleteTodo } from '../actions/todoActions'

const ENTER_KEYCODE = 13
const BACKSPACE_KEYCODE = 8

function Todos(props) {
  // Functional componentDidMount.
  useEffect(props.fetchTodos, []) 
  
  const { todos } = props

  /**
   * Event handlers.
   */

  // Add todo.
  const onAddTodoChange = event => props.onChangeTodo(event.target.value)

  // Capture enter (for new todo).
  const onMaybeEnter = event => { 
    if (event.keyCode === ENTER_KEYCODE) props.addTodo()
  }
  
  // Completion toggle.
  const onToggle = todoId => _ => props.toggleTodo(todoId)

  // Change existing todo.
  const onChangeExisting = todoId => event => props.onChangeExistingTodo(todoId, event.target.value)

  // Capture deletion (for existing todo).
  const onMaybeDelete = id => event => {
    if (event.keyCode === BACKSPACE_KEYCODE) {
      // Only delete when no more text is in field.
      if (event.target.value.trim() === "") props.onDeleteTodo(id)
      return
    }

    if (event.keyCode === ENTER_KEYCODE) {
      // Remove from focus.
      event.target.blur()
    }
  }

  return (
    <div className="TodosView" style={{ flex: 1, overflowY: 'auto' }}>
      <Route path='/' exact render={() => 
        <>
        {todos.filter(todo => !todo.completed)
              .map((todo, key) => 
                <Todo
                  key={key}
                  todo={todo}
                  onToggle={onToggle}
                  onChangeExisting={onChangeExisting}
                  onMaybeDelete={onMaybeDelete}
                />
              )}
        <div className="Entry NewTodo">
          <span className="Icon Outer"></span>
          <input 
            type="text" 
            onChange={onAddTodoChange} 
            onKeyUp={onMaybeEnter} 
            value={props.newTodo}
            />
        </div>
        </>
      } />
      <Route path='/completed' exact render={() => (
        todos.filter(todo => todo.completed)
          .map((todo, key) => 
            <Todo
              key={key}
              todo={todo}
              onToggle={onToggle}
              onChangeExisting={onChangeExisting}
              onMaybeDelete={onMaybeDelete}
            />
          )
      )} />
    </div>
  );
}

Todos.propTypes = {
  todos: PropTypes.array,
  newTodo: PropTypes.string
}

// Connect global state - where { todos, newTodo }
// is the intial state for the 'todos' reducer.
const mapStateToProperties = state => ({
  todos: state.todos.todos,
  newTodo: state.todos.newTodo
})

// Connect actions into prop.
const actions = { fetchTodos, toggleTodo, addTodo, onChangeTodo, resetToRemote, onChangeExistingTodo, onDeleteTodo }

export default connect(mapStateToProperties, actions)(Todos);