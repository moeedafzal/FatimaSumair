import React from "react";
import Link from "next/link";

const ButtonText = ({ btn_clr, gotoLink, btn_txt }) => {
  const colorVariants = {
    // blue: 'bg-blue-600 hover:bg-blue-500',
    // red: 'bg-red-600 hover:bg-red-500',
    DDBDBD: "bg-[#DDBDBD]",
    E9EE8A: "bg-[#E9EE8A]",
    ECE2D7: "bg-[#ECE2D7]",
  };

  const className = `${colorVariants[btn_clr]} link link-btn text-xl inline-block px-8 py-2 rounded-2xl hover:border-t-4 hover:border-l-4 hover:border-b-0 hover:border-r-0 border-b-4 border-r-4 border-black`;

  if (!gotoLink) {
    return <span className={className}>{btn_txt}</span>;
  }

  return (
    <div>
      <Link href={gotoLink} className={className}>
        {btn_txt}
      </Link>
    </div>
  );
};

export default ButtonText;
