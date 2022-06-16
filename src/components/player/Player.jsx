import React, { useEffect } from "react";
import RxPlayer from "rx-player";
import "./Player.css";

function Player({ player, setPlayer, currentTimecode, setCurrentTimecode }) {
  useEffect(() => {
    setPlayer(
      new RxPlayer({
        videoElement: document.getElementById("video"),
      })
    );
  }, []);

  useEffect(() => {
    if (player.state) {
      player.loadVideo({
        url: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
        transport: "directfile",
        autoPlay: false,
      });
    }
    if (player.state) {
      player.addEventListener("positionUpdate", (event) => {
        if (
          Math.floor(event.position) !== currentTimecode ||
          Math.floor(event.position) !== currentTimecode + 1
        ) {
          setCurrentTimecode(Math.floor(event.position));
        }
      });
    }
  }, [player]);

  return <video id="video" controls />;
}

export default Player;
