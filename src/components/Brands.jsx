import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Bidvest from '../Images/Bidvest.png'
import CCI from '../Images/CCI.png'
import CompShare from '../Images/Computershare.png'
import Heineken from '../Images/Heineken.png'
import LkCen from '../Images/LKCentrix.png'
import Dezzi from '../Images/Dezzi.png'


function Arrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "red" }}
        onClick={onClick}
      />
    );
  }
  
function Brands() {
    const settings = {
      dots: true,
      infinite: true,
      slidesToShow: 4,
      slidesToScroll: 1,
      autoplay: true,
      speed: 5000,
      autoplaySpeed: 5000,
        cssEase: "linear",
        adaptiveHeight: true,
        adaptiveWidth: true,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                  slidesToShow: 3,
                  slidesToScroll: 1,
                  infinite: true,
                    dots: true,
                    autoplaySpeed: 11000
                }
              },
              {
                breakpoint: 600,
                settings: {
                  slidesToShow: 2,
                  slidesToScroll: 1,
                    initialSlide: 0,
                    autoplaySpeed: 11000
                }
              },
              {
                breakpoint: 480,
                settings: {
                  slidesToShow: 1,
                    slidesToScroll: 1,
                    autoplaySpeed: 11000
                }
              }
            ]
    };
    return (
        <div className="slider-container bg-[#42aecc] w-full   py-50 px-4 h-100 ">
            <Slider {...settings} className='p-4'>
                
          <div>
                    <img src={Bidvest}alt="" className=" w-64 min-w-20  h-24 max-h-32"/>
                    <div className="card-body"></div>
                    
          </div>
          <div>
                    <img src={CCI} alt="" className=" w-64 min-h-24 h-24 max-h-32"/>
                    <div className="card-body"></div>
                    
          </div>
          <div>
                    <img src={CompShare} alt="" className=" w-64 min-h-24 h-24 max-h-32" />
                    <div className="card-body"></div>
                    
          </div>
          <div>
                    <img src={Heineken} alt="" className=" w-64 min-h-24 h-24 max-h-32"/>
                    <div className="card-body"></div>
                    
          </div>
          <div>
                    <img src={LkCen} alt="" className=" w-64 min-h-24 h-24 max-h-32"/>
                    <div className="card-body"></div>
                    
          </div>
          <div>
                    <img src={Dezzi} alt="" className=" w-64 min-h-24 h-24 max-h-32"/>
                    <div className="card-body"></div>
                    
          </div>
        </Slider>
      </div>
    );
  }
  
  export default Brands;
  