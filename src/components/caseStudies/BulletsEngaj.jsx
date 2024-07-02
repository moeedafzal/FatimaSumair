import React from "react";

const BulletsEngaj = ({ title, content }) => {
  const renderContent = (content) => {
    const bulletPoints = content.split("\n").map((point, index) => (
      <li key={index} className="font-poppins list-disc mx-8 py-1 text-[17px]">
        {point}
      </li>
    ));
    return <ul>{bulletPoints}</ul>;
  };
  return (
    <div className="">
      <h2 className="font-poppins text-[20px] font-semibold py-6">{title}</h2>
      {renderContent(content)}
    </div>
  );
};

export default BulletsEngaj;
