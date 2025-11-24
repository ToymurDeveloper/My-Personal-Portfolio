import { assets, workData } from "../../assets/assets";
import Image from "next/image";
import React from "react";
import { useTheme } from "./ThemeProvider";

const Works = () => {
  const { isDark } = useTheme();
  return (
    <div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      id="my-work"
      className="w-full px-[12%] scroll-mt-30"
    >
      <h4
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.5 }}
        className="text-center text-lg mb-2 font-ovo"
      >
        My Portfolio
      </h4>
      <h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.5 }}
        className="text-center text-5xl font-ovo"
      >
        My latest works
      </h2>
      <p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
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
        transition={{ delay: 0.7, duration: 0.7 }}
        className="grid grid-cols-auto my-10 gap-5 dark:text-gray-900 "
      >
        {workData.map((projects, index) => (
          // <a
          //   href="https://github.com/ToymurDeveloper"
          //   target="_blank"
          //   key={index}
          //   className="aspect-square bg-no-repeat bg-cover bg-center rounded-lg relative cursor-pointer group "
          //   style={{ backgroundImage: `url(${projects.bgImage})` }}
          // >
          // <a
          //   href="https://github.com/ToymurDeveloper"
          //   target="_blank"
          //   key={index}
          //   className="aspect-square bg-no-repeat bg-cover bg-center rounded-lg relative cursor-pointer group overflow-hidden"
          // >
          //   <div
          //     className="absolute inset-0 bg-cover bg-center group-hover:scale-[1.04] transition-transform duration-500"
          //     style={{ backgroundImage: `url(${projects.bgImage})` }}
          //   ></div>

          // <a
          //   href="https://github.com/ToymurDeveloper"
          //   target="_blank"
          //   key={index}
          //   className="aspect-square rounded-lg relative cursor-pointer group overflow-hidden"
          // >
          //   <div
          //     className="absolute inset-0 bg-cover bg-center group-hover:scale-[1.04] transition-transform duration-500 origin-center"
          //     style={{ backgroundImage: `url(${projects.bgImage})` }}
          //   ></div>

          <a
            href="https://github.com/ToymurDeveloper"
            target="_blank"
            key={index}
            className="aspect-square rounded-lg relative cursor-pointer group overflow-hidden"
          >
            {/* Background image with scale fix */}
            <div
              className="absolute inset-0 bg-cover bg-center transition-transform duration-500 ease-out group-hover:scale-105"
              style={{
                backgroundImage: `url(${projects.bgImage})`,
                transform: "scale(1.04)", // Slightly larger initial scale to prevent jump,
              }}
            ></div>

            {/* Optional: Add a smooth overlay */}
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-all duration-500"></div>
            <div className="bg-white w-10/12 rounded-md absolute bottom-5 left-0 right-0 mx-auto group-hover:-translate-y-1 duration-500 py-3 px-5 flex items-center justify-between">
              <div>
                <h2 className="font-semibold">{projects.title}</h2>
                <p className="text-sm text-gray-700">{projects.description}</p>
              </div>
              <div className="border rounded-full border-black w-9 aspect-square flex items-center justify-center shadow-[2px_2px_0_#000] group-hover:bg-lime-300 transition">
                <Image src={assets.send_icon} alt="send icon" className="w-5" />
              </div>
            </div>
          </a>
        ))}
      </div>
      <div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.7, duration: 0.5 }}
        href="#home"
        className="w-max flex items-center justify-center gap-2 text-gray-700 border-[0.5px] border-gray-700 rounded-full py-3 px-10 mx-auto my-20 hover:bg-lime-300 duration-500 cursor-pointer dark:text-white dark:border-gray-100 dark:hover:bg-dark-hover"
      >
        Show more{" "}
        <Image
          src={isDark ? assets.right_arrow_bold_dark : assets.right_arrow_bold}
          alt="Right arrow"
          className="w-4"
        />
      </div>
    </div>
  );
};

export default Works;
