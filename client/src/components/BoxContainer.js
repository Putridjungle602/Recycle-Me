import React from "react";
//displays items on home page
const BoxContainer = ({ name, description, points }) => {
  return (
    <>
      <div className="p-item">
        <div className="p-name">{name}</div>
        <div className="p-desc">{description}</div>
        <div className="p-price">{points}</div>
        <button className="cart p-add">Add Points</button>
      </div>
    </>
  );
};

export default BoxContainer;
