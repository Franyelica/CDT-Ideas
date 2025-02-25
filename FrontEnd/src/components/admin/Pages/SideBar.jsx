import React, { useState } from "react";
import MenuList from "./MenuList";
import NewLogo from "../../../images/logo2.png";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import "../css/StyleSideBar.css";
import Logo from "./Logo";
const SideBar = () => {
  const [isOpen, setIsOpen] = useState();
  const toggle = () => setIsOpen(!isOpen);
  return (
    <div className="sidebar-container">
      <div className="sidebar-toggle" onClick={toggle}>
        {isOpen ? <IoIosArrowBack /> :
          <IoIosArrowForward />}
      </div>

      <div className={isOpen ? "sidebaropen" : "sidebar"}>
        <div className="sidebar--logo">
          <Logo />
          {/*<img src="../src/images/logo.png" alt="" />*/}
          <MenuList />
        </div>
      </div>
    </div>
  )
}
export default SideBar