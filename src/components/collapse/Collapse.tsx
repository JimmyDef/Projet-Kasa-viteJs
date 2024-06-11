import "./collapse.scss";
import chevron from "./../../assets/chevron_down_svg.svg";
import { useState, useRef } from "react";
import { useCollapse } from "../../utils/useCollapse";

type CollapseProps = {
  title: string;
  content: string | string[];
  isCollapseOpen: boolean;
};

const Collapse = ({ title, content, isCollapseOpen }: CollapseProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(isCollapseOpen);
  const contentRef = useRef<HTMLDivElement | null>(null);
  useCollapse(contentRef, isOpen);

  /**  Fonction en cas de tableau récupéré dans le state "content" (et non une string) */

  const renderTextContent = () => {
    if (Array.isArray(content)) {
      const equipments = content.map((elt, idx) => (
        <li key={`${elt}-${idx}`}>{elt}</li>
      ));

      return <ul> {equipments} </ul>;
    }
    return <p>{content}</p>;
  };

  /**   Fonction pour inverser le déploiement des collapses (true/false) */

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

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
        className={`collapse__description ${isOpen ? "" : "visible"}`}
      >
        {renderTextContent()}
      </div>
    </div>
  );
};

export default Collapse;
