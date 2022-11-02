import React, { useState } from "react";

export default function Donate() {
  const [loading, setLoading] = useState(false);
  const onButtonClick = (e) => {
    console.log("clicked");
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  };
  return (
    <div className="donateContainer">
      <button
        className="donatePortWrap"
        type="primary"
        loading={loading}
        onClick={onButtonClick}
        href="#"
      >
        Donate Here!
      </button>
    </div>
  );
}
