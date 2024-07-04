import React from "react";
import Image from "next/image";

const VideoComp = ({ imagePath, bgColor, alt }) => {
  // !! ENTER THE REQUIRED COLOR VARIANTS HERE FOR THE VIDEO BACKGROUND COLOR otherwise it will not work.
  const colorVariants = {
    // blue: 'bg-blue-600 hover:bg-blue-500',
    // red: 'bg-red-600 hover:bg-red-500',
    DDBDBD: "bg-[#DDBDBD]",
    E9EE8A: "bg-[#E9EE8A]",
    ECE2D7: "bg-[#ECE2D7]",
  };

  return (
    <div className={`${colorVariants[bgColor]} px-2 py-20`}>
      <div className="lg:h-[65vh] md:h-[50vh] h-[40vh] w-full m-auto relative">
        <Image
          fill={true}
          objectFit="contain"
          src={imagePath}
          alt={alt || "Header Image"}
        />
      </div>
    </div>
  );
};

export default VideoComp;
