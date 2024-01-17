import { useState } from "react";
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

const ImageSlider = ({slides}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const slideStyle = {
    backgroundSize: "cover",
    backgroundPositionX: "center",
    backgroundPositionY: "top",
    backgroundImage: `url(${slides[currentIndex].url})`,
  }
  const goToNext = ()=>{
    const isLastSlide = currentIndex === slides.length - 1;
    setCurrentIndex(isLastSlide? 0 : currentIndex + 1);
  }
  const goToPrev = ()=>{
    const isFirstSlide = currentIndex === 0;
    setCurrentIndex(isFirstSlide?slides.length-1 : currentIndex-1);
  }
  return (
    <ul className="relative list-none">
      <span className='arrow absolute top-1/2 right-0 z-10 text-3xl text-slate-500 hover:text-slate-800 cursor-pointer'
      onClick={goToNext}>
        <i className="fi fi-sr-play"></i>
      </span>
      <li className="slide w-full h-dvh overflow-hidden py-10" style={slideStyle}>
          <div className="container">
            <h1 className="mt-52 text-xl md:text-2xl lg:text-3xl font-extrabold tracking-widest">{slides[currentIndex].title}</h1>
            <h3 className="my-10 text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-widest">{slides[currentIndex].subTitle}</h3>
            <Link to="/shop" className="rounded-md text-lg tracking-wider px-6 py-3 bg-blue-500 text-white hover:bg-blue-600">Shop Now</Link>
          </div>
        </li>
      <span className='arrow rotate-180 absolute top-1/2 left-0 z-10 text-3xl text-slate-500 hover:text-slate-800 cursor-pointer'
      onClick={goToPrev}>
        <i className="fi fi-sr-play"></i>
      </span>

    </ul>
  );
}

export default ImageSlider;