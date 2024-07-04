import React from "react";
import Image from "next/image";

// Send bullet as true or false depending on c2 and c3 if they are bullet points or not
const UsersContentImage = ({ bullet, image1, t1, c1, t2, c2, t3, c3, alt }) => {
  const renderContent = (content) => {
    if (bullet) {
      const bulletPoints = content.split("\n").map((point, index) => (
        <li key={index} className="font-poppins list-disc ml-7">
          {point}
        </li>
      ));
      return <ul>{bulletPoints}</ul>;
    } else {
      return <p className="font-poppins mt-2">{content}</p>;
    }
  };

  return (
    <div className="flex-col flex xl:flex-row  xl:items-center justify-items-start gap-8 xl:px-12 mt-8">
      <div className="">
        <Image src={image1} width={400} height={400} alt={alt || "User Image"} />
      </div>
      <div className="md:w-[595px]">
        <p className="font-poppins font-bold text-2xl">{t1}</p>
        <p className="font-poppins  mt-2">{c1}</p>

        <p className="font-poppins font-bold text-base mt-4">{t2}</p>
        {renderContent(c2)}

        <p className="font-poppins font-bold text-base mt-4">{t3}</p>
        {renderContent(c3)}
      </div>
    </div>
  );
};

export default UsersContentImage;
