import React from "react";

const TitleCont = ({ title, content, titleid = "", subHeading }) => {
  const processedTitle = title.replace(/\n/g, "<br /><br/>>");
  const processedContent = content.replace(/\n/g, "<br /><br/>");

  return (
    <div className="mt-12">
      <p
        id={titleid ? titleid : title}
        className={
          subHeading
            ? "font-poppins font-semibold mb-4 text-[20px] md:text-xl lg:text-2xl"
            : "font-poppins font-semibold mb-6 text-[28px] md:text-3xl lg:text-4xl"
        }
        dangerouslySetInnerHTML={{ __html: processedTitle }}
      ></p>
      {/* <br /> */}
      <p
        className="text-xl font-poppins md:text-lg mb-4"
        dangerouslySetInnerHTML={{ __html: processedContent }}
      ></p>
    </div>
  );
};

export default TitleCont;
