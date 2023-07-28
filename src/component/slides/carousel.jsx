import React from "react";
// import 
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider1 from '../../assets/slider1.png'

const Carousel = () => {
  const settings = {
    dots: false,
    autoplay: true,
    autoplayspeed: 4000,
    infinite: true,
    arrows:false,
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
    <section className="banner-container">
      <Slider {...settings}>
        <div className="py-3">
        {/* <div className="bg-[url('../src/assets/slider1.png')] h-60 w-full bg-no-repeat bg-center bg-cover"> */}
        <div className="bg-[url('https://res.cloudinary.com/dukepqryi/image/upload/v1690493177/slider1_bqakuu.png')] h-60 w-full bg-no-repeat bg-center bg-cover">
          <div className="backdrop-brightness-100 bg-black/50 h-full w-full"></div>
        </div>
        </div>
        <div className="py-3">
        {/* <div className="bg-[url('../src/assets/slider2.png')] h-60 w-full bg-no-repeat bg-center bg-cover"> */}
        <div className="bg-[url('https://res.cloudinary.com/dukepqryi/image/upload/v1690493163/slider2_kv1jpc.png')] h-60 w-full bg-no-repeat bg-center bg-cover">
          <div className="backdrop-brightness-100 bg-black/50 h-full w-full"></div>
        </div>
        </div>
        <div className="py-3">
        <div className="bg-[url('https://res.cloudinary.com/dukepqryi/image/upload/v1690493172/slider3_dvz7ag.png')] h-60 w-full bg-no-repeat bg-center bg-cover">
          <div className="backdrop-brightness-100 bg-black/50 h-full w-full"></div>
        </div>
        </div>
        <div className="py-3">
        <div className="bg-[url('https://res.cloudinary.com/dukepqryi/image/upload/v1690493166/slider4_b7tgze.png')] h-60 w-full bg-no-repeat bg-center bg-cover">
          <div className="backdrop-brightness-100 bg-black/50 h-full w-full"></div>
        </div>
        </div>
        <div className="py-3">
        <div className="bg-[url('https://res.cloudinary.com/dukepqryi/image/upload/v1690493173/slider5_ww4zuk.png')] h-60 w-full bg-no-repeat bg-center bg-cover">
          <div className="backdrop-brightness-100 bg-black/50 h-full w-full"></div>
        </div>
        </div>
        <div className="py-3">
        <div className="bg-[url('https://res.cloudinary.com/dukepqryi/image/upload/v1690493171/slider6_euolkz.png')] h-60 w-full bg-no-repeat bg-center bg-cover">
          <div className="backdrop-brightness-100 bg-black/50 h-full w-full"></div>
        </div>
        </div>
        <div className="py-3">
        <div className="bg-[url('https://res.cloudinary.com/dukepqryi/image/upload/v1690493177/slider7_vak10y.png')] h-60 w-full bg-no-repeat bg-center bg-cover">
          <div className="backdrop-brightness-100 bg-black/50 h-full w-full"></div>
        </div>
        </div>
        <div className="py-3">
        <div className="bg-[url('https://res.cloudinary.com/dukepqryi/image/upload/v1690493170/slider8_ntc6up.png')] h-60 w-full bg-no-repeat bg-center bg-cover">
          <div className="backdrop-brightness-100 bg-black/50 h-full w-full"></div>
        </div>
        </div>
      </Slider>
    </section>
  );
};

export default Carousel;
