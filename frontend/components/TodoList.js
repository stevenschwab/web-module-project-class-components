import React from 'react';
import Todo from './Todo';

export default class TodoList extends React.Component {
  render() {
    return (
      <div id='todos'>
        <h1>Todos:</h1>
        <ul>
          {this.props.todos.map(todo => (
            <Todo toggleTodo={this.props.toggleTodo} key={todo.id} todo={todo} />
          ))}
        </ul>
      </div>
    )
  }
}
