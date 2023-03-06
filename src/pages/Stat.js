import { useEffect, useState } from "react";
import axios from "axios";
import { OrderMenuBar, OrderTableBar } from "../assets";

export const Stat = () => {
  const [orders, setOrders] = useState([]);
  const [totalSale, setTotalSale] = useState(0);
  const [numOrders, setNumOrders] = useState({});
  const [menuQuantity, setMenuQuantity] = useState([]);
  const [tableQuantity, setTableQuantity] = useState([]);

  useEffect(() => {
    const _config = {
      method: "post",
      url: "https://backend-api-amber.vercel.app/foodOrdering/getOrders",
      // url: "https://sprinttech-food-menu-api-iinykauowa-uc.a.run.app/get-orders",
      headers: {},
    };

    axios(_config)
      .then(function (response) {
        setOrders(response.data);
      })
      .catch(function (error) {
        // console.log(error);
      });
  }, []);
  useEffect(() => {
    const _totalSale = orders.reduce((sumSale, r) => {
      return (sumSale += r.total_price);
    }, 0);
    const uniqueMenu = orders?.reduce((acc, order) => {
      return [
        ...new Set([
          ...acc,
          ...new Set(order.orderItems.map((item) => item.menu.name)),
        ]),
      ];
    }, []);
    const _menuQuantity = uniqueMenu
      .map((menu) => {
        const filterOrder = orders
          .map((order) => {
            return order.orderItems.filter((i) => i.menu.name === menu);
          })
          .flat();
        return filterOrder.reduce(
          (acc, item) => {
            return (acc = {
              name: item.menu.name,
              menu_id: item.menu.menu_id,
              price: item.menu.price,
              quantity: acc.quantity + item.quantity,
            });
          },
          { name: "", menu_id: 0, price: 0, quantity: 0 }
        );
      })
      .sort((a, b) => b.quantity - a.quantity);
    const uniqueTable = [...new Set(orders.map((order) => order.table_id))];
    const _tableQuantity = uniqueTable
      .map((table) => {
        return orders
          .filter((order) => order.table_id === table)
          .reduce(
            (acc, r) => {
              return (acc = {
                table_id: r.table_id,
                total_value: acc.total_value + r.total_price,
              });
            },
            { table_id: 0, total_value: 0 }
          );
      })
      .sort((a, b) => a.total_value - b.total_value);
    setTotalSale(_totalSale);
    setNumOrders({
      total: orders.length,
      waiting: orders.filter((e) => e.status === "WAITING").length,
      done: orders.filter((e) => e.status === "DONE").length,
      canceled: orders.filter((e) => e.status === "CANCELED").length,
      checkedOut: orders.filter(
        (e) => e.status === "BILLED_CANCELED" || e.status === "PAID"
      ).length,
      current: orders.filter(
        (e) =>
          e.status === "WAITING" ||
          e.status === "DONE" ||
          e.status === "CANCELED"
      ).length,
    });
    setMenuQuantity(_menuQuantity);
    setTableQuantity(_tableQuantity);
  }, [orders]);

  return (
    <div className="h-full w-full bg-gray-300 pt-4 font-kanit">
      <div className="mx-auto mt-20 w-2/3 rounded-lg bg-gray-400 p-4 text-center text-4xl">
        <p>ยอดขาย : {totalSale.toLocaleString()} บาท</p>
      </div>
      <div className="my-5 mx-auto flex flex-col rounded-lg p-4 px-20 md:w-2/3">
        <p className="mx-auto rounded-lg text-xl">สถานะ Orders</p>
        <div className="flex w-full justify-between">
          <p>ออเดอร์ทั้งหมด</p> <p>{numOrders.total}</p>
        </div>
        <div className="flex w-full justify-between">
          <p>อดเดอร์ที่เช็คบิลแล้ว</p> <p>{numOrders.checkedOut}</p>
        </div>
        <div className="mt-2 flex w-full justify-between">
          <p>ออเดอร์ปัจจุบัน</p> <p>{numOrders.current}</p>
        </div>
        <div className="flex w-11/12 justify-between self-end">
          <p>ออเดอร์ที่ทำเสร็จแล้ว</p> <p>{numOrders.done}</p>
        </div>
        <div className="flex w-11/12 justify-between self-end">
          <p>ออเดอร์ที่กำลังทำ</p> <p>{numOrders.waiting}</p>
        </div>
        <div className="flex w-11/12 justify-between self-end">
          <p>ออเดอร์ที่ถูกยกเลิก</p> <p>{numOrders.canceled}</p>
        </div>
      </div>
      <div className="mx-auto md:w-2/3">
        <OrderMenuBar menuQuantity={menuQuantity} />
        <OrderTableBar tableQuantity={tableQuantity} />
      </div>
    </div>
  );
};
