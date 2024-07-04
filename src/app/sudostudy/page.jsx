"use client";
import React from "react";
import Image from "next/image";
import { Divider } from "antd";
import VideoComp from "../../components/global/VideoComp";
import TitleCont from "../../components/caseStudies/TitleCont";
import SideNavbar from "../../components/caseStudies/SideNavbar";
import UsersContentImage from "../../components/caseStudies/UsersContentImage";
import ArrowsNextPage from "../../components/caseStudies/ArrowsNextPage";
import SingleImage from "../../components/caseStudies/SingleImage";

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
    "My Role",
    "Research",
    "Users",
    "Storyboarding",
    "User Flows",
    "Final Designs",
    "Accessibility and Challenges",
    "Outcome",
  ];

  return (
    <>
      <VideoComp
        imagePath={"/images/work/sudostudy/header.png"}
        bgColor={"DDBDBD"}
        alt="SudoStudy header image"
      />

      <div className="flex flex-row justify-center">
        <div className="hidden xl:block xl:w-1/6 mt-[21.3rem]">
          <SideNavbar titles={titles} />
        </div>
        <div className="md:w-5/6 w-full items-center text-left mx-7 md:mx-12">
          <section className="text-left mt-8 md:mt-24 items-center">
            <div className="flex justify-left mb-20">
              <p className="font-poppins font-semibold  text-[32px] md:text-[50px] overflow-clip break-words">
                Transforming the Quiz-taking Experience of Teachers and Students
              </p>
            </div>
            <TitleCont
              title={"Context"}
              content={
                "Sudo Study is an online quizzing platform that transforms teaching and learning for students and teachers. I redesigned the quiz interface, which increased conversion rates by 20%. Task completion rates in the usability testing increased from 60% to 90% after design iterations that I made."
              }
            />
            <TitleCont
              title={"My Role"}
              content={
                "When I first joined SudoStudy, it was just an idea on paper. As the only designer on the team, I worked closely with the founder, who is software engineer at Google to develop a clear vision for the platform and began building the initial prototype. I was responsible for building the entire platform from scratch. Over the course of two years, as the design team lead, I was able to take SudoStudy from an idea to over 25,000 recurring global users."
              }
            />

            <TitleCont
              titleid="Research"
              title={"Research and Discovery"}
              content={
                "After doing some competitive market research, I spoke to 13 teachers from around the globe.  From the interview sessions with the teachers, I learned a lot. I created the illustration below to capture my learnings. Teachers said that they had to juggle with so any things at the same time. Many felt that they were stressed and felt the pressure of teaching the curriculum, test prepping and reviewing. At a high level, we found that teachers didn't find assigning tests challenging but keeping students engaged and knowing where they are is tough. "
              }
            />
            <div className="mt-12 flex flex-col xl:flex-row xl:justify-center items-center gap-16">
              <Image
                src="/images/work/sudostudy/page_content/user_research_diagram.png"
                alt="A diagram of user research"
                width={500}
                height={800}
                className=""
              />
              <Image
                src="/images/work/sudostudy/page_content/stressed_out_teacher_animated.png"
                alt="Animated image of a stressed teacher"
                width={500}
                height={300}
                className=""
              />
            </div>

            <div className="flex flex-wrap xl:gap-8 xl:flex-row justify-center">
              <SingleImage
                image1={
                  "/images/work/sudostudy/page_content/marker_writing_on_paper.png"
                }
                c1={
                  "Quiz creation and grading can be time-consuming and inefficientprocess for teachers."
                }
                bgcolor={"DDBDBD"}
                index={1}
                alt="Red maker writing on a paper"
              />
              <SingleImage
                image1={
                  "/images/work/sudostudy/page_content/boy_writing_on_paper.png"
                }
                c1={
                  "Students learn at different paces and have different strengths and weaknesses. Traditional quizzes often do not take his into account, resulting in a less-than-optimal learning experience for students."
                }
                bgcolor={"DDBDBD"}
                index={2}
                alt="Student writing on a paper"
              />
              <SingleImage
                image1={
                  "/images/work/sudostudy/page_content/stressed_out_teacher.png"
                }
                c1={
                  "Teachers are stressed out, they're looking into new technologies to provide personalized feedback and practice content."
                }
                bgcolor={"DDBDBD"}
                index={3}
                alt="A stressed out teacher"
              />
            </div>

            <TitleCont
              title={"Users"}
              content={
                'Before embarking on the design process, our team delved deep into the behavioral patterns and purchasing data of our users. This thorough analysis was conducted with a singular focus: to unravel the fundamental motivations driving customers to interact with our product, a concept commonly referred to as the "job-to-be-done."'
              }
            />

            <div className="">
              <UsersContentImage
                image1={
                  "/images/work/sudostudy/page_content/animated_student.png"
                }
                bullet={true}
                t1={"Student Alina"}
                c1={
                  "Emma is a 16-year-old high school student preparing for her IGCSE and A-Level exams. She is dedicated to her studies but often feels overwhelmed by the amount of material she needs to cover."
                }
                t2={"Needs and Goals:"}
                c2={[
                  "Access to practice quizzes tailored to her syllabus and level.",
                  "Feedback on her performance to identify areas of improvement.",
                  "A platform that offers flexibility in terms of when and where she can practice.",
                ].join("\n")}
                t3={"Pain Points:"}
                c3={[
                  "Lack of immediate feedback on her quiz performance.",
                  "Difficulty in finding relevant practice material",
                  "Busy schedule with extracurricular activities and school work.",
                ].join("\n")}
                alt="Animated image of a student"
              />
            </div>

            <UsersContentImage
              image1={
                "/images/work/sudostudy/page_content/animated_teacher.png"
              }
              bullet={true}
              t1={"Teacher Ms. Aliya"}
              c1={
                "Ms. Aliya is an experienced IGCSE and A-Level teacher at a private school. She is responsible for teaching multiple subjects and ensuring his students are well-prepared for their exams."
              }
              t2={"Needs and Goals:"}
              c2={[
                "Efficient tools to create and distribute quizzes to her students.",
                "A platform that automates grading and provides detailed analytics on student performance.",
                "Access to a repository of pre-made quizzes aligned with the curriculum",
              ].join("\n")}
              t3={"Pain Points:"}
              c3={[
                "Time-consuming manual grading of quizzes.",
                "Difficulty in tracking student progress and identifying struggling students.",
                "Limited resources and time for creating customized quizzes for each class.",
              ].join("\n")}
              alt="Animated image of a teacher"
            />

            <UsersContentImage
              image1={"/images/work/sudostudy/page_content/animated_parent.png"}
              bullet={true}
              t1={"Parent David "}
              c1={
                "David is the parent of a 15-year-old student preparing for IGCSE exams. He wants to support his child's education and ensure they have access to the best resources."
              }
              t2={"Needs and Goals:"}
              c2={[
                "Visibility into his child's progress and performance on quizzes.",
                "Confidence that his child is using their study time effectively.",
                "A platform that offers insights into areas where his child may need additional support.",
              ].join("\n")}
              t3={"Pain Points:"}
              c3={[
                "Limited understanding of the current curriculum and exam structure.",
                "Concerns about the quality and relevance of study materials.",
                "Difficulty in monitoring his child's academic progress due to busy work schedule.",
              ].join("\n")}
              alt="Animated image of a father hugging his son"
            />
            <p className="font-poppins text-xl mt-8 xl:mx-12">
              I also created some design principles to guide my thinking for the
              rest of the project:
            </p>
            <div className="mt-8 lg:mx-12">
              <ImageContainer
                src={
                  "/images/work/sudostudy/page_content/design_principles.png"
                }
                alt={"Image of Design Principles for teachers"}
                alignLeft
                noMarginTop
              />
            </div>
            <div className="mt-16">
              <TitleCont
                title={"Storyboarding"}
                content={
                  "Then I drew out the general flow of the quizzes and how they would fit into Ms Aliya’s classroom:"
                }
              />
            </div>
            <Image
              src={"/images/work/sudostudy/page_content/storyboarding_1.png"}
              width={690}
              height={400}
              alt="Animated image of a diary"
            />
            <p className="font-poppins my-8 overflow-clip">
              A. Ms. Aliya is planning the lesson for tomorrow and sees that
              it&apos;s almost time for the Unit 2 test. She decides to use
              SudoStudy.
            </p>
            <Image
              src={"/images/work/sudostudy/page_content/storyboarding_2.png"}
              width={690}
              height={400}
              alt="Teacher asking question on screen"
            />
            <p className="font-poppins my-8 overflow-clip">
              B. Ms. Aliya pulls up a question on the screen using Sudo Study.
              Each student tries to solve the problem on their own device or in
              groups.
            </p>
            <Image
              src={"/images/work/sudostudy/page_content/storyboarding_3.png"}
              width={690}
              height={400}
              alt="Teacher showing result on screen"
            />
            <p className="font-poppins my-8 overflow-clip">
              C. Ms. Aliya sees that almost half the class answered incorrectly
              and decides to explain the question on the board.
            </p>
            <div className="mt-4">
              <TitleCont
                title={"User Flows"}
                content={
                  "I along with my teammates created user flows of common tasks Ms Aliya would do on the website. If the teacher is new, they would be guided to create select their subject. They can instantly create a new quiz, select topics for a quiz and configure and finalize the quiz. For students, they can select their subject and practice, create their own quiz or do a quiz that was assigned to them. In the end, both teachers and students get a detailed report of the student's performance."
                }
              />
            </div>

            <ImageContainer
              src={"/images/work/sudostudy/page_content/user_flows.png"}
              alt={"A diagram of user flows for SudoStudy"}
            />

            <TitleCont
              title={"Final Designs"}
              content={"Here's a detailed walkthrough of the platform"}
            />

            <TitleCont
              title={"Solving a Quiz"}
              content={
                "Redesigning the quiz interface led to a 20% increase in conversion rates, and task completion rates improved from 60% to 90% through iterative design."
              }
              subHeading
            />

            <div className="flex justify-center mt-8">
              <div className="relative max-w-[1200px]">
                <Image
                  src={"/images/utils/black_macbook.png"}
                  alt={"Black MacBook with a video"}
                  width={10000}
                  height={10000}
                />
                <video
                  className=" absolute top-5 left-[50%] transform -translate-x-1/2 w-full h-full"
                  controls
                  autoPlay
                  style={{ maxWidth: "75%", maxHeight: "80%" }}
                >
                  <source src="/videos/sudostudy.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>

            <ImageContainer
              src={
                "/images/work/sudostudy/page_content/final_designs/question_page.png"
              }
              alt={"Question page of SudoStudy"}
            />

            <Divider className="bg-gray-700 my-10" />

            <TitleCont
              title={"Creating a Quiz"}
              content={
                "First the user has to select the topics for the quiz, and then they can choose different settings for the quiz, for instance difficulty level, duration, number of questions and year range."
              }
              subHeading
            />

            <ImageContainer
              src={
                "/images/work/sudostudy/page_content/final_designs/create_quiz.png"
              }
              alt={"Create quiz page of SudoStudy"}
            />

            <Divider className="bg-gray-700 my-10" />

            <TitleCont
              title={"Analytics"}
              content={
                "Analytics show various quiz performance metrics. It shows quiz completion rate, tracks the percentage of users who complete a quiz once they start it. It also analyzes how users respond to individual questions to identify challenging or confusing questions."
              }
              subHeading
            />

            <ImageContainer
              src={
                "/images/work/sudostudy/page_content/final_designs/report.png"
              }
              alt={"Mean time per question report"}
            />

            <Divider className="bg-gray-700 my-10" />

            <TitleCont
              title={"After quiz is created by teachers"}
              content={
                "Teachers have the option to create multiple quizzes and to send their link to their students.  Details of the quiz are shown on the quiz, and for more details, the teacher can click on the ‘show details’ button."
              }
              subHeading
            />

            <ImageContainer
              src={"/images/work/sudostudy/page_content/final_designs/quizzes_page.png"}
              alt={"Quizzes details page of SudoStudy"}
            />

            <TitleCont
              title={"Accessibility and Challenges"}
              content={
                "One of the biggest challenges was to make the user experience good for two totally different groups of users that were generations apart - young, tech savvy students and an older population of teachers who are not very comfortable using modern tech."
              }
            />
            <div className="BULLETPOINTS">
              <p className="py-10  text-[20px] font-poppins">
                To overcome this challenge, we made sure that..
              </p>
              <ul className="space-y-2 ml-8 text-[20px] font-poppins list-disc list-outside">
                <li>Our UI was simple, minimalistic and user friendly.</li>
                <li>
                  We also built features that were engaging for both the groups,
                  for example, the AI powered Practice Mode was designed to keep
                  students interested and engaged and an accessible and simple
                  user platform made it easy and intuitive for the teachers to
                  navigate through the product.{" "}
                </li>
                <li>
                  For older teachers, I kept the text large and easy to read. I
                  used large, visible and easy to click links, with plenty of
                  space around them. I limited long flows and tasks and reduced
                  the number of steps
                </li>
                <li>
                  I avoided bright animations and hard-to-follow gamification
                  systems which might be distracting.
                </li>
                <li>
                  I kept the website navigation straightforward. I conducted a
                  number of user interviews and usability tests. This helped me
                  identify the areas of our UI that were causing the most
                  friction for teachers. We then made changes to address these
                  issues.
                </li>
                <li>
                  One of the frictions was that after teachers had created the
                  quizzes, they were unable to find the ‘assign quiz’ button. We
                  made it more visible with plenty of space around it and made
                  it open up automatically upon the creation of the quiz.
                </li>
              </ul>
            </div>
            <TitleCont
              title={"Outcome"}
              content={
                "SudoStudy has reached over 25,000 recurring users globally. It is so rewarding to see the positive and meaningful impact it continues to have on the learning quality of students all around the globe. Providing students with access to practice material that matches and changes with their level of understanding, has not only helped them improve their grades, but to also build a stronger learning foundation."
              }
            />
            <div className=" text-[20px] font-poppins">
              <p className="py-10">
                Teachers have also vouched for the part SudoStudy is playing in
                a better teaching experience. Here is a review by one of the
                teachers:
              </p>
              <p>
                &quot;SudoStudy is a marvellous effort to support students
                learning. I&apos;ve been using this tool for quite some time and
                it has really helped my students to excel their learning in
                shortest time. It gives you amazing insights and an overall
                success stats that can even be recorded for future progressive
                evaluation. It has lessened my work burden but with quality
                support. I&apos;ll strongly recommend students and teachers to
                use this tool.&quot; - Iqbal Chughtai, O Levels and A Levels
                teacher
              </p>
            </div>
            <ArrowsNextPage backPage={"/engajify"} frontPage={"/unation"} />
          </section>
        </div>
      </div>
    </>
  );
};

export default Page;
