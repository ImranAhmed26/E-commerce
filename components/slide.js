import Image from "next/image";
import React from "react";

import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

import Slide1 from "../public/assets/images/slide01.png";
import Slide2 from "../public/assets/images/slide02.png";

const slideImages = [Slide1, Slide2];

const Slide = () => {
  return (
    <div className="p-2 rounded-md bg-gray-100">
      <Carousel
        className="p-2 rounded-md bg-gray-100 max-w-4xl xl:max-w-6xl mx-auto "
        autoPlay={true}
        infiniteLoop={true}
        transitionTime={2000}
        interval={4000}
      >
        {slideImages.map((item, index) => {
          return (
            <div key={index}>
              <Image src={item} width={1000} height={500} alt="img" className="rounded-md" />
            </div>
          );
        })}
      </Carousel>
    </div>
  );
};

export default Slide;
