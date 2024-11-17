import axios from 'axios';
import  { useEffect, useState } from 'react'
import { BACKEND_URL } from '../config';


export interface Blog {
    title:string ,
    content :string,
    id:number,
    author:{
        name:string
    }
}

const useBlogs = () => {
    const [loading,setloading] =useState(true);
    const [blogs,setblogs]=useState<Blog[]>([]);

    useEffect(() => {

        axios.get(`${BACKEND_URL}/api/v1/blog/mass`,{
            headers:{
              Authorization: "Bearer " + localStorage.getItem("token")
            }
        })
        .then(res=>{
            setblogs(res.data.blogs);
            setloading(false);
        })
      
    }, [])
    

  return (
    {loading,blogs}
  )
}



export const useBlog = ({id}:{id:number}) => {
    const [loading,setloading] =useState(true);
    const [blog,setblog]=useState<Blog>();

    useEffect(() => {

        axios.get(`${BACKEND_URL}/api/v1/blog/${id}`,{
            headers:{
              Authorization: "Bearer " + localStorage.getItem("token")
            }
        })
        .then(res=>{
            setblog(res.data.blog);
            setloading(false);
        })
      
    }, [])
    

  return (
    {loading,blog}
  )
}

export default useBlogs