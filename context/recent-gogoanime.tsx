import { useQuery } from "react-query";

export const useGetGogoRecent = (page = 1) => {
  return useQuery(
    ["recent", page], // Include page and pageSize in the query key
    async () => {
      const res = await fetch(
        `https://api.consumet.org/anime/gogoanime/recent-episodes?page=${page}`
      );
      return res.json();
    }
  );
};
