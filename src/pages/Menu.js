import axios from "axios";
import { useEffect, useState } from "react";

const Menu = () => {
  const [foodMenus, setFoodMenus] = useState();
  const [isOrderOpen, setIsOrderOpen] = useState();
  const [removeOrderPopup, setRemoveOrderPopup] = useState();
  const [removeMenuName, setRemoveMenuName] = useState();
  // FETCH MENU DATA
  useEffect(() => {
    axios({
      method: "get",
      url: "https://api.allorigins.win/raw?url=https://pastebin.com/raw/x1EY0NL9",
    }).then((res) => {
      setFoodMenus(res.data);
    });
  }, []);

  // useEffect(() => {
  //   console.log(isOrderOpen);
  // }, [isOrderOpen]);

  const [menuSelected, setMenuSelected] = useState({});
  const [menuNameArray, setMenuNameArray] = useState();
  const [menuAmountArray, setMenuAmountArray] = useState();
  const [buttonClicked, setButtonClicked] = useState();
  const updateMenuAmount = (menuName, amount) => {
    menuSelected[menuName] = amount;
    setMenuSelected(menuSelected);
  };

  // UPDATE menuNameArray , menuAmountArray WHEN menuSelected HAS BEEN UPDATED
  useEffect(() => {
    setMenuNameArray(Object.keys(menuSelected));
    setMenuAmountArray(Object.values(menuSelected));
  }, [JSON.stringify(menuSelected)]);

  // CREATE UNIQUE MENU NAMES
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
                          setIsOrderOpen(true); // OPEN ORDER POPUP
                          menuSelected[menu.name] =
                            (menuSelected[menu.name] ?? 0) + 1; // ADD OR UPDATE SELECTED MENU
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
      <div
        className={`fixed bottom-0 left-0 z-30 bg-white w-full p-10 min-h-[400px] max-h-[500px] overflow-scroll space-y-4 duration-500 ${
          isOrderOpen ? "" : "translate-y-full"
        }`}
      >
        <div className="flex justify-between">
          <span>หมายเลขโต๊ะ</span>
          <input
            type="number"
            placeholder="No."
            className="w-14 rounded-lg text-center border-[1px] border-gray-400"
            onChange={(e) => {
              e.target.value = e.target.value.slice(0, 3); // LIMIT INPUT LENGTH
            }}
          ></input>
        </div>
        <div className="text-center w-full border-b border-gray-600 py-4">
          รายการอาหาร
        </div>
        <div className="h-[200px] overflow-scroll space-y-1">
          {menuNameArray?.map((e, idx) => {
            return (
              <div className="flex justify-between py-1">
                <span>{e}</span>
                <span className="flex">
                  <button
                    className={`w-8 h-6 bg-red-300 rounded-md`}
                    onClick={() => {
                      if (menuSelected[e] > 1) {
                        updateMenuAmount(e, (menuSelected[e] ?? 0) - 1); // UPDATE MENU AMOUNT
                        setButtonClicked(!buttonClicked); // WHEN THE BUTTON IS CLICKED
                      } else {
                        setRemoveOrderPopup(true);
                        setRemoveMenuName(e);
                      }
                    }}
                  >
                    -
                  </button>
                  <span className="w-6 mx-2 text-center">
                    {menuAmountArray.at(idx)}
                  </span>
                  <button
                    className="w-8 h-6 bg-red-300 rounded-md"
                    onClick={() => {
                      updateMenuAmount(e, (menuSelected[e] ?? 0) + 1); // UPDATE MENU AMOUNT
                      setButtonClicked(!buttonClicked); // WHEN THE BUTTON IS CLICKED
                    }}
                  >
                    +
                  </button>
                </span>
              </div>
            );
          })}
        </div>
        <div className="w-full flex justify-center pt-4 ">
          <button className="w-32 h-10 text-center rounded-xl bg-blue-500 relative bottom-0">
            สั่งอาหาร
          </button>
        </div>
      </div>
      <div
        // DISPLAY SHADER WHEN ORDER POPPED-UP
        className={`BLACK-SHADER bg-black opacity-10 fixed top-0 left-0 h-screen w-screen md:hidden duration-500 ${
          isOrderOpen ? "z-20" : "opacity-0 z-0"
        }`}
        onClick={() => setIsOrderOpen(false)}
      ></div>
      <div
        className={`w-screen h-screen flex justify-center items-center fixed top-0 left-0 duration-500 ${
          removeOrderPopup ? "z-40" : "scale-0"
        }`}
      >
        <div
          className={`w-60 h-36 bg-white text-center p-4 justify-between flex flex-col rounded-xl shadow-xl  duration-500 ${
            removeOrderPopup ? "opacity-100 z-40" : "opacity-0"
          }`}
        >
          <div className="text-xl">ลบรายการ</div>
          <div className="flex justify-between p-4 px-4 space-x-2">
            <button
              className="bg-blue-400 border-blue-300 border-2 shadow-md w-20 h-10 rounded"
              onClick={() => {
                delete menuSelected[removeMenuName];
                setButtonClicked(!buttonClicked);
                setRemoveOrderPopup(false);
              }}
            >
              ยืนยัน
            </button>
            <button
              className="border-blue-300 border-2 shadow-md w-20 h-10 rounded"
              onClick={() => setRemoveOrderPopup(false)}
            >
              ยกเลิก
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Menu;
