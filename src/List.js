import React, { useState } from "react";

const List = ({ todo, deletElement, chengeStatus }) => {
  return todo.length ? (
    <div className="todos collection">
      {todo.map((element) => {
        return (
          <div
            className={"collection-item" + (element.status ? " done" : "")}
            key={element.key}
            onClick={() => chengeStatus(element.key)}
          >
            <span>{element.task} </span>
            <button
              className="right"
              onClick={() => {
                deletElement(element.key);
              }}
            >
              Delete
            </button>
          </div>
        );
      })}
    </div>
  ) : (
    /* <div>
        Task lest:{" "}
        {todo.filter((element) => !element.className.includes("done")).length}
      </div> */
    <p className="center">No tasks for today</p>
  );
};
export default List;
