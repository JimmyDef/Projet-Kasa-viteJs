import "./banner.scss";
type BannerProps = {
  extraClass?: string;
};

const Banner = ({ extraClass = "" }: BannerProps) => {
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
};

export default Banner;
