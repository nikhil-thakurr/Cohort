import React from 'react'

const Quote = () => {
  return (
    <div className='bg-slate-200 h-screen flex flex-col  justify-center'>

        <div className='text-3xl font-bold w-1/3 bg-red-500'>
            "The customer service i received was exceptional .The support team went above and beyond to address my concerns."
        </div>
        <div className='bg-yellow-100 w-1/3'>
            Jules Winnfield
        </div>
        <div className='bg-yellow-100 w-1/3'>
            CEO,Acme Inc
        </div>

    </div>
  )
}

export default Quote