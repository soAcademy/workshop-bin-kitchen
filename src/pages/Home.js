import Banner from "../assets/banner.jpg";
import MenuList from "../components/MenuList";
const description = {
  name:"Omakase",
  introduction:"Omakase is a traditional Japanese dining style in which the chef provides a meal tailored to your preferences based on availability, budget, taste, and seasonality. A comparable concept in Western cuisine would be the “tasting menu,” but omakase is so much more than that. It’s a very intimate experience and very human experience that is best thought of as a verbal and non-verbal dialogue between you and the chef.",
}

const foodMenus = [
  {
    image:
      "https://img.wongnai.com/p/1920x0/2018/12/17/bf69cc77dfb94a5ab6df20ffb0622cd2.jpg",
    name: "A1",
    price: 150,
  },
  {
    image:
      "https://tourdefood.net/wp-content/uploads/2020/11/%E0%B8%84%E0%B8%B0%E0%B8%99%E0%B9%89%E0%B8%B2-%E0%B9%80%E0%B8%AB%E0%B9%87%E0%B8%94%E0%B8%AB%E0%B8%AD%E0%B8%A1-%E0%B8%99%E0%B9%89%E0%B8%B3%E0%B8%A1%E0%B8%B1%E0%B8%99%E0%B8%AB%E0%B8%AD%E0%B8%A2-%E0%B8%97%E0%B8%B5%E0%B9%88%E0%B8%94%E0%B8%B5%E0%B8%95%E0%B9%88%E0%B8%AD%E0%B8%AA%E0%B8%B8%E0%B8%82%E0%B8%A0%E0%B8%B2%E0%B8%9E.jpg",
    name: "A2",
    price: 130,
  },
  {
    image: "https://i.ytimg.com/vi/9YPqFc5BYWA/maxresdefault.jpg",
    name: "A3",
    price: 200,
  },
];



export const Home = () => (
  <div className="px-4">
    <h1 className="text-3xl underline text-center mt-4">{description.name}</h1>
    <p className="mt-2">{description.introduction}</p>
    <img src={Banner} className="w-full mt-4 rounded-lg" />
    <h4 className="mt-4 mb-2 font-bold underline">รายการแนะนำ</h4>
    {foodMenus.map((menu) => (
      <MenuList menu={menu} />
    ))}
  </div>
);
