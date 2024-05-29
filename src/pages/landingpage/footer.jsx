import React from 'react'
import LemadeLogo from '../../assets/Lemade-logo-white.png'
import Facebook from '../../assets/facebook.png'
import Whatsapp from '../../assets/Whatsapp.png'
import Instagram from '../../assets/Instagram.png'

const Footer = () => {
  return (
    <div className='px-6 py-9 bg-[#180123] text-white'>
        <div>
            <img src={LemadeLogo} className='w-[55%] mb-8'/>
            <p className='text-sm'>
                Join Our Newsletter 
            </p>
            <div className=' flex flex-col gap-3 mt-4'>
                <input type="text" name='email' placeholder='Your Email' className='border px-3  outline-none py-3 text-sm text-black'/>
                <button className='bg-[#51009B] text-white text-sm py-3'> 
                    Send
                </button>
            </div>
        </div>
        <div className='flex flex-col gap-3 mt-9'>
            <div>
                <p className='font-semibold mb-2'> About Us</p>
                <ul className='text-[12px] flex flex-col gap-1'>
                    <li>FAQs</li>
                    <li>Gallery</li>
                </ul>
            </div>
            <div>
                <p className='font-semibold mb-2'>Contact Us</p>
                <ul className='text-[12px] flex flex-col gap-1'>
                    <li>+234 817 3679 945</li>
                    <li>LeMadeWorld@gmail.com</li>
                </ul>
                <div className='flex  gap-3 mt-5'>
                    <img src={Facebook}/>
                    <img src={Whatsapp}/>
                    <img src={Instagram}/>
                </div>
            </div>

        </div>

        <p className ='text-[8px] mt-6'>Copywrite &copy; 2024 LeMadeWorld </p>
    </div>
  )
}

export default Footer