import "./carrousel.scss";
import PropTypes from "prop-types";
import arrowLeft from "./../../assets/chevron_carousel_left.svg";
import arrowRight from "./../../assets/chevron_carousel_right.svg";
import defaultPicture from "./../../assets/default_img_carrousel.png";
import { useState } from "react";

function Carrousel({ pictures, title }) {
  // --------------------------
  // UseState picture[index]
  // --------------------------
  const [index, SetImgNumber] = useState(0);

  // --------------------------
  // Fonction image précédente/suivante
  // --------------------------

  const HandlePictureSwap = (direction) => {
    if (direction === "left") {
      if (index === 0) {
        return SetImgNumber(pictures.length - 1);
      } else {
        return SetImgNumber(index - 1);
      }
    }
    if (direction === "right") {
      if (index + 1 === pictures.length) {
        return SetImgNumber(0);
      } else {
        return SetImgNumber(index + 1);
      }
    }
  };

  return (
    <section className="carrousel">
      {
        <img
          src={pictures.length === 0 ? defaultPicture : pictures[index]}
          alt={title}
          className="carrousel__pictures"
        />
      }

      {/* ---- Opérateur ternaire affichage/masquage navigation img ----*/}

      {pictures.length > 1 ? (
        <>
          <img
            src={arrowLeft}
            alt="chevron gauche"
            className="carrousel__arrow carrousel__arrow--left"
            onClick={() => HandlePictureSwap("left")}
          />
          <img
            src={arrowRight}
            alt="chevron droit"
            className="carrousel__arrow carrousel__arrow--right"
            onClick={() => HandlePictureSwap("right")}
          />
          <div className="carrousel__counteur-box">
            <p>{`${index + 1} / ${pictures.length} `}</p>
          </div>
        </>
      ) : null}
    </section>
  );
}

// --------------------------
// Prop-Types
// --------------------------

Carrousel.propTypes = {
  pictures: PropTypes.array,
  title: PropTypes.string,
};
Carrousel.defaultProps = {
  pictures: [defaultPicture],
  title: "Hébergement",
};

export default Carrousel;
