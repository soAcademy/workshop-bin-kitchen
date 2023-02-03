import React from "react";
import Header from "./components/Header";
import Home from "./pages/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Table } from "./pages/Table";

const App = () => {
  return (
    <BrowserRouter>
      <div className="w-full h-auto bg-zinc-800 text-slate-200 px-4">
        <div className="max-w-screen-5xl mx-auto">
          <Header />
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/Table" element={<Table />} />
          </Routes>
          {/* <Order /> */}
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
