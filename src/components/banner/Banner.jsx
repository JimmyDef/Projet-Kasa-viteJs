import "./banner.scss";
import PropTypes from "prop-types";
function Banner({ img, noTxt, size }) {
  return (
    // --------------------------
    //Récupération des nom de class via les props, pour définir le background-img et la taille
    // --------------------------
    <div className={`banner ${img} ${size}`}>
      <h1 className={noTxt}>
        Chez vous,
        <br className="mobile-break" /> partout et ailleurs
      </h1>
    </div>
  );
}

Banner.propTypes = {
  img: PropTypes.string,
  noTxt: PropTypes.string,
  size: PropTypes.string,
};

Banner.defaultProps = {
  noTxt: "",
};

export default Banner;
