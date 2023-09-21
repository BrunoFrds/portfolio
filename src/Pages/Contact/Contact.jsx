import Button from "../../Components/Button/Button";
import Banner from "../../Components/Banner/Banner";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocation,
  faEnvelope,
  faMobileAlt,
} from "@fortawesome/free-solid-svg-icons";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";

const linkedIn = <FontAwesomeIcon icon={faLinkedin} />;
const githubPage = <FontAwesomeIcon icon={faGithub} />;

const email = "brunofrdsdev@gmail.com";
const onEmailClick = () => {
  window.open(`mailto:${email}`);
};

const Contact = () => {
  return (
    <div className="contact-page">
      <Banner bannerTitle="Contact" />
      <div className="container-info">
        <div className="contact-info">
          <h1 className="contact-info__title">Me contacter</h1>
          <p className="contact-info__address">
            <span className="address-icon">
              <FontAwesomeIcon icon={faLocation} />
            </span>
            6 Avenue de la République <br />
            93300 Aubervilliers
          </p>
          <p className="contact-info__phone">
            <span className="phone-icon">
              <FontAwesomeIcon icon={faMobileAlt} />
            </span>
            06 46 04 14 57
          </p>
          <p className="contact-info__mail" onClick={onEmailClick}>
            <span className="mail-icon">
              <FontAwesomeIcon icon={faEnvelope} />
            </span>
            brunofrdsdev@gmail.com
          </p>
        </div>
        <div className="button-lien">
          <Button
            lienContact="http://www.linkedin.com/in/bruno-frds"
            lienName="LinkedIn"
            lienIcon={linkedIn}
          />
          <Button
            lienContact="https://github.com/BrunoFrds"
            lienName="GitHub"
            lienIcon={githubPage}
          />
        </div>
      </div>
    </div>
  );
};

export default Contact;
