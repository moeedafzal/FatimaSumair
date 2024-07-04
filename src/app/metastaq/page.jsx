"use client";
import React from "react";
import Image from "next/image";
import VideoComp from "../../components/global/VideoComp";
import TitleCont from "../../components/caseStudies/TitleCont";
import ArrowsNextPage from "../../components/caseStudies/ArrowsNextPage";
import SideNavbar from "../../components/caseStudies/SideNavbar";

const Page = () => {
  const titles = ["Context", "My Role", "Sneak Peak"];
  return (
    <>
      <VideoComp
        imagePath={"/images/work/metastaq/header.png"}
        bgColor={"E9EE8A"}
        alt="Metatasq header image"
      />

      <div className="flex flex-row justify-center">
        <div className="hidden xl:block  xl:w-1/6 mt-[21.3rem]">
          <SideNavbar titles={titles} />
        </div>

        <section className="md:w-5/6 w-full items-center text-left mt-24 mx-7 md:mx-12">
          <div className="flex justify-left mb-20">
            <p className="font-poppins font-semibold  text-[32px] md:text-[50px] overflow-clip break-words">
              Enabling creators and brands to launch
              <br />
              Web3 experiences
            </p>
          </div>
          <TitleCont
            title={"Context"}
            content={
              "Metastaq enables creators and brands to unveil compelling Web3 experiences effortlessly. With their no-code dashboard, users can swiftly craft distinctive NFT programs within minutes. Metastaq offers an intuitive dashboard featuring customizable storefronts for seamless navigation and personalized branding."
            }
          />

          <TitleCont
            title={"My Role"}
            content={
              "As a UI/UX designer at Metastaq, my role was to ensure that the user interface and user experience of the platform was intuitive, engaging, and visually appealing. I worked closely with product managers, developers, and other stakeholders to understand user needs, define requirements, and design solutions that meet both business objectives and user expectations."
            }
          />

          <TitleCont
            titleid="Sneak Peak"
            title={"Here's a sneak peak"}
            content={""}
          />

          <div className="flex flex-col gap-8 lg:gap-16 mb-8 items-center">
            <video
              className="rounded-3xl w-full max-w-[2400px]"
              width="10000"
              height="10000"
              controls
              autoPlay
            >
              <source src="/videos/Metastaq.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>

            <div className="max-w-[2400px]">
              <Image
                src="/images/work/metastaq/page_content/drop_pages.png"
                alt="Drop page of a campaign in Metatasq"
                width={10000}
                height={10000}
              />
            </div>

            <div className="max-w-[2400px]">
              <Image
                src="/images/work/metastaq/page_content/start_campaign_page.png"
                alt="Start campaign page in Metatasq"
                width={10000}
                height={10000}
              />
            </div>

            <div className="max-w-[2400px]">
              <Image
                src="/images/work/metastaq/page_content/nft_campaigns.png"
                alt="NFT campaign page in Metatasq"
                width={10000}
                height={10000}
              />
            </div>

            <div className="max-w-[2400px]">
              <Image
                src="/images/work/metastaq/page_content/landing_page.png"
                alt="Landing page of a campaign in Metatasq"
                width={10000}
                height={10000}
              />
            </div>

            <div className="max-w-[2400px]">
              <Image
                src="/images/work/metastaq/page_content/customize_landing_page.png"
                alt="Landing page customization in Metatasq"
                width={10000}
                height={10000}
              />
            </div>
          </div>
          <ArrowsNextPage backPage={"/unation"} frontPage={"/hafazat"} />
        </section>
      </div>
    </>
  );
};

export default Page;
