import React, { useState, useEffect } from "react";
import axios from "axios";
import ReactECharts from "echarts-for-react";
const Stat = () => {
  const [orders, setOrders] = useState([]);
  const [totalPricePerTable, setTotalPricePerTable] = useState([]);
  useEffect(() => {
    axios({
      method: "post",
      // url: "https://sprinttech-food-menu-api-iinykauowa-uc.a.run.app/get-orders",
      url: "http://localhost:3000/binKitchen/getManyOrders"
    })
      .then((response) => {
        console.log("data4", response.data);
        setOrders(response.data);
        setTotalPricePerTable(response.data);
      })
      .catch((error) => console.log("error", error));
  }, []);

  const result = orders.map((menu) => menu.items);
  // console.log("result", result);
  const resultFlattened = result.flat();
  // console.log("result1", resultFlattened);
  const resultFlattenedReduced = resultFlattened
    .reduce((acc, item) => {
      const idx = acc.findIndex((order) => order.id === item.id); //checks if an object with the same menu_id exists in the accumulator (acc)
      if (idx !== -1) {
        acc[idx].quantity += item.quantity; //if the item is already in the array, simply add the quantity of the current item
        acc[idx].total_price = acc[idx].total_price + item.total_price;
      } else {
        acc = [...acc, item]; //if the item (object) doesn't yet exist, add it
      }

      return acc;
    }, [])
    .sort((a, b) => b.quantity - a.quantity);

  const resultTable = totalPricePerTable.map((menu) => ({
    table_Id: menu.table_id,
    totalPrice: menu.total_price,
  }));
  console.log("resulttable", resultTable);

  const resultFlattenedReducedTable = resultTable.reduce((acc, item) => {
    const idx = acc.findIndex((table) => table.table_Id === item.table_Id); //checks if an object with the same menu_id exists in the accumulator (acc)
    if (idx !== -1) {
      acc[idx].totalPrice = acc[idx].totalPrice + item.totalPrice; //if the item is already in the array, simply add the quantity of the current item
    } else {
      acc = [...acc, item]; //if the item (object) doesn't yet exist, add it
    }

    return acc;
  }, []);

  console.log("result2", resultFlattenedReduced);
  const chart1 = {
    yAxis: {
      type: "value",
    },
    xAxis: {
      type: "category",
      data: resultFlattenedReduced.map((r) => r.name),
      
    },
    axisLabel: {
      rotate: -90,
    },
    series: [
      {
        data: resultFlattenedReduced.map((r) => r.quantity),
        type: "bar",
      },
    ],
  };
  console.log("chart1", chart1);

  const chart2 = {
    title: {
      text: "Sales per Menu",
      left: "center",
    },
    legend: {
      orient: "vertical",
      left: "left",
    },
    series: [
      {
        name: "Access From",
        type: "pie",
        radius: "50%",
        data: resultFlattenedReduced.map((r) => ({
          value: r.total_price,
          name: r.name,
        })),
        emphasis: {
          itemStyle: {
            shadowBlur: 50,
            shadowOffsetX: 10,
            shadowColor: "rgba(0, 0, 0, 0.5)",
          },
        },
      },
    ],
    tooltip: {
      trigger: "item",
    },
  };
  const chart3 = {
    title: {
      text: "Sales per Menu",
      left: "center",
    },
    legend: {
      orient: "vertical",
      left: "left",
    },
    series: [
      {
        name: "Access From",
        type: "pie",
        radius: "50%",
        data: resultFlattenedReducedTable.map((r) => ({
          name: r.table_Id,
          value: r.totalPrice,
        })),
        emphasis: {
          itemStyle: {
            shadowBlur: 50,
            shadowOffsetX: 10,
            shadowColor: "rgba(0, 0, 0, 0.5)",
          },
        },
      },
    ],
    tooltip: {
      trigger: "item",
    },
  };
  return (
    <>
      <div className="text-white mb-5">..</div>
      <div className="top-12">
        <ReactECharts option={chart1} />
      </div>
      <ReactECharts option={chart2} />
      <ReactECharts option={chart3} />
    </>
  );
};
export default Stat;
