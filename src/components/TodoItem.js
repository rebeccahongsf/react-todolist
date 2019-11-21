import React, { Component } from 'react';
import PropTypes from 'prop-types';

import '../App.css';

export class TodoItem extends Component {
  getStyle = () => {
    return {
      backgroundColor: '#eee',
      padding: '10px',
      borderBottom: '1px #333 dotted',
      textDecoration: this.props.todo.completed ? 'line-through' : 'none'
    }
  }
  
  render() {
    const { id, title } = this.props.todo;
    return (
      <div style={this.getStyle()}>
        <span onClick={this.props.markComplete.bind(title, id)}>
          {' '} 
          { title }
        </span>
        <button onClick={this.props.delTodo.bind(this, id)} style={btnStyle}>DEL</button>
      </div>
    )
  }
}

// PropTypes
TodoItem.propTypes = {
  todos: PropTypes.array.isRequired,
  markComplete: PropTypes.func.isRequired,
  delTodo: PropTypes.func.isRequired
}

const btnStyle = {
  background: '#bf4348',
  color: '#fff',
  border: 'none',
  padding: '7px 20px',
  borderRadius: '5px',
  cursor: 'pointer',
  float: 'right',
  fontSize: '0.5em',
  textDecoration: 'none'
}

export default TodoItem;
