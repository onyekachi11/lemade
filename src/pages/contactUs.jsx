import React from "react";
import image from "../assets/profile-picture.png";
import Header from "../component/header/header";
import { Call, Sms } from "iconsax-react";
import Facebook from "../assets/facebook.png";
import Whatsapp from "../assets/Whatsapp.png";
import Instagram from "../assets/Instagram.png";

const ContactUs = () => {
  return (
    <div className="mb-10 text-[#180123]">
      <Header />
      <div className="bg-[#180123] text-white flex items-center h-[150px] px-4 ß">
        <p className="text-4xl w-[60%]">Contact Us</p>
        <div className=" w-[40%] h-full borde border-white relative">
          <div>
            <img
              src={image}
              alt=""
              className="w-[200px] border-white rounded-full border-[3px] absolute top-16 left-1"
            />
          </div>
        </div>
      </div>

      <div className="md:fle md:flex-row">
        <div className="text-center  flex flex-col gap-1 mt-24">
          <p className="font-extrabold text-3xl mb-2">Get in touch</p>
          <p className="text-sm">
            if you have any inquiries get in touch with us. <br /> we will be
            happy to help
          </p>
          <div className="flex flex-col gap-3 mt-5 px-8">
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

        <div className="text-center mt-10">
          <p className="font-semibold text-2xl">Social Media</p>
          <div className="flex flex-col gap-3 text-[12px] items-start mt-4 px-7">
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
