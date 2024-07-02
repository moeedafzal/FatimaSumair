import React from "react";
import Image from "next/image";

const colorVariants = {
  // blue: 'bg-blue-600 hover:bg-blue-500',
  // red: 'bg-red-600 hover:bg-red-500',
  DDBDBD: "bg-[#DDBDBD]",
  E9EE8A: "bg-[#E9EE8A]",
  ECE2D7: "bg-[#ECE2D7]",
};
// t1 t2 t3 = title1...;
// c1 c2 c3 = content1...;
// ! I HAVE NOT USED t1 t2, change up the code if you want to use them but make sure sudostudy page is functional
const ThreeImageHorizontal = ({
  image1,
  image2,
  image3,
  t1,
  t2,
  t3,
  c1,
  c2,
  c3,
  bgcolor,
}) => {
  return (
    <div className="ml-6 flex flex-col flex-wrap md:flex-row justify-items-start md:justify-center mt-32 gap-[70px]">
      <div className="relative">
        <div
          className={`${colorVariants[bgcolor]} absolute top-0 left-0 transform translate-x-[-50%] translate-y-[-50%] rounded-full h-20 w-20 flex justify-center items-center font-poppins text-black`}
        >
          1
        </div>
        <Image src={image1} width={300} height={800} alt={"Image1"} />
        <p className="overflow-clip break-words w-[300px] mt-4 font-poppins font-bold">
          {t1}
        </p>
        <p className="overflow-clip break-words w-[300px] mt-4 font-poppins">
          {c1}
        </p>
      </div>
      <div className="relative">
        <div
          className={`${colorVariants[bgcolor]} absolute top-0 left-0 transform translate-x-[-50%] translate-y-[-50%] rounded-full h-20 w-20 flex justify-center items-center font-poppins text-black`}
        >
          2
        </div>
        <Image src={image2} width={300} height={300} alt={"Image2"} />
        <p className="overflow-clip break-words w-[300px] mt-4 font-poppins font-bold">
          {t2}
        </p>
        <p className="overflow-clip break-words w-[300px] mt-4 font-poppins">
          {c2}
        </p>
      </div>
      <div className="relative">
        <div
          className={`${colorVariants[bgcolor]} absolute top-0 left-0 transform translate-x-[-50%] translate-y-[-50%] rounded-full h-20 w-20 flex justify-center items-center font-poppins text-black`}
        >
          3
        </div>
        <Image src={image3} width={300} height={300} alt={"Image3"} />
        <p className="overflow-clip break-words w-[300px] mt-4 font-poppins font-bold">
          {t3}
        </p>
        <p className="overflow-clip break-words w-[300px] mt-4 font-poppins">
          {c3}
        </p>
      </div>
    </div>
  );
};

export default ThreeImageHorizontal;
