export const SPOTIFY_CONFIG = {
  CLIENT_ID: "cd09a7bfe92942cb84c810a4ee0b9aac",
  CLIENT_SECRET: "a1bb1c2846a348b798012a201d5ae3ca",
  ACCESS_TOKEN:
    "BQAeyE5qu4mWdKR3urkvORUTfXeH4TsQRR4d4_OXJ_-gar1BWOyQxegBp03OyQilO0dIvKeBgQAIdQs5wos1PMUZ_5jODadnHSXWM1GTnsgkigo7QTajqXLgCYpgTCpm90f2xFvak6h-p65qgiGWedqeB9VT-Jgi1H5HCW2ysdhZYvxohECSbP4Tx8nxEJqFKQLUoQb_IRxP9mh4wj6z7ZcEd3iEWaIe11IfO6kiWA_h-HS2J9zuHYgP_3sPGnLWxyHp2k-ulLsCClU83otYOCN4Cem5mCg-a7HVz-P5o2ldcdDBrf4-2YPyjuMQux457CE3p0KSUMk",
  REDIRECT_URI: "exp://192.168.100.6:8081",
  SCOPES: [
    "user-read-private",
    "user-read-email",
    "playlist-read-private",
    "user-read-recently-played",
    "playlist-modify-public",
    "playlist-modify-private",
    "user-top-read",
    "user-read-recently-played",
  ],
};

// https://accounts.spotify.com/authorize?client_id=cd09a7bfe92942cb84c810a4ee0b9aac&response_type=code&redirect_uri=https://httpbin.org/get&scope=user-read-private%20user-read-email%20playlist-read-private%20playlist-modify-public%20playlist-modify-private%20user-read-recently-played%20user-read-recently-played%20user-top-read
export async function getMyRecentlyPlayed() {
  try {
    const response = await fetch(
      "https://api.spotify.com/v1/me/player/recently-played?limit=8",
      {
        headers: {
          Authorization: `Bearer ${SPOTIFY_CONFIG.ACCESS_TOKEN}`,
        },
      }
    );

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    return data.items || [];
  } catch (error) {
    console.error("Error getting recently played:", error);
    return [];
  }
}
export async function getMyTopArtists() {
  try {
    const response = await fetch(
      "https://api.spotify.com/v1/me/top/artists?limit=5",
      {
        headers: {
          Authorization: `Bearer ${SPOTIFY_CONFIG.ACCESS_TOKEN}`,
        },
      }
    );
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    return data.items || [];
  } catch (error) {
    console.error("Error getting top artists:", error);
    return [];
  }
}
export async function getMyTopTracks() {
  try {
    const response = await fetch(
      "https://api.spotify.com/v1/me/top/tracks?limit=8",
      {
        headers: {
          Authorization: `Bearer ${SPOTIFY_CONFIG.ACCESS_TOKEN}`,
        },
      }
    );
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    return data.items || [];
  } catch (error) {
    console.error("Error getting top tracks:", error);
    return [];
  }
}
