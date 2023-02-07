import { useState, useEffect } from "react";
import axios from "axios";
import ReactECharts from "echarts-for-react";

export const ChartTotalPriceByName = () => {
  const [orderData, setOrderData] = useState(null);
  const [chartData, setChartData] = useState([]);

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

      let calTable = uniqueName.map(name=>{

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
          totalPrice: totalPrice
        }
      })

      // console.log(flatItems);
      setChartData(calTable)
    }
  }, [orderData]);

  const options = {
    title: {
      text: "Order by Product",
      left: "center",
    },
    tooltip: {
      trigger: "item",
    },
    legend: {
      orient: "vertical",
      left: "left",
    },
    series: [
      {
        name: "Access Form",
        type: "pie",
        radius: "50%",
        data: chartData.map((item) => ({
          value: item.totalPrice,
          name: item.menuName,
        })),
      },
    ],
  };

  return (
    <div>
    <h1>Chart Total Price By Name</h1>
      <ReactECharts option={options} />
      {/* <p>{JSON.stringify(orderData)}</p> */}
    </div>
  );
};
  