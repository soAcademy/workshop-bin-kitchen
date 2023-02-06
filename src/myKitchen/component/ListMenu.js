import CartPopUp from "./CartPopUp";
import { useState} from "react";
const ListMenu = ({ categories, mockdata }) => {
  const data = categories.map((category) => {
    return mockdata.filter((s) => s.category === category);
  });
  // console.log("ListMenu", data);
  const [toggle, setToggle] = useState(false);
  const [menu, setMenu] = useState([]);
  const [nestMenu, setNestMenu] = useState([]);
  const callMulti = (x) => { setToggle(true);  addCart(x) ;  };
  


  const addMenuToStorage = (newMenu)=>{
    const updateCart = [...menu, ...newMenu];
    setMenu(updateCart);
  };
  console.log("update menu",menu);
  const addCart = (x) => {
    // console.log("AddCart",x)
    // console.log(">>>>>>>>>>>",menu?.filter(r=>r.id !==x.id))
    const tempCart = [x];
    const newCart = tempCart?.map(r=>r.quantity??{quantity:1,...r})
    const nestCart = [...[x],...newCart]   
    // console.log("Nestcart",nestCart[1])
    const cleanMenu = [nestCart[1]].map(r=>{
      return {
        id: r.id,
        name: r.name,
        price: r.price,
        quantity : r.quantity  
      }
    })
    // console.log("filterImg",filterImg);
    setMenu(cleanMenu); 
    addMenuToStorage(cleanMenu);
  };
  console.log("After click Add >>>>>>>",menu);

  const updateCart = (id,quantity,sign)=>{
    const findIndex = menu.findIndex(r=>r.id === id);
    console.log("index",findIndex);
    const newQuantity = menu[findIndex].quantity + quantity;  //////
    // console.log("newQuantity",newQuantity)
    const newCart = menu?.map(r=>{
      return{
      id : r.id,
      name : r.name,
      price : r.price,
      quantity : newQuantity}
    })
    console.log("newCart",newCart);

    return (newQuantity);
  };
  

  return (
    <>
      {" "}
      {data.map((r) =>
        r.map((s) => (
          <div className="flex flex-row  h-[100px] bg-slate-500 p-2  space-x-2  ">
            <div className="">
              <img
                className="w-[100px] aspect-[4/3] object-cover rounded-lg"
                src={s.image}
                alt="Sishuka"
              />
            </div>
            <div className="flex flex-col px-2 w-[150px]">
              <div className=" float-left h-[50px] text-white">{s.name}</div>
              <div className="">{s.price}$</div>
            </div>
            <div
              className="bg-teal-300 w-1/3 my-auto p-3 rounded-lg text-center "
              onClick={() =>callMulti(s)}
            >
              Add
            </div>

            <div>
              {toggle && <CartPopUp setToggle={setToggle} menu={menu} updateCart={updateCart} />}
            </div>
          </div>
        ))
      )}
    </>
  );
};
export default ListMenu;
