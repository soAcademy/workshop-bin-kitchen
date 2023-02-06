import { useState, createContext } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./pages/Home";
import Orders from "./pages/Orders";
import Static from "./pages/Static";
import Faq from "./pages/Faq";
import LoadingPage from "./Components/LoadingPage";

export const UserContext = createContext();

const App = () => {
  const [loadingPage, setLoadingPage] = useState(false);

  return (
    <BrowserRouter>
      <UserContext.Provider value={{ setLoadingPage }}>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/Orders" element={<Orders />} />
          <Route exact path="/Static" element={<Static />} />
          <Route exact path="/Faq" element={<Faq />} />
        </Routes>
        {loadingPage && <LoadingPage />}
      </UserContext.Provider>
    </BrowserRouter>
  );
};

export default App;
