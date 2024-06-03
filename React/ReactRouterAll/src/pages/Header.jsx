import React from "react";
import Home from "./Home";
import Products from "./Products";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
  // <Link to="?" replace /> 可以讓瀏覽器不紀錄在這個網頁的history，阻止登入後又回到登入頁面
  // Link裡面也可以傳State
  // NavLink：就是一個Link，一個會有style的Link
  // className都不寫的話，當點到他時會預設給active class

  return (
    <nav>
      <span>
        <Link to="/">Home</Link> |
        <Link to="/products" state={{ name: "Cuni" }}>
          {" "}
          Products{" "}
        </Link>
        |{" "}
        <NavLink
          to="/products/features"
          className={({ isActive }) => (isActive ? "myActiveStyle" : undefined)}
        >
          Features
        </NavLink>{" "}
        |<Link to="/dashboard"> Dashboard </Link>|
        <Link to="/account"> Account </Link> |
      </span>
    </nav>
  );
};

export default Header;
