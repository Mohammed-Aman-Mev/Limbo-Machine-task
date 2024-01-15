import React from "react";
import { useSelector } from "react-redux";
import ListItem from "./ListItem";
import Filter from "./Filter";

const DashboardMain = () => {
  const userdata = useSelector((state) => state.userReducer);

  return (
    <div className="p-3">
      <Filter />
      <ul className="w-full">
        {userdata.map((i, j) => (
          <ListItem key={j} data={i} />
        ))}
      </ul>
    </div>
  );
};

export default DashboardMain;
