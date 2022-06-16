/* eslint-disable react/prop-types */
import React from "react";
import Card from "../../components/card/Card";
import CreateCategory from "../CreateCategory/CreateCategory";

function BonusImages({ bonusImages }) {
  return (
    <CreateCategory name="Bonus images">
      {bonusImages.map((image) => (
        <Card
          key={image.description.replace(" ", "-")}
          type="image"
          content={image}
        />
      ))}
    </CreateCategory>
  );
}

export default BonusImages;
