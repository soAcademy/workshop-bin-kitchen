import { GiHamburgerMenu } from "react-icons/gi";
import { MdOutlineFoodBank } from "react-icons/md";
import React, { useState } from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  const [toggle, setToggle] = useState(false);
  const routes = [
    { name: "เมนูอาหาร", url: "kitchen/main" },
    { name: "รายการสั่งอาหาร", url: "kitchen/order" },
    { name: "สถิติ", url: "kitchen/stat" },
    { name: "TBC", url: "*" },
    { name: "TBC", url: "*" },
  ];
  return (
    <>
      <div className="w-full fixed ml-1 top-0">
        <nav className="bg-neutral-900 shadow-lg md:flex md:items-center md:justify-between p-3 mx-2">
          <div className="md:flex">
            <h1 className="text-neutral-50 text-3xl -mt-1 float-left font-bold hidden md:block">
              <MdOutlineFoodBank />
            </h1>
            <h1 className="align-left font-bold text-neutral-50 hidden md:block">
              ร้านอาหารครัวคุณบิน
            </h1>
          </div>

          <div>
            <div className="flex">
              <button
                className="text-xl cursor-pointer justify-right md:hidden text-neutral-50"
                onClick={() => setToggle(!toggle)}
              >
                <GiHamburgerMenu />
              </button>
              <div className="flex">
                <h1 className="text-neutral-50 text-3xl -mt-1 float-left ml-2 font-bold md:hidden">
                  <MdOutlineFoodBank />
                </h1>
                <h1 className="ml-1 font-bold text-neutral-50 md:hidden">
                  ร้านอาหารครัวคุณบิน
                </h1>
              </div>
            </div>
            {toggle && (
              <div>
                {routes.map((route) => (
                  <Link to={route.url}>
                    <div className="text-base font-bold text-neutral-50 hover:bg-sky-700">
                      {route.name}
                    </div>
                  </Link>
                ))}
              </div>
            )}
          </div>
          <div>
            <div className=" md:flex md:items-center">
              {routes.map((route) => (
                <Link to={route.url}>
                  <div className="text-base font-bold text-neutral-50 hover:text-sky-700 md:mx-6 hidden md:block">
                    {route.name}
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};

export default NavBar;
