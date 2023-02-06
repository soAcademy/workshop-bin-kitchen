import { useEffect,useState } from "react";
const Background =(props)=>{
  // const[color,setColor]=useState(false);
  // useEffect(()=>{
  //   setColor = (true);
  // },[color]);
  return(
    <>
    {console.log('Background',props)}
    <div className="bg-cyan-500 h-[500px] w-[500px]">"5555"</div>
    </>
  );
};
export default Background;