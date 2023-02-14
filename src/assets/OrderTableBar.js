import { useEffect, useState } from "react";
import ReactECharts from "echarts-for-react";

export const OrderTableBar = ({ tableQuantity }) => {
  const [options, setOptions] = useState({});

  useEffect(() => {
    const _options = {
      textStyle: {
        fontFamily: "Kanit",
      },
      title: {
        text: "ยอดขายรวมแต่ละโต๊ะ",
      },
      yAxis: {
        data: tableQuantity.map((e) => "โต๊ะ " + e.table_id),
        type: "category",
        name: "โต๊ะ",
        axisLabel: {
          show: true,
          interval: 0,
          rotate: 20,
          // formatter: 'โต๊ะ {a}'
        },
      },
      xAxis: {
        type: "value",
        name: "ยอดขาย",
        min: "dataMin",
        max: 22000,
      },
      series: [
        {
          type: "bar",
          name: "ยอดขาย",
          data: tableQuantity.map((e) => e.total_value),
          emphasis: {
            itemStyle: {
              shadowBlur: 10,
              shadowOffsetX: 0,
              shadowColor: "rgba(0, 0, 0, 0.5)",
            },
          },
          label: {
            show: true,
            position: "right",
            textStyle: {
              color: "blue",
            },
          },
        },
      ],
      tooltip: {
        trigger: "item",
      },
      grid: [
        {
          // containLabel: true,
          left: "15%",
          right: "15%",
          height: "70%",
        },
      ],
    };
    setOptions(_options);
  }, [tableQuantity]);

  return <ReactECharts option={options} />;
};
