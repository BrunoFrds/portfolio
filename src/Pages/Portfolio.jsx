import ListeProjet from "../Assets/data/Projets";
import Card from "../Components/Card";

const Portfolio = () => {
  const listeprojet = ListeProjet.map((proj) => proj.picture);
  console.log(listeprojet);
  return (
    <div className="portfolio-page">
      <div className="portfolio-list">
        {ListeProjet.map((projet) => (
          <Card
            key={projet.id}
            id={projet.id}
            name={projet.name}
            image={projet.picture}
            description={projet.description}
            icon={projet.languagesIcons}
            lien={projet.github}
            url={projet.url}
          />
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
