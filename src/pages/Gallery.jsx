import React from 'react'

const Gallery = () => {
  return (
    <div className='container mx-auto text-center  bg-gray-300 p-4 shadow-lg'>
      <h1 className='text-3xl font-bold text-orange-700'>Gallery</h1>
      <p>Explore our gallery to witness the fusion of art and architecture—immersive renders and detailed floor plans that bring Grace Resilviaa to life.</p>\
      <div img-gallery className='grid grid-cols-3 gap-4 p-4 m-2'>
        <img src='/images/Grace_Gallery_2.jpg' alt="gallery" className='animate-slide object-cover w-96 h-96'  />
        <img src='/images/Grace_Gallery_3.jpg' alt="gallery" className='animate-slide object-cover w-96 h-96' height="400px" width="400px"/>
        <img src='/images/Grace_Gallery_4.jpg' alt="gallery" className='animate-slide object-cover w-96 h-96' height="400px" width="400px"/>
        <img src='/images/Grace_Gallery_5.jpg' alt="gallery" className='animate-slide object-cover w-96 h-96' height="400px" width="400px"/>
        <img src='/images/Grace_Gallery_6.jpg' alt="gallery" className='animate-slide object-cover w-96 h-96' height="400px" width="400px"/>
        <img src='/images/Grace_Gallery_2.jpg' alt="gallery" className='animate-slide object-cover w-96 h-96' height="400px" width="400px"/>
        <img src='/images/Grace_Gallery_3.jpg' alt="gallery" className='animate- object-cover w-96 h-96' />
        <img src='/images/Grace_Gallery_4.jpg' alt="gallery" className='animate-slide object-cover w-96 h-96' />
        <img src='/images/Grace_Gallery_4.jpg' alt="gallery" className='animate-slide object-cover w-96 h-96' height="400px" width="400px"/>

      </div>
    </div>
  )
}

export default Gallery
