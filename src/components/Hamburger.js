import React from "react";
import { useNavigate } from "react-router-dom";

const Hamburger = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-rose-100 px-8 py-4 flex flex-col gap-3 md:py-6 md:gap-6 md:py-9">
        <div className="text-lg md:text-3xl">
          <button
            onClick={() => navigate("/")}
            className="hover:text-rose-500 hover:underline"
          >
            เมนูอาหาร
          </button>
        </div>
        <div className="text-lg md:text-3xl">
          <button
            onClick={() => navigate("/order")}
            className="hover:text-rose-500 hover:underline"
          >
            รายการสั่งอาหาร
          </button>
        </div>
        <div className="text-lg md:text-3xl">
          <button
            onClick={() => navigate("/statistic")}
            className="hover:text-rose-500 hover:underline"
          >
            สถิติ
          </button>
        </div>
        <div className="text-lg md:text-3xl">
          <button
            onClick={() => navigate("/quiz")}
            className="hover:text-rose-500 hover:underline"
          >
            คำถามที่พบบ่อย
          </button>
        </div>
      </div>
    </>
  );
};

export default Hamburger;
