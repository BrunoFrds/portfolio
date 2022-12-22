import ellipse from "../../Assets/images/Ellipse.png";
import cvbf from "../../Assets/documents/CV Bruno Fernandes.pdf";

const Accueil = () => {
  return (
    <div className="accueil">
      <div className="accueil-logo">
        <img src={ellipse} alt="logo accueil" className="accueil-image" />
      </div>
      <div className="accueil-presentation">
        <h1 className="accueil-name">Bruno Fernandes</h1>
        <h2 className="accueil-title">Développeur Front-end</h2>
        <p className="accueil-description">
          Bonjour ! Je m'appelle Bruno et je suis développeur FrontEnd junior.{" "}
          <br />
          Autodidacte dans l'âme, j'ai aussi effectué une formation
          professionnalisante. <br />
          Cela m'a permis de travailler sur divers projets mettant en avant mes
          compétences apprises. <br />
        </p>
        <div className="accueil-pdf">
          <a className="lien-pdf" href={cvbf}>
            <span className="title-pdf">Télécharger CV</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Accueil;
