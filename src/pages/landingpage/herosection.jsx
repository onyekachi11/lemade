import React from "react";
const Herosection = () => {
  return (
    <>
      <section className="bg-[url('https://res.cloudinary.com/dukepqryi/image/upload/v1690502330/Heroimg_vri7ha.png')] bg-center bg-no-repeat bg-cover h-3/5">
        <div className="backdrop-brightness-100 bg-black/60 h-full flex items-center justify-center text-white flex-col text-center text-xs p-5 md:p-20">
          <p className="text-4xl mb-3 md:text-[50px] md:leading-[70px] lg:px-[150px] lg:text-[60px] xl:text-[80px] xl:leading-[80px]"  >Plan your perfect event today!</p>
          <p className="text-[14px] md:text-lg lg:text-[20px] xl:text-[24px] md:px-[50px] xl:px-[230px] xl:mt-4 xl:mb-4">
            Let us plan and cater your perfect event today with our expert event
            planning and catering services.
          </p>
          <button
            type="submit"
            className="text-sm rounded-full px-9 py-3 bg-purple-700 mt-5 xl:text-lg"
          >
            Book Now
          </button>
        </div>
      </section>
    </>
  );
};

export default Herosection;
