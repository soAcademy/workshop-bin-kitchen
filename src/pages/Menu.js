import axios from "axios";
import { useEffect, useState } from "react";
import { OrderPopUp, RemoveOrderPopUp } from "../assets";
import { AiOutlineShoppingCart } from "react-icons/ai";

export const Menu = () => {
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

  const updateMenuQuantity = (menuName, quantity) => {
    setMenuSelected(JSON.parse(localStorage.getItem("menuSelected")));
    menuSelected[menuName].quantity = quantity;
    setMenuSelected(menuSelected);
  };

  // FETCH MENU DATA
  useEffect(() => {
    axios({
      method: "post",
      url: "http://localhost:5555/foodOrdering/getMenu",
      // url: "https://sprinttech-food-menu-api-iinykauowa-uc.a.run.app/get-menus",
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
    <div className="flex flex-col items-center justify-center gap-4 md:grid md:grid-cols-2 md:items-start xl:grid-cols-3">
      {uniqueCategory.map((category, idx) => {
        return (
          <div key={idx} className="relative z-10 w-full space-y-4 py-4">
            <div className="text-2xl font-semibold md:text-2xl lg:text-3xl">
              เมนู{category}
            </div>
            {foodMenus
              .filter((e) => e.category === category)
              .map((menu, jdx) => {
                return (
                  <div key={jdx} className="w-full ">
                    <div className="my-2 flex h-20 flex-row items-center overflow-hidden py-2 sm:h-32">
                      <div className="max-[300px]:w-24 h-full w-[90px] sm:w-32">
                        <img
                          src={menu.image}
                          className="h-full w-full rounded-lg object-cover"
                          alt="menu_img"
                        />
                      </div>
                      <div className="max-[300px]:ml-6 ml-10 flex h-full w-8/12 flex-col justify-evenly">
                        <div className="max-[300px]:text-xs sm:text-lg md:text-xl">
                          {menu.name}
                        </div>
                        <div className="max-[300px]:text-xs font-semibold text-red-500 sm:text-lg md:text-xl">
                          ฿{menu.price}
                        </div>
                      </div>
                      <span
                        className={`${menu.quantity > 1 ? "flex" : "hidden"}`}
                      >
                        <button
                          className={`h-8 w-10 rounded-md bg-red-400 shadow-md duration-150 hover:bg-red-500 hover:shadow-lg active:bg-red-300 md:h-6 md:w-10`}
                          onClick={() => {
                            if (menu.quantity > 1) {
                              updateMenuQuantity(menu.name, menu.quantity - 1); // UPDATE MENU QUANTITY
                              setButtonClicked(!buttonClicked); // WHEN THE BUTTON IS CLICKED
                            } else {
                              setRemoveOrderPopup(true);
                              setRemoveMenuName(menu.name);
                            }
                          }}
                        >
                          -
                        </button>
                        <span className="mx-2 my-auto w-6 text-center">
                          {menu.quantity}
                        </span>
                        <button
                          className="h-8 w-10 rounded-md bg-red-400 shadow-md duration-150 hover:bg-red-500 hover:shadow-lg active:bg-red-300 md:h-6 md:w-10"
                          onClick={() => {
                            updateMenuQuantity(menu.name, menu.quantity + 1); // UPDATE MENU QUANTITY
                            setButtonClicked(!buttonClicked); // WHEN THE BUTTON IS CLICKED
                          }}
                        >
                          +
                        </button>
                      </span>
                      <button
                        className={`${
                          menu.quantity > 1 ? "hidden" : "flex"
                        } h-1/2 w-2/12 items-center justify-center rounded-lg bg-red-400 px-4 py-2 shadow-md duration-150 hover:bg-red-500 hover:shadow-lg active:bg-red-300 md:h-[40px]`}
                        onClick={() => {
                          setIsOrderOpen(true); // OPEN ORDER POPUP
                          menuSelected[menu.name] = {
                            id: menu.id,
                            name: menu.name,
                            quantity: (menuSelected[menu.name]?.quantity ?? 0) + 1,
                            price: menu.price,
                          };
                          setMenuSelected(menuSelected);
                        }}
                      >
                        <p className="hidden sm:block">เพิ่ม</p>
                        <p className="mb-1 text-xl sm:hidden">+</p>
                      </button>
                    </div>
                  </div>
                );
              })}
          </div>
        );
      })}
      <button
        onClick={() => setIsOrderOpen(!isOrderOpen)}
        className="fixed bottom-4 right-4 z-50
          flex h-14 w-14 items-center justify-center rounded-full border-2 bg-white p-2
          text-3xl shadow-lg hover:bg-gray-100"
      >
        <div className="relative right-[2px] ">
          <AiOutlineShoppingCart />
        </div>
      </button>
      <div
        className={`pointer-events-none fixed bottom-0 left-0 z-30 flex w-full justify-center duration-500 md:bottom-4 ${
          isOrderOpen ? "" : "z-0 translate-y-full opacity-0"
        }`}
      >
        <OrderPopUp
          isOrderOpen={isOrderOpen}
          setIsOrderOpen={setIsOrderOpen}
          menuSelected={menuSelected}
          setMenuSelected={setMenuSelected}
          updateMenuQuantity={updateMenuQuantity}
          buttonClicked={buttonClicked}
          setButtonClicked={setButtonClicked}
          setRemoveMenuName={setRemoveMenuName}
          setRemoveOrderPopup={setRemoveOrderPopup}
        />
      </div>
      {/* DISPLAY SHADER WHEN ORDER POPPED-UP */}
      <div
        className={`BLACK-SHADER fixed top-0 left-0 h-screen w-screen bg-black  duration-500 ${
          isOrderOpen ? "z-20 opacity-[0.15]" : "z-0 opacity-0"
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
