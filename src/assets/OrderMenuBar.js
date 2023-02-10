import { useEffect, useState } from "react";
import ReactECharts from "echarts-for-react";

const OrderMenuBar = ({ menuQuantity }) => {
  const [options, setOptions] = useState({});

  useEffect(() => {
    const _options = {
      textStyle: {
        fontFamily: "Kanit",
      },
      title: {
        text: "จำนวนการสั่งอาหารแต่ละเมนู",
      },
      xAxis: {
        data: menuQuantity.map((e) => e.name),
        type: "category",
        axisLabel: {
          show: true,
          rotate: 45,
        },
      },
      yAxis: {},
      series: [
        {
          type: "bar",
          data: menuQuantity.map((e) => e.quantity),
          emphasis: {
            itemStyle: {
              shadowBlur: 10,
              shadowOffsetX: 0,
              shadowColor: "rgba(0, 0, 0, 0.5)",
            },
          },
          label: {
            show: true,
            textStyle: {
              color: "blue",
            },
            position: "top",
            formatter: "{c}",
          },
        },
      ],
      tooltip: {
        trigger: "item",
      },
      grid: [
        {
          left: "10%",
          right: "8%",
          height: "50%",
        },
      ],
    };
    setOptions(_options);
  }, [menuQuantity]);

  return <ReactECharts option={options} />;
};

export default OrderMenuBar;
