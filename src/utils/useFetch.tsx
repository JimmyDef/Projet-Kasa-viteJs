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
  fetchedData: ReadonlyUser[] | null;
  isLoading: boolean;
  errorData: boolean;
};
type ReadonlyUser = MyReadonly<User>;
const useFetch = (url: string): FetchResult => {
  const [fetchedData, setFetchedData] = useState<ReadonlyUser[] | null>(null);
  const [isLoading, setLoading] = useState(true);
  const [errorData, setError] = useState(false);

  useEffect(() => {
    if (!url) return;

    async function getData() {
      try {
        const res = await fetch(url);
        const data: ReadonlyUser[] = await res.json();
        setFetchedData(data);
      } catch (error) {
        console.log("~ getData ~ error:", error);
        setError(true);
      } finally {
        setLoading(false);
      }
    }
    console.log("🚀 ~ fetchedData:", fetchedData);
    getData();
  }, [url]);

  return { fetchedData, isLoading, errorData };
};

export default useFetch;

// const isReadonlyUser = (data: any): data is ReadonlyUser => {
//   return (
//     typeof data.id === "string" &&
//     typeof data.title === "string" &&
//     typeof data.cover === "string" &&
//     Array.isArray(data.pictures) &&
//     data.pictures.every((pic: any) => typeof pic === "string") &&
//     typeof data.description === "string" &&
//     typeof data.host === "object" &&
//     typeof data.host.picture === "string" &&
//     typeof data.host.name === "string" &&
//     typeof data.rating === "string" &&
//     typeof data.location === "string" &&
//     Array.isArray(data.equipments) &&
//     data.equipments.every((eq: any) => typeof eq === "string") &&
//     Array.isArray(data.tags) &&
//     data.tags.every((tag: any) => typeof tag === "string")
//   );
// };
