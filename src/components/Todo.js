import React, { Component } from 'react';
import './Entry.css'

class Todo extends Component {
  render() {
    const { onToggle, onChangeExisting, onMaybeDelete } = this.props
    const { title, completed, id } = this.props.todo
    return (
      <div className={`Entry ${completed ? 'Completed' : ''}`}>
        <span className="Icon Outer" onClick={onToggle(id)}><span className="Checkbox"></span></span>
        <input 
          type="text" 
          onChange={onChangeExisting(id)} 
          onKeyUp={onMaybeDelete(id)}
          value={title}
          />
      </div>
    );
  }
}

export default Todo;