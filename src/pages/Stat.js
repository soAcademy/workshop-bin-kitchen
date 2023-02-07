import React, { useState, useEffect } from "react";
import axios from "axios";
import ReactECharts from "echarts-for-react";
const Stat = () => {
  const mockData = [
    {
      order_id: 347,
      table_id: 3,
      status: "WAITING",
      total_price: 150,
      items: [
        {
          id: 1,
          menu_id: 1,
          price: 150,
          quantity: 1,
          total_price: 150,
          name: "แกงส้มชะอมกุ้ง",
          image:
            "https://img.wongnai.com/p/1920x0/2018/12/17/bf69cc77dfb94a5ab6df20ffb0622cd2.jpg",
          category: "แนะนำ",
        },
      ],
    },
    {
      order_id: 345,
      table_id: 5,
      status: "WAITING",
      total_price: 500,
      items: [
        {
          id: 1,
          menu_id: 1,
          price: 150,
          quantity: 2,
          total_price: 300,
          name: "แกงส้มชะอมกุ้ง",
          image:
            "https://img.wongnai.com/p/1920x0/2018/12/17/bf69cc77dfb94a5ab6df20ffb0622cd2.jpg",
          category: "แนะนำ",
        },
        {
          id: 5,
          menu_id: 5,
          price: 200,
          quantity: 1,
          total_price: 200,
          name: "หมูสามชั้นคั่วพริกเกลือ",
          image: "https://i.ytimg.com/vi/nh4nzZza4yE/maxresdefault.jpg",
          category: "แนะนำ",
        },
      ],
    },
    {
      order_id: 344,
      table_id: 5,
      status: "WAITING",
      total_price: 500,
      items: [
        {
          id: 1,
          menu_id: 1,
          price: 150,
          quantity: 2,
          total_price: 300,
          name: "แกงส้มชะอมกุ้ง",
          image:
            "https://img.wongnai.com/p/1920x0/2018/12/17/bf69cc77dfb94a5ab6df20ffb0622cd2.jpg",
          category: "แนะนำ",
        },
        {
          id: 5,
          menu_id: 5,
          price: 200,
          quantity: 1,
          total_price: 200,
          name: "หมูสามชั้นคั่วพริกเกลือ",
          image: "https://i.ytimg.com/vi/nh4nzZza4yE/maxresdefault.jpg",
          category: "แนะนำ",
        },
      ],
    },
    {
      order_id: 342,
      table_id: 5,
      status: "WAITING",
      total_price: 500,
      items: [
        {
          id: 1,
          menu_id: 1,
          price: 150,
          quantity: 2,
          total_price: 300,
          name: "แกงส้มชะอมกุ้ง",
          image:
            "https://img.wongnai.com/p/1920x0/2018/12/17/bf69cc77dfb94a5ab6df20ffb0622cd2.jpg",
          category: "แนะนำ",
        },
        {
          id: 5,
          menu_id: 5,
          price: 200,
          quantity: 1,
          total_price: 200,
          name: "หมูสามชั้นคั่วพริกเกลือ",
          image: "https://i.ytimg.com/vi/nh4nzZza4yE/maxresdefault.jpg",
          category: "แนะนำ",
        },
      ],
    },
    {
      order_id: 1,
      table_id: 5,
      status: "DONE",
      total_price: 500,
      items: [
        {
          id: 1,
          menu_id: 1,
          price: 150,
          quantity: 2,
          total_price: 300,
          name: "แกงส้มชะอมกุ้ง",
          image:
            "https://img.wongnai.com/p/1920x0/2018/12/17/bf69cc77dfb94a5ab6df20ffb0622cd2.jpg",
          category: "แนะนำ",
        },
        {
          id: 5,
          menu_id: 5,
          price: 200,
          quantity: 1,
          total_price: 200,
          name: "หมูสามชั้นคั่วพริกเกลือ",
          image: "https://i.ytimg.com/vi/nh4nzZza4yE/maxresdefault.jpg",
          category: "แนะนำ",
        },
      ],
    },
  ];

  // const totalOrderByMenu = () => {
  const result = mockData.map((menu) => menu.items);
  console.log("result", result);
  const resultFlattened = result.flat();
  console.log("result1", resultFlattened);
  const resultFlattenedReduced = resultFlattened.reduce((acc, item) => {
    const idx = acc.findIndex((order) => order.id === item.id); //checks if an object with the same menu_id exists in the accumulator (acc)
    if (idx !== -1) {
      acc[idx].quantity += item.quantity; //if the item is already in the array, simply add the quantity of the current item
    } else {
      acc = [...acc, item]; //if the item (object) doesn't yet exist, add it
      
    } 
    

    return acc;
  }, []);

  console.log("result2", resultFlattenedReduced);
  // console.log(
  //   "resultMap",
  //   resultFlattenedReduced.map((r) => r.name)
  // );
  //   return result;
  // };
  // console.log("result", totalOrderByMenu)

  const [orders, setOrders] = useState([]);
  const [chartData1, setChartData1] = useState({});
  useEffect(() => {
    axios({
      method: "post",
      url: "https://sprinttech-food-menu-api-iinykauowa-uc.a.run.app/get-orders",
    })
      .then((response) => {
        console.log("data4", response.data);
        setOrders(response.data);
      })
      .catch((error) => console.log("error", error));
  }, []);
  const chart1 = {
    yAxis: {
      type: "value",
      
    },
    xAxis: {
      type: "category",
      data: resultFlattenedReduced.map((r) => r.name),
    },
    series: [
      {
        data:  resultFlattenedReduced.map((r) => r.quantity),
        type: "bar",
      },
    ],
  };
  console.log("chart1", chart1);
  return (
    <>
      <ReactECharts option={chart1} />
    </>
  );
};
export default Stat;
