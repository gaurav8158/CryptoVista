import { Switch } from "@mui/material";
import React, { useContext, useState } from "react";
import "./style.css";
import TemporaryDrawer from "./Drawer";
import Button from "../Button/Button";
import { Link } from "react-router-dom";
import themeContext from "../../../Contaxt/themeContext";

const Header = () => {
  const label = { inputProps: { "aria-label": "Switch demo" } };
  const { theme, setTheme, toggleTheme } = useContext(themeContext);
  window.addEventListener("scroll", () => {
    let header = document.querySelector("nav");
    if (window.scrollY > 0) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }
  });
  console.log(theme);
  return (
    <nav className="header">
      <Link to="/">
        <h1 className="logo" style={{ color: "var(--blue)" }}>
        CryptoVista
        </h1>
      </Link>
      <div className="links">
        <Switch onClick={toggleTheme} {...label} defaultChecked />
        <Link to="/">
          <p className="Link">Home</p>
        </Link>
        <Link to="/compare">
          <p className="Link">Compare</p>
        </Link>
        <Link to="/watchlist">
          <p className="Link">Watchlist</p>
        </Link>
        <Link to="/dashboard">
          <p className="Link">
            <Button text="Dashboard" />
          </p>
        </Link>
      </div>
      <div className="drawer-menu">
        <TemporaryDrawer />
      </div>
    </nav>
  );
};

export default Header;
