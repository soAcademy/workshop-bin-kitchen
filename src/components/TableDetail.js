import React from "react";

const TableDetail = () => {
  return (
    <>
      <div className="px-4">
        <div className="flex items-center gap-2 justify-between">
          <p>โต๊ะ 2 ยอดรวม ฿520</p>
          <button className="bg-rose-300 text-white p-2 rounded-[10px]">
            เช็คบิล
          </button>
        </div>
        <div>
          <div>
            <p>หมายเลขคำสั่งซื้อ #160001</p>
            <p>สถานะ: กำลังทำ</p>
          </div>
          {/* add .map() here */}
          <div>
            <p>แกงส้มชะอมไข่</p>
            <div>
              <p>130฿</p>
              <p>x</p>
              <p>1</p>
            </div>
          </div>
          <div>
            <p>รวม ฿130</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default TableDetail;
