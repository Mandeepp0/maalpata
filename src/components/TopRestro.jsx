import React, { useEffect, useState } from 'react'
import { card, BASE_URL, BASE} from '../constants/Data'

import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import axios from 'axios';
import TopRestroDdesign from './TopRestro.design';

function SampleNextArrow(props) {



    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, background: "#bbb",  borderRadius: "999px", position: "absolute", top: "-20px", left: "95%"}}
        onClick={onClick}
      />
    );
  }
  
  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, background: "#bbb", borderRadius: "999px", position: "absolute", top: "-20px", left: "92%" }}
        onClick={onClick}
      />
    );
  }

const TopRestro = () => {
    
    const [restroData, setRestroData] = useState([]);
    const settings = {
        speed: 700,
        slidesToShow: 4,
        slidesToScroll: 2, 
        nextArrow: <SampleNextArrow  />,
        prevArrow: <SamplePrevArrow />
    }
    // console.log(BASE_URL+card[0].imageId)


    const getData = async () => {
        let res = await fetch(BASE)
        res = await res.json();
        // console.log(res.data.cards[0].card.card.imageGridCards.info)
        setRestroData(res?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
        // console.log(res?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
        // console.log(restroData)

    }
    useEffect(()=> {
        getData()
    }, [])
    console.log(restroData)
  return (
    <div className='border-b-2 bg-white flex justify-between px-5 lg:px-28 py-5 m-4 flex-col '>

        <div><span className='text-2xl font-bold'>What's on your mind?</span></div>


        {
            // restroData.map((item) => {
            //     return (
            //         <TopRestroDdesign key={item.info.id} props = {item}/>
            //     )
            // })
        }

        {/* <div className='flex flex-wrap '> */}
        <Slider {...settings} >
        {
            restroData.map((item) => {
                return (
                    <TopRestroDdesign props = {item} />
                )
            })
        }
        </Slider>

        {/* </div> */}

    </div>
  )
}

export default TopRestro;