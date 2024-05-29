import React, {useContext} from "react";
import LemadeLogo from "../assets/Le-Made-World.png";
import { CloseCircle } from 'iconsax-react'
import { Context } from "../context";


const menu = () => {
  const {setOpenMenu} = useContext(Context)

  const navLinks = [
    { name: "Home", path: "" },
    { name: "Gallery", path: "" },
    { name: "Services", path: "" },
    { name: "About Us", path: "" },
    { name: "FAQs", path: "" },
    { name: "Contact Us", path: "" },
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
                {item.name}
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </section>
  );
};

export default menu;
