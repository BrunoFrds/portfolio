import projImgKasa from "../images/Kasa.png";
import projImgBnb from "../images/Dreambnb.png";
import projImgGusto from "../images/Gusto.png";
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
    picture: projImgKasa,
    description:
      "Création d'un site immobilier en ReactJS, à partir d'une maquette figma.",
  },
  {
    id: "2",
    name: "DreamBnB",
    languages: ["Ruby on Rails", "Javascript", "PostgreSql"],
    languagesIcons: [iconRails, iconJavascript, iconPostgres],
    github: "https://github.com/GautierDeMo/rbnb",
    picture: projImgBnb,
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
    picture: projImgGusto,
    description:
      "Application pour enregistrer ses restaurants préférés et les partager avec ses amis. Projet final du Wagon.",
  },
  {
    id: "4",
    name: "Myflix",
    languages: ["Ruby on Rails", "Javascript", "ReactJS", "PostgreSql"],
    languagesIcons: [iconRails, iconJavascript, iconReact, iconPostgres],
    github: "https://github.com/BrunoFrds/myflix",
    picture: projImgMyFlix,
    description: "Création d'une plateforme de visionnage de bandes-annonces, façon Netflix. En cours!",
  },
];

export default ListeProjet;
