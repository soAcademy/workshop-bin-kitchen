import MenuItem from "./MenuItem"

const MenuSection = ({
  category,
  menus
}) => (
  <div>
    <h4 className="pt-4">แสดง category ของอาหาร</h4>
    {
      menus.map((menu) => (
        <div>แสดง menu item ทั้งหมดใน category นี้</div>
    ))}
  </div>
)

export default MenuSection