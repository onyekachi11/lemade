import React from 'react'
import Slider from 'react-slick';
import Slider1 from '../../assets/slider1.png'
import Slider2 from '../../assets/slider2.png'
import Slider3 from '../../assets/slider3.png'
import Slider4 from '../../assets/slider4.png'
import Slider5 from '../../assets/slider5.png'

const Slides = () => {
    const settings = {
        dots: false,
        autoplay: true,
        autoplayspeed: 4000,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
          {
            breakpoint: 976,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1,
              infinite: true,
              dots: false,
            },
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
            },
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            },
          },
        ],
      };
  return (
    <>
    <section className='border border-red-600 '>
        <div className='w-full'>
        <Slider {...settings}>
          <div className='p-2'>
            <img src={Slider1} alt="" className='w-full' />
          </div>
        
          <div className='p-'>
            <img src={Slider1} alt="" className='w-20'/>
          </div>
        
          <div className='p-'>
            <img src={Slider1} alt="" className='w-20'/>
          </div>
        
          <div className='p-'>
            <img src={Slider1} alt="" className='w-20'/>
          </div>
        </Slider>
        </div>
      </section>
    </>
  )
}

export default Slides