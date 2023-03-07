import Nav from "./component/Nav";
import CartPopUp from "./component/CartPopUp";
import ListMenu from "./component/ListMenu";
import { useState, useEffect } from "react";
import axios from "axios";

const Home = () => {
  const [menu, setMenu] = useState([]);
  const [toggle, setToggle] = useState(false);
  const [cart, setCart] = useState([]);
  const [categories, setCategories] = useState([]);
  const [tableId, setTableId] = useState();

  useEffect(() => {
    const a = axios({
      method: "post",
      url: "http://localhost:5000/dewKitchen/getMenu",
    }).then((res) => {
      setMenu(res.data);
      // console.log("res.data>>>>",res.data);
      // console.log(
      //   "catgory",
      //   res.data?.map((r) => r.categoryName)
      // );
      setCategories([...new Set(res.data?.map((r) => r.categoryName))]);
      // console.log("unique ", [...new Set(res.data?.map((r) => r.categoryName))]); // unique menu
    });
  }, []);

  const updateCart = ({ cart, quantity, id, name, price, sign }) => {
    // console.log(
    //   `update Cart : ${cart}, Quantity:${quantity}, Id:${id}, Name:${name}, Price:${price}`
    // );
    const tempCart = [...cart]; //copy array
    const index = cart?.findIndex((r) => r.id === id);

    if (index !== -1) {
      tempCart[index].quantity += quantity + sign;
    } else {
      tempCart.push({ id, name, quantity, price });
    }
    const filterQuantity0 = tempCart.filter((r) => r.quantity > 0);
    console.log("-----------", filterQuantity0);
    setCart(filterQuantity0);
  };
  console.log("cart", cart);

  const CreateOrder = (cart,tableId) => {
    // console.log("cart in Confirm", cart);
    const confirmData = cart.map((r) => ({
      menuId: r.id,
      price: r.price,
      quantity: r.quantity,
      totalPrice: r.price * r.quantity,
    }));
    console.log("confirmData",confirmData);
    const _preparedData = {tableId:Number(tableId), items :  confirmData}
    console.log("_preparedData",_preparedData);
    axios({
      method: "POST",
      url: "http://localhost:5000/dewKitchen/createOrder",
      data: _preparedData,
    }).then((response) => {
      console.log("response.data:", response.data);
      setCart([])
    });
  };

  
  
  return (
    <>
      <div className="bg-gradient-to-b from-blue-900 to-blue-500  w-screen min-h-screen">
        <div>
          <Nav toggle={toggle} setToggle={setToggle}  />
        </div>
        <div className="mx-auto text-center w-screen pt-12 pb-1">
          <img
            className="p-2  w-[350px] mx-auto rounded-lg shadow-lg"
            alt="Doreamon "
            src="https://tse2.mm.bing.net/th?id=OIP.HU42KXcmKotDvfb_WgNmWAHaEo&pid=Api&P=0"
          />
        </div>
        <div>
          <ListMenu
            categories={categories}
            updateCart={updateCart}
            menu={menu}
            setMenu={setMenu}
            setToggle={setToggle}
            toggle={toggle}
            cart={cart}
            setCart={setCart}
          />
        </div>
        <div>
          <div>
            {toggle && (
              <CartPopUp
                menu={menu}
                setMenu={setMenu}
                toggle={toggle}
                setToggle={setToggle}
                setCart={setCart}
                cart={cart}
                updateCart={updateCart}
                tableId={tableId}
                setTableId={setTableId}
                CreateOrder={CreateOrder}
              />
            )}
          </div>
        </div>
      </div>
    </>
  );
};
export default Home;
