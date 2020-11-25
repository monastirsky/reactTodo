import React, { useState } from "react";
import List from "./List";
import InputForm from "./InputForm";

class App extends React.Component {
  state = {
    todo: [],
  };

  escapeCode = (text) =>
    String(text)
      .trim()
      .replace(/&/gu, "&amp;")
      .replace(/</gu, "&lt;")
      .replace(/>/gu, "&gt;")
      .replace(/"/gu, "&quot;")
      .replace(/'/gu, "&#039;");

  deletElement = (key) => {
    const todo = this.state.todo.filter((element) => element.key !== key);
    this.setState({
      todo,
    });
  };

  chengeStatus = (key) => {
    const newState = this.state.todo.map((element) => {
      if (element.key === key) {
        element.status = !element.status;
      }
      return element;
    });
    this.setState({
      todo: [...newState],
    });
  };

  addTodo = ({ ...element }) => {
    element.key = Math.random();
    element.text = this.escapeCode(element.text);
    element.status = false;
    const todo = [...this.state.todo, element];
    this.setState({
      todo,
    });
  };
  render() {
    return (
      <div className="App container">
        <h1 className="center blue-text">toDo</h1>
        <InputForm addTodo={this.addTodo}></InputForm>
        <List
          todo={this.state.todo}
          deletElement={this.deletElement}
          chengeStatus={this.chengeStatus}
        />
      </div>
    );
  }
}

export default App;
