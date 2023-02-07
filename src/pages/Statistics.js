import React, { useState, useEffect } from "react";
import ReactECharts from "echarts-for-react";
import axios from "axios";

// ต้องทำเป็น state เพราะ render รอบแรกข้อมูลยังไม่มา ต้อง render อีกรอบแสดงข้อมูล

const Statistics = () => {
  const [barDatas, setBarDatas] = useState([]);
  const [pieDatas, setPieDatas] = useState([]);
  const [tbPieDatas, setTbPieDatas] = useState([]);
  const [totalPriceData, setTotalPriceData] = useState([]);

  // ใช้ useEffect เพื่อให้โชว์ข้อมูลเลยหลังจากยิง api
  useEffect(() => {
    const config = {
      method: "post",
      maxBodyLength: Infinity,
      url: "https://sprinttech-food-menu-api-iinykauowa-uc.a.run.app/get-orders",
      headers: {},
    };

    axios(config)
      .then(function (response) {
        console.log("response.data", response.data);

        const barOrder = [...new Set(response.data.map((data) => data.items))]
          .flat()
          .reduce((acc, item) => {
            const indexId = acc.findIndex(
              (order) => order.menu_id === item.menu_id
            );
            if (indexId !== -1) {
              acc[indexId].quantity = acc[indexId].quantity + item.quantity;
              acc[indexId].total_price =
                acc[indexId].total_price + item.total_price;
            } else {
              acc = [...acc, item];
            }
            return acc;
          }, [])
          .sort((a, b) => b.quantity - a.quantity);
        console.log("barOrder", barOrder);
        setBarDatas(barOrder);

        const valueOrder = barOrder.map((r) => ({
          name: r.name,
          value: r.total_price,
        }));
        console.log("valueOrder", valueOrder);
        setPieDatas(valueOrder);

        const tbPieChart = [...new Set(response.data.map((r) => r.table_id))]
          .sort((a, b) => a - b)
          .map((tbNo) => {
            console.log("tbNo", tbNo);
            const cntFilTb = response.data.filter(
              (r) => r.table_id === tbNo
            ).length;
            console.log("cntFilTb", cntFilTb);
            return { name: "โต๊ะ " + tbNo, value: cntFilTb };
          });
        console.log("tbPieChart", tbPieChart);
        setTbPieDatas(tbPieChart);

        const totalPriceTable = response.data
          .map((item) => {
            return {
              tableId: item.table_id,
              totalPrice: item.total_price,
            };
          })
          .reduce((acc, r) => {
            const exisIdx = acc.findIndex((obj) => {
              return obj.tableId === r.tableId;
            });
            if (exisIdx !== -1) {
              acc[exisIdx].totalPrice += r.totalPrice;
            } else {
              const obj = {
                tableId: r.tableId,
                totalPrice: r.totalPrice,
              };
              acc.push(obj);
            }
            return acc;
          }, []);

        console.log("totalPriceTable", totalPriceTable);
        const valueTable = totalPriceTable.map((item) => {
          return {
            name: item.tableId,
            value: item.totalPrice,
          };
        });
        console.log("table", valueTable);
        setTotalPriceData(valueTable);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  const barChart = {
    xAxis: {
      type: "value",
    },
    yAxis: {
      type: "category",
      data: barDatas.map((r) => r.name),
    },
    series: [
      {
        data: barDatas.map((r) => r.quantity),
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
    title: {
      text: "จำนวนเมนูที่สั่ง",
    },
  };

  const pieChart = {
    title: {
      text: "ยอดขายรายเมนู",
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
      itemWidth: 20,
      itemHeight: 8,
    },
    series: [
      {
        name: "เมนู",
        type: "pie",
        radius: "50%",
        data: pieDatas,
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

  const tbPieChart = {
    title: {
      text: "โต๊ะที่สั่งมากสุด",
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
      itemWidth: 20,
      itemHeight: 8,
    },
    series: [
      {
        name: "โต๊ะ",
        type: "pie",
        radius: "50%",
        data: tbPieDatas,
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

  const totalPriceChart = {
    title: {
      text: "โต๊ะที่ยอดขายมากสุด",
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
      itemWidth: 20,
      itemHeight: 8,
    },
    series: [
      {
        name: "โต๊ะ",
        type: "pie",
        radius: "50%",
        data: totalPriceData,
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
    <div className="w-full font-prompt pt-20 p-4">
      <div className="w-full mb-2 p-2">
        <ReactECharts
          style={{
            height: "400px",
          }}
          option={barChart}
        />
      </div>
      <div className="md:flex justify-between">
        <div className="md:w-full mb-2 p-2">
          <ReactECharts
            style={{
              height: "300px",
            }}
            option={pieChart}
          />
        </div>
        <div className="md:w-full mb-2 p-2">
          <ReactECharts option={tbPieChart} />
        </div>
        <div className="md:w-full mb-2 p-2">
          <ReactECharts option={totalPriceChart} />
        </div>
      </div>
    </div>
  );
};

export default Statistics;
