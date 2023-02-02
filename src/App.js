import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { Home } from "./pages/Home";
import { Order } from "./pages/Order";
import { Statistic } from "./pages/Statistic";
import NavBar from "./components/NavBarComponent";

const App = () => {
  const [orders, setOrders] = React.useState([]);
  console.log("order  = ", orders);
  return (
    <>
      <BrowserRouter>
        <div className="px-8 lg:px-32">
          <NavBar/>

          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/statistic" element={<Statistic />} />
            <Route exact path="/order" element={<Order />} />
          </Routes>

          {/* <button onClick={() => setOpenPop(true)}>open</button> */}
        </div>
      </BrowserRouter>
    </>
  );
};

export default App;
