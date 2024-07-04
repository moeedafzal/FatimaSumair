"use client";
import React from "react";
import Image from "next/image";
import TestimonialComponent from "../../components/testimonials/testimonialComponent";
import TestimonialsAndWorkHeader from "@/components/TestimonialsAndWorkHeader";

function page() {
  return (
    <>
      <TestimonialsAndWorkHeader
        heading="Testimonials"
        subHeading="Here is what people have said about me"
        hideImageOnTablet
      />
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
