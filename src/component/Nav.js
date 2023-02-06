import { FaAlignJustify } from "react-icons/fa";
import HambergerMenu from "./HambergerMenu";

const Nav=()=>{

  return (
    <>
    <div className="bg-red-500 h-[50px] w-full fixed flex flex-row items-center pl-5 shadow-lg shadow-yellow-500/50 ">
      <div className=" "><HambergerMenu/></div>
    
      <div className='pl-7 ml-5 font-bold text-xl text-white '>Heaven Kitchen</div>
  </div>
    </>
  );
};
export default Nav;