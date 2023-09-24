import { useQuery } from "react-query";

export const useGetAnilistTrending = (page = 1) => {
  return useQuery(
    ["trending", page], // Include page and pageSize in the query key
    async () => {
      const res = await fetch(
        `https://api.consumet.org/meta/anilist/trending?page=${page}`
      );
      return res.json();
    }
  );
};
