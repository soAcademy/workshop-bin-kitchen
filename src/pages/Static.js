import { useState, useEffect } from "react";
import axios from "axios";
// import ReactECharts from "echarts-for-react";

const Static = () => {

  const [order, setOrder] = useState()

useEffect(() => {
  axios({
    method: "post",
    url: "https://sprinttech-food-menu-api-iinykauowa-uc.a.run.app/get-orders",
  }).then((response) => {
    console.log("response:",response)
    setOrder(response.data)
  });
},[])

console.log("order:",order)

const menuList = order.map((r) => r.items)
console.log("menuList:",menuList)
const menuName = order.map((n) => n.name)
console.log("menuName:",menuName)


}

export default Static