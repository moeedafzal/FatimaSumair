"use client";
import React from "react";
import Image from "next/image";
import TestimonialComponent from "../../components/testimonials/testimonialComponent";
import ContactForm from "../../components/contact-form/ContactForm";
import HomepageFooter from "../../components/homepage_footer/HomepageFooter";
import ProjectsCarousel from "../../components/projectsCarousel/ProjectsCarousel";
import { useRef } from "react";
import ProjectsScreen from "../../components/ProjectsScreen";

const Page = () => {
  const formRef = useRef(null);

  return (
    <section>
      <div className="bg-[#212121]">
        <div className="container text-left mx-auto px-7 pt-16 lg:px-12 flex flex-col lg:flex-row items-center">
          <div className="bg-[#212121] relative mx-auto max-w-max w-full lg:w-1/2 lg:px-4 order-last lg:order-first">
            <Image
              width={1000}
              height={1000}
              src="/images/header_images/landing_page.svg"
              alt="Animated image of Fatima Sumair"
            />
          </div>
          <div className="w-full lg:w-1/2 mb-16 lg:mb-0 text-white order-first lg:order-last">
            <h2 className="xl:pb-8 lg:pb-6 pb-4 font-medium lg:text-4xl md:text-3xl text-xl">
              HEYA!
            </h2>
            <h1 className="font-playfair font-bold xl:text-8xl lg:text-7xl md:text-6xl xl:pb-8 lg:pb-6 pb-4 text-5xl">
              I&apos;m Fatima.
            </h1>
            <p className="font-normal lg:text-3xl md:text-2xl text-lg">
              I&apos;m a UI/UX Designer. I help businesses launch and grow their
              products. I&apos;ve learned that every great product starts with a
              spark of inspiration, much like the flicker of a light bulb.
            </p>
          </div>
        </div>
      </div>

      <section>
        <h1 className="font-poppins font-semibold lg:text-5xl text-4xl text-center py-20">
          Featured Projects
        </h1>
        <ProjectsScreen />
      </section>

      <section>
        <h1 className="font-poppins font-semibold text-4xl lg:text-5xl text-center pt-28 pb-32">
          Project Testimonials
        </h1>
        <TestimonialComponent />
      </section>

      <ProjectsCarousel />

      <section className="lg:flex mx-8 gap-5 justify-center max-w-[1600px] 2xl:mx-auto">
        <div className="flex-1">
          <h1 className="font-poppins font-semibold text-4xl mb-8 text-center lg:text-start">
            Tell me about your project
          </h1>
          <p className="text-xl md:text-2xl font-normal mb-8">
            Any project starts with goal setting. If you have a vision, I can
            design it
          </p>
          <p className="text-xl md:text-2xl font-normal mb-8">
            After the inquiry, I will reply within 2-3 working days, with an
            approximate quote for the project or with questions for more
            details. After that, we can have an intro call to discuss your
            project and see if it&apos;s a match.
          </p>
          <div className="text-center my-12 lg:text-left lg:mb-0">
            <p className="text-xl md:text-2xl font-normal text-[#2121218A] mt-5">
              Email me at <br />
              <span className="font-semibold text-xl text-black ">
                fatimasumair@outlook.com
              </span>
            </p>
          </div>
          <p className="font-semibold text-2xl text-black text-center my-8 lg:hidden ">
            Or use the form below
          </p>
        </div>
        <div ref={formRef} id="form" className="flex-1">
          <ContactForm />
        </div>
      </section>
      <HomepageFooter />
    </section>
  );
};

export default Page;
