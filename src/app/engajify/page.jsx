"use client";
import React from "react";
import Image from "next/image";
import VideoComp from "../../components/global/VideoComp";
import SideNavbar from "../../components/caseStudies/SideNavbar";
import TitleCont from "../../components/caseStudies/TitleCont";
import UsersContentImage from "../../components/caseStudies/UsersContentImage";
import BulletsEngaj from "../../components/caseStudies/BulletsEngaj";
import TitleImage from "../../components/caseStudies/TitleImage";
import ArrowsNextPage from "../../components/caseStudies/ArrowsNextPage";
import SingleImage from "../../components/caseStudies/SingleImage";

const Page = () => {
  const titles = [
    "Context",
    "My Role",
    "Users",
    "Fish Bone Analysis",
    "Goals",
    "Process",
    "User flows",
    "Final Designs",
    "Outcomes",
  ];

  return (
    <>
      <VideoComp bgColor={"E9EE8A"} imagePath={"/images/work/engajify/header.png"} alt="Engajify header image" />
      <div className="flex flex-row justify-center">
        <div className="hidden xl:block xl:w-1/6 mt-[21.3rem]">
          <SideNavbar titles={titles} />
        </div>
        <div className="md:w-5/6 w-full items-center text-left mx-7 md:mx-12">
          <section className="text-left mt-24 items-center">
            <div className="flex justify-left mb-20">
              <p className="font-poppins font-semibold text-[32px] md:text-[50px] overflow-clip break-words">
                Making User Generated Content More Accessible to Businesses
              </p>
            </div>
            <TitleCont
              title={"Context"}
              content={
                "Engajify is a web application that helps businesses harness the power of user generated content. It provides a platform for businesses to curate, manage and respond to user-generated content."
              }
            />

            <TitleCont
              title={"My Role"}
              content={
                "I joined Engajify as a sole product design lead in the company, collaborating closely with product managers, engineers and stakeholders to develop the emerging user generated content startup. Over the course of 8 months,  I designed the web app from the ground up while continuously iterating on the landing page, campaign builder and submissions management system, amongst various other pages.\nGetting more user generated content (UGC) can be a valuable strategy for businesses to enhance their online presence and engage with their audience. However, there are several challenges they might encounter in this endeavor. Aside from the basic competitive research and some qualitative/quantitative data, I conducted interviews with 15 business and marketing professionals.\n From the interview sessions with users, we extracted some constructive human insights. Below are some of the pain points they mentioned."
              }
            />
            <div className="flex flex-wrap xl:gap-8 xl:flex-row ">
              <SingleImage
                image1={"/images/work/engajify/page_content/bakery_items.png"}
                c1={
                  "Encouraging users to create content can be challenging, requiring incentives like contests or discounts."
                }
                bgcolor={"E9EE8A"}
                index={1}
                alt="Phone capturing photo of bakery items"
              />
              <SingleImage
                image1={"/images/work/engajify/page_content/filter_illustration.png"}
                c1={
                  "UGC needs careful moderation to filter out negativity and spam. Not all UGC is high quality or on-brand, necessitating curation"
                }
                bgcolor={"E9EE8A"}
                index={2}
                alt="Illustration of a filter"
              />
              <SingleImage
                image1={"/images/work/engajify/page_content/man_lifting_rock.png"}
                c1={
                  "Handling the growing volume of UGC can be overwhelming for businesses"
                }
                bgcolor={"E9EE8A"}
                index={3}
                alt="Illustration of a man lifting a heavy rock"
              />
            </div>
            <div className="">
              <TitleCont
                title={"Users"}
                content={
                  "Before we started designing, we deep dive into existing behavioral and purchase data of our users to understand them better. We focused on identifying what is the job that our customers hire our product for.\n We defined 3 user archetypes, and mapped them to their respective jobs-to-be-done."
                }
              />
            </div>
            <UsersContentImage
              image1={"/images/work/engajify/page_content/pastry_chef.png"}
              bullet={false}
              t1={"Small Business Owner Victoria"}
              c1={
                "Victoria is the business owner of a bakery. She wants to uplift her social media presence through the power of authentic user generated content."
              }
              t2={"Goals"}
              c2={[
                "She's looking for cost-effective ways to market her business and engage with her local community.",
              ].join("\n")}
              t3={"Pain Points"}
              c3={[
                "Limited budget and resources make it challenging for Victoria to create professional-looking marketing materials. She needs a simple solution to collect and display user-generated content on her website and social media platforms.",
              ].join("\n")}
              alt={"Pastry chef in a bakery"}
            />

            <UsersContentImage
              image1={"/images/work/engajify/page_content/marketing_manager.png"}
              bullet={false}
              t1={"Marketing Manager Melanie"}
              c1={
                "Melanie works as a marketing manager for a mid-sized e-commerce company. She is responsible for creating engaging marketing campaigns and increasing brand visibility."
              }
              t2={"Goals"}
              c2={[
                "Melanie wants to leverage user-generated content to enhance the company's online presence and drive more sales.",
              ].join("\n")}
              t3={"Pain Points"}
              c3={[
                "She struggles to find authentic user-generated content that aligns with the brand's image. Additionally, managing and curating user-generated content across multiple channels is time-consuming.",
              ].join("\n")}
              alt={"A marketing manager"}
            />

            <UsersContentImage
              image1={"/images/work/engajify/page_content/social_media_manager.png"}
              bullet={false}
              t1={"Social Media Manager Sarah"}
              c1={
                "Sarah works as a social media manager for a fashion brand. She's responsible for maintaining the brand's social media presence, engaging with followers, and increasing follower growth."
              }
              t2={"Goals"}
              c2={[
                "Sarah aims to create a vibrant online community around the brand and foster authentic connections with followers. She wants to leverage user-generated content to showcase the brand's products in real-life scenarios.",
              ].join("\n")}
              t3={"Pain Points"}
              c3={[
                "Sarah finds it difficult to consistently source high-quality user-generated content that fits the brand's aesthetic. She needs tools to streamline the process of discovering, and obtaining rights to content.",
              ].join("\n")}
              alt={"A social media manager working"}
            />

            <TitleCont
              titleid="Fish Bone Analysis"
              title={"Ishikawa (fish bone) analysis"}
              content={
                "I didn’t want to just address the symptoms but wanted to get at the root cause of the problem. Often times, it happens that a problem has many layers to it. The problem is shown as the fish’s head on the right. The major categories or causes of the problem are the ribs of the fish. The fishbone diagram helped reveal bottle necks to the platform becoming a crowd favorite UGC platform."
              }
            />

            <Image
              src={"/images/work/engajify/page_content/fish_bone_diagram.svg"}
              width={1400}
              height={500}
              alt="Ishikawa (fish bone) analysis diagram"
            />
            <div className="text-center">
              <h2 className="font-poppins text-2xl md:text-4xl font-bold my-16 bg-[#E9EE8A] p-8 max-w-[1400px]">
                How might we make it easier for businesses to manage, <br />{" "}
                respond to and curate UGC content?
              </h2>
            </div>
            <div className="goals my-12">
              <h2 id="Goals" className="font-poppins font-semibold text-[34px]">
                Goals
              </h2>

              <BulletsEngaj
                title={"User Growth and Retention"}
                content={
                  "Implement strategies to increase user engagement, loyalty, and retention rates.\nContinuously analyze user feedback and behavior to enhance the platform's value proposition and user experience.\nStreamline user workflows, navigation paths, and interaction patterns to facilitate seamless and intuitive user experiences."
                }
              />
              <BulletsEngaj
                title={"Content Quality and Diversity"}
                content={
                  "Implement robust content moderation mechanisms to maintain high-quality content standards.\nPromote diversity in content types, formats, and topics to cater to a broad range of interests and preferences.\nFacilitate easy discovery of relevant and engaging content through effective categorization and recommendation systems."
                }
              />
              <BulletsEngaj
                title={"User Experience"}
                content={
                  "Ensure a seamless and intuitive user interface across different devices and platforms.\nStreamline the content submission process to encourage user participation and minimize friction.\nOptimize loading times and performance to enhance user satisfaction and retention."
                }
              />
              <BulletsEngaj
                title={"Support Business Objectives"}
                content={
                  "Collaborate closely with product managers, developers, and stakeholders to align UI/UX design efforts with business goals and priorities.\nContribute to product strategy discussions and roadmap planning by providing insights and recommendations based on user-centered design principles.\nBalance user needs and business requirements to deliver solutions that optimize both user experience and business outcomes."
                }
              />
            </div>
            <TitleCont
              title={"Process"}
              content={
                "We conducted design sprints to facilitate collaboration cross-departments. Product Manager, Engineers and Creatives contributed their fresh ideas in this sprint. The purpose of these sprints is to align everyone on the same goal - To improve our consumer experience by solving our user's problems today."
              }
            />
            <div className="image-mesh grid grid-cols-1 md:grid-cols-2 gap-4 my-24 max-w-[1400px] mx-auto">
              <Image
                src="/images/work/engajify/page_content/process_collage_1.png"
                width={500}
                height={500}
                alt="Sticky notes on a whiteboard"
                className="my-4 md:my-16"
              />
              <Image
                src="/images/work/engajify/page_content/process_collage_2.png"
                width={650}
                height={500}
                alt="People sticking notes on a whiteboard"
                className="-mx-0 md:-mx-28 my-4 md:my-16"
              />
              <Image
                src="/images/work/engajify/page_content/process_collage_3.png"
                width={600}
                height={500}
                alt="Wireframes for a Campaign Page"
                className="my-4"
              />
              <Image
                src="/images/work/engajify/page_content/process_collage_4.png"
                width={500}
                height={500}
                alt="People discussing sticky notes on a table"
                className="my-4"
              />
            </div>

            <TitleCont id="User flows" title={"User flows"} content={""} />
            <Image
              src={"/images/work/engajify/page_content/user_flows.png"}
              width={1200}
              height={1000}
              alt="Diagrams of User flows for Engajify"
            />
            <div className="mt-20 mb-12">
              <TitleCont
                title={"Final Designs"}
                content={"Here’s a detailed walkthrough of the platform"}
              />
              <TitleImage
                title={
                  "Customizable no-code landing page for creators to post content"
                }
                image1={"/images/work/engajify/page_content/final_designs/page_builder.png"}
                w={"1000"}
                h={"1000"}
                alttext={"Screenshot of a non code platform for building campaigns"}
                hr={true}
                content={
                  "One of the features was a customizable landing page where the audience can get information about the rewards and can post their UGCs. I used the example of the Barbie movie to demonstrate how a page can look like once it's been customized. The panel on the side gives ample customization options; the user can customize the landing page section by section, adding their own images, text and background colors. For those who don’t want to spend too much time customizing, there’s the global settings option. The top navigation bar has two buttons: preview and publish. This allows users to preview or publish their landing page."
                }
              />
              <TitleImage
                title={"Campaign page"}
                image1={"/images/work/engajify/page_content/final_designs/campaign_page.png"}
                w={"1000"}
                h={"1000"}
                alttext={"Screenshot of a campaign page"}
                hr={true}
                content={
                  "The Campaigns Page is for exploring and managing all ongoing, upcoming, and past campaigns for UGC."
                }
              />
              <TitleImage
                title={"The Form"}
                image1={"/images/work/engajify/page_content/final_designs/campaign_details_form.png"}
                w={"1000"}
                h={"1000"}
                alttext={"Screenshot of the form for campaign details"}
                hr={true}
                content={
                  "When first creating a campaign, users are directed to a form. Long forms are a drag for the user, luckily is possible to achieve simplicity without removing content from your form. By breaking down complex tasks and grouping related information together, I was able to create a more user-friendly experience."
                }
              />
              <TitleImage
                title={"Campaigns Page for First Time Users"}
                image1={"/images/work/engajify/page_content/final_designs/first_time_page.png"}
                w={"1000"}
                h={"1000"}
                alttext={"Screenshot of campaign page for first time users"}
                hr={true}
                content={
                  "It can be confusing to know the user journey for first time users. We added a cute icons explaining the journey to simplify the process for them. "
                }
              />
              <TitleImage
                title={"Submissions"}
                image1={"/images/work/engajify/page_content/final_designs/submissions_before.png"}
                w={"1000"}
                h={"1000"}
                alttext={"Screenshot of submissions page before design revamp"}
                hr={false}
                content={
                  "Users can view submissions and accept or reject them."
                }
              />
              <TitleImage
                title={""}
                image1={"/images/work/engajify/page_content/final_designs/submissions_after.png"}
                w={"1000"}
                h={"1000"}
                alttext={"Screenshot of submissions page after design revamp"}
                hr={true}
              />
              <TitleImage
                title={"Giving Rewards"}
                image1={"/images/work/engajify/page_content/final_designs/rewards.png"}
                w={"1000"}
                h={"1000"}
                alttext={"Screenshot of the rewards page"}
                hr={true}
                content={"Users can give rewards after accepting a submission"}
              />
              <TitleImage
                title={"Landing Page for Engajify"}
                image1={"/images/work/engajify/page_content/final_designs/landing_page.png"}
                w={"1000"}
                h={"1000"}
                alttext={"Screenshot of the landing page of Engajify"}
                hr={true}
                content={
                  "We wanted Engajify’s landing page to be colorful; to voice Engajify's fun ethos of unleashing the power of community-created content. I used light pastels to emphasize the playful nature of the web app. I broke the page down into several sections that showcased what the app was about."
                }
              />
              <TitleImage
                title={"Lucid Design System"}
                image1={"/images/work/engajify/page_content/final_designs/design_system.png"}
                w={"1000"}
                h={"1000"}
                alttext={"Design system for Engajify"}
                hr={true}
                content={
                  "Lucid is a scalable design system that saves time, reduces technical debt over time. It solves the problem of inconsistent components and user experience. Everything in the website is made up of these modular components—this gives a unified, consistent, robust UI.\nThe design system is never final. It evolves as we go along."
                }
              />
            </div>
            <TitleCont
              titleid="Outcomes"
              title={"Outcome and Learnings"}
              content={`Despite the close collaboration between design, development and the client, there might have been more straightforward conversations and critical feedback on earlier stages when defining the MVP.\nOptimizing the submissions management page was one of the biggest wins of 2023 and directly led to increasing the conversions. I learned that the page is both informative and actionable, it inspires confidence in users. "Simplicity is a key" rule works for every aspect here: from content and layout to benefit-driven language.\nAt the end of the day, creating an app that stimulates small businesses to harness the power of user generated content has been the highest reward of all. As well as seeing people use UGC to boost social engagement and promote their products has been nothing but inspiring. Today, this platform has over 10k users.`}
            />
            <ArrowsNextPage backPage={"/hafazat"} frontPage={"/sudostudy"} />
          </section>
        </div>
      </div>
    </>
  );
};

export default Page;
