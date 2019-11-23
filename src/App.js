import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Todos from './components/Todos';
import AddTodo from './components/AddTodo';
import Header from './components/layout/Header'
import About from './components/pages/About'
import uuid from 'uuid';

import './App.css';

class App extends Component {
  state = {
    todos: [
      {
        id: uuid.v4(),
        title: 'Exchange money at Gringotts.',
        completed: false
      },
      {
        id: uuid.v4(),
        title: 'Meet Hagrid at the Three Broomsticks.',
        completed: false
      },
      {
        id: uuid.v4(),
        title: 'Buy a wand.',
        completed: false
      },
      {
        id: uuid.v4(),
        title: 'Eat at the Leaky Cauldron.',
        completed: false
      },
      {
        id: uuid.v4(),
        title: 'Drink butterbeer.',
        completed: false
      },
      {
        id: uuid.v4(),
        title: 'Buy candy at Honeydukes for Ron.',
        completed: false
      },
      {
        id: uuid.v4(),
        title: 'Get ice cream at Florean Fortescue.',
        completed: false
      }
    ]
  }
  
  // Toggle Complete
  markComplete = (id) => {
    this.setState({ todos: this.state.todos.map((todo) => {
      if(todo.id === id) {
        todo.completed = !todo.completed
      }
      return todo;
    }) });
  }
  
  // Delete Todo 
  delTodo = (id) => {
    this.setState({ todos: [...this.state.todos.filter(todo => todo.id !== id)] });
  }
  
  // Add Todo
  addTodo = (title) => {
      const newTodo = {
        id: uuid.v4(),
        title: title,
        completed: false
      }
      this.setState({ todos: [...this.state.todos, newTodo] });    
  }
  
  render() {
    return (
      <Router>
        <div className="App">
          <div className="container">
            <Header />
            <Route exact path="/react-todolist/" render={() => (
              <React.Fragment>
                <AddTodo addTodo={this.addTodo} />
                <Todos todos={this.state.todos} markComplete={this.markComplete} delTodo={this.delTodo} />
              </React.Fragment>
            )} />
            <Route path="/react-todolist/about" component={About} />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
