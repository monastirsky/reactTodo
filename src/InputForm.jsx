import React from "react";

class InputForm extends React.Component {
  state = {
    task: "",
  };

  handleChange = (event) => {
    this.setState({
      task: event.target.value,
    });
  };

  escapeCode = (text) =>
    String(text)
      .trim()
      .replace(/&/gu, "&amp;")
      .replace(/</gu, "&lt;")
      .replace(/>/gu, "&gt;")
      .replace(/"/gu, "&quot;")
      .replace(/'/gu, "&#039;");

  handleSubmit = (event) => {
    event.preventDefault();
    const todo = {};
    todo.task = this.escapeCode(this.state.task);
    todo.id = Math.random();
    todo.status = false;
    if (this.state.task.trim()) {
      this.props.addTodo(todo);
      this.setState({
        task: "",
      });
    }
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          onChange={this.handleChange}
          placeholder="Add new todo: "
          value={this.state.task}
        />
      </form>
    );
  }
}

export default InputForm;
