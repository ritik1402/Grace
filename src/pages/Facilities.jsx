import React from 'react'

const Facilities = () => {
  return (
    <div className='container mx-auto text-center text-black bg-gray-300 p-4 shadow-lg'>
      <h1 className='text-2xl font-bold text-orange-700'>Amenities & Facilities</h1>
      <p className='text-2xl'>Every facet of Grace Resilviaa is crafted to nurture well being and community:</p>
      <div className="facility-list flex justify-between p-2 gap-4 ">
        <img src='/images/Grace_Gallery_3.jpg' alt="facilities" className='animate-slide'/>
        <ul className='list-disc p-8 text-left ml-4 '>
            <li><h3 className='text-2xl'>Clubhouse:</h3> A haven for gatherings and quiet reflection</li>
            <li><h3 className='text-2xl'>	Dedicated Parking: </h3> Secure basement & stilt spaces reserved for your convenience</li>
            <li><h3 className='text-2xl'>	Security & Maintenance: </h3> 24/7 vigilance and pristine upkeep</li>
            <li><h3 className='text-2xl'>	Jogging Track: </h3>Meandering paths through landscaped greens</li>
            <li><h3 className='text-2xl'>	Health & Sports Zone: </h3>Spaces designed for mindful workouts</li>
            <li><h3 className='text-2xl'>	Common Amenities: </h3> Curated shared areas that foster connection and joy</li>
            
        </ul>
        </div>

        <div className='apartment-list flex flex-col justify-between p-2 gap-4 '>
            <h1 className='text-2xl font-semibold'>Types of Apartments</h1>
            <p className='text-2xl'>Choose your sanctuary:</p>
            <br/>
            <div className='flex justify-between p-2 gap-4 w-full'>
                <div>
                <img src='/images/Grace_Gallery_3.jpg' alt="facilities" height="500px" width="600px" className='animate-slide object-cover'/>
                <h2 className='text-2xl text-white bg-amber-700 w-[600px]' >Hillview Residences</h2>
                <p>Three bedroom homes overlooking the Aravali Hills, flooded with natural light.</p>
                </div>
                <div>
                <img src='/images/Grace_Gallery_6.jpg' alt="facilities"  height="500px" width="600px" className='animate-slide object-cover'/>
                <h2 className='text-2xl text-white bg-amber-700 w-[600px]'>Gardenview Residences</h2>
                <p> Three bedroom homes framing lush landscaped gardens, with seamless indoor outdoor flow.</p>
                </div>
                
            </div>
            <p className='text-2xl font-semibold animate-pulse'>Both variants span approximately 1,800 sq ft and feature modular kitchens, elegant bathrooms, double glazed windows, and just two homes per floor for unobstructed views and cross ventilation.
            </p>

        </div>

    </div>
  )
}

export default Facilities
