import MenuItem from "./MenuItem"

const MenuItemGenerator = (
  menus
) => {
  return <div>แสดง menu item ทั้งหมดใน category นี้</div>
}

const MenuSection = ({
  category,
  menus
}) => (
  <div>
    <h4 className="pt-4">แสดง category ของอาหาร</h4>
    { MenuItemGenerator(menus) }
  </div>
)

export default MenuSection