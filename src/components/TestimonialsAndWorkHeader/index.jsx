import React from "react";
import Image from "next/image";

const TestimonialsAndWorkHeader = ({
  heading,
  subHeading,
  hideImageOnTablet,
}) => (
  <div className="max-w-[1300px] lg:flex gap-8 justify-between py-12 mx-auto lg:px-12">
    <div className="my-auto mx-8 lg:mx-0 lg:pt-32">
      <h1 className="font-poppins font-bold text-4xl lg:text-6xl mb-6 lg:mb-8">
        {heading}
      </h1>
      <p className="font-normal text-lg lg:text-xl mb-6">{subHeading}</p>
    </div>
    <Image
      src="/images/header_images/testimonials_and_work_page.svg"
      alt="Animated image of Fatima Sumair"
      width={1000}
      height={1000}
      className={`lg:w-[513px] ${
        hideImageOnTablet && "hidden lg:block"
      }`}
    />
  </div>
);

export default TestimonialsAndWorkHeader;
