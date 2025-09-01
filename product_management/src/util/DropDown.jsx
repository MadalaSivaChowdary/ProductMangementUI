// Dropdown.jsx
import React, { useState } from "react";
import { Link, NavLink } from "react-router";

const Dropdown = ({ label, items,open,setOpen}) => {


  return (
    <div style={{ position: "relative", display: "inline-block" }}>
      {/* Trigger button */}
      <button onClick={() => setOpen(!open)} style={{ padding: "0px 10px", }}>
        {label + "▼"} 
      </button>

      {/* Dropdown list */}
      {open && (
        <ul
          style={{
            position: "absolute",
            top: "100%",
            border: "none",
            
            left: 30,
            color: "white",
            boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
            listStyle: "none",
            margin: 0,
           padding: "10 px"
          }}
        >
          {items.map((item, index) => (
            <li key={index} style={{ marginBottom: "8px" }}>
              <a href={item.link} style={{ textDecoration: "none", color: "#333" }}>
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Dropdown;