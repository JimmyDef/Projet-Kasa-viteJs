import "./home.scss";
import useFetch from "./../../utils/useFetch";
import Banner from "./../../components/banner/Banner";
import Loader from "./../../components/loader/Loader";
import Card from "./../../components/card/Card";

function Home() {
  //--------------------------
  //utilisation du Hook personnalisé pour récupérer les "state" associés ( Fetch, loading)
  //--------------------------

  const { fetchedData, isLoading, errorData } = useFetch(
    window.location.origin + "/data.json"
  );

  //
  //Si error du fetch : message d'erreur.
  //

  if (errorData) {
    return (
      <div className="error-txt">
        Erreur de chargement, veuillez réessayer ultérieurement.
      </div>
    );
  }

  return (
    <>
      <Banner />
      {/* //
// Loading (5sec max) ou display des cards avec leurs propriétés
// */}

      {isLoading ? (
        <Loader />
      ) : (
        <section className="rentals">
          {fetchedData.map((rental, idx) => (
            <Card {...rental} key={`${rental.id}-${idx}`} />
          ))}
        </section>
      )}
    </>
  );
}

export default Home;
