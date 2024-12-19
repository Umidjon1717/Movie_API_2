import React from "react";
import { MdHomeMax } from "react-icons/md";
import logo from "@/assets/images/logo.svg";
import { NavLink } from "react-router-dom";
import { FaRegNewspaper } from "react-icons/fa";
import { LuTicket, LuSearch } from "react-icons/lu";


const Header = () => {
  return (
    <>
      <div className="container ">
        <div className="flex justify-between pt-3 pb-3">
          <div>
            <img src={logo} alt="Logo" />
          </div>
          <div>
            <ul
              className="flex gap-10 max-[750px]:absolute max-[750px]:top-[60px] max-[750px]:left-0 max-[750px]:flex-col max-[750px]:bg-white max-[750px]:shadow-md max-[750px]:w-full max-[750px]:p-5 max-[750px]:gap-3"
            >
              <li>
                <NavLink
                  className={({ isActive }) =>
                    `flex flex-col items-center  ${isActive ? "text-[#C61F1F]" : "text-gray-700"}`
                  }
                  to="/"
                >
                  <MdHomeMax className="w-6 h-6" />
                  <span>Home</span>
                </NavLink>
              </li>
              <li>
                <NavLink
                  className={({ isActive }) =>
                    `flex flex-col items-center  ${isActive ? "text-[#C61F1F]": "text-gray-700"}`
                  }
                  to="/latest"
                >
                  <FaRegNewspaper className="w-6 h-6"/>
                  <span>Latest</span>
                </NavLink>
              </li>
              <li>
                <NavLink
                  className={({ isActive }) =>
                    `flex flex-col items-center  ${isActive ? "text-[#C61F1F]" : "text-gray-700"}`
                  }
                  to="/tickets"
                >
                  <LuTicket className=" w-6 h-6"/>
                  <span>Tickets</span>
                </NavLink>
              </li>
              <li>
                <NavLink
                  className={({ isActive }) =>
                    `flex flex-col items-center  ${isActive ? "text-[#C61F1F]" : "text-gray-700"}`
                  }
                  to="/search"
                >
                  <LuSearch className="w-6 h-6"/>
                  <span>Search</span>
                </NavLink>
              </li>
            </ul>
          </div>
          <div>
            <button className="bg-[#C61F1F] px-8 text-white py-2 rounded-md">Log In</button>
          </div>
        </div>
      </div>
      
    </>
  );
};

export default Header;
