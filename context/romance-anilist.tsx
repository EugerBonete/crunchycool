import { useQuery } from "react-query";

export const useGetAnilistRomance = (page = 1) => {
  return useQuery(
    ["Romance", page], // Include page and pageSize in the query key
    async () => {
      const res = await fetch(
        `https://api.consumet.org/meta/anilist/advanced-search?genres=["Romance"]&page=${page}`
      );
      return res.json();
    }
  );
};
