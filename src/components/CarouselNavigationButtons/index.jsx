import React from "react";
import Image from "next/image";

const CarouselNavigationButtons = ({ handlePrev, handleNext }) => (
  <>
    <Image
      className="cursor-pointer"
      src="/assets/testimonials/carouselBackButton.svg"
      alt="marks"
      width={60}
      height={60}
      onClick={handlePrev}
    />
    {/* This is the black line */}
    <div className="w-[100px] h-[2px] bg-gray-500 mx-12 lg:mx-4"></div>
    <Image
      className="cursor-pointer"
      src="/assets/testimonials/carouselForwardButton.svg"
      alt="marks"
      width={60}
      height={60}
      onClick={handleNext}
    />
  </>
);

export default CarouselNavigationButtons;
