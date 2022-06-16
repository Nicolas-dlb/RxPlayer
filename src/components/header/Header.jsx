import React from "react";
import "./Header.css";
import rxPlayer from "../../assets/rxPlayer_logo_white.png";
import canal from "../../assets/canalp.svg";

function Header() {
  return (
    <header>
      <div id="rxPlayer">
        <a href="https://github.com/canalplus/rx-player">
          <h1>
            <img src={rxPlayer} alt="RxPlayer" />
          </h1>
        </a>

        <a
          className="version"
          href="https://github.com/canalplus/rx-player/releases"
        >
          <p>v3.27.0</p>
        </a>
      </div>
      <a aria-label="Go to Canal+ website" href="https://www.canalplus.com">
        <img id="canal" src={canal} alt="CANAL+" />
      </a>
    </header>
  );
}

export default Header;
