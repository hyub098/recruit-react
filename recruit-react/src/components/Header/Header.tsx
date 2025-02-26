import { FC, useState } from "react";
import "./Header.css";
import { AiOutlineMenu, AiOutlineArrowLeft } from "react-icons/ai";
import { IconContext } from "react-icons";

type HeaderProps = {
  pageHandler: (value: boolean) => void;
};

const Header: FC<HeaderProps> = ({ pageHandler }) => {
  const [showMenu, setShowMenu] = useState(true);

  const toggleMenuIcon = () => {
    const newValue = !showMenu;
    setShowMenu(newValue);
    pageHandler(newValue);
  };

  return (
    <div className="header-container">
      <IconContext.Provider value={{ className: "menuIcon" }}>
        <div className="iconContainer">
          <div
            data-testid="menu-button"
            onClick={toggleMenuIcon}
            aria-label="Menu button"
          >
            {showMenu ? <AiOutlineMenu /> : <AiOutlineArrowLeft />}
          </div>
        </div>
      </IconContext.Provider>
      <h2>{showMenu ? "Register card form" : "Menu"}</h2>
    </div>
  );
};

export default Header;
