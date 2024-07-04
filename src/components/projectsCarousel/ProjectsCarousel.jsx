import React, { useRef, useEffect, useState } from "react";
import { Carousel } from "antd";
import Image from "next/image";
import CarouselNavigationButtons from "../CarouselNavigationButtons";

export default function ProjectsCarousel() {
  const [isMounted, setIsMounted] = useState(false);
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

  if (!isMounted) {
    return null; // Render nothing on the server and until the component is mounted
  }

  return (
    <div className="relative max-w-[1400px] mx-auto">
      <h1 className="font-poppins font-semibold text-4xl lg:text-5xl text-center mt-28 mb-20">
        Other Projects
      </h1>

      <div className="relative">
        <Image
          className="ml-5 absolute left-0 top-1/2 transform -translate-y-1/2 z-10 cursor-pointer hidden lg:block"
          src="/images/carousel_buttons/back.svg"
          alt="Back button"
          width={60}
          height={60}
          onClick={handlePrev}
        />

        <Carousel
          autoplay
          autoplaySpeed={2500}
          dots={false}
          infinite
          arrows={false}
          ref={carouselRef}
          className="overflow-hidden relative z-0"
        >
          <div className="flex items-center justify-center h-full">
            <Image
              src="/images/other_projects/workout.png"
              alt="Screens of a workout app"
              width={800}
              height={800}
              className="mx-auto"
            />
          </div>
          <div className="flex items-center justify-center h-full">
            <Image
              src="/images/other_projects/multiple_apps.png"
              alt="Screens of multiple apps"
              width={800}
              height={800}
              className="mx-auto"
            />
          </div>
          <div className="flex items-center justify-center h-full">
            <Image
              src="/images/other_projects/innovate_x.png"
              alt="Screens of InnovateX"
              width={800}
              height={800}
              className="mx-auto"
            />
          </div>
        </Carousel>
        <Image
          className="absolute mr-5 right-0 top-1/2 transform -translate-y-1/2 z-10 cursor-pointer hidden lg:block"
          src="/images/carousel_buttons/forward.svg"
          alt="Forward button"
          width={60}
          height={60}
          onClick={handleNext}
        />
      </div>
      <div className="flex lg:hidden justify-center items-center mb-28">
        <CarouselNavigationButtons
          handlePrev={handlePrev}
          handleNext={handleNext}
        />
      </div>
    </div>
  );
}
