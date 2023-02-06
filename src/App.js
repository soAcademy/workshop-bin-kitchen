import { Home } from "./pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./pages/Navbar";
import Order from "./pages/Order";
import Stat from "./pages/Stat";
import P404 from "./pages/P404";
import Faqs from "./pages/Faq";

const App = () => (
  <div className="h-screen w-full flex flex-col no-scrollbar">
    <BrowserRouter>
      <Navbar />
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="menu" element={<Home />} />
          <Route path="order" element={<Order />} />
          <Route path="stat" element={<Stat />} />
          <Route path="faq" element={<Faqs />} />
          <Route path="*" element={<P404 />} />
        </Routes>
      </div>
    </BrowserRouter>
  </div>
);

export default App;
