"use client";
import React, { useEffect, useRef } from "react";
import Image from "next/image";

const ImageAndInterests = () => (
  <div className="lg:mt-[150px]">
    <div className="w-full min-w-[342px]">
      <Image
        src="images/header_images/about_page.svg"
        alt="Animated image of Fatima Sumair"
        width={1000}
        height={1000}
      />
    </div>
    <p className="font-poppins font-semibold text-3xl lg:text-2xl text-left lg:text-center my-12 mx-8 lg:mx-0">
      Current Interests
    </p>
    <div className="w-full min-w-[342px]">
      <Image
        src="images/about_page/current_interests.svg"
        alt="Current Interests"
        width={10000}
        height={10000}
        className="w-full"
      />
    </div>
  </div>
);

const Page = () => {
  const overlayRefs = useRef([]);

  useEffect(() => {
    const overlayHeights = overlayRefs.current.map((ref) => ref.clientHeight);
    const maxHeight = Math.max(...overlayHeights);
    overlayRefs.current.forEach((ref) => {
      ref.style.height = `${maxHeight}px`;
    });
  }, []);

  return (
    <>
      <section className="main back-cream py-24 pt-12 lg:py-24">
        <div className="max-w-[1500px] mx-auto">
          <div className="lg:flex gap-12 lg:mx-28 xl:mx-44 2xl:mx-56">
            <div className="hidden lg:block">
              <ImageAndInterests />
            </div>
            <div className="flex flex-col gap-6 lg:gap-12 mb-16">
              <h1 className="main-heading font-playfair text-6xl md:text-8xl text-left mb-8 lg:mb-0 mx-8 lg:mx-0">
                Hi There
              </h1>
              <div className="lg:hidden">
                <ImageAndInterests />
              </div>
              <div className="mx-8 lg:mx-0 flex flex-col gap-6 lg:gap-12">
                <p className="font-poppins leading-7">
                  Design has always captivated me. It&apos;s the language that
                  humans use to express the universe within us. From the wheel
                  to spaceships, everything involves creating, ideating, and
                  moving forward.
                </p>
                <p className="font-poppins leading-7">
                  As a designer, I want to experiment, explore ideas, and
                  delight other humans by innovating and approaching every
                  project with care.
                </p>
                <p className="font-poppins leading-7">
                  Through design, I help organizations solve problems by
                  developing a deeper understanding of their users and
                  empowering teams to make better decisions.
                </p>
                <p className="font-poppins leading-7">
                  With a curious spirit and determination to evolve, I&apos;m
                  always on the look out for new challenges and opportunities.
                  Collaborating with diverse teams and individuals is where I
                  thrive as the exchange of ideas fuels my innovation.
                </p>
                <p className="font-poppins leading-7">
                  I get excited about many things, but what truly matters to me
                  is being part of teams that consistently achieve outcomes we
                  can be proud of.
                </p>
                <p className="font-poppins leading-7">
                  Ultimately my goal as a designer is to leave the world a
                  little better than I found it, whether it&apos;s through
                  designing intuitive interfaces that simplify everyday tasks,
                  or by crafting memorable experiences that bring joy and
                  inspiration to people&apos;s lives.
                </p>
                <p className="font-poppins leading-7">
                  Outside of my 9-5, you can find me reading books, painting and
                  spending time with my cat.
                </p>
              </div>
            </div>
          </div>
          <div className="values lg:mx-12">
            <h2 className="text-3xl mx-8 text-left font-poppins font-semibold mb-8">
              My Values
            </h2>
            <div className="flex flex-wrap lg:flex-nowrap justify-center lg:justify-between gap-10">
              <div className="lg:max-w-[430px]">
                <Image
                  src={"/images/about_page/always_be_learning.png"}
                  alt="Always be learning"
                  width={10000}
                  height={10000}
                />
              </div>
              <div className="lg:max-w-[430px]">
                <Image
                  src={"/images/about_page/passion_is_everything.png"}
                  alt="Passion is everything"
                  width={10000}
                  height={10000}
                />
              </div>
              <div className="lg:max-w-[430px]">
                <Image
                  src={"/images/about_page/embrace_your_creativity.png"}
                  alt="Embrace your creativity"
                  width={10000}
                  height={10000}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Page;
