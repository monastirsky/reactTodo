import React from "react";
import List from "./List.jsx";
import InputForm from "./InputForm.jsx";
import Footer from "./Footer.jsx";
import Search from "./Search";

class App extends React.Component {
  state = {
    todo: [],
    show: "all",
    search: "",
  };

  deletElement = (id) => {
    const todo = this.state.todo.filter((element) => element.id !== id);
    this.setState({
      todo,
    });
  };

  chengeStatus = (id) => {
    const newState = this.state.todo.map((element) => {
      if (element.id === id) {
        element.status = !element.status;
      }
      return element;
    });
    this.setState({
      todo: [...newState],
    });
  };

  chengeShow = (event) => {
    this.setState({
      show: event.target.value,
    });
  };

  addTodo = ({ ...element }) => {
    const todo = [...this.state.todo, element];
    this.setState({
      todo,
    });
  };

  sendTodo = () => {
    if (this.state.show === "all") {
      return this.state.todo.filter((element) =>
        element.task.includes(this.state.search)
      );
    } else if (this.state.show === "checked") {
      return this.state.todo
        .filter((element) => element.status)
        .filter((element) => element.task.includes(this.state.search));
    } else {
      return this.state.todo
        .filter((element) => !element.status)
        .filter((element) => element.task.includes(this.state.search));
    }
  };

  setSearch = (text) => {
    this.setState({
      search: text.trim(),
    });
  };

  render() {
    return (
      <div className="App container">
        <h1 className="center blue-text">toDo</h1>
        <InputForm addTodo={this.addTodo} />
        <List
          sendTodo={this.sendTodo}
          deletElement={this.deletElement}
          chengeStatus={this.chengeStatus}
        />
        <Footer
          todo={this.state.todo}
          chengeShow={this.chengeShow}
          show={this.state.show}
        />
        <Search setSearch={this.setSearch} />
      </div>
    );
  }
}

export default App;
