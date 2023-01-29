import React from "react";
import { datakitchenboeing } from "../datakitchen";
import Hamburger from "./Hamburger";

const Nav = (props) => {
  const { hamOn, isHamburgerOn } = props;
  return (
    <div className="z-20 sticky top-0 ">
      <div className="bg-rose-300 shadow-lg flex items-center first-letter px-4 py-2 md:py-5">
        <div className="md:w-[90px] md:h-[90px]" onClick={hamOn}>
          <img
            className="ml-4 md:ml-12 md:w-full md:h-full"
            src={datakitchenboeing.nav_icon}
          />
        </div>
        <div className="ml-4 md:w-[90px] md:h-[90px]">
          <img
            className="md:ml-16 md:w-full md:h-full"
            src={datakitchenboeing.nav_icon2}
          />
        </div>
        <div className="text-white text-xl ml-4 md:text-4xl md:font-semibold md:ml-20 lg:text-5xl">
          Flying Rabbit
        </div>
      </div>
      {isHamburgerOn && <Hamburger />}
      {/* ข้างหน้าเป็นจริงมันจะทำข้างหลัง */}
    </div>
  );
};

export default Nav;
