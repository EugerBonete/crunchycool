import { useQuery } from "react-query";

export const useGetGogoAnimeInfo = (id: string) => {
  return useQuery(
    ["info", id], // Include page and pageSize in the query key
    async () => {
      const res = await fetch(
        `https://api.consumet.org/anime/gogoanime/info/${id}`
      );
      return res.json();
    }
  );
};
