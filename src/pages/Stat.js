import { useState, useEffect } from "react";
import axios from "axios";
import ReactECharts from "echarts-for-react";

export const Stat = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    axios({
      method: "POST",
      // url: "https://sprinttech-food-menu-api-iinykauowa-uc.a.run.app/get-orders",
      // url: `${process.env.REACT_APP_BASE_API_URL}/get-orders`,
      url: `http://localhost:8000/binKitchen/get-orders`,
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
        accArray[item.menu?.id] = {
          menu_id: item.menu?.id,
          price: item.menu?.price,
          quantity: (accArray[item.menu?.id]?.quantity ?? 0) + item.quantity,
          name: item.menu?.name,
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
    grid: {
      containLabel: false,
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
        // height: 20,
      },
    },
    series: [
      {
        data: ordersByMenuItem(orders).map((menuItem) => menuItem.quantity),
        type: "bar",
        color: "#2563eb",
        // barWidth: 10,
        // barCategoryGap: 10,
      },
    ],
    tooltip: {
      trigger: "axis",
    },
  };
  // console.log(ordersByMenuItem(orders));

  const optionForBestSellingMenu = {
    title: {
      text: "Best Selling Menu",
    },
    tooltip: {
      trigger: "item",
    },
    legend: {
      orient: "vertical",
      left: "left",
      top: "bottom",
    },
    series: [
      {
        name: "Menu item",
        type: "pie",
        radius: "50%",
        data: ordersByMenuItem(orders)
          .map((menuItem) => ({
            value: menuItem.price * menuItem.quantity,
            name: menuItem.name,
          }))
          .sort((a, b) => b.value - a.value),
        emphasis: {
          itemStyle: {
            shadowBlur: 10,
            shadowOffsetX: 0,
            shadowColor: "rgba(0, 0, 0, 0.5)",
          },
        },
      },
    ],
  };

  return (
    <div className="px-4 pt-4 font-nstl text-sm">
      <h1 className="mb-4 font-prompt text-4xl font-bold">สถิติ</h1>
      {/* <p className="mb-4">สถิติ</p> */}
      <ReactECharts option={optionForMostPopularMenu} style={{ height: 400 }} />
      <ReactECharts option={optionForBestSellingMenu} style={{ height: 400 }} />
      {/* <p>{JSON.stringify(ordersByMenuItem(orders))}</p> */}
    </div>
  );
};
