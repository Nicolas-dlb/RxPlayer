import React, { useEffect, useState } from "react";
import "./App.css";
import Header from "../../components/header/Header";
import {
  getAllScenes,
  getBonusImages,
  getCrew,
  getSceneByTimecode,
} from "../../utils/api/api";

import Player from "../../components/player/Player";
import Scenes from "../Scenes/Scenes";
import Crew from "../Crew/Crew";
import BonusImages from "../BonusImages/BonusImages";
import Comments from "../Comments/Comments";

function App() {
  const [scenes, setScenes] = useState([]);
  const [crew, setCrew] = useState([]);
  const [bonusImages, setBonusImages] = useState([]);
  const [currentTimecode, setCurrentTimecode] = useState(0);
  const [reactions, setReactions] = useState([]);
  const [player, setPlayer] = useState([]);
  const [isDesktop, setDesktop] = useState(window.innerWidth > 999);

  const updateMedia = () => {
    if (isDesktop && window.innerWidth < 999) {
      setDesktop(false);
    } else if (!isDesktop && window.innerWidth > 999) {
      setDesktop(true);
    }
  };

  useEffect(() => {
    window.addEventListener("resize", updateMedia);
    return () => window.removeEventListener("resize", updateMedia);
  });

  useEffect(() => {
    getAllScenes().then((data) => setScenes(data));
    getCrew().then((data) => setCrew(data));
    getBonusImages().then((data) => setBonusImages(data));
  }, []);

  useEffect(() => {
    if (scenes.length > 0 && reactions.length === 0) {
      scenes.forEach((scene) => {
        if (scene.beginTimecode) {
          getSceneByTimecode(scene.beginTimecode).then((fetchedScene) => {
            if (fetchedScene.reactions) {
              setReactions((prev) =>
                isDesktop
                  ? [
                      ...fetchedScene.reactions.map((reaction) => ({
                        id: reaction.message + prev.length,
                        ...reaction,
                      })),
                      ...prev,
                    ]
                  : [
                      ...prev,
                      ...fetchedScene.reactions.map((reaction) => ({
                        id: reaction.message + prev.length,
                        ...reaction,
                      })),
                    ]
              );
            }
          });
        }
      });
    }
  }, [scenes]);

  return (
    <div className="app">
      <Header />
      <div id="test" className="hero-banner">
        <Player
          player={player}
          setPlayer={setPlayer}
          currentTimecode={currentTimecode}
          setCurrentTimecode={setCurrentTimecode}
        />

        {isDesktop && (
          <Comments
            reactions={reactions}
            setReactions={setReactions}
            currentTimecode={currentTimecode}
          />
        )}
      </div>
      <Scenes scenes={scenes} player={player} />
      <Crew crew={crew} />
      <BonusImages bonusImages={bonusImages} />
      {!isDesktop && (
        <Comments
          isDesktop={isDesktop}
          reactions={reactions}
          setReactions={setReactions}
          currentTimecode={currentTimecode}
        />
      )}
    </div>
  );
}

export default App;
