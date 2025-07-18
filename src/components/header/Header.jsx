import React from "react";
import "./header.css";
import useTheme from "../../hooks/useTheme";

import { LuSquareDashedBottomCode } from "react-icons/lu";
import { BiHomeAlt } from "react-icons/bi";
import { TbUserCircle } from "react-icons/tb";
import { TbMessage2 } from "react-icons/tb";
import { LuSunMedium } from "react-icons/lu";
import { PiMoonStarsFill } from "react-icons/pi";

const navItems = [
  { href: "#home", icon: <BiHomeAlt />, label: "Home" },
  { href: "#about", icon: <TbUserCircle />, label: "About" },
  { href: "#portfolio", icon: <LuSquareDashedBottomCode />, label: "Projects" },
  { href: "#contact", icon: <TbMessage2 />, label: "Contact" },
];

const Header = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <nav className="navbar" aria-label="Main navigation">
      {navItems.map((item) => (
        <div className="nav-item" key={item.href}>
          <a href={item.href} aria-label={item.label} className="icon-link">
            {item.icon}
          </a>
          <span className="nav-label">{item.label}</span>
        </div>
      ))}

      {/* Theme Toggle Button */}
      <div className="nav-item">
        <button
          onClick={toggleTheme}
          className="icon-link theme-toggle"
          aria-label={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
        >
          {/* Conditionally render the correct icon based on the current theme */}
          {theme === "light" ? <LuSunMedium /> : <PiMoonStarsFill />}
        </button>
        <span className="nav-label">Theme</span>
      </div>
    </nav>
  );
};

export default Header;
