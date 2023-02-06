import React from "react";

const Button = () => {
  const tableOrder = [
    { id: 1 },
    { id: 2 },
    { id: 3 },
    { id: 4 },
    { id: 5 },
    { id: 6 },
    { id: 7 },
    { id: 8 },
    { id: 9 },
    { id: 10 },
    { id: 11 },
    { id: 12 },
    { id: 13 },
    { id: 14 },
    { id: 15 },
  ];

  return (
    <button className="w-[60px] h-[60px] bg-red-100 rounded-lg">
      {tableOrder.map((r) => r.id)}
    </button>
  );
};

export default Button;
