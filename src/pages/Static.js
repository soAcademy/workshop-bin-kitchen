import { useEffect, useState, useContext } from "react";
import ReactECharts from "echarts-for-react";
import axios from "axios";
import { UserContext } from "../App";

const Static = () => {
  const [barDatas, setBarDatas] = useState([]);
  const [pieDatas, setPieDatas] = useState([]);
  const [tbPieDatas, setTbPieDatas] = useState([]);
  const { setLoadingPage } = useContext(UserContext);

  useEffect(() => {
    setLoadingPage(true);
    const config = {
      method: "post",
      maxBodyLength: Infinity,
      // url: "https://sprinttech-food-menu-api-iinykauowa-uc.a.run.app/get-orders",
      url: "http://localhost:3000/binKitchen/getOrders",
      headers: {},
    };

    axios(config)
      .then(function (response) {
        // console.log(response.data);
        const barOrder = [...new Set(response.data.map((data) => data.items))]
          .flat()
          .reduce((acc, item) => {
            const indexId = acc.findIndex(
              (order) => order.menuId === item.menuId
            ); 
            if (indexId > -1) {
              acc[indexId].quantity = acc[indexId].quantity + item.quantity;
              acc[indexId].totalPrice =
                acc[indexId].totalPrice + item.totalPrice;
            } else {
              acc = [...acc, item];
            }
            return acc;
          }, [])
          .sort((a, b) => b.quantity - a.quantity);
        // console.log(barOrder);
        setBarDatas(barOrder);

        const valueOrder = barOrder.map((r) => ({
          name: r.menu.name,
          value: r.totalPrice,
        }));
        // console.log(valueOrder);
        setPieDatas(valueOrder);

        const tbPieChart = [...new Set(response.data.map((r) => r.tableId))]
          .sort((a, b) => a - b)
          .map((tbNo) => {
            // console.log(tbNo);
            const cntFilTb = response.data.filter(
              (r) => r.tableId === tbNo
            ).length;
            // console.log(cntFilTb);
            return { name: "โต๊ะ " + tbNo, value: cntFilTb };
          });

        // console.log(tbPieChart);
        setTbPieDatas(tbPieChart);

        setLoadingPage(false);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  const barChart = {
    xAxis: {
      type: "category",
      data: barDatas.map((r) => r.menu.name),
      axisLabel: {
        rotate: 80,
        margin: 2,
      },
    },
    yAxis: {
      type: "value",
      max: Math.max(...barDatas.map((r) => r.quantity)) + 10,
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
      </div>
    </div>
  );
};

export default Static;
