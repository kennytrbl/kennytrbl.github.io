import axios from "axios";

export async function fetchSpotifyData(): Promise<[string, string] | undefined> {
  try {
    const lastfmUser = process.env.NEXT_PUBLIC_LASTFM_USER as string;
    const lastfmApiKey = process.env.NEXT_PUBLIC_LASTFM_API_KEY as string;

    if (!lastfmUser || !lastfmApiKey) {
      console.error("Missing API credentials");
      return undefined;
    }

    const response = await axios.get(
      `https://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=${lastfmUser}&api_key=${lastfmApiKey}&format=json&limit=1`,
    );

    const data = response.data.recenttracks.track?.[0];
    if (!data) {
      console.error("No recent tracks found.");
      return undefined;
    }

    const artist = data.artist?.["#text"] || "Unknown Artist";
    const imageURL = data.image?.[2]?.["#text"] || "";
    const name = data.name || "Unknown Track";
    const output = `${name} by ${artist}`;

    return [output, imageURL];
  } catch (error) {
    console.error("Error fetching data:", error);
    return undefined;
  }
}
