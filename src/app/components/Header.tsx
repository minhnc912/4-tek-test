"use client";

import { useTranslations } from "next-intl";
import LanguageSelector from "./LanguageSelector";
import WhiteLogo from "../assets/icons/white-logo";
import MenuIcon from "../assets/icons/menu-icon";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import CloseIcon from "../assets/icons/close-icon";
import Link from "next/link";

export default function Header() {
  const t = useTranslations("NavItemTitle");
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { url: "#about", title: t("about") },
    { url: "#games", title: t("games") },
    { url: "#partners", title: t("partners") },
    { url: "#contact", title: t("contact") },
  ];

  return (
    <header className="w-screen fixed top-0 left-0 right-0 z-50 flex justify-between items-center gap-20 px-4 md:px-20 py-6 md:py-10 bg-gradient-to-b from-black/50 to-black/0 text-white">
      <Link href="/">
        <WhiteLogo width="109" />
      </Link>

      {/* Desktop Navigation */}
      <nav className="max-w-[710px] w-full hidden md:flex justify-between items-center">
        {navItems.map((item) => (
          <a
            key={item.title}
            href={item.url}
            className="font-bold uppercase text-center"
          >
            {item.title}
          </a>
        ))}
        <LanguageSelector />
      </nav>

      {/* Menu Icon */}
      <div onClick={() => setIsOpen(true)} className="md:hidden cursor-pointer">
        <MenuIcon />
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-black bg-opacity-50 z-40"
              onClick={() => setIsOpen(false)}
            />

            {/* Slide-in Menu */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", duration: 0.3 }}
              className="fixed top-0 right-0 w-full h-full bg-white text-black flex flex-col items-center z-50"
            >
              <div className="absolute top-1 left-4">
                <LanguageSelector />
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="absolute top-1 right-4 text-white cursor-pointer"
              >
                <CloseIcon />
              </button>

              <nav className="flex flex-col items-center gap-6 mt-20 text-xl font-bold">
                {navItems.map((item) => (
                  <a
                    key={item.title}
                    href={item.url}
                    onClick={() => setIsOpen(false)}
                    className="hover:text-black/50 transition duration-300 font-bold text-sm"
                  >
                    {item.title}
                  </a>
                ))}
              </nav>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}
