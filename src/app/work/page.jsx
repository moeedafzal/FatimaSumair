"use client";
import Image from "next/image";
import React from "react";
import ProjectsCarousel from "@/components/projectsCarousel/ProjectsCarousel";
import ProjectsScreen from "@/components/ProjectsScreen";

const page = () => {
  return (
    <>
      <section>
        <div className="max-w-[1800px] lg:flex justify-around py-12 mx-auto">
          <div className="mt-auto mb-auto mx-4 lg:px-0">
            <h1 className="font-poppins font-bold text-4xl lg:text-6xl mb-6 lg:mb-8">
              Featured Work
            </h1>
            <p className="font-normal text-lg lg:text-xl mb-6">
              Explore my latest case studies, Dribble shots and side projects
            </p>
          </div>
          <Image
            src="/assets/work/img1.svg"
            alt="Image 1 Alt Text"
            width={1000}
            height={1000}
            className="lg:w-[513px] lg:mx-4"
          />
        </div>
      </section>

      <ProjectsScreen />

      <section className="hidden lg:block">
        <ProjectsCarousel />
      </section>
    </>
  );
};

export default page;
