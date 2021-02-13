import React, { Component } from "react";

class Form extends Component {
  render() {
    return (
      <form>
        <input type="text" className="todo-input"></input>
        <button type="submit" className="todo-button">
          <i className="fas fa-plus-square"></i>
        </button>
        <div className="select">
          <select name="todos" className="filter-todo">
            <option value="all">All</option>
            <option value="completed">Completed</option>
            <option value="uncompleted">Uncompleted</option>
          </select>
        </div>
      </form>
    );
  }
}

export default Form;