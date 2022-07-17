import Banner from "../assets/banner.jpg"
import MenuSection from "./MenuSection"
import foodMenus from "./foodMenus"

const MenuSectionGenerator = (
  menus
) => {
  // Generate uniq category from food menus
  const foodCategories = [...new Set(menus.map(item => item.category))]

  return foodCategories.map((category) => (
    <MenuSection
      key={category}
      category={category}
      // Filter only match food categories to render each section
      menus={menus}
    />
  ))
}

export const Home = () => {
  return (
    <div className="px-4">
      <h1 className="text-3xl text-center mt-4">แสดงชื่อร้านอาหาร</h1>
      <p>
        แสดงรายละเอียดร้านอาหาร
      </p>
      <div>แสดงรูปอาหาร</div>
      { MenuSectionGenerator(foodMenus) }
    </div>
  )
}