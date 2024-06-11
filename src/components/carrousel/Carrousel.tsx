import "./carrousel.scss";
import arrowLeft from "./../../assets/chevron_carousel_left.svg";
import arrowRight from "./../../assets/chevron_carousel_right.svg";
import defaultPicture from "./../../assets/default_img_carrousel.png";

import { useState, useEffect } from "react";

type CarrouselProps = {
  pictures: string[];
  title: string;
};

const Carrousel = ({
  pictures = [defaultPicture],
  title = "Hébergement",
}: CarrouselProps) => {
  // --------------------------
  // UseState picture[index]
  // --------------------------
  const [pictureIndex, SetPictureIndex] = useState<number>(0);
  useEffect(() => {
    console.log("pictures:", pictures);
    console.log("🚀 ~ defaultPicture:", defaultPicture);
  }, []);

  // --------------------------
  // Fonction image précédente/suivante
  // --------------------------

  const handlePictureSwap = (direction: "left" | "right"): void => {
    if (direction === "left") {
      if (pictureIndex === 0) {
        return SetPictureIndex(pictures.length - 1);
      } else {
        return SetPictureIndex(pictureIndex - 1);
      }
    }
    if (direction === "right") {
      if (pictureIndex + 1 === pictures.length) {
        return SetPictureIndex(0);
      } else {
        return SetPictureIndex(pictureIndex + 1);
      }
    }
  };

  return (
    <section className="carrousel">
      {
        <img
          src={pictures.length === 0 ? defaultPicture : pictures[pictureIndex]}
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
            onClick={() => handlePictureSwap("left")}
          />
          <img
            src={arrowRight}
            alt="chevron droit"
            className="carrousel__arrow carrousel__arrow--right"
            onClick={() => handlePictureSwap("right")}
          />
          <div className="carrousel__counteur-box">
            <p>{`${pictureIndex + 1} / ${pictures.length} `}</p>
          </div>
        </>
      ) : null}
    </section>
  );
};

export default Carrousel;
