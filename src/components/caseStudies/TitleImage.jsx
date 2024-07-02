import React from "react";
import Image from "next/image";

const TitleImage = ({ title, image1, w, h, alttext, hr, content }) => {
  let processedContent = ""; // Initialize processedContent as empty string

  if (content) {
    // Check if content is defined
    processedContent = content.replace(/\n/g, "<br/><br/>"); // Convert '\n' to '<br/>'
  }
  const renderContent = () => {
    if (hr) {
      return (
        <hr className="w-4/5 md:w-full h-[1px] mx-auto my-4 bg-black border-0 rounded dark:bg-gray-700" />
        // <hr className="w-[300px] md:w-[1300px] h-[1px] mt-7 mb-4 bg-black border-0 rounded md:my-10 dark:bg-gray-700"></hr>
      );
    }
    return null; // Render nothing if hr is false or not provided
  };

  return (
    <div className="my-8">
      <h2 className="font-poppins font-semibold text-[25px] my-4">{title}</h2>
      {content && (
        <p
          className="font-poppins text-20 whitespace-pre-line"
          dangerouslySetInnerHTML={{ __html: processedContent }} // Render processed content as HTML
        ></p>
      )}
      <div className="mt-16 flex justify-center">
        {/* Centering only the image */}
        <Image className="" src={image1} width={w} height={h} alt={alttext} />
      </div>
      {renderContent()}
    </div>
  );
};

export default TitleImage;
