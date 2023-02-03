import React, { useState } from "react";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import Order from "./pages/Order";
import Stats from "./pages/Stats";
import { Home } from "./pages/Home";
import { GiHamburgerMenu } from "react-icons/gi";

const App = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <BrowserRouter>
      {toggle && (
        <div className="flex justify-between fixed w-full h-full mt-20">
          <div className="w-1/2"></div>
          <div
            className="bg-black opacity-75 md:opacity-0 w-1/2 h-full"
            onClick={() => setToggle(!toggle)}
          ></div>
        </div>
      )}

      <div className="h-20 bg-white drop-shadow-md fixed w-full flex">
        <div className="my-6 md:invisible w-full">
          <button className="text-3xl px-8" onClick={() => setToggle(!toggle)}>
            <GiHamburgerMenu />
          </button>
          {toggle && (
            <div className="w-full text-left bg-white rounded h-screen pl-8">
              <div className="pt-4">
                <Link
                  to="/"
                  className="bg-white text-xl hover:text-gray-400"
                  onClick={() => setToggle(!toggle)}
                >
                  เมนูอาหาร
                </Link>
              </div>
              <div className="pt-4">
                <Link
                  to="/order"
                  className="z-10 bg-white my-auto text-xl text-center hover:text-gray-400"
                  onClick={() => setToggle(!toggle)}
                >
                  รายการสั่งอาหาร
                </Link>
              </div>
              <div className="pt-4">
                <Link
                  to="/stats"
                  className="bg-white w-full my-auto text-xl text-center hover:text-gray-400"
                  onClick={() => setToggle(!toggle)}
                >
                  สถิติ
                </Link>
              </div>
            </div>
          )}
        </div>
        <div className="invisible md:visible w-full">
          <div className="flex justify-between my-6 mr-14">
            <Link to="/" className="text-xl hover:drop-shadow hover:underline">
              เมนูอาหาร
            </Link>

            <Link
              to="/order"
              className="text-xl hover:drop-shadow hover:underline"
            >
              รายการสั่งอาหาร
            </Link>

            <Link
              to="/stats"
              className="text-xl hover:drop-shadow hover:underline"
            >
              สถิติ
            </Link>
          </div>
        </div>
      </div>

      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/order" element={<Order />} />
        <Route exact path="/stats" element={<Stats />} />
        <Route
          exact
          path="*"
          element={
            <>
              <div className="pt-20">404 Not found</div>
            </>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
