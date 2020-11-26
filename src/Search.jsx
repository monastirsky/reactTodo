import React from "react";

export default function Search({ setSearch }) {
  const handleChange = (event) => {
    setSearch(event.target.value);
  };
  return (
    <div>
      <input type="text" onChange={handleChange} />
    </div>
  );
}
