/* eslint-disable no-unused-expressions */
/* eslint-disable react/prop-types */
import React from "react";
import Card from "../../components/card/Card";
import CreateCategory from "../CreateCategory/CreateCategory";

function Crew({ crew }) {
  return (
    <CreateCategory name="Crew">
      {crew.map((member) =>
        crew.length > 0 ? (
          <Card
            key={member.name.replace(" ", "-")}
            type="member"
            content={member}
          />
        ) : (
          <p key="crew-loading">Loading</p>
        )
      )}
    </CreateCategory>
  );
}

export default Crew;
