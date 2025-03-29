"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import ScrollToTopButton from "../assets/icons/scroll-to-top-button";

const BackToTopButton = () => {
  const [isTop, setIsTop] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setIsTop(window.scrollY === 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScroll = () => {
    if (isTop) {
      window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <motion.button
      onClick={handleScroll}
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className={`fixed bg bottom-6 right-6 transition duration-300 cursor-pointer ${
        isTop ? "rotate-0" : "rotate-180"
      }`}
    >
      <ScrollToTopButton />
    </motion.button>
  );
};

export default BackToTopButton;
