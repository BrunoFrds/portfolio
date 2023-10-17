const ProgressBar = ({ title, value }) => {
  return (
    <div className="container">
      <div className="progressbar">
        <span className="progressbar__title">{title}</span>
        <div className="progressbar__skill">
          <span className={`progressbar__skill-per ${title}`}></span>
          <span className="tooltip">{value}%</span>
        </div>
      </div>
    </div>
  );
};

export default ProgressBar;
