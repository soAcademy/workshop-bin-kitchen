import FoodMenuList from "../Components/FoodMenuList";

export const Home = () => {
  const mockData = [
    {
      id: 1,
      name: "แกงส้มชะอมกุ้ง",
      image:
        "https://img.wongnai.com/p/1920x0/2018/12/17/bf69cc77dfb94a5ab6df20ffb0622cd2.jpg",
      price: 150,
      category: "แนะนำ",
    },
    {
      id: 2,
      name: "แกงส้มชะอมกุ้ง",
      image:
        "https://img.wongnai.com/p/1920x0/2018/12/17/bf69cc77dfb94a5ab6df20ffb0622cd2.jpg",
      price: 150,
      category: "แกง",
    },
    {
      id: 3,
      name: "ผัดคะน้าเห็ดหอม",
      image:
        "https://tourdefood.net/wp-content/uploads/2020/11/%E0%B8%84%E0%B8%B0%E0%B8%99%E0%B9%89%E0%B8%B2-%E0%B9%80%E0%B8%AB%E0%B9%87%E0%B8%94%E0%B8%AB%E0%B8%AD%E0%B8%A1-%E0%B8%99%E0%B9%89%E0%B8%B3%E0%B8%A1%E0%B8%B1%E0%B8%99%E0%B8%AB%E0%B8%AD%E0%B8%A2-%E0%B8%97%E0%B8%B5%E0%B9%88%E0%B8%94%E0%B8%B5%E0%B8%95%E0%B9%88%E0%B8%AD%E0%B8%AA%E0%B8%B8%E0%B8%82%E0%B8%A0%E0%B8%B2%E0%B8%9E.jpg",
      price: 130,
      category: "แนะนำ",
    },
  ];

  return (
    <>
      <h1 className="text-3xl m-4">ร้านอาหารครัวคุณบอร์น</h1>
      <div className="m-4">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
      </div>
      <div>
        <img
          src="pichome.jpeg"
          className="object-cover rounded mx-auto w-11/12 h-64"
        />
      </div>
      <h1 className="mx-4 mt-4">รายการแนะนำ</h1>

      <div className="flex w-full mt-4">
        <img src="menu1.jpeg" className="object-cover rounded mx-4 w-32 h-32" />
        <div>
          <p className="mt-4 bg-red-200">แกงส้มชะอมกุ้ง</p>
          <p className="mt-8 text-red-600">฿150</p>
        </div>
        <div>
          <button className="bg-red-200 rounded px-6 py-2 mt-10 ml-28">
            เพิ่ม
          </button>
        </div>
      </div>
      <div className="flex w-full mt-4">
        <img src="menu2.jpeg" className="object-cover rounded mx-4 w-32 h-32" />
        <div>
          <p className="mt-4 bg-red-200">ผัดคะน้าเห็ดหอม</p>
          <p className="mt-8 text-red-600">฿130</p>
        </div>
        <div>
          <button className="bg-red-200 rounded px-6 py-2 mt-10 ml-28">
            เพิ่ม
          </button>
        </div>
      </div>
      <div className="flex w-full mt-4">
        <img src="menu3.jpeg" className="object-cover rounded mx-4 w-32 h-32" />
        <div>
          <p className="mt-4 bg-red-200">สามชั้นคั่วพริกเกลือ</p>
          <p className="mt-8 text-red-600">฿200</p>
        </div>
        <div>
          <button className="bg-red-200 rounded px-6 py-2 mt-10 ml-28">
            เพิ่ม
          </button>
        </div>
      </div>
    </>
  );
};
