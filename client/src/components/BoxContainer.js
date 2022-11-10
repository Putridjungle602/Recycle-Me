import React from "react";
//displays items on home page

/* <h1>What did you do to help save the Earth today?</h1>;
 <h2>Please select an activity from the drop down list below</h2>  */

const BoxContainer = ({ name, description, points }) => {
  return (
    <>
      <div className="p-item">
        <div className="p-name">{name}</div>
        <div className="p-desc">{description}</div>
        <div className="p-points">{points}</div>
        <button className="cart p-add">Add Activity</button>
      </div>
    </>
  );
};

export default BoxContainer;
