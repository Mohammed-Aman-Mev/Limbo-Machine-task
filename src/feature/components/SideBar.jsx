import React from "react";
import { NavLink } from "react-router-dom";

const SideBar = () => {
  return (
    <div className="h-[500px] pt-[50px] pl-[20px] w-[150px] bg-yellow-300 sticky top-[50px]">
      <NavLink
        to={"/profile"}
        className={({ isActive, pending }) =>
          isActive
            ? "bg-neutral-800 text-white p-[5px] rounded-md mx-auto"
            : "border-2 border-neutral-800 rounded-md p-[4px] mx-auto"
        }
      >
        User Profile
      </NavLink>
    </div>
  );
};

export default SideBar;
