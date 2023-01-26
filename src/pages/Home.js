import FoodMenuList from "../components/FoodMenuList";
import Hero from "../components/Hero";

export const Home = () => {
  return (
    <div className="font-nstl px-4">
      <Hero />
      <FoodMenuList />
    </div>
  );
};
