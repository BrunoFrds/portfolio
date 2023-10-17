const List = ({ title, elements }) => {
  return (
    <div className="list">
      <h1 className="list-title">{title}</h1>
      <ul className="list-ul">
        {elements.map((element, index) => (
          <li key={index} className="list-element">
            <img src={element.icon} alt={element.text} className="list-img" />
            <p className="list-text">{element.text}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default List;
