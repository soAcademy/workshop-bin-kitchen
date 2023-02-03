// import FoodMenuList from "../components/FoodMenuList";
import { useState } from "react";

export const Orders = () => {
  const [tableId, setTableId] = useState(0);

  return (
    <div className="px-4 pt-4 font-nstl text-sm">
      <h1 className="mb-4 font-prompt text-4xl font-bold">รายการสั่งอาหาร</h1>
      <p className="mb-4">รายการสั่งอาหาร</p>
      <ul className="grid grid-cols-5 grid-rows-3 justify-evenly gap-4">
        {[...Array(15).keys()].map((table, idx) => (
          <li key={idx}>
            <button
              className="aspect-square w-full rounded bg-red-300"
              onClick={() => setTableId(idx + 1)}
            >
              {idx + 1}
            </button>
          </li>
        ))}
      </ul>
      <div>Table ID: {tableId}</div>
    </div>
  );
};
