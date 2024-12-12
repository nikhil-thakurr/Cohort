import React from 'react'
import coverPageImage from '../assets/4_SdjkdS98aKH76I8eD0_qjw.webp'

const LandingPage = () => {
  return (
    <div className='flex justify-evenly items-center h-screen w-screen bg-[#F6F4ED]'>

        <div className=''>

          <h1 className='text-8xl font-bold'>Human</h1>
          <h1 className='text-8xl font-bold'> Stories & Ideas</h1>
          <h5 className='text-2xl font-bold mt-6 mb-4'>A place to read, write, and deepen your understanding</h5>

          <button type="button" className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-semibold rounded-full text-sm px-10 py-3.5 me-2 mb-2">Start Reading</button>

        </div>

        <div className='h-[15vh] w-[20vw]  border-2'>
          <img src={coverPageImage} alt='Image'/> 
        </div>

    </div>
  )
}

export default LandingPage