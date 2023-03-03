import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

export const Navbar = () => {
  const [isNavOpen, setIsNavOpen] = useState();
  const [className, setClassName] = useState();
  const location = useLocation();

  // SHOW/HIDE HAMBURGER MENU
  useEffect(() => {
    setClassName(
      `bg-white fixed -top-28 w-full flex flex-col space-y-2 p-2 duration-500 md:hidden z-30 ${
        isNavOpen ? "translate-y-full" : ""
        // isNavOpen ? "" : "-translate-y-full"
      }`
    );
  }, [isNavOpen]);
  return (
    <div className={"flex flex-col font-kanit"}>
      <div className="fixed top-0 z-40 flex h-14 w-screen items-center bg-white shadow-md shadow-gray-300 md:h-20">
        {/* MOBILE MENU */}
        <div className="MOBILE-MENU ml-4 flex space-x-2 md:hidden">
          <span
            className="flex cursor-pointer flex-col justify-center space-y-2"
            onClick={() => setIsNavOpen(!isNavOpen)}
          >
            <div className="h-0.5 w-8 bg-gray-500"></div>
            <div className="h-0.5 w-8 bg-gray-500"></div>
            <div className="h-0.5 w-8 bg-gray-500"></div>
          </span>
          <span className="max-[300px]:text-lg pl-3 text-2xl ">
            ครัวคุณด๋อย
          </span>
        </div>
        {/* DESKTOP MENU */}
        <div className="DESKTOP-MENU mx-auto hidden space-x-8 md:block">
          <Link to="/menu">
            <span
              className={`"decoration-transparent rounded" duration-500 hover:underline hover:decoration-black ${
                location.pathname === "/menu" || location.pathname === "/"
                  ? "underline"
                  : ""
              }`}
            >
              เมนูอาหาร
            </span>
          </Link>
          <Link to="/order">
            <span
              className={`"decoration-transparent rounded" duration-500 hover:underline hover:decoration-black ${
                location.pathname === "/order" ? "underline" : ""
              }`}
            >
              รายการสั่งอาหาร
            </span>
          </Link>
          <Link to="/stat">
            <span
              className={`"decoration-transparent rounded" duration-500 hover:underline hover:decoration-black ${
                location.pathname === "/stat" ? "underline" : ""
              }`}
            >
              สถิติ
            </span>
          </Link>
          <Link to="/faq">
            <span
              className={`"decoration-transparent rounded" duration-500 hover:underline hover:decoration-black ${
                location.pathname === "/faq" ? "underline" : ""
              }`}
            >
              FAQ
            </span>
          </Link>
          <Link to="/admin">
            <span
              className={`"decoration-transparent rounded" duration-500 hover:underline hover:decoration-black ${
                location.pathname === "/admin" ? "underline" : ""
              }`}
            >
              จัดการ
            </span>
          </Link>
        </div>
      </div>
      {/* HAMBURGER MENU */}
      <div className={className}>
        <Link to="/menu">
          <div
            className={`rounded duration-500 hover:bg-gray-100 ${
              location.pathname === "/menu" || location.pathname === "/"
                ? "underline"
                : ""
            }`}
          >
            เมนูอาหาร
          </div>
        </Link>
        <Link to="/order">
          <div
            className={`rounded duration-500 hover:bg-gray-100 ${
              location.pathname === "/order" || location.pathname === "/"
                ? "underline"
                : ""
            }`}
          >
            รายการสั่งอาหาร
          </div>
        </Link>
        <Link to="/stat">
          <div
            className={`rounded duration-500 hover:bg-gray-100 ${
              location.pathname === "/stat" || location.pathname === "/"
                ? "underline"
                : ""
            }`}
          >
            สถิติ
          </div>
        </Link>
        <Link to="/faq">
          <div
            className={`rounded duration-500 hover:bg-gray-100 ${
              location.pathname === "/faq" || location.pathname === "/"
                ? "underline"
                : ""
            }`}
          >
            คำถามที่พบบ่อย
          </div>
        </Link>
        <Link to="/admin">
          <div
            className={`rounded duration-500 hover:bg-gray-100 ${
              location.pathname === "/admin" || location.pathname === "/"
                ? "underline"
                : ""
            }`}
          >
            จัดการ
          </div>
        </Link>
      </div>
      <div // DISPLAY SHADER WHEN HAMBURGER MENU IS OPENED
        className={`BLACK-SHADER fixed h-screen w-screen bg-black duration-500 md:hidden ${
          isNavOpen
            ? "z-20 opacity-[0.15]"
            : "pointer-events-none z-10 opacity-0"
        }`}
        onClick={() => setIsNavOpen(false)}
      ></div>
    </div>
  );
};
