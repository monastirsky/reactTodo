import React from "react";

export default function Footer({ todo, chengeShow, show }) {
  return todo.length ? (
    <div>
      <div>
        <p>Task left: {todo.filter((element) => !element.status).length}</p>
      </div>
      <div className="center">
        <label>
          <input
            type="radio"
            name="show-status"
            value="all"
            onChange={chengeShow}
            checked={show === "all" && true}
          />
          <span className="">All</span>
        </label>
        <label>
          <input
            type="radio"
            name="show-status"
            value="checked"
            onChange={chengeShow}
            checked={show === "checked" && true}
          />
          <span className="">Checked</span>
        </label>
        <label>
          <input
            type="radio"
            name="show-status"
            value="unchecked"
            onChange={chengeShow}
            checked={show === "unchecked" && true}
          />
          <span className="">Unchecked</span>
        </label>
      </div>
    </div>
  ) : (
    ""
  );
}
