import React from "react";
import { Link } from "react-router-dom";
import style from "./index.module.scss";

const links = [
  { name: "Home", path: "/" },
  { name: "Cart", path: "/cart" },
];

const Navbar = () => {
  return (
    <nav className={style.container}>
      {links.map((link) => (
        <Link key={link} to={link.path} className={style.navLink}>
          <span className={style.notificationDot}></span>
          <button className={style.customButton}>
            <span className={style.button_top}> {link.name} </span>
          </button>
        </Link>
      ))}
    </nav>
  );
};

export default Navbar;
