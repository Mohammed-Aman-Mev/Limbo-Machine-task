import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { logOut } from "../Redux/authSlice";

const Header = () => {
  const currentUser = useSelector((state) => state.userAuth.currentUser);
  const dispatch = useDispatch();

  const userLogout = () => {
    dispatch(logOut());
  };
  const arr = [
    {
      path: "/",
      title: "Home",
    },
    currentUser
      ? { path: "/login", title: "Logout" }
      : { path: "/login", title: "log In" },
    {
      path: "/dashboard",
      title: "Dashboard",
    },
  ];

  const data = useSelector((state) => state.userReducer);

  return (
    <nav className="sticky top-0 w-full h-[50px] px-1 flex items-center justify-between bg-gray-600 rounded-sm">
      <h3> Machine task</h3>
      <div className="flex items-center gap-3">
        {arr.map((item, index) => {
          return (
            <NavLink
              key={index}
              to={item.path}
              className={({ isActive, pending }) =>
                isActive
                  ? "bg-neutral-800 text-white p-[5px] rounded-md"
                  : "border-2 border-neutral-800 rounded-md p-[4px]"
              }
              onClick={item.title === "Logout" ? userLogout : null}
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
