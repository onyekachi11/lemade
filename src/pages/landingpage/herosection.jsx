import React from 'react'

const Herosection = () => {
  return (
    <>
    <section className="bg-[url('https://res.cloudinary.com/dukepqryi/image/upload/v1690502330/Heroimg_vri7ha.png')] bg-center bg-no-repeat bg-cover h-3/5">
        <div className='backdrop-brightness-100 bg-black/60 h-full flex items-center justify-center text-white flex-col text-center text-xs p-5' >
            <p className='text-4xl mb-3'>Plan your perfect event today!</p>
            <p>Let us plan and cater your perfect event today with our expert event planning and catering services.</p>
            {/* <div> */}
                <button type='submit' className='text-xs rounded-full px-8 py-2 bg-purple-700 mt-5' >
                    Book Now
                </button>
            {/* </div> */}
        </div>
    </section>
    </>
  )  
}

export default Herosection