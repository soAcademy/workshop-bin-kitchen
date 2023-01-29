import React from "react";
import Header from "./components/Header";
import Home from "./pages/Home";


const App = () => {
  return (
    <div className="w-full h-auto bg-zinc-800 text-slate-200 px-4">
      <div className="max-w-screen-5xl mx-auto">
        <Header />
        <Home />
      </div>
    </div>
  );
};

export default App;
