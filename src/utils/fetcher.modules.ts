export interface Rental {
  id: string;
  title: string;
  cover: string;
  pictures: string[];
  description: string;
  host: {
    name: string;
    picture: string;
  };
  rating: string;
  location: string;
  equipments: string[];
  tags: string[];
}

export const fetchRentals = async (url: string): Promise<Rental[]> => {
  const res = await fetch(url);
  if (!res.ok) {
    throw new Error("FetchRentals - Error fetching - res not OK!");
  }
  const data: Rental[] = await res.json();
  return data;
};

export const fetchRental = async (url: string): Promise<Rental[]> => {
  const res = await fetch(url);
  if (!res.ok) {
    throw new Error("FetchRentals - Error fetching - res not OK!");
  }
  const data: Rental[] = await res.json();
  return data;
};
