import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import Order from "./pages/Order";
import Stats from "./pages/Statistics";
import Questions from "./pages/Questions";
import { Nav } from "./components/Nav";

const App = () => (
  <BrowserRouter>
    <Nav />
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route path="/order" element={<Order />} />
      <Route path="/stats" element={<Stats />} />
      <Route path="/questions" element={<Questions />} />
    </Routes>
  </BrowserRouter>
);

export default App;
