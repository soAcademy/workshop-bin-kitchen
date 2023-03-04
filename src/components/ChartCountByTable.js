import { useState, useEffect } from "react";
import axios from "axios";
import ReactECharts from "echarts-for-react";

export const ChartCountByTable = () => {
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
      let uniqueTable = [...new Set(orderData.map((x) => x.table_id))];

      console.log(uniqueTable);

      let calTable = uniqueTable.map((table_id) => {
        let total_price = orderData
          .filter((item) => item.table_id === table_id)
          .reduce((acc, item) => (acc += item.total_price), 0);
        // console.log(count)

        return {
          table_id: table_id,
          totalPrice: total_price,
        };
      });

      // console.log(flatItems);
      setChartData(calTable);
    }
  }, [orderData]);

  const options = {
    title: {
      text: "Total price by Table_Id",
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
        top: 50,
        data: chartData.map((item) => ({
          value: item.totalPrice,
          name: item.table_id,
        })),
      },
    ],
  };

  return (
    <div>
      <h1>Chart Total Price By Table_Id</h1>
      <ReactECharts
        // style={{height:500}}
        option={options}
      />
      {/* <p>{JSON.stringify(orderData)}</p> */}
    </div>
  );
};
