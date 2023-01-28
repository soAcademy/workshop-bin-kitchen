import React from "react";
import { datakitchenboeing } from "../datakitchen";
import Hamburger from "./Hamburger";

const Nav = (props) => {
  const { hamOn, isHamburgerOn } = props;
  return (
    <div className="z-20 sticky top-0">
      <div className="bg-rose-300 shadow-lg flex items-center first-letter px-4 py-2">
        <div onClick={hamOn}>
          <img className="" src={datakitchenboeing.nav_icon} />
        </div>
        <div className="ml-4">
          <img src={datakitchenboeing.nav_icon2} />
        </div>
      </div>
      {isHamburgerOn && <Hamburger />}
      {/* ข้างหน้าเป็นจริงมันจะทำข้างหลัง */}
    </div>
  );
};

export default Nav;
