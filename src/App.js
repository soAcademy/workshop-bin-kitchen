import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { Home } from "./pages/Home";
import { Order } from "./pages/Order";
import { Menu } from "./pages/Menu";
import NavBar from "./components/NavBarComponent";
import PopupForm from "./components/PopupForm";
import ModalComponent from "./components/ModalComponent";

const App = () => {
  const [showBackDrop, setShowBackDrop] = React.useState(false);
  const [openPop, setOpenPop] = React.useState(false);
  return (
    <>
      <BrowserRouter>
        <div className="px-8 lg:px-32">
          <NavBar
            onToggleChanged={(toggle) => {
              setShowBackDrop(toggle);
            }}
          />

          <Routes>
            <Route
              exact
              path="/"
              element={
                <Home
                  onBypassAddButtonClickedToApps={(e) => {
                    // alert("Apps" + JSON.stringify(e));
                    setOpenPop(true);
                    setShowBackDrop(true);
                  }}
                />
              }
            />
            <Route
              exact
              path="/menu"
              element={
                <Menu
                  onBypassAddButtonClickedToApps={(e) => {
                    // alert("Apps" + JSON.stringify(e));
                    setOpenPop(true);
                    setShowBackDrop(true);
                  }}
                />
              }
            />
            <Route exact path="/order" element={<Order />} />
          </Routes>
          {openPop && (
            <PopupForm
              onCloseButtonClicked={() => {
                setOpenPop(false);
                setShowBackDrop(false);
              }}
            />
          )}

          {/* <button onClick={() => setOpenPop(true)}>open</button> */}
          <ModalComponent showBackDrop={showBackDrop}></ModalComponent>
        </div>
      </BrowserRouter>
    </>
  );
};

export default App;
