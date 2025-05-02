import React from 'react'

const About = () => {
  return (
    <>
    <div className='container flex flex-col justify-center items-center mx-auto bg-black  '> 
    <div className=' mx-auto p-4 text-center  bg-gray-300 '>
        
      <h1 className='text-2xl font-semibold text-orange-700'>About the Builder</h1>
      <p className=''>Brought to life by Rattan Group, with over two decades of excellence in real estate, Grace Resilviaa embodies a legacy of quality, timely delivery, and customer satisfaction. Rattan’s unwavering commitment to structural integrity and design finesse shapes not just buildings, but enduring communities.</p>
    </div>
    
    < div className=' mx-auto p-4 text-center  bg-gray-300 '>
            <h1 className='text-2xl font-semibold'>About the Location</h1>
            <p className='text-1xl '>Nestled at the cusp of the ancient Aravali Hills in Sector 78, Gurgaon, Grace Resilviaa marries urban convenience with serene natural beauty. Seamless access to major highways and business districts ensures your workday starts smoothly, while weekends beckon with vast green escapes and world class leisure destinations just minutes away.</p>
            <br/>
            <div/>
            <br/>
            <div>
            <h2 className='text-2xl font-semibold mb-3'>Nearby Destinations:</h2>
            <div className='img-list flex justify-between p-2 gap-4 '>
                <img src='/images/Grace_Gallery_6.jpg' alt="destinations" className='animate-slide'/>
            
            <ul className='list-disc text-left ml-4  text-2xl pt-4'> 
                <li>Highway Access: NH 8, Dwarka Expressway & KMP Expressway (5–10 min)</li>
                <li>Business Hubs: DLF Cyber Hub 2, Corporate Greens, Genpact, BMW, Suzuki</li>
                <li>Recreation: 10,000 acre Jungle Safari, Karma Lakelands, Golden Greens Golf & Resort </li>
                <li>
                Education: DPS Manesar, Amity University, Kunskapsskolan, St. Xavier’s, Bal Bharti Public School
                </li>
                <li>
                Airport: IGI Airport (≈ 45 min)
                </li>
            </ul>
            </div>
            </div>
    </div>
    </div>
    </>
  )
}

export default About
