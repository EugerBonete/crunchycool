import { useQuery } from "react-query";

interface useSearchProps {
  id: string;
  server: string;
  type: string;
}

export const useSearch = ({ server, id, type }: useSearchProps) => {
  const url = `https://api.consumet.org/${type}/${server}/${id}`;
  return useQuery(
    ["info", id], // Include page and pageSize in the query key
    async () => {
      const res = await fetch(url);
      console.log(url);
      return res.json();
    },
    { enabled: false }
  );
};
