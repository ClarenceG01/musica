import { useQuery } from "@tanstack/react-query";
import { getMyRecentlyPlayed,getMyTopArtists } from "../services/spotify.js";

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
export function useTopArtists() {
  return useQuery({
    queryKey: ["top-artists"],
    queryFn: getMyTopArtists,
    staleTime: 1000 * 60 * 5,
  cacheTime:1000*60*10,
    refetchOnWindowFocus: true,
  retry:2,
  });
}
