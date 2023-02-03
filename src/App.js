import Navbar from "./Components/Navbar";
import { Home } from "./Pages/Home";
import Menu from "./Pages/Menu";
import Order from "./Pages/Order";
import Stat from "./Pages/Stat";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";

const App = () => (
  <BrowserRouter>
    <Navbar/>

    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route exact path="/Menu" element={<Menu />} />
      <Route exact path="/Order" element={<Order />} />
      <Route exact path="/Stat" element={<Stat />} />
      <Route exact path="*" element={<>404 Not Found</>} />
    </Routes>
  </BrowserRouter>
);
export default App;
