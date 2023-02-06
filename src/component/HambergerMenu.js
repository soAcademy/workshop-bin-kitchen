import {useState,useEffect} from 'react';
import { FaBars } from "react-icons/fa";
import { Link } from 'react-router-dom';


const HambergerMenu=(props)=>{
  const[toggle,setToggle]=useState(false);
  const[component,setComponent] = useState();
  // useEffect(()=>{
  //   return setColor=(true);
  // },[toggle]);

  return(
    <>
   <button onClick={()=> setToggle(!toggle)} className='text-bold text-xl text-white pl-4 pt-2 static'><FaBars/></button>
   {toggle &&<div className="text-white absolute"><div className='bg-red-500 mt-2 pl-4 w-[1000px]  hover:bg-red'>เมนูอาหาร</div>
                  <div className='bg-red-500  pl-4 w-full hover:bg-red-300'><Link to="/Table">รายการสั่งอาหาร</Link></div>
                  <div className='bg-red-500 pl-4 pb-2 w-full rounded-br-lg hover:bg-red-300 '>สถิติ</div>  
                 
              </div>}
            
                  
  
    </>
  );
};
export default HambergerMenu;