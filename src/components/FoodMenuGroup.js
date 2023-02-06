const FoodMenuGroup = (props) => (
  <div className={props.className}>
    {props.categories?.map((category) => (
      <FoodMenuList
        category={category}
        foodMenus={foodMenus.filter((r) => r.category === category)}
      />
    ))}
  </div>
);
