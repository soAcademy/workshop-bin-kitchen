import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import ReactECharts from "echarts-for-react";

const Stats = () => {
  const [chart1, setChart1] = useState([]);
  const [chart2, setChart2] = useState([]);
  const [chart3, setChart3] = useState([]);
  // console.log("Chart1: ", chart1);
  // console.log("Chart2: ", chart2);
  console.log("Chart3: ", chart3);

  // useEffect(() => {
  //   const config = {
  //     method: "post",
  //     // maxBodyLength: Infinity,
  //     url: "https://sprinttech-food-menu-api-iinykauowa-uc.a.run.app/get-orders",
  //     headers: {},
  //   };

  //   axios(config)
  //     .then(function (response) {
  //       // console.log("testData: ", JSON.stringify(response.data));
  //       const getOrderedItems = () => {
  //         const totalOrder = Object.values(
  //           response.data
  //             .flatMap((r) => r.items)
  //             .reduce((acc, i) => {
  //               if (!acc[i.name]) {
  //                 acc[i.name] = {
  //                   name: i.name,
  //                   qty: 0,
  //                   totalPrice: i.totalPrice,
  //                 };
  //               }
  //               acc[i.name].qty += i.quantity;
  //               acc[i.name].totalPrice += acc[i.name].totalPrice;
  //               return acc;
  //             }, {})
  //         ).sort((a, b) => b.qty - a.qty);
  //         return totalOrder;
  //       };
  //       setChart1(getOrderedItems);
  //       console.log("getOrderedItems: ", getOrderedItems());

  //       const totalPrice = getOrderedItems().map((r) => ({
  //         name: r.name,
  //         value: r.total_price,
  //       }));
  //       setChart2(totalPrice);
  //       console.log("totalPrice", totalPrice);
  //     })
  //     .catch(function (error) {
  //       console.log(error);
  //     });
  // }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.post(
          "https://sprinttech-food-menu-api-iinykauowa-uc.a.run.app/get-orders"
        );
        const getOrderedItems = response.data
          .reduce((acc, r) => {
            r.items.forEach((r) => {
              const filterId = acc.findIndex(
                (order) => order.menu_id === r.menu_id
              );
              if (filterId >= 0) {
                acc[filterId].quantity += r.quantity;
                acc[filterId].total_price += r.total_price;
              } else {
                acc.push(r);
              }
            });
            return acc;
          }, [])
          .sort((a, b) => b.quantity - a.quantity);
        setChart1(getOrderedItems);
        console.log("getOrderedItems: ", getOrderedItems);
        setChart2(
          getOrderedItems.map((r) => ({ name: r.name, value: r.total_price }))
        );

        const tableId = [...new Set(response.data.map((r) => r.table_id))]
          .sort((a, b) => a - b)
          .map((i) => {
            const filterValueTable = response.data.filter(
              (r) => r.table_id === i
            ).length;
            return { name: i, value: filterValueTable };
          });

        setChart3(tableId);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);

  const option1 = {
    xAxis: {
      type: "category",
      name: "menus",
      axisLabel: { interval: 0, rotate: 30 },
      data: chart1.map((r) => r.name),
    },
    yAxis: {
      type: "value",
      name: "totalOrder",
    },
    series: [
      {
        type: "bar",
        data: chart1.map((r) => r.quantity),
      },
    ],
    tooltip: {
      trigger: "axis",
    },
  };

  const option2 = {
    title: {
      text: "TotalPriceByMenus",
      left: "center",
    },
    tooltip: {
      trigger: "item",
    },
    legend: {
      orient: "vertical",
      left: "left",
      top: "10%",
      itemGap: 5,
      itemHeight: 8,
    },
    series: [
      {
        name: "Menus",
        type: "pie",
        radius: "50%",
        data: chart2,
        left: "30%",
        emphasis: {
          itemStyle: {
            shadowBlur: 10,
            shadowOffsetX: 0,
            shadowColor: "rgba(0, 0, 0, 0.5)",
          },
        },
        label: {
          show: false,
        },
      },
    ],
  };

  const option3 = {
    title: {
      text: "TotalOrdersByTable",
      left: "center",
    },
    tooltip: {
      trigger: "item",
    },
    legend: {
      orient: "vertical",
      left: "left",
      top: "10%",
      itemGap: 5,
      itemHeight: 8,
    },
    series: [
      {
        name: "Table",
        type: "pie",
        radius: "50%",
        data: chart3,
        left: "30%",
        emphasis: {
          itemStyle: {
            shadowBlur: 10,
            shadowOffsetX: 0,
            shadowColor: "rgba(0, 0, 0, 0.5)",
          },
        },
        label: {
          show: false,
        },
      },
    ],
  };

  return (
    <div className="px-4 w-full mt-20">
      <div>
        <Link to="/stats">
          <p className="font-normal font-[Prompt] text-3xl text-center">
            สถิติ
          </p>
        </Link>
      </div>
      <div className="w-full pb-5">
        <ReactECharts option={option1} />
      </div>
      <div className="w-full mt-10">
        <ReactECharts option={option2} />
      </div>
      <div className="w-full mt-10">
        <ReactECharts option={option3} />
      </div>
    </div>
  );
};

export default Stats;
