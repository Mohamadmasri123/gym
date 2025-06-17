import React from "react";
import { TiStarFullOutline } from "react-icons/ti";
import { TestimonialsData } from "../mockData/data";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Testimonial = () => {
  var settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToScroll: 1,
    autoplaySpeed: 2000,
    cssEase: "linear",
    pauseOnHover: true,
    pauseOnFocus: true,

    responsive: [
      {
        breakpoint: 10000,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className=" py-16 px-4 md:px-16 lg:px-16 mb-10">
      <h1 className="text-3xl font-bold  mb-8">
        What Are The Costumer Saying About Us
      </h1>

      <div className=" ">
        <Slider {...settings} className="">
          {TestimonialsData.map((testimonial) => (
            <div key={testimonial.id} className="my-6 px-2">
              <div className="flex flex-col gap-4  p-8 shadow-lg rounded-lg bg-primary/10 ">
                {/* upper section */}
                <div className="flex justify-start items-center gap-5">
                  <img
                    src={testimonial.img}
                    alt=""
                    className="rounded-full w-16 h-16"
                  />
                  <div>
                    {" "}
                    <p className="text-xl font-bold text-gray-500">
                      {testimonial.name}
                    </p>
                    <p className="">{testimonial.name}</p>
                  </div>
                </div>
                {/* bottom section  */}
       

                <div className="py-6 space-y-4">
                  <p className="text-sm text-gray-500">{testimonial.text}</p>
                  <div className="flex">
                    <TiStarFullOutline className=" text-[#e8bf35]" />
                    <TiStarFullOutline className=" text-[#e8bf35]" />
                    <TiStarFullOutline className=" text-[#e8bf35]" />
                    <TiStarFullOutline className=" text-[#e8bf35]" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Testimonial;
