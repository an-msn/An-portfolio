import React from "react";
import "./header.css";
import { LuSquareDashedBottomCode } from "react-icons/lu";
import { BiHomeAlt } from "react-icons/bi";
import { TbUserCircle } from "react-icons/tb";
import { TbMessage2 } from "react-icons/tb";

const navItems = [
  { href: "#home", icon: <BiHomeAlt />, label: "Home" },
  { href: "#about", icon: <TbUserCircle />, label: "About" },
  { href: "#portfolio", icon: <LuSquareDashedBottomCode />, label: "Projects" },
  { href: "#contact", icon: <TbMessage2 />, label: "Contact" },
];

const Navbar = () => {
  return (
    <div className="navbar">
      {navItems.map((item) => (
        <div className="nav-item" key={item.href}>
          <a href={item.href} aria-label={item.label} className="icon-link">
            {item.icon}
          </a>
          <span className="nav-label">{item.label}</span>
        </div>
      ))}
    </div>
  );
};

export default Navbar;
