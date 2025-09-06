export const SPOTIFY_CONFIG = {
  CLIENT_ID: "cd09a7bfe92942cb84c810a4ee0b9aac",
  CLIENT_SECRET: "a1bb1c2846a348b798012a201d5ae3ca",
  ACCESS_TOKEN:
    "BQCAakiGi--vP7h3p-aTTBNXzagcZ6y1eGX_6wevRcD6zo0ElaIYsBjCAer1XNxTgE--Qoa2-mT_UqdtL3GfJ0vOowvmAmSoLuceUAneTPrMikH6siD4GykYlnPiBiX5oNwYcujSS4Lsa3vqhpL5rT0-WiY0-xtmHFMY4sh4K5MEOUgVT1yBaE09f1pKHiTTxuAlZ895qu0ZS3_h-DQnqpWcUaoN7jM7tbbHqJEJBO6VbSE0YmaJZdujtfI3mfCrHHFpAf04V_bP_fwaXjdoX9bLcdJFMy6kCgTTwHP0yh26xIhUCFvbj-ZXB0YAEFmlsKkAiA",
  REDIRECT_URI: "exp://192.168.100.6:8081",
  SCOPES: [
    "user-read-private",
    "user-read-email",
    "playlist-read-private",
    "user-read-recently-played",
    "playlist-modify-public",
    "playlist-modify-private",
  ],
};

// https://accounts.spotify.com/authorize?client_id=cd09a7bfe92942cb84c810a4ee0b9aac&response_type=code&redirect_uri=https://httpbin.org/get&scope=user-read-private%20user-read-email%20playlist-read-private%20playlist-modify-public%20playlist-modify-private%20user-read-recently-played
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
