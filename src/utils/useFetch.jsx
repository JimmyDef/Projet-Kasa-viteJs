import { useState, useEffect } from "react";
//--------------------------
// Realisation du fetch  + gestion state pour le loader
//--------------------------

function useFetch(url) {
  // State pour la récupération des données :
  const [fetchedData, setFetchedData] = useState([]);

  // State pour la gestion du loader :
  const [isLoading, setLoading] = useState(true);

  // State pour la gestion de l'erreur :
  const [errorData, setError] = useState(false);

  useEffect(() => {
    if (!url) return;
    setLoading(true);
    async function getData() {
      try {
        const res = await fetch(url);
        const data = await res.json();
        setFetchedData(data);
      } catch (error) {
        console.log("~ getData ~ error:", error);
        setError(true);
      } finally {
        setLoading(false);
      }
    }
    getData();
  }, [url]);

  return { fetchedData, isLoading, errorData };
}

export default useFetch;
