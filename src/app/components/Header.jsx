import React from "react";
import { Mail, MapPin } from "lucide-react";
import Link from "next/link";
import { assets } from "../../assets/assets";
import Image from "next/image";

export default function Header() {
  return (
    <header
      id="home"
      className="flex items-center relative overflow-hidden md:pt-24 pt-18"
    >
      <div className="max-w-7xl mx-auto px-8 py-10 md:py-18 w-full">
        <div className="flex justify-between flex-col lg:flex-row gap-12">
          {/* Left Content - Text Section */}
          <div className="space-y-6">
            {/* Main Heading */}
            <div className="space-y-4">
              <h1
                initial={{ y: -20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{
                  duration: 0.6,
                  delay: 0.3,
                }}
                className="text-4xl lg:text-6xl font-bold font-ovo leading-tight"
              >
                Hi! I'm <span className="text-blue-600">Sheikh Toymur</span>
              </h1>
              <div
                initial={{ y: -30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{
                  duration: 0.6,
                  delay: 0.5,
                }}
                className="relative"
              >
                <div className="sm:flex items-center">
                  <h2 className="inline-block text-2xl lg:text-3xl font-outfit text-gray-700 dark:text-gray-100">
                    frontend and backend web developer
                  </h2>
                  <Image
                    src={assets.hand_icon}
                    alt=""
                    className="inline-block w-6 ms-2 hand-custom-position"
                  />
                </div>
              </div>

              <div
                initial={{ y: -30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{
                  duration: 0.6,
                  delay: 0.7,
                }}
                className="flex items-center gap-2 text-gray-600 font-outfit text-lg dark:text-white/90"
              >
                <MapPin className="w-5 h-5 " />
                <span>From Asia, Bangladesh.</span>
              </div>
            </div>

            {/* Description */}
            <p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{
                duration: 0.7,
                delay: 0.5,
              }}
              className="text-lg text-gray-600 font-outfit leading-relaxed max-w-xl dark:text-white/80"
            >
              I am a frontend and backend developer from Dhaka, Bangladesh with
              5 years of experience in multiple online platforms like{" "}
              <span className="font-semibold text-gray-900 dark:text-gray-100">
                Fiverr
              </span>
              ,{" "}
              <span className="font-semibold text-gray-900 dark:text-gray-100">
                Upwork
              </span>
              ,{" "}
              <span className="font-semibold text-gray-900 dark:text-gray-100">
                People Per Hour
              </span>{" "}
              <span>and out of the marketplace</span>.
            </p>

            {/* Connect Button */}
            <div className="flex flex-col xs-flex-row pt-4 gap-5">
              <a
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{
                  duration: 0.6,
                  delay: 0.8,
                }}
                href="#contact"
              >
                <button className="flex items-center gap-3 bg-gray-900 text-white px-8 py-3 rounded-full font-outfit font-medium hover:bg-gray-800 transition-all duration-300 shadow-lg hover:shadow-xl group cursor-pointer border dark:border-gray-300 dark:bg-gray-950">
                  <span>connect with me</span>
                  <Image
                    src={assets.right_arrow_white}
                    alt=""
                    className="w-4"
                  />
                </button>
              </a>
              <a
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{
                  duration: 0.6,
                  delay: 0.8,
                }}
                href="#contact"
              >
                <button className="flex items-center gap-3 px-8 py-3 border border-gray-500 rounded-full font-outfit font-medium shadow-lg hover:shadow-xl group cursor-pointer dark: bg-white dark:border-white text-gray-900 duration-300 hover:bg-gray-100 dark:hover:bg-gray-200">
                  <span>my resume</span>
                  <Image src={assets.download_icon} alt="" className="w-4" />
                </button>
              </a>
            </div>
          </div>

          {/* Right Content - Profile Image Section */}
          <div className="relative lg:flex lg:justify-end hidden">
            <div className="relative">
              {/* Main Profile Image Container */}
              <div className="w-50 h-50 lg:w-70 lg:h-70 rounded-full bg-linear-to-br from-blue-200 to-pink-200 p-1 shadow-xl">
                <div className="w-full h-full rounded-full bg-gray-200 flex items-center justify-center overflow-hidden">
                  {/* Placeholder for profile image */}
                  <div className="text-center text-gray-500">
                    <div className="w-50 h-50 lg:h-68 lg:w-68 rounded-full mx-auto">
                      <div
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        transition={{
                          type: "spring",
                          stiffness: 120,
                          damping: 12,
                        }}
                      >
                        <Image src={assets.profile_round} alt="" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Experience Badge */}
              <div
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.7, duration: 0.5 }}
                className="absolute bottom-20 -left-19 bg-white px-6 py-2 rounded-full shadow-lg border border-gray-200"
              >
                <div className="text-center">
                  <div className="text-2xl font-bold font-ovo text-gray-900">
                    5+
                  </div>
                  <div className="text-sm font-outfit text-gray-700">
                    Years Exp.
                  </div>
                </div>
              </div>

              {/* Available Badge */}
              <div
                initial={{ y: -20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.7, duration: 0.5 }}
                className="absolute -top-5 -right-8 bg-white px-4 py-2 rounded-full shadow-lg border border-gray-200 flex items-center gap-2"
              >
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-sm font-outfit font-medium text-gray-900">
                  Available
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
