import React from "react";

const BoxContainer = ({ name, desctiprion, points }) => {
  return (
    <>
      <div className="p-item">
        <div className="p-name">{name}</div>
        <div className="p-desc">{desctiprion}</div>
        <div className="p-price">{points}</div>
        <button className="cart p-add">Add Points</button>
      </div>
    </>
  );
};

export default BoxContainer;
