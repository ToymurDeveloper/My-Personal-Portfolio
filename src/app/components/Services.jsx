import { assets, serviceData } from "../../assets/assets";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { useTheme } from "./ThemeProvider";

const Services = () => {
  const { isDark } = useTheme();
  return (
    <div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      id="services"
      className="w-full px-[12%] py-10 scroll-mt-20 "
    >
      <h4
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.5 }}
        className="text-center text-lg mb-2 font-ovo"
      >
        What I offer
      </h4>
      <h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.5 }}
        className="text-center text-5xl font-ovo"
      >
        My Services
      </h2>
      <p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.7, duration: 0.5 }}
        className="text-center max-w-2xl mx-auto mt-5 mb-12 font-ovo"
      >
        I am a frontend and backend developer from Dhaka, Bangladesh with 5
        years of experience in multiple marketplace like Fiverr, Upwork,
        Freelancer.com.
      </p>
      <div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.7 }}
        className="grid grid-cols-auto gap-6 my-10 "
      >
        {serviceData.map(({ icon, title, description, link }, index) => (
          <a
            href="https://github.com/Taimur496"
            target="_blank"
            key={index}
            className="border border-gray-400 rounded-lg px-8 py-12 hover:shadow-black cursor-pointer hover:bg-light-hover hover:-translate-y-1 duration-500 dark:hover:bg-dark-hover dark:hover:shadow-white"
          >
            <Image src={icon} alt="" className="w-8" />
            <h3 className="text-lg my-4 text-gray-700 dark:text-white">
              {title}
            </h3>
            <p className="text-sm text-gray-600 leading-5 dark:text-white">
              {description}
            </p>
            <Link href={link} className="flex items-center gap-2 text-sm mt-5 ">
              Read more
              <Image
                src={
                  isDark ? assets.right_arrow_white : assets.right_arrow_bold
                }
                className="w-4"
                alt=""
              />
            </Link>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Services;
