import BlogCard from '../components/BlogCard'
import AppBar from '../components/AppBar'
import useBlogs from '../hooks';
import { BlogSkeleton } from '../components/BlogSkeleton';

const Blogs = () => {
    const {loading,blogs} =useBlogs();

   
    if (loading) {
        return <div>
            <AppBar /> 
            <div  className="flex justify-center">
                <div>
                    <BlogSkeleton />
                    <BlogSkeleton />
                    <BlogSkeleton />
                    <BlogSkeleton />
                    <BlogSkeleton />
                    <BlogSkeleton />
                </div>
            </div>
        </div>
    }
  return (
    <div>
        <AppBar/>
        {blogs.map((blog)=>
            <BlogCard authorName={blog.author.name || "Anonymous User"} title={blog.title} content={blog.content} date='2nd December 2024' id={blog.id} />
        )}
       
    </div>
  )
}

export default Blogs