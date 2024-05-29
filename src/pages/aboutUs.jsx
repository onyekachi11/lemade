import React from "react";
import profilePicture from "../assets/profile-picture.png";

const AboutUs = () => {
  return (
    <section>
      <div className="text-center my-5">
        <p className="font-semibold mb-3">Who we are</p>
        <p className="font-extrabold text-3xl">We Plan the Perfect Events. </p>
      </div>
      <div className="text-center">
        <p className="text-[15px] leading- px-3">
          I’m Olemadi Uchechukwu The Creative director of {' '}
          <span className="font-medium">Le_madeworld_eventsandpastries</span>. Here we plan Events of different kinds
          ranging from: wedding, social and cooperate events. With us your
          events are fully covered. We deal also on cakes of all occasions,
          small chops, yummy pastries and a surprise company.
          <br />
          <span className="text-[#51009B]">We are the best at what we do.</span>
        </p>
        <div className="w-[330px] h-[350px mx-auto mt-5 mb-10 relative">
          <img src={profilePicture} className="w-full h-full z-50 relative" />
          <div className="border w-full h-full absolute z-40 rounded-md border-[#51009B] top-4 left-4">
            <p>dd</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
