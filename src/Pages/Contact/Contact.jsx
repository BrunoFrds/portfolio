import Button from "../../Components/Button/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocation,
  faEnvelope,
  faMobileAlt,
} from "@fortawesome/free-solid-svg-icons";
import {
  faLinkedin,
  faFacebook,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";

const linkedIn = <FontAwesomeIcon icon={faLinkedin} />;
const githubPage = <FontAwesomeIcon icon={faFacebook} />;
const facebook = <FontAwesomeIcon icon={faGithub} />;

const email = "bruno_fernandes@live.fr";
const onEmailClick = () => {
  window.open(`mailto:${email}`);
};

const Contact = () => {
  return (
    <div className="contact-page">
      <div className="title-page">
        <h1 className="title-page__contact">Contact</h1>
      </div>
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
            bruno_fernandes@live.fr
          </p>
        </div>
        <div className="button-lien">
          <Button
            lienContact="http://www.linkedin.com/in/bruno-frds"
            lienName="LinkedIn"
            lienIcon={linkedIn}
          />
          <Button
            lienContact="http://facebook.com/BrunoFrds4960"
            lienName="Facebook"
            lienIcon={facebook}
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
