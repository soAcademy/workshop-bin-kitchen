import Home from "./pages/Home";
import OrderList from "./pages/OrderList";
import Stat from "./pages/Stat";
import { GiHamburgerMenu } from "react-icons/gi";
import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Link } from "react-router-dom";
const info = {
  title: "ร้านอาหารครัวคุณบิน",
  intro:
    "ร้านอาหารครัวคุณบินปรุงด้วยใจ เหมือนทำให้คนในครอบครัวทาน เราเปิดให้บริการตั้งแต่ปีพ.ศ. 2535 กว่า 30 ปีที่เรานำเสนอความ อร่อยแบบไทยแท้ เราคัดสรรวัตถุดิบชั้นดี ปลอดภัย ออร์แกนิค จาก เกษตรกรในพื้นที่สุโขทัย ปรุงด้วยสูตรลับต้นตำรับชาววังที่สืบทอด กันมารุ่นสู่รุ่น จัดแต่งมาบนจาน พร้อมเสิร์ฟความอร่อยให้กับคุณ",
};
const App = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <>
      <BrowserRouter>
        <div className="w-full fixed ml-1 top-0">
          <nav className="bg-neutral-900 shadow-lg md:flex md:items-center md:justify-between p-3 mx-2">
            <div className="align-left font-bold text-neutral-50 hidden md:block">
              <p>ร้านอาหารครัวคุณบิน</p>
            </div>
            <div>
              <div className="flex">
                <button
                  className="text-xl cursor-pointer justify-right md:hidden text-neutral-50"
                  onClick={() => setToggle(!toggle)}
                >
                  <GiHamburgerMenu />
                </button>
                <div className="ml-2 font-bold text-neutral-50 md:hidden">
                  <p>ร้านอาหารครัวคุณบิน</p>
                </div>
              </div>
              {toggle && (
                <div>
                  <div>
                    <Link
                      to="kitchen/main"
                      className="text-base font-bold text-neutral-50 hover:bg-sky-100"
                    >
                      เมนูอาหาร
                    </Link>
                  </div>
                  <div>
                    <Link
                      to="kitchen/order"
                      className="text-base font-bold text-neutral-50 hover:bg-sky-100"
                    >
                      รายการสั่งอาหาร
                    </Link>
                  </div>
                  <div>
                    <Link
                      to="kitchen/stat"
                      className="text-base font-bold text-neutral-50 hover:bg-sky-100"
                    >
                      สถิติ
                    </Link>
                  </div>
                  <div>
                    <Link
                      to="*"
                      className="text-base font-bold text-neutral-50 hover:bg-sky-100"
                    >
                      TBC
                    </Link>
                  </div>
                  <div>
                    <Link
                      to="*"
                      className="text-base font-bold text-neutral-50 hover:bg-sky-100"
                    >
                      TBC
                    </Link>
                  </div>
                </div>
              )}
            </div>
            <div>
              <ul className=" md:flex md:items-center">
                <li>
                  <Link
                    to="kitchen/main"
                    className="text-base font-bold text-neutral-50 hover:text-sky-100 md:mx-6 hidden md:block"
                  >
                    เมนูอาหาร
                  </Link>
                </li>

                <li>
                  <Link
                    to="kitchen/order"
                    className="text-base text-neutral-50 hover:text-sky-100 md:mx-6 font-bold hidden md:block "
                  >
                    รายการสั่งอาหาร
                  </Link>
                </li>
                <li>
                  <Link
                    to="kitchen/stat"
                    className="text-base text-neutral-50 hover:text-sky-100 md:mx-6 font-bold hidden md:block "
                  >
                    สถิติ
                  </Link>
                </li>
                <li>
                  <Link
                    to="*"
                    className="text-base text-neutral-50 hover:text-sky-100 md:mx-6 font-bold md:show hidden md:block"
                  >
                    TBC
                  </Link>
                </li>
                <li>
                  <Link
                    to="*"
                    className="text-base text-neutral-50 hover:text-sky-100 md:mx-6 font-bold hidden md:block"
                  >
                    TBC
                  </Link>
                </li>
              </ul>
            </div>
          </nav>
        </div>
        <Routes>
          <Route exact path="" element={<Home info={info} />} />
          <Route exact path="kitchen">
            <Route exact path="main" element={<Home info={info} />} />
            <Route exact path="order" element={<OrderList />} />
            <Route exact path="stat" element={<Stat />} />
            {/* <Route exact path="hobbies" element={<Hobbies />} />
          <Route exact path="contact" element={<Contact />} /> */}
          </Route>
          <Route
            className="bg-red-200 rounded-lg m-2 mt-12 p-2 w-[100px] font-bold"
            exact
            path="*"
            element={<>404 Not Found</>}
          />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
