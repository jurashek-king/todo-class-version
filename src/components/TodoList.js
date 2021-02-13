import { Component } from "react";
import Todo from "./Todo";

class TodoList extends Component {
    render() {
        return (
            <div className="todo-container">
                <ul className="todo-list">
                <Todo />
                <Todo />
                </ul>
            </div>
        )
    }
}

export default TodoList;