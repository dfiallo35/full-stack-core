import { useState, useEffect } from 'react';
import { SliderImage } from '../../types/sliderImage';
import { ChevronLeft, ChevronRight } from 'react-feather';


interface SlideshowProps {
  images: SliderImage[];
}


export default function Slideshow({images}: SlideshowProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? images.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === images.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  useEffect(() => {
    const intervalId = setInterval(() => nextSlide(), 3000);
    return () => clearInterval(intervalId);
  }, [currentIndex]);

  return  (
    <div className='max-w-[1400px] h-[780px] w-full m-auto py-16 px-4 relative group'>
      <div
        style={{ backgroundImage: `url(${images[currentIndex].url})` }}
        className='h-full w-full bg-center bg-cover duration-1000'
      ></div>
      <div className='hidden group-hover:block absolute p-2 -translate-x-0 translate-y-[-50%] top-[50%] left-5 rounded-full bg-black/30 cursor-pointer text-white hover:translate-y-[-53%]'>
        <ChevronLeft onClick={prevSlide} size={40}/>
      </div>
      <div className='hidden group-hover:block absolute p-2 -translate-x-0 translate-y-[-50%] top-[50%] right-5 rounded-full bg-black/30 cursor-pointer text-white  hover:translate-y-[-53%]'>
        <ChevronRight onClick={nextSlide} size={40}/>
      </div>
    </div>
    
  )
}
