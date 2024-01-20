import "./banner.scss";
import PropTypes from "prop-types";
function Banner({ extraClass }) {
  return (
    // --------------------------
    //Récupération des nom de class via les props, pour définir le background-img et la taille
    // --------------------------
    <div className={`banner ${extraClass} `}>
      <h1>
        Chez vous,
        <br className="mobile-break" /> partout et ailleurs
      </h1>
    </div>
  );
}

Banner.propTypes = {
  extraClass: PropTypes.string,
};

Banner.defaultProps = {
  extraClass: "",
};

export default Banner;
