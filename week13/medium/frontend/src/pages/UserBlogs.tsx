import React, { useEffect, useState } from "react";
import AppBar from "../components/AppBar";
import axios from "axios";
import { BACKEND_URL } from "../config";
import BlogCard from "../components/BlogCard";

const UserBlogs = () => {
  const [userblog, setuserblog] = useState([]);
  const [user, setuser] = useState("Anonymous User");

  useEffect(() => {
    getUserBlogs();
  }, []);

  const getUserBlogs = async () => {
    const blogs = await axios.get(`${BACKEND_URL}/api/v1/blog/userBlogs`, {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
    });

    setuserblog(blogs.data[0].blogs);
    setuser(blogs.data[0].name);
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`${BACKEND_URL}/api/v1/blog/${id}`, {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      });
      setuserblog(userblog.filter((blog) => blog.id !== id)); // Remove the deleted blog from the state
    } catch (error) {
      console.error("Error deleting the blog:", error);
    }
  };

  return (
    <>
      <AppBar />
      {userblog && userblog.length > 0 ? (
        <div className="grid gap-4 p-4">
          {userblog.map((blog) => (
            <div
              key={blog.id}
              className="flex justify-between items-center  border-gray-300 rounded-lg p-4 shadow-sm">
              <div className="flex-1">
                <BlogCard
                  authorName={user || "Anonymous User"}
                  title={blog?.title}
                  content={blog.content}
                  date="2nd December 2024"
                  id={blog.id}
                />
              </div>
              <button
                className="text-white bg-red-500 hover:bg-red-600 font-semibold rounded px-4 py-2 ml-4"
                onClick={() => handleDelete(blog.id)}
              >
                Delete
              </button>
            </div>
          ))}
        </div>
      ) : (
        <>
          <p className="text-4xl font-bold text-center">No blogs available.</p>
          <p className="text-lg font-semibold text-center">
            Please click on new to post blogs
          </p>
        </>
      )}
    </>
  );
};

export default UserBlogs;
