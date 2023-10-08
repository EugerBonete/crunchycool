import { useQuery } from "react-query";

export const useDramaCool = ({ page = 1, q = "" }) => {
  return useQuery(
    [q, page], // Include page and pageSize in the query key
    async () => {
      const url = `https://api.consumet.org/movies/dramacool/${q}`;
      console.log(url);
      const res = await fetch(url);
      return res.json();
    }
  );
};
