import TableSelection from "../components/TableSelection";

const OrderList = () => {
  return (
    <div className="bg-neutral-900 w-full mx-2 rounded-lg shadow-lg border border-8 border-lime-200">
      <div className="flex m-1 mt-11">
        <div className="md:text-5xl text-3xl m-5 mx-auto text-neutral-50">
          รายการสั่งอาหาร
        </div>
      </div>
      <div className="text-xl text-neutral-50 p-4">กดเลือกโต๊ะ</div>
        <TableSelection />
    </div>
  );
};
export default OrderList;
