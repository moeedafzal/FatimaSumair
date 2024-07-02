"use client";
import React from "react";
import VideoComp from "@/components/global/VideoComp";
import TitleCont from "@/components/caseStudies/TitleCont";
import SideNavbar from "@/components/caseStudies/SideNavbar";
import UsersContentImage from "@/components/caseStudies/UsersContentImage";
import Image from "next/image";
import ArrowsNextPage from "@/components/caseStudies/ArrowsNextPage";
import StickyNote from "@/components/caseStudies/StickyNote";
import HafazatSolutions from "@/components/caseStudies/HafazatSolutions";

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

const Page = () => {
  const titles = [
    "Context",
    "Overview",
    "Research",
    "Users",
    "How Might We",
    "Solutions",
    "Prototypes",
    "Outcome",
  ];

  return (
    <>
      <VideoComp bgColor={"DDBDBD"} imagePath={"/hafazat_header.png"} />

      <div className="flex flex-row justify-center">
        <div className="hidden xl:block xl:w-1/6 mt-[21.3rem]">
          <SideNavbar titles={titles} />
        </div>
        <div className="md:w-5/6  w-full items-center text-left mx-7 md:mx-12">
          <section className="text-left mt-24 items-center">
            <div className="flex justify-left mb-20">
              <p className=" font-poppins font-semibold  text-[32px] md:text-[50px] overflow-clip break-words">
                Giving Women Living and Working in Pakistan <br /> Control Over
                their Public Safety
              </p>
            </div>
            <TitleCont
              title={"Context"}
              content={
                "Hafazat is the Urdu word for safety, it is a trustworthy mobile application that allows women living and working in Pakistan to have control over their own public safety. It builds a community and offers a secure experience while out alone."
              }
            />

            <TitleCont
              title={"Overview"}
              content={
                "Women face unique challenges when being out alone. They struggle to feel safe and protected in public and within urban communities. According to Gender Gap Report, Pakistan is one of the worst ranked nations for women. In such an environment, it might be helpful to create an app that solves problems for women commuting or being out by themselves, giving them a reliable companion."
              }
            />

            <div className="BULLETPOINTS">
              <p className="py-8  text-xl font-poppins">
                According to research:
              </p>
              <ul className="space-y-2 ml-8 text-xl mb-8 font-poppins list-disc list-outside">
                <li>
                  32 per cent of women have experienced physical violence in
                  Pakistan and 40 per cent of ever-married women have suffered
                  from spousal abuse at some point in their life (The Pakistan
                  Demographic and Health Survey 2012-2013).
                </li>
                <li>
                  The cases of violence against women and rape in Pakistan were
                  doubled in the last six months of 2021 as compared to the
                  first six months of the year.
                </li>
                <li>
                  Almost 1 in 3 women have been subjected to intimate partner
                  violence, non-partner violent crime, or both at least once in
                  their life.
                </li>
                <li>
                  59% of women who ever walked down an alley way often feel
                  unsafe doing so.
                </li>
                <li>
                  50% of women feel similar walking around alone at night.
                </li>
                <li>
                  71% avoided doing things they wanted to do because of their
                  fear of victimization.
                </li>
              </ul>
            </div>

            <ImageContainer src={"/hafazatJustice.svg"} alt="hafazat image" />

            <TitleCont
              title={"Research"}
              content={
                "To get to the root of the problem, we first needed to understand the users and what factors played a part in their struggles to feel safe and protected. I conducted interview to better understand painpoints around personal safety. We discussed how they felt about going in public alone, personal safety precautions, if they use anys safety devices and ways in which an app on the market can better serve their needs."
              }
            />

            <div className="w-fit">
              <div className="flex flex-wrap justify-center gap-7 mt-5">
                <Image
                  src={"/hafazat_sticky_1.svg"}
                  alt={"hafazat image"}
                  width={155}
                  height={176}
                />
                <Image
                  src={"/hafazat_sticky_2.svg"}
                  alt={"hafazat image"}
                  width={155}
                  height={176}
                />
                <Image
                  src={"/hafazat_sticky_3.svg"}
                  alt={"hafazat image"}
                  width={155}
                  height={176}
                />
                <Image
                  src={"/hafazat_sticky_4.svg"}
                  alt={"hafazat image"}
                  width={155}
                  height={176}
                />
                <Image
                  src={"/hafazat_sticky_5.svg"}
                  alt={"hafazat image"}
                  width={155}
                  height={176}
                />
              </div>
            </div>

            <TitleCont
              title={"Users"}
              content={
                'Before embarking on the design process, our team delved deep into the behavioral patterns and purchasing data of our users. This thorough analysis was conducted with a singular focus: to unravel the fundamental motivations driving customers to interact with our product, a concept commonly referred to as the "job-to-be-done."'
              }
            />

            <UsersContentImage
              bullet={false}
              image1={"/hafazatUser1.svg"}
              t1={"Sukaina, the University Student"}
              c1={
                "Sadia is a 20-year-old university student living in Lahore, Pakistan. She commutes daily to her university, which is located in a busy part of the city."
              }
              t2={"Needs and Concerns"}
              c2={
                "Sadia often feels unsafe when traveling alone, especially at night or in crowded areas. She wants a safety application that can provide her with immediate assistance in case of an emergency. Additionally, she wishes to share her location with her family and friends while commuting to ensure her safety."
              }
              t3={"Goals"}
              c3={
                "Sadia seeks a women's safety app that offers features such as real-time location tracking, emergency SOS alerts, and access to helplines or nearby safe zones. She also values a user-friendly interface that is easy to navigate, especially during stressful situations."
              }
            />
            <UsersContentImage
              bullet={false}
              image1={"/hafazatUser2.svg"}
              t1={"Ayesha, the Working Professional"}
              c1={
                "Ayesha is a 32-year-old working professional residing in Karachi, Pakistan. She works long hours and often travels for meetings and conferences across the city."
              }
              t2={"Needs and Concerns"}
              c2={
                "Ayesha is concerned about her safety during her daily commutes and late-night travels for work-related events. She wants a safety application that can discreetly alert her trusted contacts or authorities in case she encounters any threatening situations."
              }
              t3={"Goals"}
              c3={
                "Ayesha is looking for a women's safety app that offers features such as geofencing, where she can set safe zones and receive notifications when she enters or leaves those areas. She also desires a panic button feature that can be easily accessed from her smartphone's lock screen for quick response in emergencies."
              }
            />
            <UsersContentImage
              bullet={false}
              image1={"/hafazatUser3.svg"}
              t1={"Nadia, the Homemaker"}
              c1={
                "Nadia is a 45-year-old homemaker living in Islamabad, Pakistan. She often accompanies her children to school, runs household errands, and attends community events."
              }
              t2={"Needs and Concerns"}
              c2={
                "Nadia wants to ensure her and her family's safety while traveling around the city for various activities. She seeks a safety application that can provide her with reliable information about safe routes, nearby police stations, and emergency services."
              }
              t3={"Goals"}
              c3={
                "Nadia is interested in a women's safety app that offers features such as community-based reporting, where users can share safety tips and incidents in their locality. She also values a feature that allows her to create a trusted network of neighbors and friends who can assist each other in times of need. Additionally, she desires access to informative resources on self-defense techniques and legal rights for women."
              }
            />

            <TitleCont
              titleid="How Might We"
              title={"How Might We Statements"}
              content={""}
            />

            <div className="w-fit">
              <div className="flex flex-wrap justify-center gap-8">
                <StickyNote
                  content={
                    "How Might We Help Sukaina feel safe when out alone?"
                  }
                />
                <StickyNote
                  content={
                    "How Might We Help Sukaina feel more supported and secure within her community?"
                  }
                />
                <StickyNote
                  content={
                    "How Might We make it easier for Sukaina to get an immediate response?"
                  }
                />
              </div>
            </div>

            <TitleCont title={"Solutions"} content={""} />
            <div className="w-fit">
              <div className="flex md:flex-row flex-wrap justify-center gap-7 mb-4">
                <HafazatSolutions
                  title={"SOS\nButton"}
                  counter={"0 1"}
                  content={
                    "The SOS button on the bottom navigation bar is the main feature. It allows help to reach to users in case of an emergency. It calls helpline numbers, shares location with contacts and records video."
                  }
                />
                <HafazatSolutions
                  title={"Create\nReports"}
                  counter={"0 2"}
                  content={
                    "Users can report positive and negative reports in real time of what happens on the street. These reports show up on the map in the form of exclamation marks (danger) and tick marks (safety) and the user can decipher for herself whether the area is safe or not. "
                  }
                />
                <HafazatSolutions
                  title={"Tracking\nSystem"}
                  counter={"0 3"}
                  content={
                    "Personalized tracking system allows you to control who sees your location, and you can see the location of added contacts as well on a map. People who are following you, the user's tribe is shown in a circle so that the user feels safe."
                  }
                />
              </div>
            </div>

            <ImageContainer src={"/hafazatSketch.svg"} alt="sketch" />

            <TitleCont title={"Prototypes"} content={""} />

            <section>
              <div className="grid grid-cols-3">
                <Image
                  src={"hafazatPhones/phn1.svg"}
                  width={1000}
                  height={1000}
                  alt="Hafazat Prototypes"
                />
                <Image
                  src={"hafazatPhones/phn2.svg"}
                  width={1000}
                  height={1000}
                  alt="Hafazat Prototypes"
                />
                <Image
                  src={"hafazatPhones/phn3.svg"}
                  width={1000}
                  height={1000}
                  alt="Hafazat Prototypes"
                />
                <Image
                  src={"hafazatPhones/phn4.svg"}
                  width={1000}
                  height={1000}
                  alt="Hafazat Prototypes"
                />
                <Image
                  src={"hafazatPhones/phn5.svg"}
                  width={1000}
                  height={1000}
                  alt="Hafazat Prototypes"
                />
                <Image
                  src={"hafazatPhones/phn6.svg"}
                  width={1000}
                  height={1000}
                  alt="Hafazat Prototypes"
                />
              </div>
              <div className="grid grid-cols-2">
                <Image
                  src={"hafazatPhones/phn7.svg"}
                  width={1000}
                  height={1000}
                  alt="Hafazat Prototypes"
                />
                <Image
                  src={"hafazatPhones/phn8.svg"}
                  width={1000}
                  height={1000}
                  alt="Hafazat Prototypes"
                />
              </div>
              <div>
                <div className="hidden lg:block">
                  <div className="flex justify-center align-middle items-center">
                    <Image
                      src={"hafazatPhones/phn9.svg"}
                      width={300}
                      height={642}
                      alt="Hafazat Prototypes"
                    />
                  </div>
                </div>
              </div>
              <div className="flex justify-center align-middle items-center">
                <Image
                  src={"hafazatPhones/phn10.svg"}
                  width={1000}
                  height={1000}
                  alt="Hafazat Prototypes"
                />
              </div>
            </section>

            <TitleCont
              title={"Outcome"}
              content={
                "Designing a women's safety application for women in Pakistan yielded several outcomes and learnings. \nDesigning for women in Pakistan highlighted the significance of localized solutions. Considering factors such as language preferences, cultural norms, and infrastructure limitations was crucial in making the application accessible and impactful. \nEngaging with local communities, women's organizations, and stakeholders played a vital role in the design process. Collaborating with these groups helped gather valuable insights, build trust, and ensure the application aligned with the needs and preferences of its intended users. \nOverall, designing a women's safety application for women in Pakistan resulted in valuable insights, emphasizing the importance of cultural sensitivity, user engagement, and technology adaptation in addressing complex societal challenges."
              }
            />
            <ArrowsNextPage backPage={"/sudostudy"} frontPage={"/engajify"} />
          </section>
        </div>
      </div>
    </>
  );
};

export default Page;
