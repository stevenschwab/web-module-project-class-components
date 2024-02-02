import React from 'react'

export default class Form extends React.Component {
  render() {
    return (
      <form onSubmit={this.props.addTodo}>
        <input type='text' placeholder='Type todo' onChange={this.props.updateTodoName} value={this.props.todoName}/>
        <button type='submit'>Submit</button>
      </form>
    )
  }
}
