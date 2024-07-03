import React from "react";
import Image from "next/image";
import Link from "next/link";
const Footer = () => {
  return (
    <section className="back-cream border-t-[1px] border-black py-10 lg:py-0">
      <div className="h-auto lg:h-44 max-h-full flex items-center">
        <div className="flex justify-center items-center gap-x-4 mx-auto lg:ml-8 2xl:ml-32">
          <Link href="/">
            <Image
              src="/logo.svg"
              alt="Logo"
              width="59"
              height="59"
              style={{ aspectRatio: "59 / 59" }}
              className="mix-blend-multiply bg-transparent border-none"
            />
          </Link>
          <div className="flex  flex-col">
            <Link href="/">
              <p className="font-playfair text-3xl max-w-full p-0 m-0">
                Fatima Sumair
              </p>
            </Link>
            <p className="font-poppins text-xl max-w-full p-0 m-0">
              UI/UX Designer
            </p>
          </div>
        </div>
      </div>

      <div className="lg:hidden flex justify-center align-middle items-center pt-5">
        <div className="flex gap-4">
          <div>
            <Link
              target="_blank"
              href="https://www.linkedin.com/in/fatima-sumair-479b35150/"
            >
              <Image
                className="w-10 cursor-pointer"
                src="/assets/home/linkedin_logo.png"
                alt="linkedin"
                width={100}
                height={100}
              />
            </Link>
          </div>
          <div>
            <Link target="_blank" href="https://www.behance.net/fatimasumair">
              <Image
                className="w-10 cursor-pointer"
                src="/assets/home/logo2.png"
                alt="logo2"
                width={100}
                height={100}
              />
            </Link>
          </div>
          <div>
            <Link target="_blank" href="https://medium.com/@fatimasumair">
              <Image
                className="w-10 cursor-pointer"
                src="/assets/home/logo3.png"
                alt="logo3"
                width={100}
                height={100}
              />
            </Link>
          </div>
        </div>
      </div>
      {/* </div> */}
    </section>
  );
};

export default Footer;
