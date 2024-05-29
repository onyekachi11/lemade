import React from "react";
import profilePicture from "../assets/profile-picture.png";
import Header from "../component/header/header";
import { useLocation } from "react-router-dom";

const AboutUs = () => {
  const params = useLocation();
  
  return (
    <div>
      {params.pathname === "/about-us" && <Header />}
      <section>
        <div className="text-center my-10">
          <p className="font-semibold mb-3 md:text-[20px]">Who we are</p>
          <p className="font-extrabold text-3xl md:text-4xl">
            We Plan the Perfect Events.{" "}
          </p>
        </div>
        <div className="text-center md:flex md:items-center md:px-10 xl:px-28 my-6">
          <p className="text-[15px] md:text-[16px] lg:text-[21px] xl:text-[25px] lg:mx-[70p] px-3 md:w-[50%] md:text-start">
            I’m Olemadi Uchechukwu The Creative director of{" "}
            <span className="font-medium">Le_madeworld_eventsandpastries</span>.
            Here we plan Events of different kinds ranging from: wedding, social
            and cooperate events. With us your events are fully covered. We deal
            also on cakes of all occasions, small chops, yummy pastries and a
            surprise company.
            <br />
            <span className="text-[#51009B]">
              We are the best at what we do.
            </span>
          </p>
          <div className="w-[300px] lg:w-[380px] xl:w-[400px] mx-auto mt-5 mb-10 relative">
            <img src={profilePicture} className="w-full h-full relative" />
            <div className="border w-full h-full absolute -z-10 rounded-md border-[#51009B] top-4 left-4"></div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
