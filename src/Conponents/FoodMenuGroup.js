const FoodMenuGroup = ({ props, categories }) => {
  // const categories = props?.reduce((acc, e)=> {
  //   acc = [...acc, e.category];
  //   return acc
  // }, [])

  // const uniqueCategory = [...new Set(categories)];

  return (
    <div>
      {categories?.map((category) => {
        <div>
          <div className="font-mono font-bold m-8 ml-10">{category}</div>
          {menus.filter(e => e.category === category)
          .map((menu) => menu}
    </div>
  );
};
export default FoodMenuGroup;
