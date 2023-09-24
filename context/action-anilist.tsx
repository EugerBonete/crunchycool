import { useQuery } from "react-query";

export const useGetAnilistAction = (page = 1) => {
  return useQuery(
    ["action", page], // Include page and pageSize in the query key
    async () => {
      const res = await fetch(
        `https://api.consumet.org/meta/anilist/advanced-search?genres=["Action"]&page=${page}`
      );
      return res.json();
    }
  );
};
