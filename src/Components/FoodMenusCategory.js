import FoodMenusList from "../Components/FoodMenusList";

const FoodMenusCategory = ({ menuType, menuDatas, addBtnFunc }) => {
  // console.log(props);

  return (
    <div className="mb-8 md:mb-0">
      <div className="menuType mb-4">
        <p className="font-bold">{menuType}</p>
      </div>
      <div className="flex flex-col gap-2">
        {menuDatas
          .filter((menu) => menu.category === menuType)
          .map((menuData, idx) => (
            <FoodMenusList key={idx} menuData={menuData} addBtnFunc={addBtnFunc} />
          ))}
      </div>
    </div>
  );
};

export default FoodMenusCategory;
