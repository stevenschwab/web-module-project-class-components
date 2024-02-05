import React from 'react'

export default class Todo extends React.Component {
  render() {
    const { id, name, completed } = this.props.todo;
    const { toggleTodo } = this.props;
    return (
      <li className='todo' onClick={() => toggleTodo(id)}>
        {name} {completed && <span className="checkmark">✓</span>}
      </li>
    )
  }
}
