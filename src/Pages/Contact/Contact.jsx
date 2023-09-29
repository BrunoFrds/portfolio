import Banner from "../../Components/Banner/Banner";
import ContactForm from "../../Components/ContactForm/ContactForm";
import ContactCoord from "../../Components/ContactCoord/ContactCoord";

const Contact = () => {
  return (
    <div className="contact-page">
      <Banner bannerTitle="Contact" />
      <div className="contact-back">
        <ContactCoord />
        <ContactForm />
      </div>
    </div>
  );
};

export default Contact;
