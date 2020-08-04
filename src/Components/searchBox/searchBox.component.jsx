import React from "react";
import "./searchBox.style.css";

export const Searchbox = ({ placeholder, handleChange }) => (
  <div>
    <input
      className="search"
      type="Search"
      placeholder={placeholder}
      onChange={handleChange}
    ></input>
  </div>
);
