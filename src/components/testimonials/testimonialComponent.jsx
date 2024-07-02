import React, { useRef, useEffect, useState } from "react";
import { Carousel } from "antd";
import Image from "next/image";
import testimonials from "./testimonial_data";
import CarouselNavigationButtons from "../CarouselNavigationButtons";

const TestimonialComponent = () => {
  const [isMounted, setIsMounted] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const carouselRef = useRef(null);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const handleNext = () => {
    carouselRef.current.next();
  };

  const handlePrev = () => {
    carouselRef.current.prev();
  };

  const handleChange = (current) => {
    setCurrentIndex(current);
  };

  if (!isMounted) {
    return null; // Render nothing on the server and until the component is mounted
  }

  const currentTestimonial = testimonials[currentIndex];

  return (
    <div className="flex flex-col lg:flex-row justify-around gap-5 font-poppins px-8 items-center lg:items-start max-w-[1600px] mx-auto">
      <div className="flex flex-col items-center">
        <Image
          src={currentTestimonial.author.image}
          alt={currentTestimonial.author.name}
          width={100}
          height={100}
          className="rounded-full w-36 h-36 object-cover mb-8"
        />
        <p className="text-xl font-medium text-center my-6">
          {currentTestimonial.author.name}
        </p>
        <div className="min-w-96 min-h-20">
          <p className="text-lg text-gray-500 my-2 text-center">
            {currentTestimonial.author.designation1}
          </p>
          <p className="text-lg text-gray-500 mt-2 text-center">
            {currentTestimonial.author.designation2}
          </p>
        </div>
        <div className="hidden lg:flex justify-center items-center mt-10">
          <CarouselNavigationButtons
            handlePrev={handlePrev}
            handleNext={handleNext}
          />
        </div>
      </div>
      <div className="w-full lg:w-1/2 md:w-3/4 mb-4">
        <Carousel
          dots={false}
          ref={carouselRef}
          autoplay
          infinite
          autoplaySpeed={2500}
          beforeChange={(from, to) => handleChange(to)}
        >
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="flex justify-center items-center h-full px-2"
            >
              <div className="">
                <Image
                  src="/assets/testimonials/marks.svg"
                  alt="marks"
                  width={100}
                  height={100}
                  className="mb-8 w-16 "
                />
                <p className="text-lg lg:text-2xl font-normal">
                  {testimonial.text}
                </p>
              </div>
            </div>
          ))}
        </Carousel>
      </div>
      <div className="flex lg:hidden justify-center items-center">
        <CarouselNavigationButtons
          handlePrev={handlePrev}
          handleNext={handleNext}
        />
      </div>
    </div>
  );
};

export default TestimonialComponent;
