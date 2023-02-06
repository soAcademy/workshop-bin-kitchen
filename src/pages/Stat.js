import { useState, useEffect } from "react";
import axios from "axios";
import ReactECharts from "echarts-for-react";

export const Stat = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    axios({
      method: "POST",
      url: "https://sprinttech-food-menu-api-iinykauowa-uc.a.run.app/get-orders",
    })
      .then((response) => {
        // console.log(response.data);
        // setFoodMenu(response.data);
        setOrders(response.data);
        // console.log(ordersByMenuItem(orders));
      })
      .catch((error) => console.log(error));
  }, [orders]);

  const ordersByMenuItem = (orders) => {
    const menuItems = orders.reduce(
      (acc, order) => [...acc, ...order.items],
      []
    );

    // const menuIdList = [...new Set(menuItems.map((item) => item.menu_id))];

    const menuItemsWithMenuId = menuItems
      // .filter((item) => item.menu_id === menuId)
      .reduce((accArray, item) => {
        accArray[item.menu_id] = {
          menu_id: item.menu_id,
          price: item.price,
          quantity: (accArray[item.menu_id]?.quantity ?? 0) + item.quantity,
          name: item.name,
        };
        return accArray;
      }, [])
      .filter((item) => item.menu_id)
      .sort((a, b) => a.quantity - b.quantity);

    return menuItemsWithMenuId;
  };

  const optionForMostPopularMenu = {
    title: {
      text: "Most Popular Menu",
    },
    xAxis: {
      type: "value",
      name: "Quantity",
    },
    yAxis: {
      type: "category",
      data: ordersByMenuItem(orders).map((menuItem) => menuItem.name),
      name: "Menu item",
      boundaryGap: true,
      axisTick: {
        show: false,
        // alignWithLabel: true,
        // interval: 0,
      },
      axisLabel: {
        interval: 0,
        height: 20,
      },
    },
    series: [
      {
        data: ordersByMenuItem(orders).map((menuItem) => menuItem.quantity),
        type: "bar",
        color: "#2563eb",
      },
    ],
    tooltip: {
      trigger: "axis",
    },
  };
  // console.log(ordersByMenuItem(orders));

  return (
    <div className="px-4 pt-4 font-nstl text-sm">
      <h1 className="mb-4 font-prompt text-4xl font-bold">สถิติ</h1>
      {/* <p className="mb-4">สถิติ</p> */}
      {/* <p>{JSON.stringify(ordersByMenuItem(orders))}</p> */}
      <ReactECharts option={optionForMostPopularMenu} />
    </div>
  );
};
