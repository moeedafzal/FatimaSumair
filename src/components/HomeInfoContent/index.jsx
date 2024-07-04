import React from "react";
import Link from "next/link";
import "../../app/globals.css"
import ButtonText from "../global/ButtonText";
import Image from "next/image";

const ForwardArrow = () => (
  <Image
    className="cursor-pointer inline"
    src="/images/utils/forward_arrow.svg"
    alt="Forward arrow"
    width={20}
    height={20}
  />
);

function HomeInfoContent({
  gotoLink,
  btn_clr,
  btn_txt,
  heading,
  para,
  placementLeft = false,
}) {
  return (
    <div
      className={`font-poppins bg-white h-full flex items-center py-16 lg:py-0 ${
        placementLeft && "lg:justify-end"
      }`}
    >
      <div
        className={`w-fit h-fit flex flex-col gap-6 px-8 ${
          placementLeft ? "lg:pr-12 2xl:pr-20" : "lg:pl-12 2xl:pl-20"
        }`}
      >
        {/* Corrected syntax for className */}
        <ButtonText btn_clr={btn_clr} btn_txt={btn_txt} gotoLink={gotoLink} />
        <h2 className="font-poppins font-semibold text-3xl max-w-[490px]">
          {heading}
        </h2>
        <p className="font-normal text-lg lg:text-xl max-w-[620px]">{para}</p>
        <Link href={gotoLink} className="ont-semibold text-lg lg:text-2xl">
          See full case study <ForwardArrow />
        </Link>
      </div>
    </div>
  );
}

export default HomeInfoContent;
