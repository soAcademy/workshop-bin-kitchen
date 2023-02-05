import React, { useEffect, useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import logo from "../assets/logo.png";
import logo2 from "../assets/logo2.png";
import menu from "../assets/menu.png";
import { Link } from "react-router-dom";

const Header = () => {
  const [sticky, setSticky] = useState(false);
  const [open, setOpen] = useState(false);
  const menuLinks = [
    { name: "FOOD MENU", link: "/", image: <img src={menu} alt="menu"/>},
    { name: "ORDER LIST", link: "/Table" },
    { name: "HISTORY", link: "#history" },
  ];
  useEffect(() => {
    window.addEventListener("scroll", () => {
      const nav = document.querySelector("nav");
      window.scrollY > 0 ? setSticky(true) : setSticky(false);
    });
  }, []);
  return (
    <nav
      className={`fixed w-full z-[999] border-b-yellow-600 border-2 border-zinc-800 ${
        sticky ? "bg-white/60  text-gray-900" : "text-white"
      }`}
    >
      <div
        onClick={() => setOpen(!open)}
        className={`text-7xl lg:hidden my-3 mx-7 ${
          open ? "text-gray-900" : "text-gray-100"
        } float-left`}
      >
        <GiHamburgerMenu />
      </div>
      <div className="flex items-center justify-between">
        <div className="sm:mt-[20px] lg:ml-10 lg:mt-[0px]">
          <div className="text-6xl lg:text-7xl font-bold text-yellow-600">
            <div className="float-left">K</div>
            <div className="float-left">
              <img src={logo2} className="sm:w-[53px] lg:w-[55px] lg:mt-3" alt="logo" />
            </div>
            R
          </div>
        </div>
        <div className="text-gray-900 lg:block hidden font-medium px-10 py-7 bg-white rounded-bl-full">
          <ul className="flex gap-5 text-4xl">
            {menuLinks?.map((menu, i) => (
              <li key={i} className="px-16 hover:text-red-600">
                <Link to={menu?.link}> {menu.name}</Link>
              </li>
            ))}
          </ul>
        </div>
        {/* <div onClick={() => setOpen(!open)}
          className={`z-[999]  ${
            open ? "text-gray-900" : "text-gray-100"
          } text-3xl md:hidden m-5`}>
        <GiHamburgerMenu />
        </div> */}
        <div
          className={`lg:hidden text-gray-900 absolute w-2/3 h-[1000px]
      px-7 py-2 font-medium bg-white/40 top-0 duration-300 backdrop-blur-lg ${
        open ? "left-0" : "left-[-100%]"
      }`}
        >
          <ul className="flex flex-col justify-start gap-16 py-2 text-4xl font-medium">
            <button className="mt-5" onClick={() => setOpen(!open)}>
              X Close
            </button>
            {menuLinks?.map((menu, i) => (
              <li
                onClick={() => setOpen(false)}
                key={i}
                className="px-6 hover:text-red-900"
              >
                <Link to={menu?.link}> {menu.name}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
