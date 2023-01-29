import { useState } from "react";
import { Link, NavLink } from "react-router-dom";

export const Navbar = ({ links }) => {
  const [isMenuClosed, toggleMenu] = useState(true);

  const normalNavlinkclassName =
    "block rounded py-2 pl-3 pr-4 text-black hover:bg-gray-100 md:border-0 md:p-0 md:hover:bg-transparent md:hover:text-blue-700";
  const activeNavlinkclassName =
    "block rounded bg-blue-700 py-2 pl-3 pr-4 text-white md:bg-transparent md:p-0 md:text-blue-700";

  return (
    <nav className="px-4 py-2.5 font-nstl shadow">
      <div className="flex flex-wrap items-center justify-start md:justify-between">
        <button
          // data-collapse-toggle="navbar-default"
          type="button"
          className="mr-2.5 inline-flex items-center focus:outline-none md:hidden"
          aria-controls="navbar-default"
          aria-expanded="false"
          onClick={() => toggleMenu(!isMenuClosed)}
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="h-10 w-10"
            aria-hidden="true"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
              clipRule="evenodd"
            ></path>
          </svg>
        </button>
        <Link to="/" className="font-prompt text-2xl">
          ครัวคุณเก่ง
        </Link>
        <div
          className={`${isMenuClosed && "hidden"} w-full md:block md:w-auto`}
          id="navbar-default"
        >
          <ul className="mt-2.5 flex flex-col bg-white md:mt-0 md:flex-row md:space-x-8">
            {links.map((link) => (
              <li>
                <NavLink
                  to={link.path}
                  className={({ isActive }) =>
                    isActive ? activeNavlinkclassName : normalNavlinkclassName
                  }
                  onClick={() => toggleMenu(!isMenuClosed)}
                >
                  {link.text}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};
