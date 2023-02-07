import { useState, useEffect } from "react";
import axios from "axios";
import ReactECharts from "echarts-for-react";
import { graphic } from "echarts";

export const ChartCountByName = () => {
  const [orderData, setOrderData] = useState(null);
  const [chartData, setChartData] = useState([
    // {
    //   menuName: "Cola",
    //   menuCount: 8000,
    // },
    // {
    //   menuName: "Beer",
    //   menuCount: 2500,
    // },
    // {
    //   menuName: "Water",
    //   menuCount: 4000,
    // },
    // {
    //   menuName: "Coffee",
    //   menuCount: 2300,
    // },
  ]);

  // todo 1 : call API
  useEffect(() => {
    axios({
      method: "post",
      url: "https://sprinttech-food-menu-api-iinykauowa-uc.a.run.app/get-orders",
    }).then((response) => {
      // console.log(response);
      setOrderData(response.data);
      // console.log(response.data);
    });
  }, []);

  //todo:2 arrange chartData when orderData changed
  useEffect(() => {
    if (orderData) {
      let flatItems = orderData.map((order) => order.items).flat();

      let uniqueName = [
        ...new Set(
          orderData
            .map((order) => order.items)
            .flat()
            .map((x) => x.name)
        ),
      ];

      let calTable = uniqueName.map((name) => {
        let count = flatItems
          .filter((item) => item.name === name)
          .reduce((acc, item) => (acc += item.quantity), 0);
        // console.log(count)

        let totalPrice = flatItems
          .filter((item) => item.name === name)
          .reduce((acc, item) => (acc += item.total_price), 0);

        return {
          menuName: name,
          menuCount: count,
          totalPrice: totalPrice,
        };
      });

      // console.log(flatItems);
      setChartData(calTable);
    }
  }, [orderData]);

  const options = {
    xAxis: {
      type: "category",
      data: chartData.map((data) => data.menuName),
      name: "ชื่อเมนู",
      axisLabel: {
        interval: 0,
        rotate: 25,
      },
    },
    yAxis: {
      type: "value",
      name: "จำนวนสั่งซื้อ",
      // max: 25000,
      // min: 4000,
    },
    series: [
      {
        data: chartData.map((data) => data.menuCount),
        type: "bar",
        showBackground: true,
        itemStyle: {
          color: new graphic.LinearGradient(0, 0, 0, 1, [
            { offset: 0, color: "#8ff297" },
            { offset: 0.5, color: "#a45df5" },
            { offset: 1, color: "#a45df5" },
          ]),
        },
        emphasis: {
          itemStyle: {
            color: new graphic.LinearGradient(0, 0, 0, 1, [
              { offset: 0, color: "#8ff297" },
              { offset: 0.7, color: "#8ff297" },
              { offset: 1, color: "#a45df5" },
            ]),
          },
        },
      },
    ],
    tooltip: {
      trigger: "item",
    },
  };

  return (
    <div>
      <h1>Chart Count By Name</h1>
      <ReactECharts option={options} />
      {/* <p>{JSON.stringify(orderData)}</p> */}
    </div>
  );
};
