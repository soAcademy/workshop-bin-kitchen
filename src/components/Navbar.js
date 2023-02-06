import React from 'react'
import {  Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <div className="flex ">
          <div className="bg-teal-700 w-full">
          <Link to="/" className="p-2 bg-teal-700 hover:bg-red-500">
              Home
            </Link>
            <Link to="/Menu" className="p-2 bg-teal-700 hover:bg-red-500">
              Menu
            </Link>
            <Link to="/Order" className="p-2 bg-teal-700 hover:bg-red-500">
              Order
            </Link>
            <Link to="/Stat" className="p-2 bg-teal-700 hover:bg-red-500">
              Stat
            </Link>
            <Link to="/Faq" className="p-2 bg-teal-700 hover:bg-red-500">
              Faq
            </Link>
          </div>
          
      </div>
    </>
  );
};
export default Navbar;

// import React from "react";
// import { BrowserRouter, Route, Routes, Link } from "react-router-dom";

// const Navbar = () => {
//   return (
//     <nav>
//       <ul>
//         <li>
//           <Link to="/">Home</Link>
//         </li>
//         <li>
//           <Link to="/Menu">Menu</Link>
//         </li>
//         <li>
//           <Link to="/Order">Order</Link>
//         </li>
//         <li>
//           <Link to="/Stat">Stats</Link>
//         </li>
//       </ul>
//     </nav>
//   );
// };

// export default Navbar;