import Home from "./pages/Home";
import OrderList from "./pages/OrderList";
import Stat from "./pages/Stat";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Faqs from "./pages/Faqs";

const info = {
  title: "ร้านอาหารครัวคุณบิน",
  intro:
    "ร้านอาหารครัวคุณบินปรุงด้วยใจ เหมือนทำให้คนในครอบครัวทาน เราเปิดให้บริการตั้งแต่ปีพ.ศ. 2535 กว่า 30 ปีที่เรานำเสนอความ อร่อยแบบไทยแท้ เราคัดสรรวัตถุดิบชั้นดี ปลอดภัย ออร์แกนิค จาก เกษตรกรในพื้นที่สุโขทัย ปรุงด้วยสูตรลับต้นตำรับชาววังที่สืบทอด กันมารุ่นสู่รุ่น จัดแต่งมาบนจาน พร้อมเสิร์ฟความอร่อยให้กับคุณ",
};

const App = () => {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route exact path="" element={<Home info={info} />} />
          <Route exact path="kitchen">
            <Route exact path="main" element={<Home info={info} />} />
            <Route exact path="order" element={<OrderList />} />
            <Route exact path="stat" element={<Stat />} />
            {/* <Route exact path="hobbies" element={<Hobbies />} /> */}
            <Route exact path="faqs" element={<Faqs />} />
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
