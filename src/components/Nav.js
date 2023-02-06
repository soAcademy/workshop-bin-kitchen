import React, { useState } from "react";
import { FaTimes, FaBars } from "react-icons/fa";
import { Link } from "react-router-dom";

export const Nav = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <div className="shadow-lg w-full h-16 fixed top-0 left-0">
      <div className="md:flex justify-between bg-white py-4 px-7">
        <button
          onClick={() => setToggle(!toggle)}
          className="text-3xl absolute cursor-pointer md:hidden"
        >
          {toggle ? <FaTimes /> : <FaBars />}
        </button>
        <div className="ml-14 md:ml-3">
          <Link to="/">
            <p className="font-normal text-xl text-gray-800">ครัวข้างบ้าน</p>
          </Link>
        </div>
        <ul
          className={`md:flex md:items-center md:justify-end md:pb-0 pb-12 absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-300 ease-in ${
            toggle ? "top-15 " : "top-[-490px]"
          }`}
        >
          <li className="font-normal text-xl hover:text-gray-400 md:ml-8 md:my-0 my-7">
            <Link to="/">เมนูอาหาร</Link>
          </li>
          <li className="font-normal text-xl hover:text-gray-400 md:ml-8 md:my-0 my-7">
            <Link to="/order">รายการสั่งอาหาร</Link>
          </li>
          <li className="font-normal text-xl hover:text-gray-400 md:ml-8 md:my-0 my-7">
            <Link to="/stats">สถิติ</Link>
          </li>
          <li className="font-normal text-xl hover:text-gray-400 md:ml-8 md:my-0 my-7">
            <Link to="/questions">คำถามที่พบบ่อย</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};
