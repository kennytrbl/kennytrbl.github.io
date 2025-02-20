import { useEffect, useState } from "react";
import { fetchSpotifyData } from "../utils/fetchSpotifyData";
import Image from "next/image";
import "../styles/nowPlaying.css";

export default function NowPlaying() {
  const [trackInfo, setTrackInfo] = useState<[string, string] | undefined>();

  useEffect(() => {
    async function getTrack() {
      const data = await fetchSpotifyData();
      setTrackInfo(data);
    }
    getTrack();
    const interval = setInterval(getTrack, 10000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="mt-6 flex items-center space-x-4">
      {trackInfo ? (
        <>
          <Image alt="" src={trackInfo[1]} height={60} width={60} className="rounded-md" />
          <div className="flex items-center space-x-2">
            <p className="font-medium inline-block mr-2 text-lg w-auto">{trackInfo[0]}</p>
            <div className="flex flex-shrink-0 justify-between relative w-[13px] h-[13px]">
              <span className="animate-[bounce_2.2s_ease_infinite_alternate] bg-[#1ce0e0] content-[''] origin-bottom rounded-[3px] w-[3px] h-full" />
              <span className="animate-[bounce_2.2s_ease_infinite_alternate] bg-[#1ce0e0] content-[''] origin-bottom rounded-[3px] w-[3px] h-full" />
              <span className="animate-[bounce_2.2s_ease_infinite_alternate] bg-[#1ce0e0] content-[''] origin-bottom rounded-[3px] w-[3px] h-full" />
            </div>
          </div>
        </>
      ) : (
        <p>Loading track information...</p>
      )}
    </div>
  );
}
