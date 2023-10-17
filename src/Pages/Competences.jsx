import List from "../Components/List";
import Html from "../Assets/logos/icons8-html-48.png";
import Css from "../Assets/logos/icons8-css-48.png";
import Sass from "../Assets/logos/icons8-sass-48.png";
import Javascript from "../Assets/logos/icons8-javascript-48.png";
import React from "../Assets/logos/icons8-react-native-48.png";
import Node from "../Assets/logos/icons8-node-js-48.png";
import VSCode from "../Assets/logos/icons8-vs-code-48.png";
import Git from "../Assets/logos/icons8-git-48.png";
import Github from "../Assets/logos/icons8-github-48.png";
import ESLint from "../Assets/logos/icons8-eslint-48.png";
import Prettier from "../Assets/logos/pngwing.com.png";
import Figma from "../Assets/logos/icons8-figma-48.png";
import Check from "../Assets/logos/icons8-check-24.png";

const Competences = () => {
  const List1 = [
    {
      icon: Html,
      text: "HTML 5",
    },
    { icon: Css, text: "CSS 3" },
    { icon: Sass, text: "SASS" },
    { icon: Javascript, text: "Javascript" },
    { icon: React, text: "ReactJS" },
    { icon: Node, text: "NodeJS" },
  ];
  const List2 = [
    {
      icon: VSCode,
      text: "VS Code",
    },
    { icon: Git, text: "Git" },
    { icon: Github, text: "GitHub" },
    { icon: ESLint, text: "ES Lint" },
    { icon: Prettier, text: "Prettier" },
    { icon: Figma, text: "Figma" },
  ];
  const List3 = [
    { icon: Check, text: "Responsive Web Design" },
    { icon: Check, text: "Clean Code" },
    { icon: Check, text: "Bonne Pratique SEO" },
    { icon: Check, text: "Méthode Agile" },
    { icon: Check, text: "Optimisation des performances" },
    { icon: Check, text: "Utilisation d'API" },
  ];
  return (
    <div className="skills-page">
      <div className="competences">
        <List title={"Compétences"} elements={List1} />
        <List title={"Outils"} elements={List2} />
        <List title={"Connaissances"} elements={List3} />
      </div>
    </div>
  );
};

export default Competences;
