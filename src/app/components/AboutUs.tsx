"use client";

import { useTranslations } from "next-intl";
import React from "react";
import CalendarIcon from "../assets/icons/calendar-icon";
import DesignIcon from "../assets/icons/design-icon";
import GroupPeopleIcon from "../assets/icons/group-people-icon";
import Image from "next/image";
import { motion } from "framer-motion";
import MapImage from "@/app/assets/images/Pin_map.webp";
import WitchImage from "@/app/assets/images/witch.webp";

const AboutUs = () => {
  const t = useTranslations("About");
  const lists = [
    {
      title: t("24HourTitle"),
      description: t("24HourDescription"),
      icon: <CalendarIcon />,
    },
    {
      title: t("designTitle"),
      description: t("designDescription"),
      icon: <DesignIcon />,
    },
    {
      title: t("teamTitle"),
      description: t("teamDescription"),
      icon: <GroupPeopleIcon />,
    },
  ];

  return (
    <div
      id="about"
      className="mt-20 lg:mt-0 mx-auto w-full lg:max-w-3xl 2xl:max-w-[1160px] flex flex-col justify-center items-center"
    >
      <div className="flex flex-col lg:flex-row gap-10 lg:gap-5 2xl:gap-10">
        <div className="flex-1/2 flex flex-col justify-between px-0">
          <div className="flex flex-col px-4 gap-4 2xl:gap-10">
            <h1 className="font-black text-[40px] lg:text-[42px] 2xl:text-6xl font-playfair">
              {t("title")}
            </h1>
            <p className="text-[#757575] text-sm lg:text-[10px] 2xl:text-sm">
              {t("description")}
            </p>
          </div>
          <div className="flex flex-row gap-4 mt-10 px-4 2xl:mt-20 lg:flex-col lg:gap-10">
            <div className="flex flex-col justify-start items-start gap-1">
              <h1 className="text-[#079BEE] font-bold text-5xl 2xl:text-[80px]">
                600
                <sub className="text-xl lg:text-3xl 2xl:text-4xl">
                  {t("milion")}
                </sub>
                <span className="text-4xl lg:text-5xl">+</span>
              </h1>
              <p className="font-bold text-2xl lg:text-xl 2xl:text-2xl">
                {t("user")}
              </p>
            </div>
            <div className="flex flex-col justify-start items-start gap-1">
              <h1 className="text-[#079BEE] font-bold text-5xl 2xl:text-[80px]">
                135<span className="text-4xl lg:text-5xl">+</span>
              </h1>
              <p className="font-bold text-2xl lg:text-xl 2xl:text-2xl">
                {t("game")}
              </p>
            </div>
          </div>
        </div>
        <div className="flex-1/2 grow bg-zinc-100 flex flex-col justify-center items-center gap-10 py-10 px-4 lg:gap-5 2xl:gap-10">
          {lists.map((item) => (
            <div
              key={item.title}
              className="flex gap-6 items-start w-full lg:max-w-3xs 2xl:max-w-[410px]"
            >
              <div className="w-12 lg:w-8 2xl:w-12 h-12 lg:h-8 2xl:h-12 flex-none rounded-full flex items-center justify-center bg-cyan-50 shadow-[0px_15px_30px_0px_rgba(44,81,78,0.10)]">
                {item.icon}
              </div>
              <div className="flex flex-col">
                <h3 className="text-2xl lg:text-base 2xl:text-2xl font-bold leading-loose">
                  {item.title}
                </h3>
                <p className="text-[#757575] text-sm lg:text-[10px] 2xl:text-sm">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="relative w-full max-w-[1160px] flex items-center justify-center h-[60vh] xl:h-[95vh] bg-white">
        <motion.div
          className="absolute inset-0 flex items-center justify-center top-52  2xl:top-80"
          animate={{ scale: [1, 1.02, 1] }}
          transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
        >
          <Image src={MapImage} alt="Map" fill className="object-contain" />
        </motion.div>
        <motion.div
          className="relative z-10 -mt-32 lg:-mt-60"
          animate={{
            y: [-10, 10, -10],
            rotate: [-2, 2, -2],
          }}
          transition={{
            repeat: Infinity,
            duration: 4,
            ease: "easeInOut",
          }}
        >
          <Image
            src={WitchImage}
            alt="Witch"
            width={533}
            height={428}
            className="w-[300px] lg:w-sm 2xl:w-[533px]"
          />
        </motion.div>
      </div>
    </div>
  );
};

export default AboutUs;
