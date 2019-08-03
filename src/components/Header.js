import React from 'react';
import './Header.css'

import { NavLink } from 'react-router-dom';

import { connect } from 'react-redux'
import { resetToRemote, deleteAll } from '../actions/todoActions'

function Header(props) {
  const { completedTodos, resetToRemote, deleteAll } = props

  return (
    <div className="Top">
      <div className="Row">
        <div><h1>To-Dos</h1></div>
        <div className="CompleteCount">
          <h1>{completedTodos.length}</h1>
        </div>
      </div>
      <div className="Row">
        <div>
          <NavLink exact activeClassName="Active" to="/" className="NavLink" id="backlog">Backlog</NavLink>
          <NavLink exact activeClassName="Active" to="/completed" className="NavLink" id="completed">Completed</NavLink>
        </div>
        <div>
          <span onClick={() => resetToRemote()} className="NavLink" id="sample">Sample</span>
          <span onClick={() => deleteAll()} className="NavLink" id="reset">Reset</span>
        </div>
      </div>
    </div>
  )
}

const mapStateToProperties = state => ({
  completedTodos: state.todos.todos.filter(post => post.completed)
})

// Connect actions into prop.
const actions = { resetToRemote, deleteAll }

export default connect(mapStateToProperties, actions)(Header);