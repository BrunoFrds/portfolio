import ProgressBar from "../../Components/ProgressBar/ProgressBar";
import Banner from "../../Components/Banner/Banner";

const Competences = () => {
  return (
    <div className="skills-page">
      <Banner bannerTitle="Compétences" />
      <div className="competences">
        <div className="skills">
          <div className="title-background">
            <h1 className="skills-title">Front-End Skills</h1>
          </div>
          <ProgressBar title="HTML" value="100" />
          <ProgressBar title="CSS / SASS" value="100" />
          <ProgressBar title="JavaScript" value="90" />
          <ProgressBar title="ReactJS" value="90" />
        </div>
        <div className="skills">
          <div className="title-background">
            <h1 className="skills-title">Back-End Skills</h1>
          </div>
          <ProgressBar title="NodeJS" value="60" />
          <ProgressBar title="ExpressJS" value="40" />
          <ProgressBar title="MongoDB" value="90" />
        </div>
      </div>
    </div>
  );
};

export default Competences;
