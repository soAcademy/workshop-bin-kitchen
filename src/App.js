import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { Home } from "./pages/Home";
import { Orders } from "./pages/Orders";
import { Stat } from "./pages/Stat";
import { Faqs } from "./pages/Faqs";

const App = () => {
  const links = [
    { text: "เมนูอาหาร", path: "/" },
    { text: "รายการสั่งอาหาร", path: "/orders" },
    { text: "สถิติ", path: "/stat" },
    { text: "คำถามที่พบบ่อย", path: "/faqs" },
  ];

  return (
    <BrowserRouter>
      <Navbar links={links} />
      <Routes>
        <Route path="orders" element={<Orders />} />
        <Route path="stat" element={<Stat />} />
        <Route path="faqs" element={<Faqs />} />
        <Route index element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
