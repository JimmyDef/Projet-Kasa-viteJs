import { useParams, Navigate } from "react-router-dom";
import Collapse from "../../components/collapse/Collapse";
import Carrousel from "../../components/carrousel/Carrousel";
import "./accomodation.scss";
import redStar from "./../../assets/start-red.png";
import greyStar from "./../../assets/star_grey.png";
import Loader from "../../components/loader/Loader";
import { fetchRentals } from "../../utils/fetcher.modules";
import { useQuery } from "@tanstack/react-query";

type Host = {
  name: string;
  picture: string;
};

type Accomodation = {
  id: string;
  title: string;
  cover: string;
  pictures: string[];
  description: string;
  host: Host;
  rating: string;
  location: string;
  equipments: string[];
  tags: string[];
};

const Accomodation = () => {
  const { id } = useParams();

  const {
    data: fetchedData,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["rentals"],
    queryFn: () => fetchRentals(window.location.origin + "/data.json"),
  });

  let accomodation: Accomodation | undefined;
  if (fetchedData && fetchedData.length > 0) {
    accomodation = fetchedData.find((elt) => elt.id === id);
  }

  if (isLoading) {
    return (
      <div className="accomodation-loader-wrapper">
        <Loader />
      </div>
    );
  }

  if (!accomodation || isError) {
    return <Navigate to="/notFound" replace />;
  }

  const rating = parseInt(accomodation.rating);
  const [forename, name] = accomodation.host.name.split(" ");

  return (
    <>
      <Carrousel {...accomodation} />

      {/* // 
           //Création titres + tag
           // */}

      <section className="accomodation-detail-wrapper">
        <div className="accomodation-info">
          <h2>{accomodation.title}</h2>
          <p>{accomodation.location}</p>
          <div className="accomodation-info__tags-box">
            {accomodation.tags.map((tag: string, idx: number) => (
              <div key={`${tag}-${idx}`} className="accomodation-info__tag">
                <p>{tag}</p>
              </div>
            ))}
          </div>
        </div>

        {/* // 
           //Création des étoiles de notation
           // */}

        <div className="accomodation-profil">
          <div className="accomodation-profil__stars">
            {[...Array(5)].map((_, idx) => {
              const ratingArrayValue = idx + 1;

              return ratingArrayValue <= rating ? (
                <img src={redStar} key={"star" + idx} alt="étoile rouge" />
              ) : (
                <img src={greyStar} key={"star" + idx} alt="étoile grise" />
              );
            })}
          </div>

          {/* // 
           //Création nom + mignature
           // */}

          <div className="accomodation-profil__host">
            <div className="accomodation-profil__name">
              <p>{forename}</p>
              <p>{name}</p>
            </div>
            <div className="accomodation-profil__picture">
              <img
                src={accomodation.host.picture}
                alt={accomodation.host.name}
              />
            </div>
          </div>
        </div>
      </section>

      {/* // 
           // Composant collapse x 2 
           // */}

      <section className="accomodation-collapse-wrapper">
        <Collapse
          title="Description"
          content={accomodation.description}
          isCollapseOpen={true}
        />
        <Collapse
          title="Equipements"
          content={accomodation.equipments}
          isCollapseOpen={true}
        />
      </section>
    </>
  );
};

export default Accomodation;
