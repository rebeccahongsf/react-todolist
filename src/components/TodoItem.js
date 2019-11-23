import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { ReactComponent as Hamburger } from "../hamburger.svg";

import '../App.css';

export class TodoItem extends Component {
  getStyle = () => {
    return {
      position: 'relative',
      backgroundColor: '#ccc',
      padding: '10px',
      borderBottom: '1px #333 dotted',
      textDecoration: this.props.todo.completed ? 'line-through' : 'none'
    }
  }
  
  render() {
    const { id, title } = this.props.todo;
    return (
      <div style={this.getStyle()}>
        <Hamburger />
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
  margin: '0px 10px',
  borderRadius: '5px',
  cursor: 'pointer',
  position: 'absolute',
  right: '0',
  fontSize: '0.5em',
  textDecoration: 'none'
}

export default TodoItem;
