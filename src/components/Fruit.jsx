import React from "react";
import "./styles/Fruit.css"; // Assuming you have a CSS file for styling
export default function Fruit(props) {
  return (
    <div>
      <div className="App6-Box">{props.name}</div>
    </div>
  );
}