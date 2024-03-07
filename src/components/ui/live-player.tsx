"use client";

import { useEffect, useRef } from "react";
import Hls from "hls.js";

export function LivePlayer({ url }: { url: string }) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      if (Hls.isSupported()) {
        const hls = new Hls();
        hls.loadSource(url);
        hls.attachMedia(videoRef.current);
      } else if (videoRef.current.canPlayType('application/vnd.apple.mpegurl')) {
        videoRef.current.src = url;
      } 
    }
  }, [url]);

  return (
    <video
      className="w-full"
      ref={videoRef}
      controls
    />
  );
}
