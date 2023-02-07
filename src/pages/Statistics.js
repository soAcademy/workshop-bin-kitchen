import React, { useState, useEffect } from "react";
import ReactECharts from "echarts-for-react";
import axios from "axios";

const Statistics = () => {
  const [data, setData] = useState([]);
  const [totalPriceTable, setTotalPriceTable] = useState([]);

  // ใช้ useEffect เพื่อให้โชว์ข้อมูลเลยหลังจากยิง api
  useEffect(() => {
    axios({
      method: "post",
      url: "https://sprinttech-food-menu-api-iinykauowa-uc.a.run.app/get-orders",
    })
      .then((response) => {
        console.log(response);
        const menus = transformMenusData(response);
        setData(menus);
        //-------------------------------------------
        const table = transformTableData(response);
        setTotalPriceTable(table);
      })
      .catch((error) => console.log(error));
  }, []);
  //--------------------- menus ----------------------
  const transformMenusData = (res) => {
    const menus = res?.data
      .map((item) => {
        return item.items;
      })
      .flat()
      .reduce((acc, r) => {
        const existIdx = acc.findIndex((obj) => {
          return obj.menuId === r.menu_id;
          // ถ้ามันเทีบย id แล้วตรงกันก็จะได้เลข idx นั้นออกมา
        });
        if (existIdx !== -1) {
          acc[existIdx].quantity += r.quantity;
        } else {
          const obj = {
            menuId: r.menu_id,
            quantity: r.quantity,
            name: r.name,
            price: r.price,
            tableId: r.table_id,
          };
          acc.push(obj);
          // เพิ่ม obj ก้อนใหม่เข้าไปใน array
        }
        return acc;
      }, []);
    return menus;
  };
  //--------------------- tableData ----------------------
  const transformTableData = (res) => {
    const table = res?.data
      .map((item) => {
        return {
          tableId: item.table_id,
          totalPrice: item.total_price,
        };
      })
      .reduce((acc, r) => {
        const existIdx = acc.findIndex((obj) => {
          return obj.tableId === r.tableId;
        });
        if (existIdx === -1) {
          const obj = {
            tableId: r.tableId,
            totalPrice: r.totalPrice,
          };
          acc.push(obj);
        } else {
          acc[existIdx].totalPrice += r.totalPrice;
        }
        return acc;
      }, []);
    return table;
  };

  // ------------ chart1 ---------------
  const bar = {
    xAxis: {
      type: "category", //*
      data: data.map((r) => r.name),
      axisTick: {
        alignWithLabel: true,
      },
      axisLabel: {
        rotate: 90,
      },
    },
    yAxis: {
      type: "value",
    },

    series: [
      {
        data: data.map((r) => r.quantity),
        type: "bar",
        showBackground: true,
        backgroundStyle: {
          color: "rgba(180, 180, 180, 0.2)",
        },
      },
    ],
  };
  // ------------ chart2 ---------------
  const pricePerMenu = {
    title: {
      // text: "ยอดขายรายเมนู ครัวกาตุ่ย",
      left: "center",
    },

    series: [
      {
        name: "Access From",
        type: "pie",
        radius: "50%",
        data: data.map((item) => {
          return {
            name: item.name,
            value: item.quantity * item.price,
          };
        }),
      },
    ],
    emphasis: {
      itemStyle: {
        shadowBlur: 10,
        shadowOffsetX: 0,
        shadowColor: "rgba(0, 0, 0, 0.5)",
      },
    },
  };
  // ------------ chart3 ---------------
  const topOrderTable = {
    title: {
      // text: "ยอดขายต่อโต๊ะ ครัวกาตุ่ย",
      left: "center",
    },

    series: [
      {
        name: "Access From",
        type: "pie",
        radius: "50%",
        data: totalPriceTable.map((item) => {
          return {
            name: item.tableId,
            value: item.totalPrice,
          };
        }),
      },
    ],
    emphasis: {
      itemStyle: {
        shadowBlur: 10,
        shadowOffsetX: 0,
        shadowColor: "rgba(0, 0, 0, 0.5)",
      },
    },
  };

  return (
    <>
      <div className="mb-6 flex flex-col items-center">
        <h1 className="text-2xl mt-7 text-sky-700">จำนวนเมนูที่ถูกสั่ง</h1>
        <ReactECharts className="w-[550px] h-[550px]" option={bar} />
      </div>
      <div className=" flex flex-col items-center border-2 border-sky-500 ">
        <h1 className="text-2xl mt-7 text-sky-700">ยอดขายรายเมนู ครัวกาตุ่ย</h1>
        <ReactECharts
          className="mt-10 w-[550px] h-[550px] "
          option={pricePerMenu}
        />
      </div>
      <div className="flex flex-col items-center">
        <h1 className="text-2xl mt-7 text-sky-700">ยอดขายต่อโต๊ะ ครัวกาตุ่ย</h1>
        <ReactECharts
          className="mt-10 w-[550px] h-[550px]"
          option={topOrderTable}
        />
      </div>
    </>
  );
};

export default Statistics;
