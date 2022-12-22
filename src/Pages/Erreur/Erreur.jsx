import { NavLink } from "react-router-dom";

const Erreur = () => {
  return (
    <div className="error-page">
      <h1 className="error">404</h1>
      <p className="alert">Oups! La page que vous demandez n'éxiste pas.</p>
      <NavLink to="/" className="redirection">
        Retour vers l'accueil
      </NavLink>
    </div>
  );
};

export default Erreur;
