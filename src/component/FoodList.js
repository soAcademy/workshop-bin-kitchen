import { useState} from "react";
import CartPopUp from "./CartPopUp";

const FoodList = (props) => {
  console.log("Foodlist props",props);
  const {addCart,categories,menuGroup} = props;
  const [selectMenu, setSelectMenu] = useState([]);
  const[toggle,setToggle] = useState(false);


  return (
    <div>
      {/* {console.log("Foodlist",{addCart,setCart,allData,category3,menu})} */}
      <h1 className="bg-red-200 w-[100px] text-center p-1 rounded-lg font-bold shadow-lg shadow-yellow-500/20">
        เมนู{categories}
      </h1>
      <div className="grid md:grid-cols-2">
        {menuGroup?.map((r, idx) => (
          <div className="flex justify-between m-2 flex items-center w-[350px] md:w-[500px] static ">
            <div className="">
              <img
                className="h-[50px] w-[50px] rounded-lg md:h-[100px] md:w-[100px]"
                src={r.image}
                alt="loading"
              ></img>
            </div>
            <div className=" w-1/3 ">
              {r.name}
              <br />
              <p className="font-bold text-left text-red-400">{r.price}</p>
            </div>
            <div className="grid justify-items-end w-1/3 mr-1">
              <button
                onClick={() => {
                                  setSelectMenu(r) 
                                  addCart(r)
                                  setSelectMenu(r)
                                }
                        }
                className="bg-red-200 p-1 rounded-lg hover:shadow-lg shadow-indigo-500/50 hover:bg-teal-200 md:w-[80px]"
              >
                เพิ่ม
              </button>
            </div>

            {toggle && <div><CartPopUp order={selectMenu}/></div>}

          </div>
        ))}
      </div>
   
    </div>
  );
};
export default FoodList;
