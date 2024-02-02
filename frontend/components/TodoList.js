import React from 'react';
import Todo from './Todo';

export default class TodoList extends React.Component {
  render() {
    return (
      <div>
        <h1>Todos:</h1>
        <ul>
          {this.props.todos.map(todo => {
            return (
              <Todo key={todo.id} todo={todo} toggleCompleted={this.props.toggleCompleted}/>
            )
          })}
        </ul>
      </div>
    )
  }
}
