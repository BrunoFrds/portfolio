import { useEffect } from "react";
import cvbf from "../Assets/document/CV Bruno Fernandes.pdf";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";

const Accueil = () => {
  useEffect(() => {
    const lienPdf = document.querySelector(".lien-pdf");
    const circleOne = document.querySelector(".circle-one");
    const circleTwo = document.querySelector(".circle-two");

    const handleMouseOver = () => {
      circleOne.classList.add("hoveredOne");
      circleTwo.classList.add("hoveredTwo");
    };

    const handleMouseOut = () => {
      circleOne.classList.remove("hoveredOne");
      circleTwo.classList.remove("hoveredTwo");
    };

    lienPdf.addEventListener("mouseover", handleMouseOver);
    lienPdf.addEventListener("mouseout", handleMouseOut);

    return () => {
      lienPdf.removeEventListener("mouseover", handleMouseOver);
      lienPdf.removeEventListener("mouseout", handleMouseOut);
    };
  }, []);

  return (
    <div className="accueil">
      <div className="accueil-presentation">
        <h2 className="accueil-title">Développeur Web Full-Stack</h2>
        <p className="accueil-description">
          Après plusieurs années d’expériences professionnelles variées et enrichissantes, j’ai choisi de me reconvertir dans un domaine qui me passionne depuis longtemps : le développement web.
          <br />
          Curieux et rigoureux, j’ai suivi une formation intensive au Wagon où j’ai acquis des compétences solides en Ruby on Rails, JavaScript, PostgreSQL, et plus encore. Depuis, je développe mes savoir-faire à travers des projets personnels et collaboratifs, que je vous invite à découvrir dans ce portfolio. <br />
          Vous y trouverez une sélection de projets réalisés en équipe ou en autonomie, illustrant mon engagement et ma capacité à apprendre rapidement. Toujours ouvert à de nouvelles opportunités, je suis prêt à mettre mes compétences au service de projets ambitieux.
        </p>
      </div>
      <div className="accueil-pdf">
        <div className="circle-two"></div>
        <a className="lien-pdf" href={cvbf} target="_blank" rel="noreferrer">
          <FontAwesomeIcon icon={faDownload} className="download-icon" />
          <span className="title-pdf">CV</span>
        </a>
        <div className="circle-one"></div>
      </div>
    </div>
  );
};

export default Accueil;
