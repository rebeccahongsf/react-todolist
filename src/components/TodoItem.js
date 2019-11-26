import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { ReactComponent as Grip } from "../assets/grip.svg";
import { ReactComponent as X } from "../assets/x.svg";

import '../App.css';

export class TodoItem extends Component {
  getStyle = () => {
    return {
      position: 'relative',
      backgroundColor: '#ccc',
      padding: '10px',
      borderBottom: '1px #333 dotted',
      userSelect: 'none',
      textDecoration: this.props.todo.completed ? 'line-through' : 'none'
    }
  }
  
  render() {
    const { id, title } = this.props.todo;
    return (
      <div style={this.getStyle()}>
        <Grip className='gripStyle' />
        <span onClick={this.props.markComplete.bind(title, id)}>
          {' '} 
          { title }
        </span>
        <span onClick={this.props.delTodo.bind(this, id)} className='delStyle'>
          <X />
        </span>
      </div>
    )
  }
}

// PropTypes
TodoItem.propTypes = {
  todo: PropTypes.object.isRequired,
  markComplete: PropTypes.func.isRequired,
  delTodo: PropTypes.func.isRequired
}

// const btnStyle = {
//   cursor: 'pointer',
//   float: 'right',
//   position: 'absolute',
//   right: '0',
//   margin: '0 10px',
//   textDecoration: 'none'
// }

export default TodoItem;
