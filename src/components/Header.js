import ImageSlider from "./ImageSlider";
import img1 from './../assets/slider/slider1.webp';
import img2 from './../assets/slider/slider2.webp';
import img3 from './../assets/slider/slider3.webp';

const Header = () => {
  const slides = [
    {url: img1 ,title:'MEN COLLECTION',subTitle:"JACKETS & COATS"},
    {url: img2 ,title:'WOMEN COLLECTION',subTitle:"NEW SEASON"},
    {url: img3 ,title:'MEN-NEW COLLECTION',subTitle:"NEW ARRIVALS"}
  ]
  
  return (
    <header className='relative overflow-hidden'>
      <ImageSlider slides={slides}></ImageSlider>
    </header>
  );
}

export default Header;