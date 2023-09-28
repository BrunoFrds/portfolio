import { useState } from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const burger = <FontAwesomeIcon icon={faBars} />;

const Navigation = () => {
  const [menu, setMenu] = useState(false);

  const handleMenu = () => {
    setMenu(!menu);
  };

  const closeMenu = () => {
    setMenu(false);
  };

  return (
    <nav className={`navbar ${menu ? "show-nav" : "hide-nav"}`}>
      <h1 className="title">
        <span className="title__name">Bruno</span> Fernandes
      </h1>
      <ul className="navbar__links">
        <li className="navbar__item slide-1">
          <NavLink to="/" className="navbar__link" onClick={closeMenu}>
            Accueil
          </NavLink>
        </li>
        <li className="navbar__item slide-2">
          <NavLink
            to="/competences"
            className="navbar__link"
            onClick={closeMenu}
          >
            Compétences
          </NavLink>
        </li>
        <li className="navbar__item slide-3">
          <NavLink to="/portfolio" className="navbar__link" onClick={closeMenu}>
            Portfolio
          </NavLink>
        </li>
        <li className="navbar__item slide-4">
          <NavLink to="/contact" className="navbar__link" onClick={closeMenu}>
            Contact
          </NavLink>
        </li>
      </ul>
      <button className="navbar__burger" onClick={handleMenu}>
        <span className="burger-bar">{burger}</span>
      </button>
    </nav>
  );
};

export default Navigation;
