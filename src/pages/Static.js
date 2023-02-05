import { useEffect, useState } from "react";
import ReactECharts from "echarts-for-react";
import axios from "axios";
import LoadingPages from "../Components/LoadingPage";

const Static = () => {
  const [statDatas, setStatDatas] = useState([]);
  const [loadingPage, setLoadingPage] = useState(false);

  useEffect(() => {
    setLoadingPage(true);
    const config = {
      method: "post",
      maxBodyLength: Infinity,
      url: "https://sprinttech-food-menu-api-iinykauowa-uc.a.run.app/get-orders",
      headers: {},
    };

    axios(config)
      .then(function (response) {
        // console.log(response.data);
        const statOrder = [...new Set(response.data.map((data) => data.items))]
          .flat()
          .reduce((acc, item) => {
            const indexId = acc.findIndex((order) => order.id === item.id);
            indexId > -1
              ? (acc[indexId].quantity = acc[indexId].quantity + item.quantity)
              : (acc = [...acc, item]);
            return acc;
          }, [])
          .sort((a, b) => a.id - b.id);
        // console.log(statOrder);
        setStatDatas(statOrder);
        setLoadingPage(false);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  const options = {
    xAxis: {
      type: "value",
    },
    yAxis: {
      type: "category",
      data: statDatas.map((r) => r.name),
    },
    series: [
      {
        data: statDatas.map((r) => r.quantity),
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
      text: "จำนวนเมนูที่ขายได้",
    },
  };

  return (
    <div className="w-full md:flex justify-center font-prompt pt-20 p-4">
      <div className="w-full md:w-1/2 bg-gray-100 p-2">
        <ReactECharts
          style={{
            height: "400px",
          }}
          option={options}
        />
      </div>

      {loadingPage && <LoadingPages />}
    </div>
  );
};

export default Static;
