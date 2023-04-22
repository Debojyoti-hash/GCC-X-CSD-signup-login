import React, {useState} from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { BiChevronLeft, BiChevronRight } from 'react-icons/bi'
import { RxDot, RxDotFilled } from 'react-icons/rx'
import { Header, Navbar } from '@/components'

const about = () => {
  const slideImages = [ 
    { url: '/gallery/graduate.jpg' },
    { url: '/gallery/classroom.jpg' },
  
  ]
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [currentIndex, setCurrentIndex] = useState(0);
  const prevImage = () => {
      const isFirstSlide = currentIndex === 0;
      const newIndex = isFirstSlide ? slideImages.length-1 : currentIndex-1;
      setCurrentIndex(newIndex)
  }
  const nextImage = () => {
      const isLastSlide = currentIndex === slideImages.length-1;
      const newIndex = isLastSlide ? 0 : currentIndex+1;
      setCurrentIndex(newIndex)
  }

  const goToSlide = (slideIndex) => {
      setCurrentIndex(slideIndex);
  }

  return (
    <div className='bg-black]'>
      <Header />
      <Navbar />
      <h1>About Department of Computer Science</h1>
   
      <div className='max-w-[800px] max-h-[400px] m-auto py-16 px-4 relative group'>
      <div style={{backgroundImage: `url(${slideImages[currentIndex].url})`}} className='w-[100%] h-[400px] rounded-2xl bg-center bg-cover transition-all duration-500'></div>
        <div className='hidden group-hover:block transition-all duration-300 absolute top-[50%]  -translate-x-0 translate-y-[50%] left-5 text-2xl rounded-full p-2 bg-black/20 cursor-pointer'>
          <BiChevronLeft size={30} onClick={prevImage} color='white' /> 
        </div>

        <div className='hidden group-hover:block transition-all duration-300 absolute top-[50%]  -translate-x-0 translate-y-[50%] right-5 text-2xl rounded-full p-2 bg-black/20 cursor-pointer'>
          <BiChevronRight size={30} onClick={nextImage} color='white' />
        </div>
        
        <div className='flex justify-center py-2 top-4 cursor-pointer'>
        {
          slideImages.map((slideImages, slideIndex) => (
            <div key={slideIndex} onClick={() => goToSlide(slideIndex)}>
              <RxDot size={30}/>
            </div>
          ))
        }
        </div>

      </div>
      
    </div>
  )
}

export default about
