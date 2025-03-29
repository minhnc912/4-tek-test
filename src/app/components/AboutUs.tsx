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
      className="mt-10 md:mt-0 px-4 md:px-40 xl:px-60 2xl:px-[380px]"
    >
      <div className="flex flex-col md:flex-row gap-10">
        <div className="flex-1/2 flex flex-col justify-between">
          <div>
            <h1 className="font-black text-6xl">{t("title")}</h1>
            <p className="text-[#757575] text-sm mt-10">{t("description")}</p>
          </div>
          <div className="flex flex-row gap-4 mt-10 md:flex-col md:gap-10">
            <div className="flex flex-col justify-start items-start gap-1">
              <h1 className="text-[#079BEE] font-bold text-5xl md:text-7xl">
                600<sub className="text-4xl">{t("milion")}</sub>+
              </h1>
              <p className="font-bold text-2xl">{t("user")}</p>
            </div>
            <div className="flex flex-col justify-start items-start gap-1">
              <h1 className="text-[#079BEE] font-bold text-5xl md:text-7xl">
                135+
              </h1>
              <p className="font-bold text-2xl">{t("game")}</p>
            </div>
          </div>
        </div>
        <div className="flex-1/2 h-full bg-zinc-100 flex flex-col items-center gap-10 px-4 xl:px-[75px] py-10 xl:py-28">
          {lists.map((item) => (
            <div key={item.title} className="flex gap-6 items-start">
              <div className="w-12 h-12 flex-none rounded-full flex items-center justify-center bg-cyan-50 shadow-[0px_15px_30px_0px_rgba(44,81,78,0.10)]">
                {item.icon}
              </div>
              <div className="flex flex-col">
                <h3 className="text-2xl font-bold leading-loose">
                  {item.title}
                </h3>
                <p className="text-[#757575] text-sm">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="relative flex items-center justify-center h-screen bg-white">
        <motion.div
          className="absolute inset-0 flex items-center justify-center top-80"
          animate={{ scale: [1, 1.02, 1] }}
          transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
        >
          <Image src={MapImage} alt="Map" width={1160} height={500} />
        </motion.div>
        <motion.div
          className="relative z-10 -mt-40 md:-mt-60"
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
          <Image src={WitchImage} alt="Witch" width={533} height={200} />
        </motion.div>
      </div>
    </div>
  );
};

export default AboutUs;
