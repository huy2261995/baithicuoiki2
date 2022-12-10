import React, { Component } from "react";

export default class TaskItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      task: this.props.taskItem.task,
      isEditing: false,
    };
  }
  toggleTask = () => {
    this.props.toggleTask(this.props.id);
  };
  deleteTask = () => {
    this.props.deleteTask(this.props.id);
  };

  render() {
    return (
      <tr>
        <>
          <td className="task" onClick={this.toggleTask}>
            <input
              type="checkbox"
              readOnly
              checked={this.props.taskItem.isCompleted}
            />
            <span
              className={
                this.props.taskItem.isCompleted ? "completed" : "not-completed"
              }>
              {this.props.taskItem.task}
            </span>
          </td>
          <td>
            <button className="delete" onClick={this.deleteTask}>
              Delete
            </button>
          </td>
        </>
      </tr>
    );
  }
}
