import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  const currentUser = useSelector((state) => state.userAuth.currentUser);

  useEffect(() => {
    if (!currentUser) navigate("/login");
  }, [currentUser]);

  return <div className="bg-pink-400 flex">Home</div>;
};

export default Home;
