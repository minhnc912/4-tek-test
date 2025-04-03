"use client";

import { useTranslations } from "next-intl";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Partner1 from "@/app/assets/images/partners/partner1.webp";
import Partner2 from "@/app/assets/images/partners/partner2.webp";
import Partner3 from "@/app/assets/images/partners/partner3.webp";
import Partner4 from "@/app/assets/images/partners/partner4.webp";
import Partner5 from "@/app/assets/images/partners/partner5.webp";
import SlideLeft from "../assets/icons/slide-left";
import SlideRight from "../assets/icons/slide-right";
import Image from "next/image";

const partners = [
  { id: 1, src: Partner1, alt: "EA Games" },
  { id: 2, src: Partner2, alt: "Game" },
  { id: 3, src: Partner3, alt: "First Power Up" },
  { id: 4, src: Partner4, alt: "Walt Disney" },
  { id: 5, src: Partner5, alt: "Book Pro Game Show" },
];

const duplicatedPartners = [...partners, ...partners];

const OurPartners = () => {
  const [index, setIndex] = useState<number>(0);
  const [itemWidth, setItemWidth] = useState<number>(188 + 12);
  const [offset, setOffset] = useState<number>(0);

  const [isAnimating, setIsAnimating] = useState<boolean>(false);
  const [resetCounter, setResetCounter] = useState<number>(0);

  const t = useTranslations("Partner");

  useEffect(() => {
    const updateSize = () => {
      if (window.innerWidth >= 1024) {
        setItemWidth(260 + 40);
        setOffset(0);
      } else {
        setOffset(-5);
        setItemWidth(188 + 12);
      }
    };

    updateSize();
    window.addEventListener("resize", updateSize);
    return () => window.removeEventListener("resize", updateSize);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 3000);
    return () => clearInterval(interval);
  }, [resetCounter]);

  const nextSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setResetCounter((prev) => prev + 1);

    setTimeout(() => {
      setIsAnimating(false);
      setIndex((prev) => (prev + 1) % partners.length);
    }, 100);
  };

  const prevSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setResetCounter((prev) => prev + 1);

    setTimeout(() => {
      setIsAnimating(false);
      setIndex((prev) => (prev === 0 ? partners.length - 1 : prev - 1));
    }, 100);
  };

  return (
    <div
      className="w-full py-10 md:py-[120px] mt-32 flex flex-col items-center gap-20 px-0 md:px-20 bg-neutral-100"
      id="partners"
    >
      <div className="container mx-auto text-center">
        <h1 className="text-6xl font-black font-playfair leading-[60px]">
          {t("title")}
        </h1>
        <div className="flex items-center justify-center max-w-[1540px] mx-auto mt-20">
          <button
            onClick={() => {
              prevSlide();
              // startAutoSlide();
            }}
            className="p-2 rounded-md cursor-pointer"
          >
            <SlideLeft />
          </button>
          <div className="overflow-hidden w-full flex justify-center">
            <motion.div
              className="flex gap-3 lg:gap-10"
              animate={{
                x: `calc(-${index * itemWidth}px ${
                  offset ? `- ${offset}%` : ""
                })`,
              }}
              transition={{ type: "tween", duration: 0.5 }}
            >
              {duplicatedPartners.map((logo, i) => (
                <div key={i} className="shrink-0 w-[188px] lg:w-[260px]">
                  <Image
                    // src={logo}
                    src={logo.src}
                    alt={`Partner ${i + 1}`}
                    width={260}
                    height={100}
                    className="w-full object-contain"
                  />
                </div>
              ))}
            </motion.div>
          </div>

          <button
            onClick={() => {
              nextSlide();
              // startAutoSlide();
            }}
            className="p-2 rounded-md cursor-pointer"
          >
            <SlideRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default OurPartners;
