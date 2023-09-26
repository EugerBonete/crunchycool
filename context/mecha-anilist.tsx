import { useQuery } from "react-query";

export const useGetAnilistMecha = (page = 1) => {
  return useQuery(
    ["Mecha", page], // Include page and pageSize in the query key
    async () => {
      const res = await fetch(
        `https://api.consumet.org/meta/anilist/advanced-search?genres=["Mecha"]&page=${page}`
      );
      return res.json();
    }
  );
};
