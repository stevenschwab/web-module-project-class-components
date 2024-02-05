import React from 'react'

export default class Todo extends React.Component {
  render() {
    return (
      <li className='todo' onClick={() => this.props.toggleTodo(this.props.todo.id)}>
        {this.props.todo.name}
        {this.props.todo.completed && <span className="checkmark">✓</span>}
      </li>
    )
  }
}
