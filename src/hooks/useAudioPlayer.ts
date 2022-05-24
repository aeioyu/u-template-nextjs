import { useEffect } from "react";

let audio: HTMLAudioElement;
if (process.browser) {
  audio = new Audio();
}

export function useAudioPlayer(options?: { onended?: () => void; onplayed?: () => void }) {
  useEffect(() => {
    audio?.addEventListener("ended", () => {
      if (options?.onended) options.onended();
    });

    audio?.addEventListener("playing", () => {
      if (options?.onplayed) options.onplayed();
    });

    return () => {
      audio?.removeEventListener("ended", () => {
        console.log("removeEventListener ended");
      });
      audio?.removeEventListener("playing", () => {
        console.log("removeEventListener played");
      });
    };
  }, []);

  const playSound = (audioUrl: string) => {
    audio.src = audioUrl;
    audio.currentTime = 0;
    audio.play().catch((err) => {
      console.log(err);
    });
  };

  const stopSound = () => {
    audio.pause();
    audio.src = "";
  };

  return {
    audio,
    playSound,
    stopSound,
  };
}
