import React from 'react';
import './Header.css'

import { Link } from 'react-router-dom';

import { connect } from 'react-redux'
import { resetToRemote } from '../actions/todoActions'

function Header(props) {
  const { completedTodos, resetToRemote } = props

  return (
    <div style={{ display: 'flex', justifyContent: 'space-between' }} className="Top">
      <div className="Header">
        <h1>To-Dos</h1>
        <span onClick={() => resetToRemote()} className="NavLink" id="reset">Reset</span>
        <Link to="/" className="NavLink" id="backlog">Backlog</Link>
        <Link to="/completed" className="NavLink" id="completed">Completed</Link>
      </div>
      <div className="CompleteCount">
        <h1>{completedTodos.length}</h1>
      </div>
    </div>
  )
}

const mapStateToProperties = state => ({
  completedTodos: state.todos.todos.filter(post => post.completed)
})

// Connect actions into prop.
const actions = { resetToRemote }

export default connect(mapStateToProperties, actions)(Header);