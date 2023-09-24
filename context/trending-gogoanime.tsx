import { useQuery } from "react-query";

export const useGetGogoTopAiring = (page = 1) => {
  return useQuery(
    ["top-airing", page], // Include page and pageSize in the query key
    async () => {
      const res = await fetch(
        `https://api.consumet.org/anime/gogoanime/top-airing?page=${page}`
      );
      return res.json();
    }
  );
};
