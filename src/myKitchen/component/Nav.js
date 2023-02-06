import { Link } from "react-router-dom";
const Nav = () => {
  return (
    <>
      <div className=" fixed bg-cyan-200 flex flex-row w-screen flex-justify-between h-[50px]  space-x-5 p-2">
        <div>Menu</div>
        <div>MyKitchen</div>
        <div><Link to="home/faqs">FAQ</Link></div>  
      </div>
    </>
  );
};
export default Nav;
