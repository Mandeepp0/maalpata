import React from 'react'

const CardShimmer = () => {
  return (
    <div className='m-3 bg-gray100 bg-opacity-60 h-80 w-72 rounded-xl p-4 shadow-xl hover:scale-95 duration-100'>
        <div className={`   relative items-center  `}>
            <img className='rounded-3xl h-40 w-[100%] object-cover shadow-lg'  src=''  alt="" />
            <h1 className=' absolute text-white font-extrabold text-xl bg-black bg-opacity-60 w-full rounded-3xl py-3 pl-1 bottom-1'>
              {
                
              }
            </h1>
        </div>
        <div className='font-bold text-2xl mt-2'>{}</div>

        <div className='flex items-center gap-1 font-medium text-lg '>
            
            <span></span>
            <span className='mb-2 font-extrabold text-xl'>.</span>
            <span>35-40 mins</span>
        </div>
        <div><span className='pl-3'></span></div>

    </div>
  )
}

export default CardShimmer