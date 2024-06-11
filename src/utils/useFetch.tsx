import { useState, useEffect } from "react";

type MyReadonly<T> = {
  readonly [P in keyof T]: T[P];
};
type Host = {
  picture: string;
  name: string;
};
type ReadonlyHost = MyReadonly<Host>;

type User = {
  id: string;
  title: string;
  cover: string;
  pictures: string[];
  description: string;
  host: ReadonlyHost;
  rating: string;
  location: string;
  equipments: string[];
  tags: string[];
};

type FetchResult = {
  fetchedData: ReadonlyUser[];
  isLoading: boolean;
  errorData: boolean;
};
type ReadonlyUser = MyReadonly<User>;
const useFetch = (url: string): FetchResult => {
  const [fetchedData, setFetchedData] = useState<ReadonlyUser[]>([]);
  const [isLoading, setLoading] = useState(true);
  const [errorData, setError] = useState(false);

  useEffect(() => {
    if (!url) return;

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
};

export default useFetch;
