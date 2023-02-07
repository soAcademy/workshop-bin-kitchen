import axios from "axios";
import { useState, useEffect } from "react";
import ReactECharts from "echarts-for-react";

const Stat = () => {
  const [orders, setOrders] = useState([]);
  const [orderId, setOrderId] = useState(0);
  const order = JSON.parse(localStorage.getItem("orders")) ?? [];
  const [totalPrice, setTotalPrice] = useState(undefined);
  const [chart1, setChart1] = useState({});
  const [chart2, setChart2] = useState({});
  const [chart3, setChart3] = useState({});

useEffect(() => {
  axios({
    method: "post",
    url: "https://sprinttech-food-menu-api-iinykauowa-uc.a.run.app/get-orders",
  }).then((response) => {
    // format the data from the API to be used in charts
    setChart1(response);
// console.log("response:" + JSON.stringify(response.orderId));
});
}, []);


// จะทำ Pie Chart ขึ้นมา
const options = {
  title: { text: "chart1", left: "center" },
  tooltip: { trigger: "item" },
  legend: { orient: "vertical", left: "left" },
  series: [
    {
      name: "Access From",
      type: "pie",
      radius: "50%",
      data: chart1.map((r) => ({
        value: r.orderValue,
        name: r.name,
      })),
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
  <>
    <ReactECharts option={Stat} />
  </>
)
};

export default Stat;