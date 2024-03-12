import React, { useEffect, useState } from 'react'
import { BASE } from '../constants/Data'

import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CardDdesign from './Card.design';

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
      dots: false,
      infinite: false,
      speed: 700,
      slidesToShow: 4,
      slidesToScroll: 2,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1450,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 1150,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 720,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ], 
      nextArrow: <SampleNextArrow  />,
      prevArrow: <SamplePrevArrow />,
    };
    


    const getData = async () => {
        let res = await fetch(BASE)
        res = await res.json();
        setRestroData(res?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)

    }
    useEffect(()=> {
        getData()
    }, [])
    
  return (
    <div className='border-b-2 bg-white flex justify-between px-5 lg:px-28 py-5 m-4 flex-col '>

        <div><span className='text-2xl font-bold'>What's on your mind?</span></div>


        <Slider {...settings} >

        {
          restroData.map((item) => {
            // console.log(item.info.id)
            return (
              <CardDdesign key={item.info.id}  props = {item} />
              
              )
            })
          }
        </Slider>

    </div>
  )
}

export default TopRestro;