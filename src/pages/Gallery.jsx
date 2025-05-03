import React from 'react'
import {motion,useScroll} from 'motion/react'
const Gallery = () => {

  const scrollYProgress = useScroll().scrollYProgress;

  return (
    <>
    <motion.div className='w-full bg-red-700 origin-left top-0 left-0 h-2 fixed' style={{scaleX:scrollYProgress}}
    transform={{

    }}
    >
       </motion.div>
    <div className='container mx-auto text-center  bg-gray-300 p-4 shadow-lg'>
      <h1 className='text-3xl font-bold text-orange-700'>Gallery</h1>
      <p>Explore our gallery to witness the fusion of art and architecture—immersive renders and detailed floor plans that bring Grace Resilviaa to life.</p>
      <div img-gallery className='grid grid-cols-3 gap-4 p-4 m-2'>
        <motion.img whileHover={{
        scale:1.25
      }}  src='/images/Grace_Gallery_2.jpg' alt="gallery" className='animate-slide object-cover w-96 h-96 hover:border-2 hover:border-[#A76545]'  />
        <motion.img whileHover={{
        scale:1.1
      }} src='/images/Grace_Gallery_3.jpg' alt="gallery" className='animate-slide object-cover w-96 h-96 hover:border-2 hover:border-[#A76545]' height="400px" width="400px"/>
        <motion.img whileHover={{
        scale:1.25
      }} src='/images/Grace_Gallery_4.jpg' alt="gallery" className='animate-slide object-cover w-96 h-96 hover:border-2 hover:border-[#A76545]' height="400px" width="400px"/>
        <motion.img whileHover={{
        scale:1.25
      }} src='/images/Grace_Gallery_5.jpg' alt="gallery" className='animate-slide object-cover w-96 h-96 hover:border-2 hover:border-[#A76545]' height="400px" width="400px"/>
        <motion.img whileHover={{
        scale:1.25
      }} src='/images/Grace_Gallery_6.jpg' alt="gallery" className='animate-slide object-cover w-96 h-96 hover:border-2 hover:border-[#A76545]' height="400px" width="400px"/>
        <motion.img whileHover={{
        scale:1.25
      }} src='/images/Grace_Gallery_2.jpg' alt="gallery" className='animate-slide object-cover w-96 h- hover:border-2 hover:border-[#A76545]' height="400px" width="400px"/>
        <motion.img whileHover={{
        scale:1.25
      }} src='/images/Grace_Gallery_3.jpg' alt="gallery" className='animate- object-cover w-96 h-96 hover:border-2 hover:border-[#A76545]' />
        <motion.img whileHover={{
        scale:1.25
      }} src='/images/Grace_Gallery_4.jpg' alt="gallery" className='animate-slide object-cover w-96 h-96 hover:border-2 hover:border-[#A76545]' />
        <motion.img whileHover={{
        scale:1.25
      }} src='/images/Grace_Gallery_4.jpg' alt="gallery" className='animate-slide object-cover w-96 h-96 hover:border-2 hover:border-[#9c9794]' height="400px" width="400px"/>

      </div>
    </div>
    </>
  )
}

export default Gallery
