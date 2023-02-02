import React from "react";

const TableStatus = () => {
  return (
    <div className="my-6">
      <div className="flex justify-end">
        <button className="bg-rose-300 text-white p-2 rounded-[10px]">
          ทำเสร็จแล้ว
        </button>
      </div>
      <div>
        <p>หมายเลขคำสั่งซื้อ #160000</p>
        <p>สถานะ: ทำเสร็จแล้ว</p>
        <div className="flex justify-between">
          <p>กุ้งทอดซอสมะขาม</p>
          <div>
            <p>฿180 x 1</p>
            <p>รวม ฿180</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TableStatus;
