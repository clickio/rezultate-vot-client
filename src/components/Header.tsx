import React from "react";
import { NavLink } from "react-router-dom";
import { NavHashLink } from "react-router-hash-link";
import classes from "./Header.module.scss";
import { Logo } from "./Logo";

export const Header: React.FC = () => {
  return (
    <>
      <div className={classes.root}>
        <Logo className={classes.logo} homeLink />
        <div className={classes.separator} />
        <NavLink to="/elections" className={classes.navLink} activeClassName={classes.navLinkActive}>
          Date alegeri
        </NavLink>
        <NavHashLink to="/elections#live-newsfeed" className={classes.navLink} activeClassName={classes.navLinkActive}>
          Live newsfeed
        </NavHashLink>
        <NavLink to="/about" exact className={classes.navLink} activeClassName={classes.navLinkActive}>
          Despre proiect
        </NavLink>
        <a href="https://code4.ro/ro/doneaza/" target="_blank" rel="noreferrer noopener" className={classes.navLink}>
          <button type="button" className={classes.donateButton}>
            Donează
          </button>
        </a>
      </div>
      <div className={classes.contentPadding} />
    </>
  );
};
