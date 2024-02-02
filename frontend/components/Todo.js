import React from 'react'

export default class Todo extends React.Component {
  render() {
    return (
      <li className='todo' onClick={this.props.toggleCompleted}>
        <div>{this.props.todo.name}</div>
        <span className="checkmark" hidden={!this.props.todo.completed}>✓</span>
      </li>
    )
  }
}
