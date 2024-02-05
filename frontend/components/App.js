import React from 'react';
import TodoList from './TodoList';
import Form from './Form';

export default class App extends React.Component {
  constructor() {
    super()
    this.state = {
      todos: [],
      todoName: '',
      showingCompleted: true
    }
  }

  handleChanges = e => {
    e.preventDefault();
    this.setState({...this.state, todoName: e.target.value});
  }

  addTodo = e => {
    e.preventDefault();
    const newTodo = {
      name: this.state.todoName,
      id: Date.now(),
      completed: false
    }
    this.setState({...this.state, todos: [...this.state.todos, newTodo], todoName: ''});
  }

  filterTodos = () => {
    this.setState({...this.state, showingCompleted: !this.state.showingCompleted})
  }

  toggleTodo = todoId => {
    this.setState({...this.state, todos: this.state.todos.map(todo => {
      if (todo.id === todoId) {
        return {...todo, completed: !todo.completed}
      }
      return todo;
    })})
  }

  render() {
    const filteredTodos = this.state.showingCompleted
      ? this.state.todos
      : this.state.todos.filter(todo => !todo.completed);
    
    return (
      <div>
        <TodoList todos={filteredTodos} toggleTodo={this.toggleTodo} />
        <Form handleChanges={this.handleChanges} todoName={this.state.todoName} addTodo={this.addTodo} />
        <button onClick={this.filterTodos}>{this.state.showingCompleted ? "Hide" : "Show"} Completed</button>
      </div>
    )
  }
}