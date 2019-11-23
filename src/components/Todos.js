import React, { Component } from 'react';
import TodoItem from './TodoItem';
import PropTypes from 'prop-types';
import Dragula from 'react-dragula';

class Todos extends Component {  
  dragulaDecorator = (componentBackingInstance) => {
    if (componentBackingInstance) {
      let options = { };
      Dragula([componentBackingInstance], options);
    }
  };
  
  render() {
    return (
      <div
        className='container' 
        ref={this.dragulaDecorator}
      >
        {this.props.todos.map((todo) => (
        
          <TodoItem
            key={todo.id} 
            todo={todo} 
            markComplete={this.props.markComplete} 
            delTodo={this.props.delTodo} />
          ))}
      </div>
    )
  }
}

// PropTypes
Todos.propTypes = {
  todos: PropTypes.array.isRequired,
  markComplete: PropTypes.func.isRequired,
  delTodo: PropTypes.func.isRequired
}

export default Todos;
