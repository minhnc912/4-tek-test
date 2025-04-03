"use client";

import { useLocale, useTranslations } from "next-intl";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import VNFlag from "../assets/images/vn_flag.webp";
import UKFlag from "../assets/images/uk_flag.webp";
import ArrowDropDown from "../assets/icons/arrow-drop-down";
import { useRouter } from "next/navigation";
import Tick from "../assets/icons/tick";
import { motion, AnimatePresence } from "framer-motion";

const LanguageSelector = () => {
  const router = useRouter();
  const currentLocale = useLocale();
  const [locale, setLocale] = useState<string>(currentLocale);
  const t = useTranslations("NavLanguage");
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const languages = [
    { code: "vi", name: t("vi"), flag: VNFlag },
    { code: "en", name: t("en"), flag: UKFlag },
  ];

  useEffect(() => {
    const savedLocale = document.cookie
      .split("; ")
      .find((row) => row.startsWith("NEXT_LOCALE="))
      ?.split("=")[1];

    if (savedLocale) {
      setLocale(savedLocale);
    }
  }, []);

  const handleChangeLanguage = (newLocale: string) => {
    if (newLocale === locale) return;

    document.cookie = `NEXT_LOCALE=${newLocale}; path=/`;

    setIsOpen(false);
    setLocale(newLocale);

    router.push(`/${newLocale}`);
    router.refresh();
  };
  return (
    <div className="relative">
      <button
        className="flex items-center gap-2 w-20 h-10 md:bg-transparent bg-[#F6F6F6] rounded-lg border border-[#AFAFAF] md:border-none text-white cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        <Image
          src={languages.find((lang) => lang.code === locale)?.flag || VNFlag}
          width={33.33}
          height={33.33}
          alt="flag"
        />
        {/* {languages.find((lang) => lang.code === locale)?.name} */}
        <div className="hidden md:block">
          <ArrowDropDown color="white" />
        </div>
        <div className="md:hidden block">
          <ArrowDropDown color="black" />
        </div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="absolute left-0 md:right-0 md:left-auto mt-2 w-40 bg-white shadow-lg rounded-lg overflow-hidden"
          >
            {languages.map((lang, index) => (
              <div key={lang.code}>
                <button
                  onClick={() => handleChangeLanguage(lang.code)}
                  className="flex items-center gap-2 w-full px-4 py-2 hover:bg-gray-200 cursor-pointer "
                >
                  <Tick
                    className={`w-5 h-5 ${
                      locale === lang.code ? "visible" : "invisible"
                    }`}
                  />
                  <div className="flex items-center gap-2">
                    <Image
                      src={lang.flag}
                      width={33.33}
                      height={33.33}
                      alt={`${lang.name} flag`}
                    />
                    <p className="font-bold text-[10px] text-black">
                      {lang.name}
                    </p>
                  </div>
                </button>
                {index < languages.length - 1 && (
                  <hr className="border-[#C4C4C4] mx-2" />
                )}
              </div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default LanguageSelector;
