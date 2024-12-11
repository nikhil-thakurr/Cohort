
import { Avatar } from "./BlogCard";
import { Link, Navigate, useNavigate } from "react-router-dom";
import LogoutImage from "../assets/power_16799418.png"
import axios from "axios";

const AppBar = () => {

  const navigate = useNavigate();

  const handlelogout =()=>{
    navigate("/signin");
  }

  const handlemyblogs=()=>{
    navigate("/userBlogs");
  }

  return (
    <div className="border-b py-4 mb-6 flex justify-between px-10">
      <Link to={"/blogs"}>
        <div className="font-bold text-xl cursor-pointer">Medium</div>
      </Link>

      <div className="flex items-center">

        <div className="mr-2">
        <button onClick={handlemyblogs}
            type="button"
            className="text-white bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-full text-sm px-5 py-2.5 text-center"
          >
            My Blogs
          </button>
        </div>
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
          {/* <Avatar name="User" /> */}
          <div className="bg-white cursor-pointer h-8 w-8" onClick={handlelogout}><img src={LogoutImage} /></div>
        </div>
      </div>
    </div>
  );
};

export default AppBar;
