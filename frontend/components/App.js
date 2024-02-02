import React from 'react';
import TodoList from './TodoList';
import Form from './Form';

export default class App extends React.Component {
  constructor() {
    super()
    this.state = {
      todos: [
        {
          name: 'Walk the dog',
          id: 1528817077286, // could look different, you could use a timestamp to generate it
          completed: true
        },
        {
          name: 'Learn React',
          id: 1528817084358,
          completed: false
        },
        {
          name: 'Have fun',
          id: 1528817084359,
          completed: false
        }
      ],
      newToDo: {
        name: '',
        id: new Date().getTime(),
        completed: false
      },
      showingCompleted: true
    }
  }

  updateTodoName = (e) => {
    this.setState({ newToDo: { name: e.target.value } })
  }

  addTodo = () => {
    this.setState({ todos: [...this.state.todos, this.state.newToDo] });
    // this.setState({ newToDo: { name: '' }});
  }

  filterTodos = () => {
    this.setState({ 
      showingCompleted: !this.state.showingCompleted,
      todos: this.state.todos.filter(todo => {
        this.state.showingCompleted ? todo : !todo.completed
      })
    });
  }

  // toggleCompleted = (e) => {
  //   this.setState({ todos: this.state.todos.map(todo => {
  //     (todo.id === e.target.key) ? todo.completed === !todo.completed : todo
  //   })})
  // }

  render() {
    return (
      <div>
        <TodoList todos={this.state.todos} toggleCompleted={this.toggleCompleted} />
        <Form updateTodoName={this.updateTodoName} todoName={this.state.newToDo.name} addTodo={this.addTodo} />
        <button onClick={this.filterTodos}>{this.state.showingCompleted ? "Hide" : "Show"} Completed</button>
      </div>
    )
  }
}