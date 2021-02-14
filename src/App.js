import React, { Component } from "react";
import "./App.css";
import Form from "./components/Form";
import TodoList from "./components/TodoList";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      allTodos: [],
    };
    this.addTodoHandler = this.addTodoHandler.bind(this);
  }

  addTodoHandler(todoText) {
    this.setState((state) => {
      return {
        allTodos: [...this.state.allTodos, { todo: todoText, completed: false, id: Date.now() },
        ],
      };
    });
  }

  render() {
    return (
      <div className="App">
        <Form onSubmit={this.addTodoHandler} />
        <TodoList />
      </div>
    );
  }
}

export default App;