import { useQuery } from "react-query";

export const useGetGogo = ({ page = 1, type = "" }) => {
  return useQuery(
    [type, page], // Include page and type in the query key
    async () => {
      let url = `https://api.consumet.org/anime/gogoanime/${type}?page=${page}`;

      if (type === "popular") {
        url = `https://api.consumet.org/meta/anilist/popular?page=${page}`;
      }

      const res = await fetch(url);
      return res.json();
    }
  );
};
