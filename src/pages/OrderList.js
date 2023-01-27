const OrderList = () => {
  return (
    <div className="bg-neutral-900 w-full mx-2 rounded-lg shadow-lg border border-8 border-lime-200">
      <div className="flex m-1 mt-11">
        <div className="md:text-5xl text-3xl m-5 mx-auto text-neutral-50">
          รายการสั่งอาหาร
        </div>
      </div>
      <div className="text-xl text-neutral-50 p-4">กดเลือกโต๊ะ</div>
      <div className="grid gap-2 grid-cols-5">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15].map(() => (
          <button className="py-2 px-4 bg-red-200 rounded-lg button border hover:border-red-800 border-2 active:bg-red-500 mx-12 my-12 ">
            1
          </button>
        ))}
      </div>
    </div>
  );
};
export default OrderList;
