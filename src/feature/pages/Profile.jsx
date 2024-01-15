import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const navigate = useNavigate();
  const currentUser = useSelector((state) => state.userAuth.currentUser);

  useEffect(() => {
    if (!currentUser) navigate("/login");
  }, [currentUser]);
  return <div>Profile</div>;
};

export default Profile;
