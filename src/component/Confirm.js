import {useState,useEffect} from "react";

const Confirm = ({allCart})=>{
  return  data = allCart.map(r=>(
      {
    menu_id : r.id,
    price : r.price,
    quantity : r.quantity,
    total_price : r.price * r.quantity,
      } 
    )
  )
   console.log(data);   
    };
  

export default Confirm;