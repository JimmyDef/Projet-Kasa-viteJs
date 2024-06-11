import "./card.scss";
import { Link } from "react-router-dom";
import defaultPicture from "./../../assets/default_img_carrousel.png";

type CardProps = {
  title: string;
  cover: string;
  id: string;
};
const Card = ({ title, cover, id }: CardProps) => {
  return (
    <Link to={`/accomodation/${id}`}>
      <div className="card">
        <img src={cover || defaultPicture} alt={title} />
        <h2>{title}</h2>
      </div>
    </Link>
  );
};

export default Card;
