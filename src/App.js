import { Home } from "./pages/Home";
import Nav from "./components/Nav";
import FoodOrder from "./pages/FoodOrder";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Statistics from "./pages/Statistics";
import Quizes from "./pages/Quizes";

const App = () => (
  <>
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/order" element={<FoodOrder />} />
        <Route path="/statistic" element={<Statistics />} />
        <Route path="/quiz" element={<Quizes />} />
      </Routes>
    </BrowserRouter>
  </>
);
export default App;
