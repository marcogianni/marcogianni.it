"use client";

import { useInView } from "framer-motion";
import { useEffect, useRef } from "react";

import { cn } from "@/lib/utils";

interface Props {
  url: string;
  poster?: string;
  className?: string;
}

export default function Video(props: Props) {
  const { url, poster = undefined, className } = props;

  const videoRef = useRef<HTMLVideoElement>(null);
  const videoInView = useInView(videoRef, { once: false, amount: 0.1 });

  useEffect(() => {
    if (videoRef.current) {
      if (videoInView) {
        videoRef.current.play();
      } else {
        videoRef.current.pause();
      }
    }
  }, [videoInView]);

  return (
    <video
      poster={poster}
      ref={videoRef}
      muted
      loop
      controls
      className={cn(
        "object-contain min-h-full w-full project-image",
        className
      )}
    >
      <source src={url} type="video/mp4" />
    </video>
  );
}
