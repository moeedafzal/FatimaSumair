"use client";
import React from "react";
import Image from "next/image";
import { Divider } from "antd";
import VideoComp from "../../components/global/VideoComp";
import TitleCont from "../../components/caseStudies/TitleCont";
import SideNavbar from "../../components/caseStudies/SideNavbar";
import ThreeImageHorizontal from "../../components/caseStudies/ThreeImageHorizontal";
import UsersContentImage from "../../components/caseStudies/UsersContentImage";
import ArrowsNextPage from "../../components/caseStudies/ArrowsNextPage";
import UnationCarousel from "../../components/unationCarousel/UnationCarousel";

const ImageContainer = ({ src, alt, alignLeft, noMarginTop }) => (
  <div
    className={`flex ${!alignLeft && "justify-center"} ${
      !noMarginTop && "mt-8"
    }`}
  >
    <div className="max-w-[1200px]">
      <Image src={src} alt={alt} width={10000} height={10000} />
    </div>
  </div>
);

const TitleWithImage = ({ title, src, alt, alignLeft, noMarginTop }) => (
  <>
    <TitleCont title={title} content={""} subHeading />
    <ImageContainer
      src={src}
      alt={alt}
      alignLeft={alignLeft}
      noMarginTop={noMarginTop}
    />
    <Divider className="bg-gray-700 my-10" />
  </>
);

const Page = () => {
  const titles = [
    "Context",
    "My Role",
    "Research",
    "Users",
    "Value Proposition",
    "User Journey Map",
    "Final Designs",
    "Design System",
    "Outcome",
  ];
  return (
    <>
      <VideoComp
        bgColor={"ECE2D7"}
        imagePath={"/images/work/unation/header.png"}
        alt="Unation header image"
      />

      <div className="flex flex-row justify-center">
        <div className="hidden xl:block xl:w-1/6 mt-[21.3rem]">
          <SideNavbar titles={titles} />
        </div>
        {/* Applying padding before and then replacing it with margin because the antd Carousel causes issues otherwise */}
        <div className="md:w-5/6 w-full items-center text-left px-7 md:mx-12 md:px-0">
          <section className="text-left mt-24 items-center">
            <div className="flex justify-left mb-20">
              <p className="font-poppins font-semibold  text-[32px] md:text-[50px] overflow-clip break-words">
                Designing an Event Creation and Promotion Platform
              </p>
            </div>
            <TitleCont
              title={"Context"}
              content={
                "Unation is an event creation and promotion platform that helps event organizers of all sizes create and promote their events effectively. The platform is built by a large team of designers, developers, and event experts, and it is used by thousands of event organizers across the United"
              }
            />

            <TitleCont
              title={"My Role"}
              content={
                "As the Product Design lead at Unation, I was responsible for leading the design of the entire event creation and promotion platform, from the user interface to the user experience. My role was to ensure that the platform is easy to use, visually appealing, and meets the needs of all users."
              }
            />

            <TitleCont
              titleid="Research"
              title={"Research and Discovery"}
              content={
                "Surveys are a great way to quickly gather quantitative data and validate assumptions. Here are some statistics\n50% reported that their favorite events involved music, whether it was a music festival or a live performance.\n60% preferred to save their tickets as e-tickets\n68% said that disorganization and bad event layout would deter them from going to that event again\n34% go to the event’s website to look for more information\nThere were a total of 10 people who were interviewed for qualitative data. The conversations were primarily centered around their experiences with live events like music festivals, shows, and exhibitions. Here are some problems we found.."
              }
            />

            <ThreeImageHorizontal
              image1={"/images/work/unation/page_content/man_on_laptop.png"}
              image2={"/images/work/unation/page_content/digital_diagram.png"}
              image3={"/images/work/unation/page_content/carnival_painting.png"}
              t1={"Complexity in Event Creation"}
              c1={
                "Users found it challenging to navigate through a complex interface or a lengthy process to create an event. This can lead to frustration and may deter users from using the platform."
              }
              t2={"Limited Customization Options"}
              c2={
                "Users felt restricted as the platform offers limited customization options for event promotion and branding. Lack of flexibility in designing event pages, tickets, or promotional materials hinders their ability to create unique and engaging events."
              }
              t3={"Poor Event Discovery"}
              c3={
                "Users  faced challenges in ensuring their events are easily discoverable by potential attendees. The platform lacks robust search functionality, categorization, or recommendation features, users find it difficult to attract attendees beyond their existing network."
              }
              bgcolor={"ECE2D7"}
              alt1="Man working on a laptop"
              alt2="Digital diagram"
              alt3="Painting of a carnival"
            />

            <div className="">
              <TitleCont
                title={"Users"}
                content={
                  'Before embarking on the design process, our team delved deep into the behavioral patterns and purchasing data of our users. This thorough analysis was conducted with a singular focus: to unravel the fundamental motivations driving customers to interact with our product, a concept commonly referred to as the "job-to-be-done."'
                }
              />
            </div>

            <UsersContentImage
              image1={"/images/work/unation/page_content/socialite.png"}
              bullet={false}
              t1={"Sarah the Socialite"}
              c1={
                "Sarah is a social media influencer with a large following interested in organizing and promoting events such as meet-and-greets, product launches, and brand collaborations."
              }
              t2={"Goals"}
              c2={
                "Sarah aims to create memorable events that resonate with her audience and increase her online presence. She wants a platform that offers seamless event creation, robust social media integration, and advanced analytics to track engagement and measure the success of her events."
              }
              t3={"Challenges"}
              c3={
                "Sarah may face challenges in managing her busy schedule and coordinating with sponsors, vendors, and attendees. She needs a platform that simplifies event logistics and offers efficient communication tools to keep everyone informed and engaged."
              }
              alt="Animated image of a socialite"
            />

            <UsersContentImage
              image1={"/images/work/unation/page_content/marketer.png"}
              bullet={false}
              t1={"Emily the Marketer"}
              c1={
                "Emily works for a marketing agency responsible for organizing corporate events, conferences, and seminars for clients across various industries."
              }
              t2={"Goals"}
              c2={
                "Emily’s primary goal is to ensure the success of her clients' events by maximizing attendance, generating leads, and driving brand awareness. She needs a platform with powerful event promotion features, customizable branding options, and comprehensive analytics to demonstrate ROI to clients."
              }
              t3={"Paint Points"}
              c3={
                "Emily may encounter challenges in targeting specific audience segments, optimizing event promotion strategies, and measuring the effectiveness of marketing campaigns. Shee requires a platform that offers advanced targeting capabilities, A/B testing for promotional materials, and real-time insights into attendee behavior"
              }
              alt="Animated image of a marketer"
            />

            <UsersContentImage
              image1={"/images/work/unation/page_content/entrepreneur.png"}
              bullet={false}
              t1={"Mark the Entrepreneur"}
              c1={
                "Mark is a small business owner who organizes workshops, networking events, and pop-up shops to promote her products and services."
              }
              t2={"Goals"}
              c2={
                "Mark’s main goal is to attract new customers, build relationships with existing ones, and drive sales through her events. He needs a platform that is affordable, user-friendly, and offers essential event management features such as ticketing, registration, and attendee communication."
              }
              t3={"Challenges"}
              c3={
                "Mark may face challenges in allocating his limited budget effectively, reaching his target audience, and managing event logistics efficiently. He seeks a platform that provides cost-effective solutions, built-in promotional tools, and seamless integration with other business software (e.g., CRM, email marketing) to streamline operations and maximize ROI."
              }
              alt="Animated image of a entrepreneur"
            />

            <TitleCont
              titleid="Value Proposition"
              title={"Stratagyzer’s Value Proposition Canvas"}
              content={
                "I used Stratagyzer’s Value Proposition Canvas to identify the customer jobs, pains and gains. One of the main road blocks I encounter during this process is deciphering between customer gains and customer jobs to be done. Sometimes, asking myself questions like “what is the user trying to get done?” helps me translate the data into the canvas more efficiently. Customer jobs can be functional, social and emotional. In this case, most of the jobs are either social or emotional. People often go to events to be entertained and enjoy the art and connect with their communities."
              }
            />

            <div className="flex justify-center my-8">
              <Image
                src={
                  "/images/work/unation/page_content/stratagyzer_value_proposition_canvas.png"
                }
                width={720}
                height={300}
                alt="Stratagyzer’s Value Proposition Canvas"
              />
            </div>

            <TitleCont title={"User Journey Map"} content={""} />

            <div className="flex justify-center my-8">
              <Image
                src={"/images/work/unation/page_content/user_journey_map.png"}
                width={1130}
                height={435}
                alt="User journey map for Unation"
              />
            </div>
            <div className="mt-8">
              <TitleCont
                title={"Final Designs"}
                content={
                  "After sketching up some wireframes, having design workshops and internal meetings to discuss to platform, I head onto design the platform. Here’s a detailed walkthrough of the final designs."
                }
              />
            </div>

            <TitleWithImage
              title={"Home Page"}
              src={
                "/images/work/unation/page_content/final_designs/home_page.png"
              }
              alt={"Home page screen of Unation app"}
            />

            <TitleWithImage
              title={"City Guides"}
              src={
                "/images/work/unation/page_content/final_designs/city_guides.png"
              }
              alt={"City guides screen of Unation app"}
            />

            <TitleWithImage
              title={"Discover Screen"}
              src={
                "/images/work/unation/page_content/final_designs/discover_screen.png"
              }
              alt={"Discover screen of Unation app"}
            />

            <TitleWithImage
              title={"Event Creation"}
              src={
                "/images/work/unation/page_content/final_designs/create_event.png"
              }
              alt={"Create event screen of Unation app"}
            />

            <TitleCont
              titleid="Design System"
              title={"Unity Design System"}
              content={
                "As the Unation team grew, the need for visual processes became more important in order to create coherent and consistent user experiences that scale. Without a standard design system, different designers and developers were contributing new styles and design principles over time, causing the overall product design experience to diverge.\nTo address this issue, I created ‘Unity’ design system that provides a set of shared components, styles, and guidelines that can be used to create consistent and scalable user experiences across the entire platform."
              }
            />

            <div>
              <UnationCarousel />
            </div>

            <TitleCont
              title={"Outcome"}
              content={
                "Unation has garnered a dedicated community of over 35,000 recurring users across the United States. Witnessing the ongoing positive and significant influence it has on event promoters and creators is truly gratifying.\nHere's how Emily R., a first-time event planner and small business owner, expresses her gratitude towards Unation:\n\"Embarking on event planning for the first time left me feeling daunted and uncertain. However, Unation stepped in and not only equipped me with the essential tools to craft a polished event page but also provided invaluable guidance every step of the way. I can't thank them enough for their support throughout the process.\""
              }
            />
            <ArrowsNextPage backPage={"/sudostudy"} frontPage={"/metastaq"} />
          </section>
        </div>
      </div>
    </>
  );
};

export default Page;
