// import FoodMenuList from "../components/FoodMenuList";
import FoodMenuGroup from "../components/FoodMenuGroup";
import Hero from "../components/Hero";

export const Home = () => {
  return (
    <div className="font-nstl text-sm px-4 pt-4">
      <Hero />
      <FoodMenuGroup />
    </div>
  );
};
