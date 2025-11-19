import { Testimonial } from "@/assets/assets";
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { motion } from "motion/react";
import { useEffect, useState } from "react";

const Testimonials = () => {
  const [slidesToShow, setSlidesToShow] = useState(1); // Start with mobile default

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1280) setSlidesToShow(4);
      else if (window.innerWidth >= 1024) setSlidesToShow(3);
      else if (window.innerWidth >= 640) setSlidesToShow(2);
      else setSlidesToShow(1);
    };

    handleResize(); // Set initial value
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: false,
    slidesToShow: slidesToShow,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1279,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div id="testimonials" className="pb-30 px-[9%] scroll-mt-30">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.5 }}
        className="text-center text-5xl font-ovo"
      >
        Testimonials
      </motion.h2>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.5 }}
        className="text-center max-w-2xl mx-auto mt-5 mb-8 font-ovo"
      >
        Working with Toymur was an excellent experience. His technical skills
        and dedication to project quality are truly top-notch. I highly
        recommend his services for any complex development work.
      </motion.p>
      <Slider {...settings}>
        {Testimonial.map((explorer, index) => {
          return (
            <aside key={index} className="p-4">
              <div className="p-8 rounded-lg bg-darkGray bg-opacity-10 shadow-md flex flex-col items-center justify-center">
                <svg
                  id="Layer_1"
                  data-name="Layer 1"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 559.27 546.15"
                  className="w-10 h-10 fill-green"
                >
                  <path d="M336.63,250.54V33.44H553.71v217.1S587.7,503,364.37,512.71V392s85.76,35.63,74.55-141.49Z" />
                  <path d="M3.71,250.54V33.44H220.79v217.1S254.78,503,31.46,512.71V392S117.21,427.66,106,250.54Z" />
                </svg>
                <p className="testmo-custom-text text-darkGray1 text-center mt-6 mb-8">
                  {explorer.message}
                </p>
                <Image
                  src={explorer.img}
                  alt={explorer.name}
                  width={80}
                  height={80}
                  className="rounded-full mb-4"
                />
                <h3 className="text-center text-lg text-black">
                  {explorer.name}
                  <br />
                  <small className="text-green font-medium text-sm">
                    {explorer.location}
                  </small>
                </h3>
              </div>
            </aside>
          );
        })}
      </Slider>
    </div>
  );
};

export default Testimonials;
