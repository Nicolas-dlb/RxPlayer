/* eslint-disable react/jsx-no-useless-fragment */
/* eslint-disable react/prop-types */
import React from "react";

import "./Card.css";

function Card({ type, content }) {
  const image = type === "member" ? content.image : content.path;

  const activeCard = () => {
    const isActive = document
      .getElementById(image)
      .classList.contains("active");

    if (!isActive) {
      document.getElementById(image).classList.add("active");
    } else {
      document.getElementById(image).classList.remove("active");
    }
  };

  return (
    <>
      {image ? (
        <div
          key={image}
          id={image}
          data-testid="card"
          tabIndex={0}
          role="button"
          onClick={activeCard}
          onKeyDown={activeCard}
          className={`card ${type}-size`}
        >
          <img src={image} alt="" width="200px" height="120px" />
          <span className="card-info">
            {type === "member" ? (
              <>
                <h5>{content.name}</h5>
                <p>{content.role}</p>
              </>
            ) : (
              <p className="bonus-image-label">{content.description}</p>
            )}
          </span>
        </div>
      ) : (
        <div data-testid="card">Loading</div>
      )}
    </>
  );
}

export default Card;
