import React from "react";
import { Avatar } from "./BlogCard";
import { Link } from "react-router-dom";

const AppBar = () => {
  return (
    <div className="border-b py-4 mb-6 flex justify-between px-10">
      <Link to={"/blogs"}>
        <div className="font-bold text-xl cursor-pointer">Medium</div>
      </Link>

      <div className="flex items-center">
        <Link to={'/publish'}>
        <div  className="mr-2 ">
          <button
            type="button"
            className="text-white bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-full text-sm px-5 py-2.5 text-center"
          >
            New
          </button>
        </div>
        </Link>
        <div>
          <Avatar name="Nikhil" />
        </div>
      </div>
    </div>
  );
};

export default AppBar;
