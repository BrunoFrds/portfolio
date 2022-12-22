import ListeProjet from "../../Assets/data/Projets";
import Card from "../../Components/Card/Card";

const Portfolio = () => {
  const listeprojet = ListeProjet.map((proj) => proj.picture);
  console.log(listeprojet);
  return (
    <div className="portfolio-page">
      <div className="title-page">
        <h1 className="title-page__portfolio">Projets</h1>
      </div>
      <div className="portfolio-list">
        <div className="portfolio-list__projet">
          {ListeProjet.map((projet) => (
            <Card
              key={projet.id}
              id={projet.id}
              name={projet.name}
              image={projet.picture}
              description={projet.description}
              icon={projet.languagesIcons}
              lien={projet.github}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
