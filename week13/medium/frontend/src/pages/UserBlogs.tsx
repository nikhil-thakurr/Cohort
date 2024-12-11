import React, { useEffect, useState } from 'react'
import AppBar from '../components/AppBar'
import axios from 'axios'
import { BACKEND_URL } from '../config'
import BlogCard from '../components/BlogCard'

const UserBlogs = () => {

    const [userblog,setuserblog]=useState([]);
    const [user,setuser] =useState("Anonymous User")
    useEffect(() => {

       getUserBlogs();
      
    }, [])

    const getUserBlogs =async()=>{
        const blogs = await axios.get(`${BACKEND_URL}/api/v1/blog/userBlogs`,{
            headers:{
                Authorization:"Bearer "+ localStorage.getItem("token")
            }
        })

        console.log(blogs.data[0].blogs);
        setuserblog(blogs.data[0].blogs);
        setuser(blogs.data[0].name)
    }
    
  return (
    <>
    <AppBar/>
    <div>
    {userblog.map((blog)=>
            <BlogCard authorName={user || "Anonymous User"} title={blog?.title} content={blog.content} date='2nd December 2024' id={blog.id} />
        )}
    </div>
    </>
  )
}

export default UserBlogs