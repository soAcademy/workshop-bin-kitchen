import React from "react";

const FlexGrid = () => {
  return (
    <>
      <div className="flex">
        <div className="block bg-gray-500 font-bold text-center p-5 text-xl m-2 rounded-lg text-white">
          Takuna
        </div>
        <div className="block bg-yellow-500 font-bold text-center p-5 text-xl m-2 rounded-lg text-black">
          Korana
        
        </div>
      </div>
      <div className="box-content border-black border-4 h-32 w-32"></div>
      <div className="box-border-black border-4 h-32 w-32"></div>
    </>
  );
};

export default FlexGrid;
