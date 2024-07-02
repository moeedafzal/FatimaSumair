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
      <Carousel autoplay autoplaySpeed={2000} adaptiveHeight>
        <ImageContainer src="/unation/4.svg" alt="Image 1" />
        <ImageContainer src="/unation/5.svg" alt="Image 2" />
        <ImageContainer src="/unation/6.svg" alt="Image 3" />
        <ImageContainer src="/unation/7.svg" alt="Image 4" />
        <ImageContainer src="/unation/8.svg" alt="Image 5" />
        <ImageContainer src="/unation/9.svg" alt="Image 6" />
        <ImageContainer src="/unation/10.svg" alt="Image 7" />
        <ImageContainer src="/unation/11.svg" alt="Image 8" />
        <ImageContainer src="/unation/12.svg" alt="Image 9" />
      </Carousel>
    </div>
  );
}
