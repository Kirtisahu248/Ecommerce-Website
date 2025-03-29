import {data} from "../utils/constants"
import Products from "./Products"
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CustomNextArrow from "./CustomNextArrow";
import CustomPrevArrow from "./CustomPrevArrow";
const Body = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows:true,
    nextArrow: <CustomNextArrow />,
    prevArrow: <CustomPrevArrow />,
    pauseOnFocus: true
  };
 
  return (
    <div className="relative">
       
      <div className="absolute z-10 top-1/2">
        <Products/>
      </div>
      <Slider {...settings}>
        {data.map((i) => (
          <div key={i.id} className="relative">
            <img src={i.image} className="w-full h-1/2"/>
            <div className="absolute inset-0 bg-gradient-to-t from-white via-white/20 to-transparent pointer-events-none"></div>
          </div>
        ))}
      </Slider>
    </div>
  )
}

export default Body
