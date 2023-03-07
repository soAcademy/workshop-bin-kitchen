import axios from "axios";
import React, { useEffect, useState } from "react";
import ReactECharts from "echarts-for-react";

const Stats = () => {
  const [graphData1, setGraphData1] = useState([]);
  const [graphData2, setGraphData2] = useState([]);

  useEffect(() => {
    const config = {
      method: "post",
      url: "http://localhost:3100/function/getOrders",
      headers: {},
    };

    axios(config)
      .then((response) => {
        console.log("RESP", response.data);

        const flatmenu = response.data.map((r) => r.BinKitchenOrderItem).flat();
        console.log("flatmenu", flatmenu);

        const uniqueMenu = [...new Set(flatmenu.map((r) => r.menu.name))];
        console.log("uniqueMenu", uniqueMenu);

        const volumeByMenu = uniqueMenu
          .map((menu) => {
            const filteredData = flatmenu.filter((r) => r.menu.name === menu);
            console.log("filteredData1", filteredData);

            const sumQ = filteredData.reduce((acc, r) => {
              acc += r.quantity;
              return acc;
            }, 0);
            console.log("sumQ", sumQ);

            const sumP = filteredData.reduce((acc, r) => {
              acc += r.totalPrice;
              return acc;
            }, 0);
            console.log("sumP", sumP);

            return {
              name: menu,
              sumQuantity: sumQ,
              sumPrice: sumP,
            };
          })
          .sort((a, b) => b.sumQuantity - a.sumQuantity);
        setGraphData1(volumeByMenu);
        console.log("graphData1", graphData1);

        const uniqueTable = [...new Set(response.data.map((r) => r.tableId))];
        console.log("uniqueTable", uniqueTable);

        const priceByTable = uniqueTable.map((table) => {
          const filteredData = response.data.filter((r) => r.tableId === table);
          console.log("filteredData", filteredData);
          const filteredData2 = filteredData.map((r) => {
            const sum = r.BinKitchenOrderItem.reduce(
              (acc, r) => acc + r.totalPrice,
              0
            );
            return sum;
          });
          console.log("filteredData2", filteredData2);
          const sum2 = filteredData2.reduce((acc, r) => acc + r, 0);
          return {
            name: table,
            sumTotalPrice: sum2,
          };
        });
        console.log("priceByTable", priceByTable);
        setGraphData2(priceByTable);
        console.log("graphData2", graphData2);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const option1 = {
    xAxis: {
      type: "category",
      data: graphData1.map((r) => r.name),
      axisLabel: { interval: 0, rotate: 60 },
    },
    yAxis: {
      type: "value",
    },
    series: [
      {
        data: graphData1.map((r) => r.sumQuantity),
        type: "bar",
      },
    ],
    grid: {
      top: "10%",
      left: "0%",
      right: "5%",
      bottom: "0%",
      containLabel: true,
    },
    tooltip: {
      trigger: "axis",
      axisPointer: {
        type: "shadow",
      },
    },
    legend: {},
    textStyle: {
      fontSize: "8",
    },
  };

  const option2 = {
    tooltip: {
      trigger: "item",
    },

    series: [
      {
        name: "Access From",
        type: "pie",
        radius: "50%",
        data: graphData1.map((r) => ({
          value: r.sumQuantity,
          name: r.name,
        })),
        emphasis: {
          itemStyle: {
            shadowBlur: 20,
            shadowOffsetX: 5,
            shadowColor: "rgba(0, 0, 0, 0.5)",
          },
        },
      },
    ],
  };

  const option3 = {
    tooltip: {
      trigger: "item",
    },

    series: [
      {
        name: "Access From",
        type: "pie",
        radius: "50%",
        data: graphData2.map((r) => ({
          value: r.sumTotalPrice,
          name: r.name,
        })),
        emphasis: {
          itemStyle: {
            shadowBlur: 20,
            shadowOffsetX: 5,
            shadowColor: "rgba(0, 0, 0, 0.5)",
          },
        },
      },
    ],
  };

  return (
    <>
      <div className="pt-20 z-10">
        <div className="mt-4 mx-6">
          <h1>จำนวนเมนูที่สั่ง</h1>
          <ReactECharts option={option1} />
        </div>
        <div className="mt-4 mx-6">
          <h1 className="mb-4">ยอดขายรายเมนู</h1>
          <ReactECharts option={option2} />
        </div>
        <div className="mt-4 mx-6">
          <h1 className="mb-4">ยอดขายรายโต๊ะ</h1>
          <ReactECharts option={option3} />
        </div>
      </div>
    </>
  );
};

// useEffect(() => {
//   const config = {
//     method: "post",
//     url: "https://sprinttech-food-menu-api-iinykauowa-uc.a.run.app/get-orders",
//     headers: {},
//   };

//   axios(config)
//     .then((response) => {
//       console.log("RESP", response.data);

//       const flatmenu = response.data.map((r) => r.items).flat();
//       console.log("flatmenu", flatmenu);

//       const uniqueMenu = [...new Set(flatmenu.map((r) => r.name))];
//       console.log("uniqueMenu", uniqueMenu);

//       const volumeByMenu = uniqueMenu
//         .map((menu) => {
//           const filteredData = flatmenu.filter((r) => r.name === menu);
//           console.log("filteredData1", filteredData);

//           const sumQ = filteredData.reduce((acc, r) => {
//             acc += r.quantity;
//             return acc;
//           }, 0);
//           console.log("sumQ", sumQ);

//           const sumP = filteredData.reduce((acc, r) => {
//             acc += r.total_price;
//             return acc;
//           }, 0);
//           console.log("sumP", sumP);

//           return {
//             name: menu,
//             sumQuantity: sumQ,
//             sumPrice: sumP,
//           };
//         })
//         .sort((a, b) => b.sumQuantity - a.sumQuantity);
//       setGraphData1(volumeByMenu);
//       console.log("graphData1", graphData1);

//       const uniqueTable = [...new Set(response.data.map((r) => r.table_id))];
//       console.log("uniqueTable", uniqueTable);

//       const priceByTable = uniqueTable.map((table) => {
//         const filteredData = response.data.filter(
//           (r) => r.table_id === table
//         );
//         console.log("filteredData2", filteredData);

//         const sum = filteredData.reduce((acc, r) => {
//           acc += r.total_price;
//           return acc;
//         }, 0);
//         console.log("sum", sum);

//         return {
//           name: table,
//           sumTotalPrice: sum,
//         };
//       });
//       setGraphData2(priceByTable);
//       console.log("graphData2", graphData2);
//     })
//     .catch((error) => {
//       console.log(error);
//     });
// }, []);

// const option1 = {
//   xAxis: {
//     type: "category",
//     data: graphData1.map((r) => r.name),
//     axisLabel: { interval: 0, rotate: 60 },
//   },
//   yAxis: {
//     type: "value",
//   },
//   series: [
//     {
//       data: graphData1.map((r) => r.sumQuantity),
//       type: "bar",
//     },
//   ],
//   grid: {
//     top: "10%",
//     left: "0%",
//     right: "5%",
//     bottom: "0%",
//     containLabel: true,
//   },
//   tooltip: {
//     trigger: "axis",
//     axisPointer: {
//       type: "shadow",
//     },
//   },
//   legend: {},
//   textStyle: {
//     fontSize: "8",
//   },
// };

// const option2 = {
//   tooltip: {
//     trigger: "item",
//   },

//   series: [
//     {
//       name: "Access From",
//       type: "pie",
//       radius: "50%",
//       data: graphData1.map((r) => ({
//         value: r.sumQuantity,
//         name: r.name,
//       })),
//       emphasis: {
//         itemStyle: {
//           shadowBlur: 20,
//           shadowOffsetX: 5,
//           shadowColor: "rgba(0, 0, 0, 0.5)",
//         },
//       },
//     },
//   ],
// };

// const option3 = {
//   tooltip: {
//     trigger: "item",
//   },

//   series: [
//     {
//       name: "Access From",
//       type: "pie",
//       radius: "50%",
//       data: graphData2.map((r) => ({
//         value: r.sumTotalPrice,
//         name: r.name,
//       })),
//       emphasis: {
//         itemStyle: {
//           shadowBlur: 20,
//           shadowOffsetX: 5,
//           shadowColor: "rgba(0, 0, 0, 0.5)",
//         },
//       },
//     },
//   ],
// };

// return (
//   <>
//     <div className="pt-20 z-10">
//       <div className="mt-4 mx-6">
//         <h1>จำนวนเมนูที่สั่ง</h1>
//         <ReactECharts option={option1} />
//       </div>
//       <div className="mt-4 mx-6">
//         <h1 className="mb-4">ยอดขายรายเมนู</h1>
//         <ReactECharts option={option2} />
//       </div>
//       <div className="mt-4 mx-6">
//         <h1 className="mb-4">ยอดขายรายโต๊ะ</h1>
//         <ReactECharts option={option3} />
//       </div>
//     </div>
//   </>
// );
// };

export default Stats;
