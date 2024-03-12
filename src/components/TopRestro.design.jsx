import React from 'react'
import { FcRating } from "react-icons/fc";

const TopRestroDdesign = ({item}) => {
    console.log(item)
  return (
    <div className='m-3  w-72 rounded-xl p-4 shadow-xl'>
        <div className={`   relative items-center `}>
            <img className='rounded-3xl h-40 w-[100%] object-cover shadow-lg'  src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/e0839ff574213e6f35b3899ebf1fc597"   alt="" />
            <h1 className=' absolute text-white font-extrabold text-xl bg-black bg-opacity-60 w-full rounded-3xl py-3 pl-1 bottom-1'>Top Restaurant Designs</h1>
        </div>
        <div className='font-bold text-2xl mt-2'>{}j s</div>

        <div className='flex items-center gap-1 font-medium text-lg '>
            <FcRating />
            <span>4.5 </span>
            <span className='mb-2 font-extrabold text-xl'>.</span>
            <span>35-40 mins</span>
        </div>
        <div><span className='pl-3'>Location</span></div>

    </div>
  )
}

export default TopRestroDdesign