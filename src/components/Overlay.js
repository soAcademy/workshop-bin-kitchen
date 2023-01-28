import React from "react";

function Overlay(props) {
  const { handleClick } = props;
  return (
    <div
      onClick={handleClick}
      className="fixed z-10 top-0 left-0 right-0 bottom-0 bg-gray-700 opacity-60"
    ></div>
  );
}

export default Overlay;
