function ContactForm() {
  return (
    <div className="contact-container">
      <div className="contact-info">
        <h1 className="contact-info__title">Me contacter</h1>
        <form
          name="contact"
          method="POST"
          data-netlify="true"
          className="contact-info__form"
        >
          <input type="hidden" name="form-name" value="contact" />
          <div className="input-back">
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Nom et prénom"
              required
              className="input-name"
            />
          </div>
          <div className="input-back">
            <input
              type="email"
              id="email"
              name="email"
              placeholder="E-mail"
              required
              className="input-email"
            />
          </div>
          <div className="input-back-msg">
            <textarea
              id="message"
              name="message"
              rows="4"
              placeholder="Message"
              required
              className="input-message"
            ></textarea>
          </div>

          <button type="submit" className="button-submit">
            Envoyer
          </button>
        </form>
      </div>
    </div>
  );
}

export default ContactForm;
