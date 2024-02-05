import React from 'react';
import Todo from './Todo';

export default class TodoList extends React.Component {
  render() {
    const { todos, toggleTodo } = this.props
    return (
      <div id='todos'>
        <h1>Todos:</h1>
        <ul>
          {
            todos.map((todo) => (<Todo key={todo.id} todo={todo} toggleTodo={toggleTodo}/>))
          }
        </ul>
      </div>
    )
  }
}
