import { useQuery } from "react-query";

export const useManga = ({ page = 1, q = "" }) => {
  return useQuery(
    [q, page], // Include page and pageSize in the query key
    async () => {
      const url = `https://api.consumet.org/manga/mangadex/${q}`;
      console.log(url);
      const res = await fetch(url);
      return res.json();
    }
  );
};
