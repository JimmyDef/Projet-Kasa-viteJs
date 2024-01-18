import "./home.scss";
import useFetch from "./../../utils/useFetch";
import Banner from "./../../components/banner/Banner";
import Loader from "./../../components/loader/Loader";
import Card from "./../../components/card/Card";

function Home() {
  //--------------------------
  //utilisation du Hook personnalisé pour récupérer les "state" associés ( Fetch, loading)
  //--------------------------

  const accomodations = useFetch(window.location.origin + "/data.json");

  return (
    <>
      <Banner img="img-cliff" />
      {/* //
// Loading (5sec max) ou display des cards avec leurs propriétés
// */}

      {accomodations.isLoading || accomodations.fetchedData.length === 0 ? (
        <Loader />
      ) : (
        <section className="rentals">
          {accomodations.fetchedData.map((rental, idx) => (
            <Card
              cover={rental.cover}
              title={rental.title}
              key={`${rental.id}-${idx}`}
              id={rental.id}
            />
          ))}
        </section>
      )}
    </>
  );
}

export default Home;
