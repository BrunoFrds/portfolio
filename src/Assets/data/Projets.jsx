import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHtml5,
  faCss3,
  faJs,
  faReact,
  faNodeJs,
  faSass,
} from "@fortawesome/free-brands-svg-icons";
import projImgOmf from "../images/Ohmyfood.png";
import projImgKanap from "../images/Kanap.png";
import projImgPiq from "../images/Piiquante.png";
import projImgKasa from "../images/Kasa.png";

const html = <FontAwesomeIcon icon={faHtml5} />;
const css = <FontAwesomeIcon icon={faCss3} />;
const sass = <FontAwesomeIcon icon={faSass} />;
const javascript = <FontAwesomeIcon icon={faJs} />;
const react = <FontAwesomeIcon icon={faReact} />;
const node = <FontAwesomeIcon icon={faNodeJs} />;

console.log(html);
const ListeProjet = [
  {
    id: "1",
    name: "Ohmyfood",
    languages: ["HTML", "CSS / Sass"],
    languagesIcons: [html, sass],
    github: "https://github.com/BrunoFrds/BrunoFrds.github.io.git",
    picture: projImgOmf,
    description:
      "Mise en place de l'environnement frontend d'un site mobile de réservation de restaurants. Avec structure de navigation et effets CSS graphiques.",
  },
  {
    id: "2",
    name: "Kanap",
    languages: ["JavaScript"],
    languagesIcons: [javascript],
    github: "https://github.com/BrunoFrds/Kanap.git",
    picture: projImgKanap,
    description:
      "Mise en place du front-end d'un site e-commerce pour une entreprise de vente de canapés. Le site devant être responsive.",
  },
  {
    id: "3",
    name: "Kasa",
    languages: ["JavaScript", "ReactJS"],
    languagesIcons: [javascript, react, css],
    github: "https://github.com/BrunoFrds/Kasa.git",
    picture: projImgKasa,
    description:
      "Création d'un site immobilier en ReactJS. Suivi d'une maquette figma pour le visuel.",
  },
  {
    id: "4",
    name: "Piiquante",
    languages: ["NodeJS", "ExpressJS", "MongoDB"],
    languagesIcons: [node],
    github: "https://github.com/BrunoFrds/Piquante.git",
    picture: projImgPiq,
    description:
      "Création d'une API sécurisée pour un site de notation et de vente de sauces piquantes.",
  },
];

export default ListeProjet;
