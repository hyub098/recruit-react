import React, { useState } from "react";
import "./Header.css";
import { AiOutlineMenu, AiOutlineArrowLeft } from "react-icons/ai";
import { IconContext } from "react-icons";

const Header: React.FC = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenuIcon = () => {
    setShowMenu(!showMenu);
  };

  return (
    <div className="header-container">
      <IconContext.Provider value={{ className: "menuIcon" }}>
        <div className="iconContainer">
          <div onClick={toggleMenuIcon}>
            {showMenu ? <AiOutlineMenu /> : <AiOutlineArrowLeft />}
          </div>
        </div>
      </IconContext.Provider>
      <h2>{showMenu ? "Register card form" : "Menu"}</h2>
    </div>
  );
};

export default Header;
