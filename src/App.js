import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { Home } from "./pages/Home";
import { Order } from "./pages/Order";
import { Statistic } from "./pages/Statistic";
import NavBar from "./components/NavBarComponent";
import QandA from "./pages/QandA";
import TestMUI from "./pages/TestMUI";


const App = () => {

  return (
    <>
      <BrowserRouter>
        <div className="px-8 lg:px-32">
          <NavBar/>

          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/statistic" element={<Statistic />} />
            <Route exact path="/order" element={<Order />} />
            <Route exact path="/qanda" element={<QandA />} />
            <Route exact path="/testmui" element={<TestMUI/>} />
          </Routes>

        </div>
      </BrowserRouter>
    </>
  );
};

export default App;
