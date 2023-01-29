import React, { useEffect, useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";

const Header = () => {
  const [sticky, setSticky] = useState(false);
  const [open, setOpen] = useState(false);
  const menuLinks = [
    { name: "FOOD MENU", link: "#foodMenu" },
    { name: "ORDER LIST", link: "#orderList" },
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
      className={`fixed w-full left-0 top-0 z-[999] ${
        sticky ? "bg-white/60  text-gray-900" : "text-white"
      }`}
    >
      <div
        onClick={() => setOpen(!open)}
        className={`z-[999]  ${
          open ? "text-gray-900" : "text-gray-100"
        } text-3xl md:hidden m-5 float-left`}
      >
        <GiHamburgerMenu />
      </div>
      <div className="flex items-center justify-between">
        <div className="my-3 md:mx-7 md:my-0">
          <h4 className="text-4xl uppercase font-bold">
            Kor@
            <span className="text-red-600">Kitchen</span>
          </h4>
        </div>
        <div className="text-gray-900 md:block hidden px-7 py-2 font-medium bg-white rounded-bl-full">
          <ul className="flex items-center gap-1 py-2 text-lg">
            {menuLinks?.map((menu, i) => (
              <li key={i} className="px-6 hover:text-red-600">
                <a href={menu?.link}>{menu?.name}</a>
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
          className={`md:hidden text-gray-900 absolute w-2/3 h-screen
      px-7 py-2 font-medium bg-white/40 top-0 duration-300 backdrop-blur-lg ${
        open ? "left-0" : "left-[-100%]"
      }`}
        >
          <ul className="flex flex-col justify-center h-full gap-10 py-2 text-lg">
            <button className="text-lg " onClick={() => setOpen(!open)}>X Close</button>
            {menuLinks?.map((menu, i) => (
              <li
                onClick={() => setOpen(false)}
                key={i}
                className="px-6 hover:text-red-900"
              >
                <a href={menu?.link}>{menu?.name}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
