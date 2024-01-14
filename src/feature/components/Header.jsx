import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  const arr = [
    {
      path: "/",
      title: "Home",
    },
    {
      path: "/login",
      title: "log In",
    },
    {
      path: "/dashboard",
      title: "Dashboard",
    },
  ];

  return (
    <nav className="w-full h-[50px] px-1 flex items-center justify-between bg-gray-400 rounded-md">
      <h3> Machine task</h3>
      <div className="flex items-center gap-3">
        {arr.map((item, index) => {
          return (
            <NavLink
              to={item.path}
              className={({ isActive, pending }) =>
                isActive ? "bg-neutral-600 text-white p-[5px] rounded-md" : "border-2 border-neutral-500 rounded-md p-[4px]"
              }
            >
              {item.title}
            </NavLink>
          );
        })}
      </div>
    </nav>
  );
};

export default Header;
