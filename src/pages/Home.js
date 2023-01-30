export const Home = () => {
  const [foodMenus, setFoodMenus] = useState();
  // const [categories, setCategories] = useState();

  const [cart, setCart] = useState([]);
  // [{productId: 1, quantity: 1, name: 'ผัดคะน้า'}, {productId: 2, quantity: 3, name: 'แกงส้ม'}]

  const [toggleCartPopup, setToggleCartPopup] = useState(false);

  useEffect(() => {
    axios({
      method: "get",
      url: "https://pastebin.com/raw/x1EY0NL9",
    }).then((res) => {
      console.log(res.data);
      setFoodMenus(res.data);
      // setCategories([...new Set(res.data?.map((r) => r.category))]);
    });
  });

  return (
    <div className="px-4">
      Home
      {/* <FoodMenuList data={foodMenus} category="เมนูแนะนำ" /> */}
      <FoodMenuGroup
        foodMenus={foodMenus}
        categories={[...new Set(res.data?.map((r) => r.category))]}
        className="px-4 mt-4"
      />
      <CartPopup
        cart={cart}
        setCart={setCart}
        toggleCartPopup={toggleCartPopup}
        setToggleCartPopup={setToggleCartPopup}
      />
    </div>
  );
};
