import React from "react";

const HafazatSolutions = ({ title, counter, content }) => {
  return (
    <div className="relative min-h-96 max-w-96 bg-[#F7F7F7] p-8">
      <p className="absolute right-8 font-poppins font-bold text-4xl whitespace-pre-line tracking-wide text-[#434343]">
        {counter}
      </p>
      <div className="flex flex-col pt-10">
        <div>
          <p className="font-poppins font-bold text-3xl whitespace-pre-line text-[#434343]">
            {title}
          </p>
          <p className="pt-4 font-poppins font-light text-base text-left text-[rgba(67,67,67,0.69)]">
            {content}
          </p>
        </div>
      </div>
    </div>
  );
};

export default HafazatSolutions;
