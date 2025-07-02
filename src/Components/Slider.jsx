import { useState } from "react";
import flecheHor from "../Assets/images/FlecheHor.png";

const Slider = ({ images }) => {
  let [imgDisplay, setImgDisplay] = useState(0);
  let imgNumber = images.length;

  const imgPrevious = () => {
    imgDisplay === 0
      ? setImgDisplay(imgNumber - 1)
      : setImgDisplay(imgDisplay - 1);
    return setImgDisplay;
  };

  const imgNext = () => {
    imgDisplay === imgNumber - 1
      ? setImgDisplay((imgNumber = 0))
      : setImgDisplay(imgDisplay + 1);

    return setImgDisplay;
  };

  return (
    <div className="carrousel">
      {images.length > 1 && (
        <div className="arrow-container left-arrow" onClick={imgPrevious}>
          <img src={flecheHor} alt="Précédent" />
        </div>
      )}

      <div className="image-container">
        {images.map((image, index) => (
          <img
            key={index}
            className={index === imgDisplay ? "carrousel-img actif" : "carrousel-img"}
            src={image}
            alt="Logement"
          />
        ))}
      </div>

      {images.length > 1 && (
        <div className="arrow-container right-arrow" onClick={imgNext}>
          <img src={flecheHor} alt="Suivant" />
        </div>
      )}
    </div>
  );
};

export default Slider;
