import React, { useState } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { ImSpoonKnife } from "react-icons/im";
import { BsList, BsX, BsCart2 } from "react-icons/bs";
import NavBarListButton from "./NavBarListButtonComponent";

const NavBar = (props) => {
  const Links = [
    { id: "L1", name: "Home", link: "/" },
    { id: "L2", name: "Menu", link: "/menu" },
    { id: "L3", name: "Order", link: "/order" },
  ];

  const [toggle, setToggle] = useState(false);

  return (
    <>
      {/* modal here  */}
      {toggle ? (
        <div className="shadow-md w-full z-[50] fixed top-0 left-0">
          <div className="fixed inset-x-0 top-15  h-full bg-black bg-opacity-30 backdrop-blur-md flex justify-center items-center">
            <div className=""></div>
          </div>
        </div>
      ) : (
        ""
      )}

      {/* nav here */}
      <div className="shadow-md w-full fixed top-0 left-0 z-[100]">
        <div className="md:flex items-center justify-between bg-white py-4 px-7 md:px-10">
          <div className="font-bold text-2xl cursor-pointer flex items-center font-[Poppins] text-gray-800">
            <span className="text-3xl text-yellow-600 mr-1 pt-1">
              <ImSpoonKnife />
            </span>
            Mr.Bin Kitchen
          </div>
          <div
            onClick={() => setToggle(!toggle)}
            className="text-3xl absolute right-8 top-6 cursor-pointer md:hidden"
          >
            {toggle ? <BsX /> : <BsList />}
          </div>
          <ul
            className={`md:flex md:items-center md:pb-0 pb-10 absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${
              toggle ? "top-15 " : "top-[-490px]"
            }`}
          >
            {Links?.map((link) => (
              <li key={link.id} className="md:ml-8 text-xl md:my-0 my-7">
                <Link
                  onClick={() => setToggle(false)}
                  className="text-gray-800 hover:text-gray-500 duration-500"
                  to={link.link}
                >
                  {link.name}
                </Link>
              </li>
            ))}
            <NavBarListButton>
              <p className="flex">Log in</p>
            </NavBarListButton>
            {/* <NavBarListButton> Something </NavBarListButton> */}
          </ul>
        </div>
      </div>
    </>
  );
};

export default NavBar;

// BsList
// BsXLg
