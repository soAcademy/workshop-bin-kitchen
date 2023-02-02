import { useState, useEffect } from "react";
import FoodMenusCategory from "../Components/FoodMenusCategory";
// import foodMenus from "../assets/foodMenus";
import axios from "axios";
import PopupOrder from "../Components/PopupOrder";

export const Home = () => {
  const [menuDatas, setMenuDatas] = useState([]);
  const [menuTypes, setMenuTypes] = useState([]);
  const [modalOrder, setModalOrder] = useState(false);
  const [orderListsState, setOrderListsState] = useState([]);

  const shopData = {
    name: "ร้านอาหารครัวคุณบิน",
    detail: `ร้านอาหารครัวคุณบินปรุงด้วยใจ เหมือนทำให้คนในครอบครัวทาน
    เราเปิดให้บริการตั้งแต่ปีพ.ศ. 2535 กว่า 30 ปีที่เรานำเสนอความ
    อร่อยแบบไทยแท้ เราคัดสรรวัตถุดิบชั้นดี ปลอดภัย ออร์แกนิค จาก
    เกษตรกรในพื้นที่สุโขทัย ปรุงด้วยสูตรลับต้นตำรับชาววังที่สืบทอด
    กันมารุ่นสู่รุ่น จัดแต่งมาบนจาน พร้อมเสิร์ฟความอร่อยให้กับคุณ`,
    imgUrl: "../images/banner.jpg",
  };

  useEffect(() => {
    axios
      .post(
        // `https://api.allorigins.win/raw?url=https://pastebin.com/raw/x1EY0NL9`
        `https://sprinttech-food-menu-api-iinykauowa-uc.a.run.app/get-menus`
      )
      .then((res) => {
        // console.log(res.data);
        setMenuDatas(res.data);
        // console.log(menuData);
      });
  }, []);

  useEffect(() => {
    // console.log(menuData);
    const menuAllTypes = menuDatas?.map((r) => r.category);
    const filterMenuType = [...new Set(menuAllTypes)];
    // console.log(filterMenuType);
    setMenuTypes(filterMenuType);
    //   console.log(menuType);
  }, [menuDatas]);

  //////////////////////////////////////////////////////////////////////////////////
  const addBtnFunc = (menuData) => {
    // console.log(menuData);

    const _orders = JSON.parse(localStorage.getItem("orders")) ?? [];
    const ckeckDupli = _orders.filter(
      (order) => order.id === menuData.id
    ).length;
    // console.log(ckeckDupli);

    let reOrders = [];
    if (ckeckDupli > 0) {
      reOrders = _orders.map((order) => {
        if (order.id === menuData.id) {
          return { ...order, quantity: order.quantity + 1 };
        } else {
          return order;
        }
      });
      // console.log(reOrders);
    } else {
      reOrders = [..._orders, { ...menuData, quantity: 1 }];
      // console.log(reOrders);
    }

    localStorage.setItem("orders", JSON.stringify(reOrders));
    setOrderListsState(reOrders);
    setModalOrder(true);
  };

  return (
    <div className="font-prompt">
      <div className="pt-20 pb-4 px-4">
        <div className="md:flex justify-center mb-10">
          <div className="md:flex flex-row-reverse gap-x-4 md:w-2/3">
            <div className="md:w-1/2 md:flex items-center">
              <div className="md:flex flex-col gap-y-8">
                <div className="shopName mb-4">
                  <h1 className="text-3xl text-center">{shopData.name}</h1>
                </div>
                <div className="shopDetail mb-4">
                  <p className="text-sm">{shopData.detail}</p>
                </div>
              </div>
            </div>

            <div className="shopImage md:w-1/2">
              <img
                className="w-full rounded-lg"
                src={shopData.imgUrl}
                alt="banner"
              />
            </div>
          </div>
        </div>

        <div className="md:flex justify-center">
          <div className="menu md:w-2/3 md:grid grid-cols-2 gap-8 text-sm">
            {menuTypes?.map((menuType, idx) => (
              <FoodMenusCategory
                key={idx}
                menuType={menuType}
                menuDatas={menuDatas}
                addBtnFunc={addBtnFunc}
              />
            ))}
          </div>
        </div>
      </div>

      {modalOrder && (
        <PopupOrder
          modalOrder={modalOrder}
          setModalOrder={setModalOrder}
          orderListsState={orderListsState}
          setOrderListsState={setOrderListsState}
        />
      )}
    </div>
  );
};

export default Home;
