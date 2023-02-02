import axios from "axios";
import { useEffect, useState } from "react";
import OrderPopUp from "../assets/OrderPopUp";
import RemoveOrderPopUp from "../assets/RemoveOrderPopUp";
import { AiOutlineShoppingCart } from "react-icons/ai";

const Menu = () => {
  const [foodMenus, setFoodMenus] = useState();
  const [isOrderOpen, setIsOrderOpen] = useState();
  const [removeOrderPopup, setRemoveOrderPopup] = useState();
  const [removeMenuName, setRemoveMenuName] = useState();
  const [menuSelected, setMenuSelected] = useState(
    JSON.parse(localStorage.getItem("menuSelected")) ?? {}
  );
  const [buttonClicked, setButtonClicked] = useState();
  useEffect(() => {
    localStorage.setItem("menuSelected", JSON.stringify(menuSelected));
  }, [JSON.stringify(menuSelected)]);

  const updateMenuAmount = (menuName, amount) => {
    setMenuSelected(JSON.parse(localStorage.getItem("menuSelected")));
    menuSelected[menuName].amount = amount;
    setMenuSelected(menuSelected);
  };

  // FETCH MENU DATA
  useEffect(() => {
    axios({
      method: "post",
      url: "https://sprinttech-food-menu-api-iinykauowa-uc.a.run.app/get-menus",
    }).then((res) => {
      setFoodMenus(res.data);
    });
  }, []);

  // CREATE UNIQUE MENU CATEGORIES
  const category = foodMenus?.reduce((acc, e) => {
    acc = [...acc, e.category];
    return acc;
  }, []);
  const uniqueCategory = [...new Set(category)];

  return (
    <div className="flex flex-col justify-center items-center md:grid md:grid-cols-2 gap-4 xl:grid-cols-3 md:items-start">
      {uniqueCategory.map((category, idx) => {
        return (
          <div key={idx} className="relative space-y-4 py-4 z-10 w-full">
            <div className="text-2xl md:text-2xl lg:text-3xl font-semibold">
              เมนู{category}
            </div>
            {foodMenus
              .filter((e) => e.category === category)
              .map((menu, jdx) => {
                return (
                  <div key={jdx} className="w-full ">
                    <div className="flex flex-row h-20 sm:h-32 py-2 overflow-hidden my-2 items-center">
                      <div className="max-[300px]:w-24 w-[90px] sm:w-32 h-full">
                        <img
                          src={menu.image}
                          className="rounded-lg object-cover h-full w-full"
                        />
                      </div>
                      <div className="w-8/12 ml-10 max-[300px]:ml-6 flex flex-col justify-evenly h-full">
                        <div className="max-[300px]:text-xs sm:text-lg md:text-xl">
                          {menu.name}
                        </div>
                        <div className="max-[300px]:text-xs text-red-500 font-semibold sm:text-lg md:text-xl">
                          ฿{menu.price}
                        </div>
                      </div>
                      <span
                        className={`${menu.amount > 1 ? "flex" : "hidden"}`}
                      >
                        <button
                          className={`w-10 h-8 bg-red-400 rounded-md md:w-10 md:h-6 hover:bg-red-500 active:bg-red-300 shadow-md hover:shadow-lg duration-150`}
                          onClick={() => {
                            if (menu.amount > 1) {
                              updateMenuAmount(menu.name, menu.amount - 1); // UPDATE MENU AMOUNT
                              setButtonClicked(!buttonClicked); // WHEN THE BUTTON IS CLICKED
                            } else {
                              setRemoveOrderPopup(true);
                              setRemoveMenuName(menu.name);
                            }
                          }}
                        >
                          -
                        </button>
                        <span className="w-6 mx-2 text-center my-auto">
                          {menu.amount}
                        </span>
                        <button
                          className="w-10 h-8 bg-red-400 rounded-md md:w-10 md:h-6 hover:bg-red-500 active:bg-red-300 shadow-md hover:shadow-lg duration-150"
                          onClick={() => {
                            updateMenuAmount(menu.name, menu.amount + 1); // UPDATE MENU AMOUNT
                            setButtonClicked(!buttonClicked); // WHEN THE BUTTON IS CLICKED
                          }}
                        >
                          +
                        </button>
                      </span>
                      <button
                        className={`${
                          menu.amount > 1 ? "hidden" : "flex"
                        } rounded-lg px-4 py-2 w-2/12 h-1/2 bg-red-400 items-center justify-center md:h-[40px] hover:bg-red-500 active:bg-red-300 shadow-md hover:shadow-lg duration-150`}
                        onClick={() => {
                          setIsOrderOpen(true); // OPEN ORDER POPUP
                          menuSelected[menu.name] = {
                            id: menu.id,
                            name: menu.name,
                            amount: (menuSelected[menu.name]?.amount ?? 0) + 1,
                            price: menu.price,
                          };
                          setMenuSelected(menuSelected);
                        }}
                      >
                        <p className="hidden sm:block">เพิ่ม</p>
                        <p className="sm:hidden text-xl mb-1">+</p>
                      </button>
                    </div>
                  </div>
                );
              })}
          </div>
        );
      })}
        <button
        onClick={()=>setIsOrderOpen(!isOrderOpen)}
          className="text-3xl w-14 h-14 p-2
          rounded-full bg-white hover:bg-gray-100 fixed bottom-4 right-4 z-50 flex justify-center
          items-center shadow-lg border-2"
          >
          <div className="relative right-[2px] ">
            <AiOutlineShoppingCart />
          </div>
      </button>
      <div
        className={`flex fixed w-full bottom-0 left-0 justify-center md:bottom-4 z-30 duration-500 ${
          isOrderOpen ? "" : "translate-y-full opacity-0 z-0"
        }`}
      >
        <OrderPopUp
          isOrderOpen={isOrderOpen}
          setIsOrderOpen={setIsOrderOpen}
          menuSelected={menuSelected}
          setMenuSelected={setMenuSelected}
          updateMenuAmount={updateMenuAmount}
          buttonClicked={buttonClicked}
          setButtonClicked={setButtonClicked}
          setRemoveMenuName={setRemoveMenuName}
          setRemoveOrderPopup={setRemoveOrderPopup}
        />
      </div>
      {/* DISPLAY SHADER WHEN ORDER POPPED-UP */}
      <div
        className={`BLACK-SHADER bg-black fixed top-0 left-0 h-screen w-screen  duration-500 ${
          isOrderOpen ? "z-20 opacity-[0.15]" : "opacity-0 z-0"
        }`}
        onClick={() => setIsOrderOpen(false)}
      ></div>
      {/* Remove Order Pop-up */}
      <RemoveOrderPopUp
        removeOrderPopup={removeOrderPopup}
        setRemoveOrderPopup={setRemoveOrderPopup}
        menuSelected={menuSelected}
        setMenuSelected={setMenuSelected}
        removeMenuName={removeMenuName}
        buttonClicked={buttonClicked}
        setButtonClicked={setButtonClicked}
      />
    </div>
  );
};
export default Menu;
