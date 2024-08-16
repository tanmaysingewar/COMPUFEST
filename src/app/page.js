"use client";
import { useState, useRef, useEffect } from "react";
import LandingPage from "./components/LandingPage";

import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  const [playing, setPlaying] = useState(false);
  const [showEvent, setShowEvent] = useState(false);

  const [isVisible, setIsVisible] = useState(false);

  const bgRef = useRef(null);

  useEffect(() => {
    if (playing) {
      bgRef.current.play();
    } else {
      bgRef.current.pause();
    }
    setTimeout(() => {
      setIsVisible(true);
    }, 5);
  }, [playing]);

  return (
    <div className="relative min-h-screen overflow-auto bg-black">
      <video
        ref={bgRef}
        autoPlay={false}
        muted
        playsInline
        onEnded={() => router.push("/events")}
        onPlay={() =>
          setTimeout(() => {
            setShowEvent(true);
          }, 500)
        }
        className="fixed top-0 left-0 w-full h-full object-cover"
      >
        <source src="videos/lowres.mp4" type="video/mp4" />
      </video>

      <div className="absolute top-0 left-0 w-full h-full z-20 flex justify-center pt-20 bg-black opacity-30"></div>
      <div
        className={`w-full z-20  h-full px-4 py-8 mx-auto text-center lg:px-8 flex flex-col items-center justify-between transition-opacity ease-in duration-500 opacity-0 ${
          isVisible ? "opacity-100" : "opacity-0"
        }`}
      >
        {showEvent ? (
          <div></div>
        ) : (
          <LandingPage
            playing={playing}
            setPlaying={setPlaying}
          />
        )}
      </div>
    </div>
  );
}
