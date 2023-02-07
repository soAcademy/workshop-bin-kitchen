import { useState, useEffect } from "react";
import axios from "axios";
import ReactECharts from "echarts-for-react";

export const Statistic = () => {
  const [orderData, setOrderData] = useState([]);

  // todo 1 : call API
  useEffect(() => {
    axios({
      method: "post",
      url: "https://sprinttech-food-menu-api-iinykauowa-uc.a.run.app/get-orders",
    }).then((response) => {
      console.log(response);
      setOrderData(response.data);
      console.log(response.data);
    });
  }, []);

  const orders = [
    {
      menuName: "2022-01-13",
      menuCount: 6000,
    },
    {
      menuName: "2022-01-14",
      menuCount: 25000,
    },
    {
      menuName: "2022-01-15",
      menuCount: 4000,
    },
    {
      menuName: "2022-01-16",
      menuCount: 23000,
    },
  ]; 


  const options = {
    xAxis: {
      type: "category",
      data: orders.map((order) => order.menuName),
      name: "ชื่อเมนู",
    },
    yAxis: {
      type: "value",
      name: "จำนวนสั่งซื้อ",
      // max:  dataMax,
      // min: dataMin,
      max: 25000,
      min: 4000,
    },
    series: [
      {
        data: orders.map((order) => order.menuCount),
        type: "bar",
        smooth: true,
        lineStyle: { color: "#d5ceeb", width: 5, type: "dashed" },
      },
    ],
    tooltip: {
      trigger: "item",
    },
  };

  return (
    <>
      <ReactECharts option={options}/>
      {/* <p>{JSON.stringify(orderData)}</p> */}
    </>
  );
};
