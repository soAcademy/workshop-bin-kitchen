import { FaAlignJustify } from "react-icons/fa";

const Nav=()=>{

  return (
    <>
    <div className="bg-gradient-to-r from-red-500 to-red-600 h-[50px] w-full fixed flex flex-row items-center pl-5 opacity-75 shadow-lg shadow-yellow-500/50">
    <div className="text-white"><FaAlignJustify/></div>
    <div className='pl-5 font-bold text-xl text-white '>Heaven Kitchen</div>
  </div>
    </>
  );
};
export default Nav;