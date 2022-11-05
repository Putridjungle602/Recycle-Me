import React from "react";

const BoxContainer = ({ name, desctiprion, points }) => {
  return (
    <>
      <div class="p-item">
        <div class="p-name">{name}</div>
        <div class="p-desc">{desctiprion}</div>
        <div class="p-price">{points}</div>
        <button class="cart p-add">Add To Cart</button>
      </div>
    </>
  );
};

export default BoxContainer;
