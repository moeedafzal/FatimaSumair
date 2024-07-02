import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function HomepageFooter() {
  return (
    <div className="hidden lg:block max-w-[1600px] mx-8 2xl:mx-auto">
      <section>
        <p className="text-[#2121218A] text-xl font-normal mb-6">Follow</p>
        <div className="flex gap-4 mb-10">
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
      </section>
    </div>
  );
}
