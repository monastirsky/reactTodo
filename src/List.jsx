import React, { useState } from "react";

const List = ({ sendTodo, deletElement, chengeStatus, chengeShow }) => {
  const todo = sendTodo();
  return todo.length ? (
    <div className="todos collection">
      {todo.map((element) => {
        return (
          <div className={"collection-item"} key={element.id}>
            <label>
              <input
                className="checkbox"
                type="checkbox"
                onChange={() => chengeStatus(element.id)}
                checked={element.status}
              />
              <span className={"black-text" + (element.status ? " done" : "")}>
                {element.task}{" "}
              </span>
            </label>

            <button
              className="right"
              onClick={() => {
                deletElement(element.id);
              }}
            >
              Delete
            </button>
          </div>
        );
      })}
    </div>
  ) : (
    <p className="center">No tasks</p>
  );
};
export default List;
