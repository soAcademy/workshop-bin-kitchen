import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const [isNavOpen, setIsNavOpen] = useState();
  const [className, setClassName] = useState();
  const location = useLocation();

  // SHOW/HIDE HAMBURGER MENU
  useEffect(() => {
    setClassName(
      `bg-white fixed -top-14 w-full flex flex-col space-y-2 p-2 duration-500 md:hidden z-30 ${
        isNavOpen ? "translate-y-full" : ""
        // isNavOpen ? "" : "-translate-y-full"
      }`
    );
  }, [isNavOpen]);
  return (
    <div className={"flex flex-col font-kanit"}>
      <div className="fixed top-0 h-14 md:h-20 shadow-md shadow-gray-300 w-screen flex items-center bg-white z-40">
        {/* MOBILE MENU */}
        <div className="MOBILE-MENU flex space-x-2 ml-4 md:hidden">
          <span
            className="space-y-2 flex flex-col justify-center cursor-pointer"
            onClick={() => setIsNavOpen(!isNavOpen)}
          >
            <div className="h-0.5 w-8 bg-gray-500"></div>
            <div className="h-0.5 w-8 bg-gray-500"></div>
            <div className="h-0.5 w-8 bg-gray-500"></div>
          </span>
          <span className="max-[300px]:text-lg text-2xl pl-3 ">ครัวคุณบิน</span>
        </div>
        {/* DESKTOP MENU */}
        <div className="DESKTOP-MENU hidden md:block flex mx-auto space-x-8">
          <Link to="/menu">
            <span
              className={`"decoration-transparent hover:underline hover:decoration-black duration-500 rounded" ${
                      location.pathname === "/menu" || location.pathname === "/" ? "underline" : ""
                    }`}
            >
              เมนูอาหาร
            </span>
          </Link>
          <Link to="/order">
            <span className={`"decoration-transparent hover:underline hover:decoration-black duration-500 rounded" ${
                      location.pathname === "/order" ? "underline" : ""
                    }`}>
              รายการสั่งอาหาร
            </span>
          </Link>
          <Link to="/stat">
            <span className={`"decoration-transparent hover:underline hover:decoration-black duration-500 rounded" ${
                      location.pathname === "/stat" ? "underline" : ""
                    }`}>
              สถิติ
            </span>
          </Link>
        </div>
      </div>
      {/* HAMBURGER MENU */}
      <div className={className}>
        <Link to="/menu">
          <div
            className={`hover:bg-gray-100 duration-500 rounded ${
                      location.pathname === "/menu" || location.pathname === "/" ? "underline" : ""
                    }`}
          >
            เมนูอาหาร
          </div>
        </Link>
        <Link to="/order">
          <div className="hover:bg-gray-100 duration-500 rounded">
            รายการสั่งอาหาร
          </div>
        </Link>
        <Link to="/stat">
          <div className="hover:bg-gray-100 duration-500 rounded">สถิติ</div>
        </Link>
      </div>
      <div // DISPLAY SHADER WHEN HAMBURGER MENU IS OPENED
        className={`BLACK-SHADER bg-black fixed h-screen w-screen md:hidden duration-500 ${
          isNavOpen ? "z-20 opacity-[0.15]" : "opacity-0 z-10 pointer-events-none"
        }`}
        onClick={() => setIsNavOpen(false)}
      ></div>
    </div>
  );
};

export default Navbar;
