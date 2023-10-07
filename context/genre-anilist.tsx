import { useQuery } from "react-query";

export const useGetAnilistGenre = ({ page = 1, genre = "" }) => {
  return useQuery(
    [genre, page], // Include page and pageSize in the query key
    async () => {
      const url = `https://api.consumet.org/meta/anilist/advanced-search?genres=["${genre}"]&page=${page}`;
      console.log(url);
      const res = await fetch(url);
      return res.json();
    }
  );
};
