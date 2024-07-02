import React from "react";
import Image from "next/image";
import Link from "next/link";

const ArrowsNextPage = ({ backPage, frontPage }) => {
  return (
    <div className="flex justify-between py-16 px-5">
      <Link href={backPage}>
        <Image
          src="/assets/testimonials/carouselBackButton.svg"
          alt="marks"
          width={60}
          height={60}
        />
      </Link>
      <Link href={frontPage}>
        <Image
          src="/assets/testimonials/carouselForwardButton.svg"
          alt="marks"
          width={60}
          height={60}
        />
      </Link>
    </div>
  );
};

export default ArrowsNextPage;
