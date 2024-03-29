const Button = ({ lienContact, lienName, lienIcon }) => {
  return (
    <a
      href={lienContact}
      target="_blank"
      rel="noreferrer"
      className="lien-contact"
    >
      <h1 className="title-contact">{lienName}</h1>
      <p className="icon-contact">{lienIcon}</p>
    </a>
  );
};

export default Button;
