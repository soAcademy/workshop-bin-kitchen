import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import ReactECharts from "echarts-for-react";

const Stats = () => {
  const [orders, setOrders] = useState([]);
  const [chart1, setChart1] = useState({});
  const [chart2, setChart2] = useState({});

  useEffect(() => {
    const getData = async () => {
      try {
        const config = {
          method: "post",
          url: "https://sprinttech-food-menu-api-iinykauowa-uc.a.run.app/get-orders",
          headers: {},
        };

        const response = await axios(config);
        setOrders(response.data);
        setChart1(response.data);
        setChart2(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    getData();
  }, []);

  const getOrderedItems = () => {
    const totalOrder = Object.values(
      orders
        .flatMap((r) => r.items)
        .reduce((acc, i) => {
          if (!acc[i.name]) {
            acc[i.name] = { name: i.name, value: 0 };
          }
          acc[i.name].value += i.quantity;
          return acc;
        }, {})
    ).sort((a, b) => b.value - a.value);

    return totalOrder;
  };
  console.log("getOrderedItems: ", getOrderedItems());

  const option1 = {
    xAxis: {
      type: "category",
      name: "menus",
      axisLabel: { interval: 0, rotate: 30 },
      data: getOrderedItems().map((r) => r.name),
    },
    yAxis: {
      type: "value",
      name: "totalOrder",
    },
    series: [
      {
        type: "bar",
        data: getOrderedItems().map((r) => r.value),
      },
    ],
    tooltip: {
      trigger: "axis",
    },
  };

  return (
    <div className="px-4 w-full">
      <div className="h-14 mt-20">
        <Link to="/stats">
          <p className="font-normal font-[Prompt] text-3xl text-center">
            สถิติ
          </p>
        </Link>
      </div>
      <div>
        <ReactECharts option={option1} />
      </div>
    </div>
  );
};

export default Stats;
