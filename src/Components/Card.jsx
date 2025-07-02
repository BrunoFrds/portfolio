import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import Slider from "./Slider";

const Card = ({ name, image, description, icon, lien, url }) => {
  const idCard = `${name}`;

  return (
    <div className="card" id={idCard}>
      <Slider images={image} />
      <div className="card__info">
        <p className="card__name">{name}</p>
        <div className="card__icons">
          {icon.map((ic, index) => (
            <img key={index} src={ic} alt={`icon-${index}`} />
          ))}
        </div>
        <p className="card__description">{description}</p>
        <a className="card__lien" href={lien} target="_blank" rel="noreferrer">
          <FontAwesomeIcon icon={faGithub} className="lien-button" />
        </a>
      </div>
    </div>
  );
};

export default Card;
