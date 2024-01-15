import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { filterdata } from "../Redux/UserSlice";

const Filter = () => {
  const dispatch = useDispatch();
  const [fillter, setFillter] = useState({
    name: "",
    country: "",
  });

  const handleFilter = () => {
    dispatch(filterdata(fillter));
  };

  return (
    <div className="p-2 border-[2px]">
      <input
        type="text"
        placeholder="name"
        required
        name="name"
        onChange={(e) =>
          setFillter({
            ...fillter,
            [e.target.name]: e.target.value,
          })
        }
      />
      <input
        type="text"
        placeholder="country"
        required
        name="country"
        onChange={(e) =>
          setFillter({
            ...fillter,
            [e.target.name]: e.target.value,
          })
        }
      />

      <button className="bg-yellow-400" onClick={handleFilter}>
        filter
      </button>
    </div>
  );
};

export default Filter;
