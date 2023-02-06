import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import FoodOrderList from "./pages/FoodOrderList";
import Statistics from "./pages/Statistics";
import Navbar from "./components/Navbar";
import Faqs from "./pages/Faqs";

const App = () => (
  <BrowserRouter>
    <Navbar />
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route exact path="/foodorderlist" element={<FoodOrderList />} />
      <Route exact path="/statistics" element={<Statistics />} />
      <Route exact path="/faqs" element={<Faqs />} />
      <Route exact path="*" element={<>404 Not found</>} />
    </Routes>
  </BrowserRouter>
);

export default App;
