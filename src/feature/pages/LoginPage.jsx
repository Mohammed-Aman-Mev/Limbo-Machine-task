import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { authUser } from "../Redux/authSlice";
import { filterdata } from "../Redux/UserSlice";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const user = useSelector((state) => state.userAuth);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const currentUser = useSelector((state) => state.userAuth.currentUser);

  const [userinfo, setUserinfo] = useState({
    username: "",
    password: "",
  });

  const userdata = (e) => {
    e.preventDefault();
    dispatch(authUser(userinfo));
  };

  useEffect(() => {
    if (currentUser) navigate("/dashboard");
  }, [currentUser]);
  return (
    <div className="flex items-center justify-center w-full pt-[100px]">
      <form
        action=""
        className="flex flex-col gap-5 bg-neutral-800 p-[20px] rounded-lg"
        onSubmit={(e) => userdata(e)}
      >
        <input
          className="w-[220px] p-2"
          type="text"
          required
          placeholder="Username"
          name="username"
          onChange={(e) =>
            setUserinfo({ ...userinfo, [e.target.name]: e.target.value })
          }
        />
        <input
          className="w-[220px] p-2"
          type="password"
          required
          placeholder="Password"
          name="password"
          onChange={(e) =>
            setUserinfo({ ...userinfo, [e.target.name]: e.target.value })
          }
        />
        <button
          type="submit"
          className="text-white hover:bg-blue-500 p-2 rounded-md"
        >
          Log In
        </button>
      </form>
    </div>
  );
};

export default LoginPage;
