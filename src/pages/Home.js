import { useState, useEffect, useContext } from "react";
import FoodMenusCategory from "../Components/FoodMenusCategory";
import axios from "axios";
import PopupOrder from "../Components/PopupOrder";
import { UserContext } from "../App";

export const Home = () => {
  const [menuDatas, setMenuDatas] = useState([]);
  const [menuTypes, setMenuTypes] = useState([]);
  const [modalOrder, setModalOrder] = useState(false);
  const [orderListsState, setOrderListsState] = useState([]);
  // const [loadingPage, setLoadingPage] = useState(false);
  const { setLoadingPage } = useContext(UserContext);

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
    setLoadingPage(true);
    axios
      .post(
        // `https://api.allorigins.win/raw?url=https://pastebin.com/raw/x1EY0NL9`
        `https://sprinttech-food-menu-api-iinykauowa-uc.a.run.app/get-menus`
      )
      .then((res) => {
        // console.log(res.data);
        setMenuDatas(res.data);
        // console.log(menuData);
        setLoadingPage(false);
      })
      .catch((error) => alert("Message: " + error.message));
  }, []);

  useEffect(() => {
    // console.log(menuData);
    const menuAllTypes = menuDatas?.map((r) => r.category);
    const filterMenuType = [...new Set(menuAllTypes)];
    // console.log(filterMenuType);
    setMenuTypes(filterMenuType);
    //   console.log(menuType);
    const _orders = JSON.parse(localStorage.getItem("orders")) ?? [];
    setOrderListsState(_orders);
  }, [menuDatas]);

  //////////////////////////////////////////////////////////////////////////////////
  const upOrderStUpdLocal = (orders) => {
    setOrderListsState(orders);
    localStorage.setItem("orders", JSON.stringify(orders));
  };

  //////////////////////////////////////////////////////////////////////////////////
  const addBtnFunc = (menuData) => {
    // console.log(menuData);
    const duplicateItem =
      orderListsState.filter((order) => order.id === menuData.id).length > 0;

    const reAlign = duplicateItem
      ? orderListsState.map((order) => {
          return order.id === menuData.id
            ? { ...order, quantity: order.quantity + 1 }
            : order;
        })
      : [...orderListsState, { ...menuData, quantity: 1 }];

    upOrderStUpdLocal(reAlign);
    setModalOrder(true);
  };

  return (
    <div className="font-prompt">
      <div className="pt-20 pb-4 px-4">
        <div className="md:flex justify-center mb-10">
          <div className="w-full md:w-2/3">
            <div className="shopName mb-8">
              <h1 className="text-3xl text-center">{shopData.name}</h1>
            </div>
            <div className="md:flex flex-row-reverse gap-x-8">
              <div className="shopDetail md:w-1/2 mb-4 md:mb-0">
                <p className="text-sm">{shopData.detail}</p>
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
          upOrderStUpdLocal={upOrderStUpdLocal}
        />
      )}
    </div>
  );
};

export default Home;
