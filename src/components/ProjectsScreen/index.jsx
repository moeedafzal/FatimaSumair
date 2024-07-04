import React from "react";
import Image from "next/image";
import HomeInfoContent from "../HomeInfoContent";

const ImageContainer = ({ src, alt, noMarginTop, bgColor }) => (
  <div className={`flex ${bgColor} justify-center ${!noMarginTop && "mt-8"}`}>
    <div className="lg:max-w-[800px]">
      <Image src={src} alt={alt} width={10000} height={10000} />
    </div>
  </div>
);

const ProjectsScreen = () => (
  <div>
    {/* Engajify */}
    <div className="lg:flex h-fit">
      <div className="flex-1 lg:w-1/2 ">
        <ImageContainer
          className="flex-1"
          src="/images/work/engajify/display_screen.png"
          alt="Engajify display screen image"
          noMarginTop
          bgColor={"bg-[#E9EE8A]"}
        />
      </div>
      <div className="flex-1">
        <HomeInfoContent
          gotoLink="/engajify"
          btn_clr="E9EE8A"
          btn_txt="User Generated Content"
          heading="Making User Generated Content
                More Accessible to Businesses"
          para="Helping businesses harness the power of user generated content to boost social engagement and promote their products Engajify has 10,000 recurring visitors."
        />
      </div>
    </div>

    {/* SudoStudy */}
    <div className="lg:flex h-fit">
      <div className="flex-1 lg:w-1/2 ">
        <ImageContainer
          className="flex-1 order-last"
          src="/images/work/sudostudy/display_screen.png"
          alt="SudoStudy display screen image"
          noMarginTop
          bgColor={"bg-[#DDBDBD]"}
        />
      </div>
      <div className="flex-1 order-first">
        <HomeInfoContent
          placementLeft
          gotoLink="/sudostudy"
          btn_clr="DDBDBD"
          btn_txt="Education"
          heading="Transforming the Quiz-taking Experience of Teachers and Students"
          para="Sudo Study is an online quizzing platform that transforms teaching and learning for students and teachers. I redesigned the quiz interface, which increased conversion rates by 20%. Task completion rates in the usability testing increased from 60% to 90% after design iterations that I made."
        />
      </div>
    </div>

    {/* Unation */}
    <div className="lg:flex h-fit">
      <div className="flex-1 lg:w-1/2 ">
        <ImageContainer
          className="flex-1"
          src="/images/work/unation/display_screen.png"
          alt="Unation display screen image"
          noMarginTop
          bgColor={"bg-[#ECE2D7]"}
        />
      </div>
      <div className="flex-1">
        <HomeInfoContent
          gotoLink="/unation"
          btn_clr="ECE2D7"
          btn_txt="Event Management"
          heading="Designing an Event Creation and 
              Promotion Platform"
          para="Unation is an event creation and promotion platform that helps event organizers of all sizes create and promote their events effectively. The platform is built by a large team of designers, developers, and event experts, and it is used by thousands of event organizers across the United States."
        />
      </div>
    </div>

    {/* Metastaq */}
    <div className="lg:flex h-fit">
      <div className="flex-1 lg:w-1/2 ">
        <ImageContainer
          className="flex-1 order-last"
          src="/images/work/metastaq/display_screen.png"
          alt="Metastaq display screen image"
          noMarginTop
          alignLeft
          bgColor={"bg-[#E9EE8A]"}
        />
      </div>
      <div className="flex-1 order-first">
        <HomeInfoContent
          placementLeft
          gotoLink="/metastaq"
          btn_clr="E9EE8A"
          btn_txt="NFT Experience"
          heading="Enabling creators and brands to launch
              Web3 experiences"
          para="With Metastaq’s no-code dashboard, users can swiftly craft distinctive NFT programs within minutes. It offers an intuitive dashboard featuring customizable storefronts for seamless navigation and personalized branding."
        />
      </div>
    </div>

    {/* Hafazat */}
    <div className="lg:flex h-fit">
      <div className="flex-1 lg:w-1/2 ">
        <ImageContainer
          className="flex-1"
          src="/images/work/hafazat/display_screen.png"
          alt="Hafazat display screen image"
          noMarginTop
          bgColor={"bg-[#DDBDBD]"}
        />
      </div>
      <div className="flex-1">
        <HomeInfoContent
          gotoLink="/hafazat"
          btn_clr="DDBDBD"
          btn_txt="Women's Safety"
          heading="Giving Women Living and Working in
              Pakistan Control Over their Public safety"
          para="Hafazat is a trustworthy mobile application that allows women living and working in Pakistan to have control over their own public safety. It builds a community and offers a secure experience while out alone."
        />
      </div>
    </div>
  </div>
);

export default ProjectsScreen;
