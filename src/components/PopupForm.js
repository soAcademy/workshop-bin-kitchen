import React from "react";
import PopupFormIncrement from "./PopupFormIncrement";
import { BsX, BsCart2 } from "react-icons/bs";

const PopupForm = () => {
  const submitData = (e) => {
    e.preventDefault(); // ใช้เพื่อป้องกันการ refresh หน้า ตอนกด submit
    debugger;
    const data = {
      table: e.target["table"].value,
      amount: e.target["amount"].value,
    };
    console.log(data);
  };

  return (
    <div className="shadow-md w-full fixed bottom-0 left-0 bg-gray-100">
      <div className="flex justify-between px-4 bg-yellow-600  text-white align-center h-[50px]">
        <div className="flex w-1/3 items-center justify-start">สั่งอาหาร</div>
        <button className="flex items-center justify-end text-xl">
          <BsX />
        </button>
      </div>
      <form className="p-4" onSubmit={(e) => submitData(e)}>
        <div className="flex justify-between align-center h-[50px]">
          <div className="flex w-1/3 items-center align-center">
            หมายเลขโต๊ะ
          </div>
          <PopupFormIncrement submitId="table" />
        </div>

        <div className="flex w-1/3 items-center py-4">รายการ</div>

        <div className="flex justify-between align-center  h-[50px]">
          <div className="flex w-1/3 items-center align-center">ชื่อเมนู</div>
          <PopupFormIncrement submitId="amount" />
        </div>

        <div className="py-4">
          <button className="w-full bg-yellow-600  text-white p-4 rounded-xl hover:bg-yellow-700" type="submit">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default PopupForm;
