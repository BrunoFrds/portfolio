import ContactForm from "../Components/ContactForm";
import ContactCoord from "../Components/ContactCoord";

const Contact = () => {
  return (
    <div className="contact-page">
      <div className="contact-back">
        <ContactCoord />
        <ContactForm />
      </div>
    </div>
  );
};

export default Contact;
