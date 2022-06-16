/* eslint-disable react/prop-types */
import React from "react";
import CreateCategory from "../CreateCategory/CreateCategory";
import "./Scenes.css";

function Scenes({ scenes, player }) {
  return (
    <CreateCategory name="Scenes">
      {scenes.map((scene) => (
        <button
          key={scene.title.replace(" ", "-")}
          onClick={() => player.seekTo(scene.beginTimecode)}
          type="button"
          className="btn"
        >
          {scene.title}
        </button>
      ))}
    </CreateCategory>
  );
}

export default Scenes;
