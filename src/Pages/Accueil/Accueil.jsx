import cvbf from "../../Assets/document/CV Bruno Fernandes.pdf";

const Accueil = () => {
  return (
    <div className="accueil">
      <div className="accueil-presentation">
        <h2 className="accueil-title">Développeur Front-end</h2>
        <p className="accueil-description">
          Bonjour ! Je suis développeur FrontEnd junior.
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
        <a className="lien-pdf" href={cvbf} target="_blank" rel="noreferrer">
          <span className="title-pdf">Télécharger CV</span>
        </a>
      </div>
    </div>
  );
};

export default Accueil;
