import React from 'react'
import Grace_Gallery_6 from '../assets/Grace_Gallery_6.jpg'

const Home = () => {
  return (
    <div className='container h-screen '>
        <div className="headline text-white p-2  flex flex-col justify-center items-center h-1/2  shadow-lg bg-[url(/images/Grace_Gallery_5.jpg)] bg-cover bg-center rounded-lg">
        
          <h2 className="text-2xl font-bold animate-pulse hover:scale-150">Welcome to Grace</h2>
          <p className="text-lg animate-[slide 3s 1s 2 normal forwards]">Your journey to graceful living starts here.</p>
        </div>
        
        <div className="introduction  flex flex-col justify-center items-center h-1/2 bg-gray-300 rounded-lg shadow-lg">
            <h2 className='text-xl font-semibold mb-2'>Project Introduction</h2>
            <p className='text-lg mt-1.5'>Grace Resilviaa is a low rise residential enclave in Sector 78, Gurgaon, where thoughtful design, premium craftsmanship, and cosmic inspiration converge. Four story buildings with only two homes per floor ensure privacy and exclusivity. Each spacious 3 bedroom apartment is a canvas of light and space—meticulously finished with premium materials and sustainable innovations. Here, every detail whispers elegance, inviting you to live fully and beautifully.</p>
        </div>
        
      
    </div>
  )
}

export default Home
