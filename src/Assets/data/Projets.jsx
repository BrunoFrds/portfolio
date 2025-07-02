import projImgKasa1 from "../images/Kasa/kasa01.png";
import projImgKasa2 from "../images/Kasa/kasa02.png";
import projImgKasa3 from "../images/Kasa/kasa03.png";
import projImgKasa4 from "../images/Kasa/kasa04.png";
import projImgBnb1 from "../images/DreamBnB/dreambnb01.png";
import projImgBnb2 from "../images/DreamBnB/dreambnb02.png";
import projImgBnb3 from "../images/DreamBnB/dreambnb03.png";
import projImgBnb4 from "../images/DreamBnB/dreambnb04.png";
import projImgBnb5 from "../images/DreamBnB/dreambnb05.png";
import projImgBnb6 from "../images/DreamBnB/dreambnb06.png";
import projImgGusto1 from "../images/Gusto/gusto01.png";
import projImgGusto2 from "../images/Gusto/gusto02.png";
import projImgGusto3 from "../images/Gusto/gusto03.png";
import projImgGusto4 from "../images/Gusto/gusto04.png";
import projImgGusto5 from "../images/Gusto/gusto05.png";
import projImgGusto6 from "../images/Gusto/gusto06.png";
import projImgGusto7 from "../images/Gusto/gusto07.png";
import projImgGusto8 from "../images/Gusto/gusto08.png";
import projImgGusto9 from "../images/Gusto/gusto09.png";
import projImgMyFlix from "../images/MyflixScreen.png";

import iconReact from "../logos/icons8-react-native-48.png";
import iconRails from "../logos/icons8-ruby-on-rails-48.png";
import iconJavascript from "../logos/icons8-javascript-48.png";
import iconPostgres from "../logos/icons8-postgresql-48.png"

const ListeProjet = [
  {
    id: "1",
    name: "Kasa",
    languages: ["JavaScript", "ReactJS"],
    languagesIcons: [iconJavascript, iconReact],
    url: "https://kasa-loca.netlify.app/",
    github: "https://github.com/BrunoFrds/kasa",
    picture: [projImgKasa1, projImgKasa2, projImgKasa3, projImgKasa4],
    description:
      "Création d'un site immobilier en ReactJS, à partir d'une maquette figma.",
  },
  {
    id: "2",
    name: "DreamBnB",
    languages: ["Ruby on Rails", "Javascript", "PostgreSql"],
    languagesIcons: [iconRails, iconJavascript, iconPostgres],
    github: "https://github.com/GautierDeMo/rbnb",
    picture: [projImgBnb1, projImgBnb2, projImgBnb3, projImgBnb4, projImgBnb5, projImgBnb6],
    description:
      "Site de location et de réservation de rêves développé à 4 pendant le bootcamp Le Wagon.",
  },
  {
    id: "3",
    name: "Gusto",
    languages: ["Ruby on Rails", "Javascript", "Postgresql"],
    languagesIcons: [iconRails, iconJavascript, iconPostgres],
    url: "",
    github: "https://github.com/alisongen/gusto",
    picture: [projImgGusto1, projImgGusto2, projImgGusto3, projImgGusto4, projImgGusto5, projImgGusto6, projImgGusto7, projImgGusto8, projImgGusto9],
    description:
      "Application pour enregistrer ses restaurants préférés et les partager avec ses amis. Projet final du Wagon.",
  },
  {
    id: "4",
    name: "Myflix",
    languages: ["Ruby on Rails", "Javascript", "ReactJS", "PostgreSql"],
    languagesIcons: [iconRails, iconJavascript, iconReact, iconPostgres],
    github: "https://github.com/BrunoFrds/myflix",
    picture: [projImgMyFlix],
    description: "Création d'une plateforme de visionnage de bandes-annonces, façon Netflix. En cours!",
  },
];

export default ListeProjet;
