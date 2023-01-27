import axios from "axios";
import { useEffect, useState, useCallback } from "react";

const Menu = () => {
  const [foodMenus, setFoodMenus] = useState();
  const [isOrderOpen, setIsOrderOpen] = useState();
  useEffect(() => {
    axios({
      method: "get",
      url: "https://api.allorigins.win/raw?url=https://pastebin.com/raw/x1EY0NL9",
    }).then((res) => {
      setFoodMenus(res.data);
    });
  }, []);

  useEffect(() => {
    // console.log(isOrderOpen);
  }, [isOrderOpen]);

  const [menuSelected, setMenuSelected] = useState({});
  const [menuNameArray, setMenuNameArray] = useState();
  const [menuAmountArray, setMenuAmountArray] = useState();
  const [buttonClicked, setButtonClicked] = useState();
  // const [isMenuUpdated, setIsMenuUpdated] = useState()
  const updateMenuAmount = (menuName, amount) => {
    menuSelected[menuName] = amount;
    setMenuSelected(menuSelected);
  };

  useEffect(() => {
    setMenuNameArray(Object.keys(menuSelected));
    setMenuAmountArray(Object.values(menuSelected));
  }, [JSON.stringify(menuSelected)]);

  const category = foodMenus?.reduce((acc, e) => {
    acc = [...acc, e.category];
    return acc;
  }, []);
  const uniqueCategory = [...new Set(category)];
  return (
    <div>
      {uniqueCategory.map((category, idx) => {
        return (
          <div key={idx} className="relative space-y-4 py-4 z-[10]">
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
                      <button
                        className="rounded-lg px-4 py-2 w-2/12 h-1/2 bg-red-100 flex items-center justify-center"
                        onClick={() => {
                          setIsOrderOpen(true);
                          menuSelected[menu.name] = (menuSelected[menu.name] ?? 0) + 1;
                          setMenuSelected(menuSelected);
                          // updateMenuAmount(
                          //   menu.name,
                          //   (menuSelected[menu.name] ?? 0) + 1
                          // );
                          // console.log(menuSelected);
                          // console.log(menuNameArray);
                          // console.log(menuAmountArray);
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
      <div className="fixed bottom-0 left-0 z-30 bg-gray-400 w-full p-10 h-72 space-y-4">
        <div className="flex justify-between">
          <span>หมายเลขโต๊ะ</span>
          <input type="text"></input>
        </div>
        <div>รายการ</div>
        {/* <span>{menuSelected}</span> */}
        {menuNameArray?.map((e, idx) => {
          return (
            <div className="flex justify-between">
              <span>{e}</span>
              <span className="flex">
                <button
                  className={`w-6 h-6 bg-red-300 rounded-md`}
                  onClick={() => {
                    updateMenuAmount(e, (menuSelected[e] ?? 0) - 1);
                    setButtonClicked(!buttonClicked);
                  }}
                >
                  -
                </button>
                <p className="mx-4 w-fit">{menuAmountArray.at(idx)}</p>
                <button
                  className="w-6 h-6 bg-red-300 rounded-md"
                  onClick={() => {
                    menuSelected[e] = (menuSelected[e] ?? 0) + 1;
                    setMenuSelected(menuSelected);
                    // updateMenuAmount(e, (menuSelected[e] ?? 0) + 1);
                    setButtonClicked(!buttonClicked);
                  }}
                >
                  +
                </button>
              </span>
            </div>
          );
        })}
      </div>
      <div
        className={`bg-black opacity-10 fixed top-0 left-0 h-screen w-screen md:hidden duration-500 ${
          isOrderOpen ? "z-20" : "opacity-0 z-0"
        }`}
        onClick={() => setIsOrderOpen(false)}
      ></div>
    </div>
  );
};
export default Menu;
