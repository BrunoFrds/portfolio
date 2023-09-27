import ListeProjet from "../../Assets/data/Projets";
import Card from "../../Components/Card/Card";
import Banner from "../../Components/Banner/Banner";

const Portfolio = () => {
  const listeprojet = ListeProjet.map((proj) => proj.picture);
  console.log(listeprojet);
  return (
    <div className="portfolio-page">
      <Banner bannerTitle="Projets" />
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
          />
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
