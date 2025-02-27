import { useState } from "react";
import { NavLink } from "react-router-dom";
import styles from "./Header.module.css";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navs = ["About", "Projects", "Experience", "Contact"];

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <nav>
          <div className={styles.logo}>
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? styles.active : "")}
            >
              CF
            </NavLink>
          </div>

          {/* Hamburger Icon */}
          <button
            className={styles.hamburger}
            onClick={() => setIsOpen(!isOpen)}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>

          {/* Navigation Menu */}
          <ul className={`${styles.navLinks} ${isOpen ? styles.open : ""}`}>
            {navs.map((link) => (
              <li key={link}>
                <NavLink
                  to={`/${link.toLowerCase()}`}
                  className={({ isActive }) => (isActive ? styles.active : "")}
                  onClick={() => setIsOpen(false)}
                >
                  {link}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
