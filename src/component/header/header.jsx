import React from 'react'
import Facebook from '../../assets/facebook.png'
import Whatsapp from '../../assets/Whatsapp.png'
import Instagram from '../../assets/Instagram.png'
import Globe from '../../assets/Globe.png'
import Location from '../../assets/location.png'
import LemadeLogo from '../../assets/Le-Made-World.png'
import { HambergerMenu } from 'iconsax-react'

const Header = () => {
  return (
    <header  >
        <section className='bg-purple-700 px-2'>
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
        </section>
        <section className='bg-white p-3 flex justify-between items-center' >
            <div className=' hidden md:block '>
                <p>Home</p>
                <p>Gallery</p>
                <p>Services</p>
            </div>
            <div>
                <img src={LemadeLogo} alt=" Lemade Logo"  className='w-24'/>
            </div>
            <div className=' hidden md:block'>
                <p>Home</p>
                <p>Gallery</p>
                <p>Services</p>
            </div>
            <div>
                <HambergerMenu/>
            </div>
        </section>
  </header>
  )
}

export default Header