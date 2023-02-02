import { useState } from "react";
import { Link } from "react-router-dom";
import { FaTimes } from "react-icons/fa";
import { BiFoodMenu } from "react-icons/bi";
import { BsPencilSquare, BsFileBarGraph } from "react-icons/bs";

const Navbar = () => {
  const [hamShow, setHamShow] = useState(false);

  document.addEventListener("click", function (event) {
    // console.log(event.target);
    // console.log("hamShow: " + hamShow);
    const navId = event.target.id;
    // console.log("navId: " + navId);
    hamShow && navId === "nonSideNavbar" && setHamShow(false);
  });

  return (
    <div className="modalNav fixed top-0 left-0 w-full font-prompt">
      <div className="w-full flex justify-between items-center fixed top-0 bg-white z-30 shadow p-4">
        <div className="flex items-center gap-4">
          <img src="./images/chef-hat.png" alt="chef-hat" />
          <p className="text-lg">ครัวคุณบิน by MK</p>
        </div>
        <button
          type="button"
          onClick={() => setHamShow(true)}
          className="md:hidden flex items-center hover:bg-gray-100 rounded-full"
        >
          <svg
            className="w-6 h-6"
            aria-hidden="true"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"></path>
          </svg>
        </button>
        <div className="hidden md:flex gap-x-4 justify-end">
          <Link to="/" className="flex items-center">
            <p className="">เมนูอาหาร</p>
          </Link>
          <Link to="/" className="flex items-center">
            <p className="">รายการสั่งอาหาร</p>
          </Link>
          <Link to="/" className="flex items-center">
            <p className="">สถิติ</p>
          </Link>
        </div>
      </div>

      {hamShow && (
        <div className="relative top-0 left-0 z-40 w-full h-screen">
          <div
            id="nonSideNavbar"
            className="absolute top-0 left-0 w-full h-screen bg-zinc-800/80"
          ></div>
          <div
            id="sideNavbar"
            className="relative w-[360px] h-screen rounded-r-lg bg-white px-7 py-7"
          >
            <ul className="mt-4">
              <li>
                <Link
                  to="/"
                  className="flex items-center hover:bg-gray-100 rounded-full p-4"
                >
                  <BiFoodMenu className="w-6" />
                  <p className="pl-3">เมนูอาหาร</p>
                </Link>
              </li>
              <li>
                <Link
                  to="/"
                  className="flex items-center hover:bg-gray-100 rounded-full p-4"
                >
                  <BsPencilSquare className="w-6" />
                  <p className="pl-3">รายการสั่งอาหาร</p>
                </Link>
              </li>
              <li>
                <Link
                  to="/"
                  className="flex items-center hover:bg-gray-100 rounded-full p-4"
                >
                  <BsFileBarGraph className="w-6" />
                  <p className="pl-3">สถิติ</p>
                </Link>
              </li>
            </ul>

            <div className="absolute top-4 right-4 flex items-center">
              <button
                type="button"
                onClick={() => setHamShow(false)}
                className="w-10 h-10 flex items-center hover:bg-gray-100 rounded-full p-2"
              >
                <FaTimes className="w-6" />
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
