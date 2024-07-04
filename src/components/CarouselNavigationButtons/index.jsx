import React from "react";
import Image from "next/image";

const CarouselNavigationButtons = ({ handlePrev, handleNext }) => (
  <>
    <Image
      className="cursor-pointer"
      src="/images/carousel_buttons/back.svg"
      alt="Back button"
      width={60}
      height={60}
      onClick={handlePrev}
    />
    {/* This is the black line */}
    <div className="w-[100px] h-[2px] bg-gray-500 mx-12 lg:mx-4"></div>
    <Image
      className="cursor-pointer"
      src="/images/carousel_buttons/forward.svg"
      alt="Forward button"
      width={60}
      height={60}
      onClick={handleNext}
    />
  </>
);

export default CarouselNavigationButtons;
