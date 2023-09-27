import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

const Card = ({ name, image, description, icon, lien }) => {
  const idCard = `${name}`;

  return (
    <div className="card" id={idCard}>
      <img src={image} alt="Projet" className="card__img" />
      <div className="card__info">
        <h1 className="card__name">{name}</h1>
        <div className="card__icon">{icon}</div>
        <p className="card__description">{description}</p>
        <a className="card__lien" href={lien}>
          <FontAwesomeIcon icon={faGithub} className="lien-button" />
        </a>
      </div>
    </div>
  );
};

export default Card;
