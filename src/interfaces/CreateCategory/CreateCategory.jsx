/* eslint-disable react/prop-types */
import React from "react";
import Title from "../../components/title/Title";
import "./CreateCategory.css";

function CreateCategory({ name, children }) {
  return (
    <div id={name.toLowerCase().replace(" ", "-")} className="category">
      <div className="category-header">
        <Title title={name} />
      </div>
      <div className="category-content">{children}</div>
    </div>
  );
}

export default CreateCategory;
