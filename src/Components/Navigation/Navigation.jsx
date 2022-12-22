import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <div>
      <nav>
        <NavLink to="/" className="lien-nav">
          Accueil
        </NavLink>
        <NavLink to="/competences" className="lien-nav">
          Compétences
        </NavLink>
        <NavLink to="/portfolio" className="lien-nav">
          Portfolio
        </NavLink>
        <NavLink to="/contact" className="lien-nav">
          Contact
        </NavLink>
      </nav>
    </div>
  );
};

export default Navigation;
