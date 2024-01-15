import React, { useEffect } from "react";
import { DashboardMain, SideBar } from "../components";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Dashboard = () => {
  const navigate = useNavigate();
  const currentUser = useSelector((state) => state.userAuth.currentUser);

  useEffect(() => {
    if (!currentUser) navigate("/login");
  }, [currentUser]);

  return (
    <div className="flex justify-between">
      <SideBar />
      <DashboardMain />
    </div>
  );
};

export default Dashboard;
