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

  handleSubmit = (event) => {
    event.preventDefault();
    if (this.state.task.trim()) {
      this.props.addTodo(this.state);
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
