import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

function Institutes() {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 2,
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
          autoplaySpeed: 11000,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 0,
          autoplaySpeed: 11000,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          autoplaySpeed: 11000,
        },
      },
    ],
  };
  return (
      <div className="slider-container bg-[#57808c] w-full   py-50 px-4 h-160 ">
          <h1 className="text-center text-bold">Accountable Institutes</h1>
      <Slider {...settings} className="p-4">
        <div>
          <h3>Credit Providers</h3>

          <div className="card-body"></div>
        </div>
        <div>
          <h3>Gambling Institutions</h3>

          <div className="card-body"></div>
        </div>
        <div>
          <h3>Insurance Companies</h3>

          <div className="card-body"></div>
        </div>
        <div>
          <h3>Estate Agents</h3>
          <h3>Dealers in goods over R100k</h3>

          <div className="card-body"></div>
        </div>
        <div>
          <h3>Certain Paralegal Partners</h3>
          <h3>Financial Institutions</h3>

          <div className="card-body"></div>
        </div>
        <div>
          <h3>Motor Vehicle Dealers</h3>
          <div className="card-body"></div>
        </div>
      </Slider>
    </div>
  );
}
export default Institutes;
