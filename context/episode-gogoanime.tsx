import { useQuery } from "react-query";

export const useGetGogoAnimeEpisode = (episodeId: string) => {
  return useQuery(
    ["watch", episodeId], // Include page and pageSize in the query key
    async () => {
      const res = await fetch(
        `https://api.consumet.org/anime/gogoanime/watch/${episodeId}`
      );
      return res.json();
    }
  );
};
