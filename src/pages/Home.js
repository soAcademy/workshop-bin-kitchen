import Banner from "../assets/banner.jpg"
import MenuSection from "./MenuSection"
import foodMenus from "../assets/foodMenus"

export const Home = () => {
  // Generate uniq category from food menus
  const foodCategories = [...new Set(menus.map(item => item.category))]

  return (
    <div className="px-4">
      <h1 className="text-3xl text-center mt-4">แสดงชื่อร้านอาหาร</h1>
      <p>
        แสดงรายละเอียดร้านอาหาร
      </p>
      <div>แสดงรูปอาหาร</div>
      {
        foodCategories.map((category) => (
          <MenuSection
            key={category}
            category={category}
            // Filter only match food categories to render each section
            menus={foodMenus}
          />
        ))}
    </div>
  )
}