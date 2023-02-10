import { useEffect, useState } from "react";
import axios from "axios";
import ReactECharts from "echarts-for-react";
import OrderMenuBar from "../assets/OrderMenuBar";
import OrderTableBar from "../assets/OrderTableBar";

const Stat = () => {
  const [orders, setOrders] = useState([]);
  const [totalSale, setTotalSale] = useState(0);
  const [numWaiting, setNumWaiting] = useState(0);
  const [numDone, setNumDone] = useState(0);
  const [numOrders, setNumOrders] = useState(0);
  const [menuQuantity, setMenuQuantity] = useState([]);
  const [tableQuantity, setTableQuantity] = useState([]);

  useEffect(() => {
    const _config = {
      method: "post",
      url: "https://sprinttech-food-menu-api-iinykauowa-uc.a.run.app/get-orders",
      headers: {},
    };

    axios(_config)
      .then(function (response) {
        setOrders(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);
  useEffect(() => {
    console.log("orders", orders);
    const _totalSale = orders.reduce((sumSale, r) => {
      return (sumSale += r.total_price);
    }, 0);
    const uniqueMenu = orders.reduce((acc, order) => {
      return [
        ...new Set([...acc, ...new Set(order.items.map((item) => item.name))]),
      ];
    }, []);
    const _menuQuantity = uniqueMenu
      .map((menu) => {
        const filterOrder = orders
          .map((order) => {
            return order.items.filter((i) => i.name === menu);
          })
          .flat();
        return filterOrder.reduce(
          (acc, item) => {
            return (acc = {
              name: item.name,
              menu_id: item.menu_id,
              price: item.price,
              quantity: acc.quantity + item.quantity,
            });
          },
          { name: "", menu_id: 0, price: 0, quantity: 0 }
        );
      })
      .sort((a, b) => b.quantity - a.quantity);
    console.log("_menuQuantity :>> ", _menuQuantity);
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
    console.log("tableQuantity :>> ", _tableQuantity);

    setTotalSale(_totalSale);
    setNumWaiting(orders.filter((e) => e.status === "WAITING").length);
    setNumDone(orders.filter((e) => e.status === "DONE").length);
    setNumOrders(orders.length);
    setMenuQuantity(_menuQuantity);
    setTableQuantity(_tableQuantity);
  }, [orders]);

  return (
    <div className="h-full w-full bg-gray-300 pt-4 font-kanit">
      <div className="mx-auto mt-20 w-2/3 rounded-lg bg-gray-400 p-4 text-center text-4xl">
        <p>ยอดขาย : {totalSale.toLocaleString()} บาท</p>
      </div>
      <div className="my-5 flex flex-col rounded-lg p-4 px-20">
        <p className="mx-auto rounded-lg text-xl">สถานะ Orders</p>
        <div className="flex w-full justify-between">
          <p>จำนวนรายการสั่งอาหาร</p> <p>{numOrders}</p>
        </div>
        <div className="flex w-full justify-between">
          <p>จำนวนรายการที่ทำเสร็จแล้ว</p> <p>{numDone}</p>
        </div>
        <div className="flex w-full justify-between">
          <p>จำนวนรายการที่กำลังทำ</p> <p>{numWaiting}</p>
        </div>
      </div>
      <div>
        <OrderMenuBar menuQuantity={menuQuantity} />
        <OrderTableBar tableQuantity={tableQuantity} />
      </div>
    </div>
  );
};

export default Stat;
