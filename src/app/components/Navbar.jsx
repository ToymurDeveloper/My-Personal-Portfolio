// Navbar.jsx
import React, { useEffect, useRef, useState } from "react";
import { assets } from "../../assets/assets";
import Image from "next/image";
import { useTheme } from "./ThemeProvider";

export default function Navbar() {
  const [isScroll, setIsScroll] = useState(false);
  const isClient = useRef(false);
  const sideMenuRef = useRef();
  const { isDark, toggleTheme } = useTheme();

  const openMenu = () => {
    sideMenuRef.current.style.transform = "translateX(-16rem)";
  };

  const closeMenu = () => {
    sideMenuRef.current.style.transform = "translateX(16rem)";
  };

  useEffect(() => {
    isClient.current = true;
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScroll(true);
      } else {
        setIsScroll(false);
      }
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navItems = ["Home", "About me", "Services", "My work", "Testimonials"];

  return (
    <div>
      <div className="fixed top-0 right-0 w-11/12 -z-10 translate-y-[-80%] dark:hidden">
        <Image src={assets.header_bg_color} alt="" className="w-full" />
      </div>

      <nav
        className={`w-full fixed px-5 lg:px-8 xl:px-[8%] py-4 flex items-center justify-between z-50 ${
          isScroll
            ? "bg-white bg-opacity-50 backdrop-blur-lg shadow-sm transition duration-100 dark:bg-dark-theme dark:bg-opacity-50"
            : ""
        }`}
      >
        {/* Logo */}
        <div className="flex items-center cursor-pointer">
          <a href="#home" className="text-3xl font-bold font-ovo ">
            Toymur i<span className="text-red-500 ms-1">.</span>
          </a>
        </div>

        {/* Navigation Links */}
        <ul
          className={`hidden md:flex items-center gap-8 font-outfit border border-white text-gray-700 dark:text-custom-color px-8 py-3 rounded-full  ${
            isScroll
              ? "dark:border-custom-border"
              : "bg-white shadow-sm dark:border-gray-400 dark:bg-transparent bg-opacity-50 dark:bg-opacity-50"
          }`}
        >
          {navItems.map((item, index) => (
            <li key={index}>
              <a
                href={`#${item.toLowerCase().replace(" ", "-")}`}
                className="hover:text-gray-900 dark:hover:text-white transition-colors cursor-pointer font-ovo"
              >
                {item}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-6">
          {/* Theme Toggle Button with Image Assets */}
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800"
            aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
          >
            {isDark ? (
              <Image src={assets.sun_icon} alt="Light mode" className="w-5" />
            ) : (
              <Image src={assets.moon_icon} alt="Dark mode" className="w-5" />
            )}
          </button>

          <a
            href="#contact"
            className="hidden lg:flex items-center gap-3 px-10 py-2 border border-gray-500 dark:border-gray-400 rounded-full ml-4 font-ovo text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
          >
            Contact{" "}
            <Image
              src={isDark ? assets.arrow_icon_dark : assets.arrow_icon}
              alt=""
              className="w-3"
            />
          </a>

          <button className="block md:hidden ml-3" onClick={openMenu}>
            <Image
              src={isDark ? assets.menu_white : assets.menu_black}
              alt="Menu"
              className="w-5 cursor-pointer"
            />
          </button>
        </div>

        {/* Mobile menu */}
        <ul
          ref={sideMenuRef}
          className="flex md:hidden flex-col gap-4 py-14 px-10 fixed -right-64 top-0 bottom-0 w-64 z-50 h-screen bg-rose-50  transition duration-500 dark:bg-dark-hover"
        >
          <div className="absolute right-6 top-6" onClick={closeMenu}>
            <Image
              src={isDark ? assets.close_white : assets.close_black}
              alt="Close menu"
              className="w-5 cursor-pointer"
            />
          </div>
          {navItems.map((item, index) => (
            <li key={index}>
              <a
                onClick={closeMenu}
                href={`#${item.toLowerCase().replace(" ", "-")}`}
                className="hover:text-gray-900 dark:hover:text-white transition-colors cursor-pointer font-ovo text-gray-700 dark:text-white/90"
              >
                {item}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}
