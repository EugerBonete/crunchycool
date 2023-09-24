import { useQuery } from "react-query";

export const useGetAnilistsport = (page = 1) => {
  return useQuery(
    ["sport", page], // Include page and pageSize in the query key
    async () => {
      const res = await fetch(
        `https://api.consumet.org/meta/anilist/advanced-search?genres=["Sports"]&page=${page}`
      );
      return res.json();
    }
  );
};
