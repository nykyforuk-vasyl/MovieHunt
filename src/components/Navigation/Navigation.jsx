import { NavLink } from "react-router-dom";
import clsx from "clsx";
import s from "./Navigation.module.css";

const Navigation = () => {
  const buildLinkClass = ({ isActive }) => {
    return clsx(s.link, isActive && s.activeLink);
  };

  return (
    <header className={s.header}>
      <NavLink className={buildLinkClass} to="/">
        HOME
      </NavLink>
      <NavLink className={buildLinkClass} to="/movies">
        MOVIES
      </NavLink>
    </header>
  );
};

export default Navigation;
