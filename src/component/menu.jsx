import React, {useContext, useEffect} from "react";
import LemadeLogo from "../assets/Le-Made-World.png";
import { CloseCircle } from 'iconsax-react'
import { Context } from "../context";
import { Link } from "react-router-dom";


const menu = () => {
  const {setOpenMenu, openMenu} = useContext(Context)


  useEffect(() => {
    if (openMenu) {
      document.body.classList.add('overflow-hidden');
    } else {
      document.body.classList.remove('overflow-hidden');
    }

    const handleScroll = () => {
      if (openMenu) {
        setOpenMenu(false);
        document.body.classList.remove('overflow-hidden');
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.body.classList.remove('overflow-hidden');
    };
  }, [openMenu, setOpenMenu]);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Gallery", path: "" },
    { name: "Services", path: "" },
    { name: "About Us", path: "/about-us" },
    { name: "FAQs", path: "" },
    { name: "Contact Us", path: "/contact-us" },
  ];
  return (
    <section className="bg-black/50 w-screen  h-full  absolute z-50 top-0 left-0 ">
      <div className=" bg-[#180123 bg-white absolute z-50 top-0 left-0 h-full w-[70%] pt-10 px-5">
        <nav className="h-full ">
          <div className="flex justify-between items-center">
            <img src={LemadeLogo} className="w-[60%] py-3" />
            <CloseCircle onClick={()=> setOpenMenu(false)} />
          </div>
          <ul className="h-full">
            {navLinks.map((item, index) => (
              <li key={index} className="px-4 py-6 text-sm ">
                <Link to={item.path} onClick={()=> setOpenMenu(false)}>
                {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </section>
  );
};

export default menu;
