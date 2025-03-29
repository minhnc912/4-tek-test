"use client";

import { useTranslations } from "next-intl";
import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import Partner1 from "@/app/assets/images/partners/partner1.webp";
import Partner2 from "@/app/assets/images/partners/partner2.webp";
import Partner3 from "@/app/assets/images/partners/partner3.webp";
import Partner4 from "@/app/assets/images/partners/partner4.webp";
import Partner5 from "@/app/assets/images/partners/partner5.webp";
import SlideLeft from "../assets/icons/slide-left";
import SlideRight from "../assets/icons/slide-right";

const partners = [
  { id: 1, src: Partner1, alt: "EA Games" },
  { id: 2, src: Partner2, alt: "Game" },
  { id: 3, src: Partner3, alt: "First Power Up" },
  { id: 4, src: Partner4, alt: "Walt Disney" },
  { id: 5, src: Partner5, alt: "Book Pro Game Show" },
];
const OurPartners = () => {
  const t = useTranslations("Partner");
  const sliderRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState(0);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    startAutoSlide();
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  const startAutoSlide = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => {
      nextSlide();
      startAutoSlide();
    }, 3000);
  };

  const resetAutoSlide = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    startAutoSlide();
  };

  const nextSlide = () => {
    if (sliderRef.current) {
      const slideWidth =
        (sliderRef.current.firstElementChild as HTMLElement)?.clientWidth ||
        200;
      setPosition((prev) =>
        prev - slideWidth < -slideWidth * (partners.length - 1)
          ? 0
          : prev - slideWidth
      );
    }
  };

  const prevSlide = () => {
    if (sliderRef.current) {
      const slideWidth =
        (sliderRef.current.firstElementChild as HTMLElement)?.clientWidth ||
        200;
      setPosition((prev) =>
        prev + slideWidth > 0
          ? -slideWidth * (partners.length - 1)
          : prev + slideWidth
      );
    }
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
        <div className="relative overflow-hidden max-w-5xl mx-auto mt-20">
          <motion.div
            ref={sliderRef}
            className="flex gap-10"
            animate={{ x: position }}
            transition={{ ease: "easeInOut", duration: 0.5 }}
            drag="x"
            dragConstraints={{ left: -600, right: 0 }}
          >
            {partners.map((partner) => (
              <motion.div key={partner.id} className="flex-shrink-0 w-40">
                <img
                  src={partner.src.src}
                  alt={partner.alt}
                  className="mx-auto h-24 object-contain"
                />
              </motion.div>
            ))}
          </motion.div>

          <button
            onClick={() => {
              prevSlide();
              resetAutoSlide();
            }}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 rounded-md cursor-pointer"
          >
            <SlideLeft />
          </button>
          <button
            onClick={() => {
              nextSlide();
              resetAutoSlide();
            }}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 rounded-md cursor-pointer"
          >
            <SlideRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default OurPartners;
