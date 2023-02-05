import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./pages/Home";
import Orders from "./pages/Orders";
import Static from "./pages/Static";

const App = () => (
  <BrowserRouter>
    <Navbar />
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route exact path="/Orders" element={<Orders />} />
      <Route exact path="/Static" element={<Static />} />
    </Routes>
  </BrowserRouter>
);

export default App;
