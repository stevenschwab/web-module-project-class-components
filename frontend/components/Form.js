import React from 'react'

export default class Form extends React.Component {
  render() {
    const { addTodo, todoName, handleChanges } = this.props
    return (
      <form onSubmit={addTodo}>
        <input type='text' name='todo' value={todoName} placeholder='Type todo' onChange={handleChanges}/>
        <button type='submit'>Submit</button>
      </form>
    )
  }
}
