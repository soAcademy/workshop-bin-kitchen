import React, { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <div className="w-full  fixed  bg-slate-700 bg=opacity-80 h-10 shadow-sm md:flex md:items-center ">
      <button
        className="bg-slate-700 m-2 cursor-pointer md:hidden"
        onClick={() => setToggle(!toggle)}
      >
        <RxHamburgerMenu className="text-gray-400 text-xl float-left hover:text-sky-700" />
      </button>
      {toggle && (
        <div>
          <Link to="/">
            <div className="bg-slate-300 hover:text-sky-700">เมนูอาหาร</div>
          </Link>
          <Link to="/foodorderlist">
            <div className="bg-slate-300 hover:text-sky-700">
              รายการสั่งอาหาร
            </div>
          </Link>
          <Link to="/statistics">
            <div className="bg-slate-300 hover:text-sky-700">สถิติ</div>
          </Link>
          <Link to="/faqs">
            <div className="bg-slate-300 hover:text-sky-700">ถาม-ตอบ</div>
          </Link>
        </div>
      )}
      <div className="w-full">
        <ul className="md:flex justify-end text-base font-bold text-gray-400  hidden md:block ">
          <li>
            <Link to="/">
              <span className="md:mx-6 hover:text-sky-700">เมนูอาหาร</span>
            </Link>
          </li>
          <li>
            <Link to="/foodorderlist">
              <span className="md:mx-6 hover:text-sky-700">
                รายการสั่งอาหาร
              </span>
            </Link>
          </li>
          <li>
            <Link to="/statistics">
              <span className="md:mx-6 hover:text-sky-700">สถิติ</span>
            </Link>
          </li>
          <li>
            <Link to="/faqs">
              <span className="md:mx-6 hover:text-sky-700">ถาม-ตอบ</span>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
