import React, { useState, useEffect } from "react";
import Link from "next/link";

const SideNavbar = ({ titles = [] }) => {
  const [activeTitle, setActiveTitle] = useState(titles[0]);
  const [sectionOffsets, setSectionOffsets] = useState([]);

  useEffect(() => {
    const sectionOffsets = titles.map((title) => {
      const element = document.getElementById(title);
      if (element) {
        return element.offsetTop;
      }
      return null;
    });
    setSectionOffsets(sectionOffsets.filter((offset) => offset !== null)); // Filter out null offsets

    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const threshold = 100; // Adjust threshold as needed

      let closestTitle = null;
      let minDistance = Infinity;

      for (let i = 0; i < sectionOffsets.length; i++) {
        const distance = scrollPosition - (sectionOffsets[i] - threshold);
        if (distance >= 0 && distance < minDistance) {
          closestTitle = titles[i];
          minDistance = distance;
        }
      }

      if (closestTitle !== activeTitle) {
        setActiveTitle(closestTitle);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [activeTitle, titles]);

  const handleClick = (title) => {
    setActiveTitle(title);
  };

  return (
    <div className="hidden xl:flex xl:flex-col gap-4 xl:pl-11 2xl:pl-14 pr-4 justify-center align-middle font-poppins text-base sticky top-20">
      {titles.map((title, index) => (
        <Link key={index} href={`#${title}`} onClick={() => handleClick(title)}>
          <p className={activeTitle === title ? "font-bold" : "font-normal"}>
            {title}
          </p>
        </Link>
      ))}
    </div>
  );
};

export default SideNavbar;
