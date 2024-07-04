"use client";
import Image from "next/image";
import React from "react";
import ProjectsCarousel from "../../components/projectsCarousel/ProjectsCarousel";
import ProjectsScreen from "../../components/ProjectsScreen";
import TestimonialsAndWorkHeader from "@/components/TestimonialsAndWorkHeader";

const page = () => {
  return (
    <>
      <TestimonialsAndWorkHeader
        heading="Featured Work"
        subHeading="Explore my latest case studies, Dribble shots and side projects"
      />
      <ProjectsScreen />
      <div className="hidden lg:block">
        <ProjectsCarousel />
      </div>
    </>
  );
};

export default page;
