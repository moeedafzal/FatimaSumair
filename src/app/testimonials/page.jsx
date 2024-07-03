"use client";
import React from "react";
import Image from "next/image";
import TestimonialComponent from "../../components/testimonials/testimonialComponent";

function page() {
  return (
    <>
      <section>
        <div className="max-w-[1800px] lg:flex justify-around pb-12 pt-12 mx-auto">
          <div className="mt-auto mb-auto mx-4 lg:px-0">
            <h1 className="font-poppins font-bold text-4xl lg:text-6xl mb-6 lg:mb-8">
              Testimonials
            </h1>
            <p className="font-normal text-lg lg:text-xl mb-6">
              Here is what people have said about me
            </p>
          </div>
          <Image
            src="/assets/work/img1.svg"
            alt="Image 1 Alt Text"
            width={1000}
            height={1000}
            className="h-auto w-auto lg:h-[342px] lg:w-[513px] hidden lg:block mx-4"
          />
        </div>
      </section>
      <section className="pb-32 back-cream">
        <h1 className="font-poppins font-semibold text-4xl lg:text-5xl text-center pt-28 pb-32 hidden lg:block">
          Project Testimonials
        </h1>
        <TestimonialComponent />
      </section>
    </>
  );
}

export default page;
