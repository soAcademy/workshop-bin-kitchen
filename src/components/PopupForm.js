import React from "react";
import PopupFormIncrement from "./PopupFormIncrement";

const PopupForm = () => {
  const submitData = (e) => {
    e.preventDefault(); // ใช้เพื่อป้องกันการ refresh หน้า ตอนกด submit
    const data = {
      table: e.target["table"].value,
      amount: e.target["amount"].value,
    };
    console.log(data);
  };

  return (
    <div className="bg-green-100 p-2">
      <form className="" onSubmit={(e) => submitData(e)}>
        <div className="flex justify-between align-center">
          <div>หมายเลขโต๊ะ</div>
          <PopupFormIncrement/>
        </div>
        <div className="py-4">รายการ</div>
        <div className="flex justify-between align-center">
          <div>ชื่ออาหาร</div>
          <div>
            <input
              className="h-12 border border-yellow-200 rounded-xl"
              type="number"
              placeholder="1"
              id="amount"
            />
          </div>
        </div>
        <div className="py-4">
          <button className="w-full bg-green-300 p-4 rounded-xl" type="submit">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default PopupForm;
