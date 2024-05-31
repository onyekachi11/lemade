import React from "react";
import image from "../assets/profile-picture.png";
import Header from "../component/header/header";
import { Call, Sms } from "iconsax-react";
import Facebook from "../assets/facebook.png";
import Whatsapp from "../assets/Whatsapp.png";
import Instagram from "../assets/Instagram.png";

const ContactUs = () => {
  return (
    <div className=" text-[#180123] h-scree mb-10">
      <Header />
      <div className="bg-[#180123] text-white flex items-center h-[150px] md:h-[250px]  xl:h-[300px] px-4 lg:px-20">
        <p className="text-4xl w-[60%] md:text-6xl md:px-5 lg:text-7xl ">Contact Us</p>
        <div className=" w-[40%] h-full borde border-white relative">
          <div>
            <img
              src={image}
              alt=""
              className="w-[200px] border-white rounded-full border-[5px] lg:border-[10px] 
              absolute top-16 left-1 md:top-32  xl:top-28 md:w-[220px] xl:w-[300px]"
            />
          </div>
        </div>
      </div>

      <div className="flex  gap-10  px-10 flex-col items-center md:w-[75%]  md:items-start pt-24 md:pt-36 lg:gap-20 lg:flex-row lg:justify-around lg:w-full lg:pt-44 lg:px-20">
        <div className="text-center  flex flex-col gap-1 md:text-start w-full xl:w-[50%]">
          <p className="font-extrabold text-3xl mb-2 xl:text-5xl">Get in touch</p>
          <p className="text-sm lg:text-[20px] leading-6">
            if you have any inquiries get in touch with us. <br /> we will be
            happy to help.
          </p>
          <div className="flex flex-col gap-3 mt-5">
            <a
              href="tel:+234 817 3679 945"
              className="border border-[#180123] px-5 py-3 rounded-full flex items-center gap-3 text-sm"
            >
              <span>
                <Call />
              </span>
              +234 817 3679 945
            </a>
            <a
              href="mailto:LeMadeWorld@gmail.com"
              className="border border-[#180123] px-5 py-3 rounded-full flex items-center gap-3 text-sm "
            >
              <span>
                <Sms />
              </span>
              LeMadeWorld@gmail.com
            </a>
          </div>
        </div>

        <div className="w-full xl:w-[50%]">
          <p className="font-semibold text-2xl text-center md:text-start md:text-3xl xl:text-5xl">Social Media</p>
          <div className="flex flex-col gap-3 text-[12px] xl:text-[20px] items-start mt-4">
            <a href="" className="flex gap-4 items-center">
              <div className="border rounded-full p-1">
                <img
                  src={Facebook}
                  className=" bg-[#180123] rounded-full p-1"
                />
              </div>
              <p>Engage with us on Facebook</p>
            </a>
            <a
              href="https://wa.me/2348173679945"
              target="_blank"
              className="flex gap-4 items-center"
            >
              <div className="border rounded-full p-1">
                <img
                  src={Whatsapp}
                  className=" bg-[#180123] rounded-full p-1"
                />
              </div>
              <p>Hit us up and chat with us on Whatsapp</p>
            </a>
            <a
              href="https://www.instagram.com/le_madeworld_eventsandpastries?igsh=MTUyOHJyeXhjNnppYg=="
              target="_blank"
              className="flex gap-4 items-center"
            >
              <div className="border rounded-full p-1">
                <img
                  src={Instagram}
                  className=" bg-[#180123] rounded-full p-1"
                />
              </div>
              <p>Discover the beauty of our brand</p>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
