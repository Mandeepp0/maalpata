import React, {useEffect, useState} from 'react'
import { BASE } from '../constants/Data'
import CardDesign from './Card.design'

const PopularRestro = () => {

    const [restroData, setRestroData] = useState([])

    const getData = async () => {
        let res = await fetch(BASE)
        res = await res.json();
        setRestroData(res?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)

    }
    useEffect(()=> {
        getData()
    }, [])
    console.log(restroData)
  return (
    <div className='border-b-2 bg-white flex justify-between px-5 lg:px-28 py-5 m-4 flex-col '>
        
        <div><span className='text-2xl font-bold'>Restaurants with online food delivery in Chandigarh</span></div>

        <div className='flex flex-wrap justify-center'>
            {
                restroData.map((items) => {
                    return (
                        <div className=''>
                            <CardDesign props={items} />
                            <CardDesign props={items} />
                            <CardDesign props={items} />
                            <CardDesign props={items} />
                            <CardDesign props={items} />
                            <CardDesign props={items} />
                            <CardDesign props={items} />
                        </div>
                    )
                })
            }
        </div>


    </div>
  )
}

export default PopularRestro