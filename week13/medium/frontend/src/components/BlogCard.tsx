import { Link } from 'react-router-dom'

interface BlogCardType {

    authorName:string,
    title:string,
    content:string,
    date:string,
    id:number

}

const BlogCard = ({authorName, title,content,date,id}:BlogCardType) => {
  return (

    <Link to={'/blog/' + id}>
        
    <div className='border-b w-1/2 flex flex-col p-2 mx-auto mb-6 cursor-pointer'>

        <div className='mb-2'> <Avatar name={authorName} /> {authorName} . {date}</div>
        <div className='text-3xl font-bold'>{title}</div>
        <div className='text-md mt-2 font-thin'>{content.slice(0,200)} ......</div>
        <div className='text-slate-500 mt-4'> {Math.ceil(content.length/100)} Minutes read</div>

    </div>
    </Link>
  )
}

export function Avatar ({name }:{name:string}){
    return <div className="relative inline-flex items-center justify-center w-8 h-8 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600 mr-2">
    <span className="font-medium text-gray-600 dark:text-gray-300">{name[0]}</span>
</div>
}

export default BlogCard


export function Circle() {
  return <div className="h-1 w-1 rounded-full bg-slate-500">

  </div>
}