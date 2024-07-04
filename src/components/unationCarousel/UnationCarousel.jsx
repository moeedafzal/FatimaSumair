import { Carousel } from "antd";
import Image from "next/image";

const ImageContainer = ({ src, alt }) => (
  <div>
    <Image src={src} alt={alt} width={1200} height={1200} />
  </div>
);

export default function UnationCarousel() {
  return (
    <div className="max-w-[950px] mx-auto">
      <Carousel
        autoplay
        autoplaySpeed={2000}
        adaptiveHeight
        infinite
        arrows={false}
        dots={false}
      >
        <ImageContainer
          src="/images/work/unation/page_content/carousel_images/carousel_1.png"
          alt="Typography section - Unity design system"
        />
        <ImageContainer
          src="/images/work/unation/page_content/carousel_images/carousel_2.png"
          alt="Iconography section - Unity design system"
        />
        <ImageContainer
          src="/images/work/unation/page_content/carousel_images/carousel_3.png"
          alt="Color section - Unity design system"
        />
        <ImageContainer
          src="/images/work/unation/page_content/carousel_images/carousel_4.png"
          alt="Alerts section - Unity design system"
        />
        <ImageContainer
          src="/images/work/unation/page_content/carousel_images/carousel_5.png"
          alt="Grid system section - Unity design system"
        />
        <ImageContainer
          src="/images/work/unation/page_content/carousel_images/carousel_6.png"
          alt="Dropdowns section - Unity design system"
        />
        <ImageContainer
          src="/images/work/unation/page_content/carousel_images/carousel_7.png"
          alt="Search section - Unity design system"
        />
        <ImageContainer
          src="/images/work/unation/page_content/carousel_images/carousel_8.png"
          alt="Buttons section - Unity design system"
        />
        <ImageContainer
          src="/images/work/unation/page_content/carousel_images/carousel_9.png"
          alt="Form elements section - Unity design system"
        />
      </Carousel>
    </div>
  );
}
