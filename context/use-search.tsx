import { useQuery } from "react-query";

interface useSearchProps {
  id: string;
  server: string;
  type: string;
}

export const useSearch = ({ server, id, type }: useSearchProps) => {
  return useQuery(
    ["info", id], // Include page and pageSize in the query key
    async () => {
      const res = await fetch(
        `https://api.consumet.org/${type}/${server}/${id}`
      );
      console.log(`https://api.consumet.org/${type}/${server}?${id}`);
      return res.json();
    },
    { enabled: false }
  );
};
