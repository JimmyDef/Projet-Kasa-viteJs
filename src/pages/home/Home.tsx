import "./home.scss";
import { fetchRentals } from "../../utils/fetcher.modules";
import Banner from "../../components/banner/Banner";
import Loader from "../../components/loader/Loader";
import Card from "../../components/card/Card";
import { useQuery } from "@tanstack/react-query";
function Home() {
  const {
    data: fetchedData,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["rentals"],
    queryFn: () => fetchRentals(window.location.origin + "/data.json"),
  });

  if (isError) {
    return (
      <div className="error-txt">
        Erreur de chargement, veuillez réessayer ultérieurement.
      </div>
    );
  }

  return (
    <>
      <Banner />

      {isLoading ? (
        <Loader />
      ) : (
        <section className="rentals">
          {fetchedData?.map((rental, idx) => (
            <Card {...rental} key={`${rental.id}-${idx}`} />
          ))}
        </section>
      )}
    </>
  );
}

export default Home;
