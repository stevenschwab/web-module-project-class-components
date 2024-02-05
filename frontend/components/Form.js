import React from 'react'

export default class Form extends React.Component {
  render() {
    return (
      <form onSubmit={this.props.addTodo}>
        <input type='text' name='todo' value={this.props.todoName} placeholder='Type todo' onChange={this.props.handleChanges}/>
        <button type='submit'>Submit</button>
      </form>
    )
  }
}
