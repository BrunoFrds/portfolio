const Banner = ({ bannerTitle }) => {
  return (
    <div className="banner-background">
      <div className="banner">
        <h1 className="banner-title">{bannerTitle}</h1>
      </div>
    </div>
  );
};

export default Banner;
