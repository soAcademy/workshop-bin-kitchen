// import FoodMenuList from "../components/FoodMenuList";
import FoodMenuGroup from "../components/FoodMenuGroup";
import Hero from "../components/Hero";

export const Home = () => {
  return (
    <div className="px-4 pt-4 font-nstl text-sm">
      <Hero />
      <FoodMenuGroup />
    </div>
  );
};
