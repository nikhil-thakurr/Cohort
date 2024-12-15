
import coverPageImage from '../assets/4_SdjkdS98aKH76I8eD0_qjw.webp'
import { useNavigate } from 'react-router-dom'

const LandingPage = () => {

  const navigate = useNavigate();

  const handleClick=()=>{
      navigate("/signin")
  }
  return (
    <div className='flex justify-center items-center h-screen w-screen bg-[#F6F4ED]'>
        
        <div className='ml-40'>
    
          <h1 className='text-8xl font-bold'>Human</h1>
          <h1 className='text-8xl font-bold'> Stories & Ideas</h1>
          <h5 className='text-2xl font-bold mt-6 mb-4'>A place to read, write, and deepen your understanding</h5>

          <button type="button" onClick={handleClick} className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-semibold rounded-full text-sm px-10 py-3.5 me-2 mb-2 cursor-pointer">Start Reading</button>

        </div>

        <div className=' h-[30vh] w-[28vw] ml-auto'>
          <img src={coverPageImage} alt='Image'/> 
        </div>

    </div>
  )
}

export default LandingPage