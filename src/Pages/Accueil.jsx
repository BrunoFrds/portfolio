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
        <h2 className="accueil-title">Développeur Front-end</h2>
        <p className="accueil-description">
          Bonjour ! Je suis développeur FrontEnd.
          <br />
          Autodidacte dans l'âme, j'ai aussi effectué une formation
          professionnalisante. <br />
          Cela m'a permis de travailler sur divers projets mettant en avant mes
          compétences apprises. <br />
          Vous trouverez ici un résumé de mes compétences et des projets que
          j'ai pû effectuer.
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
