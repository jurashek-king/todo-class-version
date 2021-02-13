import React, {Component} from "react";

class Todo extends Component {
    render() {
        return (
            <div className="todo">
                <li className="todo-item">TEST</li>
                <button className="complete-btn">
                    <i className="fas fa-check"></i>
                </button>
                <button className="trash-btn">
                    <i className="fas fa-trash"></i>
                </button>
            </div>
        )
    }
}
export default Todo;