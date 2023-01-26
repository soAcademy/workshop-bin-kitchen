import React, { useState } from "react";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import Order from "./pages/Order";
import Stats from "./pages/Stats";
import { Home } from "./pages/Home";
import { GiHamburgerMenu } from "react-icons/gi";

// const App = () => (
//   <Home />
// );

const App = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <BrowserRouter>
      <div className="h-20 bg-white drop-shadow-md fixed w-full flex justify-between">
        <div className="my-6 md:invisible w-1/2">
          <button className="text-3xl px-8" onClick={() => setToggle(!toggle)}>
            <GiHamburgerMenu />
          </button>
          {toggle && (
            <div className="w-full text-left bg-white rounded h-screen pl-8">
              <div className="pt-4">
                <Link to="/" className="bg-white text-xl hover:text-gray-400">
                  เมนูอาหาร
                </Link>
              </div>
              <div className="pt-4">
                <Link
                  to="/order"
                  className="bg-white my-auto text-xl text-center hover:text-gray-400"
                >
                  รายการสั่งอาหาร
                </Link>
              </div>
              <div className="pt-4">
                <Link
                  to="/stats"
                  className="bg-white w-full my-auto text-xl text-center hover:text-gray-400"
                >
                  สถิติ
                </Link>
              </div>
            </div>
          )}
        </div>
        <div className="invisible md:visible w-1/2 text-right">
          <div className="flex my-6">
            <div>
              <Link
                to="/"
                className="my-auto mx-8 text-xl text-center hover:drop-shadow hover:text-gray-400"
              >
                เมนูอาหาร
              </Link>
            </div>
            <div>
              <Link
                to="/order"
                className="my-auto mx-8 text-xl text-center hover:drop-shadow hover:text-gray-400"
              >
                รายการสั่งอาหาร
              </Link>
            </div>
            <div>
              <Link
                to="/stats"
                className="my-auto mx-8 text-xl text-center hover:drop-shadow hover:text-gray-400"
              >
                สถิติ
              </Link>
            </div>
          </div>
        </div>
      </div>

      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/order" element={<Order />} />
        <Route exact path="/stats" element={<Stats />} />
        <Route className="mt-30" exact path="*" element={<>404 Not found</>} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
