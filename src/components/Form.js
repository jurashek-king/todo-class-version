import React, { Component } from "react";

class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
            todoName: "",
        };
        this.onChangeHandler = this.onChangeHandler.bind(this);
        this.onSubmitHandler = this.onSubmitHandler.bind(this);
    }

    onChangeHandler(event) {
        this.setState({todoName: event.target.value});
    }

    onSubmitHandler(event) {
        event.preventDefault();
        if(this.state.todoName !== "") {
            this.props.onSubmit(this.state.todoName);
            this.setState({todoName: ""});
        }
        return;
    }
    

  render() {
    return (
      <form onSubmit={this.onSubmitHandler}>
        <input value={this.state.todoName} onChange={this.onChangeHandler} type="text" className="todo-input" />
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
