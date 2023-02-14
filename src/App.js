import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navbar, Faqs, Home, P404, Order, Stat } from "./pages";

const App = () => (
  <div className="no-scrollbar flex h-screen w-full flex-col">
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
