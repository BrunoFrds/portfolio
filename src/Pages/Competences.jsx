import List from "../Components/List";
import Html from "../Assets/logos/icons8-html-48.png";
import Css from "../Assets/logos/icons8-css-48.png";
import Javascript from "../Assets/logos/icons8-javascript-48.png";
import React from "../Assets/logos/icons8-react-native-48.png";
import Rails from "../Assets/logos/icons8-ruby-on-rails-48.png";
import Postgres from "../Assets/logos/icons8-postgresql-48.png";
import Git from "../Assets/logos/icons8-git-48.png";
import Github from "../Assets/logos/icons8-github-48.png";
import VSCode from "../Assets/logos/icons8-vs-code-48.png";
import Heroku from "../Assets/logos/icons8-heroku-48.png";
import Postman from "../Assets/logos/icons8-postman-inc-48.png";
import Figma from "../Assets/logos/icons8-figma-48.png";
import Check from "../Assets/logos/icons8-check-24.png";

const Competences = () => {
  const List1 = [
    { icon: Html, text: "HTML5" },
    { icon: Css, text: "CSS3" },
    { icon: Javascript, text: "JavaScript" },
    { icon: React, text: "ReactJS" },
    { icon: Rails, text: "Ruby on Rails" },
    { icon: Postgres, text: "PostgreSQL" },
  ];
  const List2 = [
    { icon: Git, text: "Git" },
    { icon: Github, text: "GitHub" },
    { icon: VSCode, text: "VS Code" },
    { icon: Heroku, text: "Heroku" },
    { icon: Figma, text: "Figma" },
    { icon: Postman, text: "Postman" },
  ];
  const List3 = [
    { icon: Check, text: "Responsive Design" },
    { icon: Check, text: "Clean Code" },
    { icon: Check, text: "Utilisation d'API externes" },
    { icon: Check, text: "Méthodologie Agile" },
    { icon: Check, text: "Optimisation des performances" },
    { icon: Check, text: "Notions de SEO" },
  ];
  return (
    <div className="skills-page">
      <div className="competences">
        <List title={"Technologies"} elements={List1} />
        <List title={"Outils"} elements={List2} />
        <List title={"Compétences transverses"} elements={List3} />
      </div>
    </div>
  );
};

export default Competences;
