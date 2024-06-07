import "./collapse.scss";
import chevron from "./../../assets/chevron_down_svg.svg";
import { useState, useRef, useEffect } from "react";
import PropTypes from "prop-types";

function Collapse({ title, text, collapseState }) {
  const [isOpen, setIsOpen] = useState(collapseState);
  const contentRef = useRef(null);
  //--------------------------
  // Fonction en cas de tableau récupéré dans le state "text" (et non une string)
  //--------------------------
  const renderTextContent = () => {
    if (Array.isArray(text)) {
      const equipments = text.map((elt, idx) => (
        <li key={`${elt}-${idx}`}>{elt}</li>
      ));

      return <ul> {equipments} </ul>;
    }
    return <p>{text}</p>;
  };
  //--------------------------
  // Fonction pour inverser le déploiement des collapses (true/false)
  //--------------------------
  const handleToggle = () => {
    setIsOpen(!isOpen);
  };
  useEffect(() => {
    if (!isOpen) {
      const content = contentRef.current;
      content.style.maxHeight = `${content.scrollHeight}px`;
      const rect = content.getBoundingClientRect();
      const isVisibleInViewport =
        rect.top >= 0 && rect.bottom <= window.innerHeight;

      if (!isVisibleInViewport) {
        content.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    } else {
      const content = contentRef.current;
      content.style.maxHeight = "0";
    }
  }, [isOpen]);
  return (
    <div className="collapse">
      <div className="collapse__title-box" onClick={handleToggle}>
        <h2>{title}</h2>

        <img
          src={chevron}
          alt="chevron up down"
          className={isOpen ? "" : "rotate-chevron"}
        />
      </div>

      <div
        ref={contentRef}
        className={`collapse__description ${isOpen ? "" : "visible"}`}>
        {renderTextContent()}
      </div>
    </div>
  );
}

Collapse.propTypes = {
  title: PropTypes.string,
  text: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
  collapseState: PropTypes.bool,
};

export default Collapse;
