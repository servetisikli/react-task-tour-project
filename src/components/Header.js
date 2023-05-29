import React from "react";
import Button from "./Button";

const Header = ({ title = "Task Tracker" }) => {
  const handleClick = () => {
    console.log("Click with handleClick");
  };

  return (
    <header className="header">
      <h1>{title}</h1>
      <Button color="red" text="Show Add Task Bar" handleClick={handleClick} />
    </header>
  );
};

export default Header;
