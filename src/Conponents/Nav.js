import Menu from "../Pages/Menu";
import Order from "../Pages/Order";
import Stat from "../Pages/Stat";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <div>
        <BrowserRouter>
          <div className="bg-teal-700 w-full">
            <Link to="/Menu" className="p-2 bg-teal-700 hover:bg-red-500">
              Menu
            </Link>

            <Link to="/Order" className="p-2 bg-teal-700 hover:bg-red-500">
              Order
            </Link>

            <Link to="/Stat" className="p-2 bg-teal-700 hover:bg-red-500">
              Stat
            </Link>
          </div>

          {/* ของจริง nested route เราตัวนี้ไปใส่ใน Resume แทน*/}
          <Routes>
            <Route exact path="/Menu" element={<Menu />} />
            <Route exact path="/Order" element={<Order />} />
            <Route exact path="/Stat" element={<Stat />} />

            <Route exact path="*" element={<>404 Not Found</>} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
    // {/* ของจริง */}
  );
};
export default Navbar;
