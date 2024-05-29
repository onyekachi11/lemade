import React, { useContext, useEffect } from "react";
import Facebook from "../../assets/facebook.png";
import Whatsapp from "../../assets/Whatsapp.png";
import Instagram from "../../assets/Instagram.png";
import Globe from "../../assets/Globe.png";
import Location from "../../assets/Location.png";
import LemadeLogo from "../../assets/Le-Made-World.png";
import { HambergerMenu } from "iconsax-react";
import { Context } from "../../context";
import Menu from "../menu";

const Header = () => {
  const { openMenu, setOpenMenu } = useContext(Context);

//   useEffect(() => {
//     const handleScroll = () => {
//       if (openMenu) {
//         setOpenMenu(false);
//       }
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => {
//       window.removeEventListener("scroll", handleScroll);
//     };
//   }, [openMenu]);

  return (
    <header>
      {/* <section className='bg-purple-700 px-2'>
            <div className='flex justify-between w-full items-center p-1'  >
                <div className='flex flex-row space w-1/4 justify-between'>
                    <div>
                         <img src={Facebook} alt="Facebook Icon" className='w-4'/>
                    </div>
                    <div>
                         <img src={Whatsapp} alt="Whatsapp Icon" className='w-4' />
                    </div>
                    <div>
                         <img src={Instagram} alt="Instagram Icon" className='w-4' />
                    </div>
                </div>
                <div className='flex text-xs text-white'>
                    <div className='flex items-center mr-2'>
                        <div className='mr-1 '>
                        <img src={Globe} alt="Language Icon" className='w-4'/>
                        </div>
                        <p>Eng</p>
                    </div>
                    <div className='flex items-center'>
                        <div className='mr-1'>
                        <img src={Location}alt=" Language Icon" className='w-4' />
                        </div>
                        <p>Nigeria</p>
                    </div>
                </div>
            </div>
        </section> */}
      <section className="bg-white p-5 py-6 flex justify-between items-center">
        <div className=" hidden md:block  ">
          <p>Home</p>
          <p>Gallery</p>
          <p>Services</p>
        </div>
        <div>
          <img src={LemadeLogo} alt=" Lemade Logo" className="w-24" />
        </div>
        <div className=" hidden md:block">
          <p>Home</p>
          <p>Gallery</p>
          <p>Services</p>
        </div>
        <div className="md:hidden sm">
          <HambergerMenu onClick={() => setOpenMenu(!openMenu)} />
        </div>
         {openMenu && <Menu />}
      </section>
    </header>
  );
};

export default Header;
