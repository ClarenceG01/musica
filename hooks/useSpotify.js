import { useQuery } from "@tanstack/react-query";
import { getMyRecentlyPlayed } from "../services/spotify.js";

export function useRecentlyPlayed() {
return useQuery({
    queryKey: ["recently-played"],
    queryFn: getMyRecentlyPlayed,
    staleTime: 1000 * 60 * 2,
	cacheTime:1000*60*5,
    refetchOnWindowFocus: true,
	retry:2,
  });
}
