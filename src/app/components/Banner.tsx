import React from "react";
import BannerBackground from "@/app/assets/images/BG.webp";
import Fairy from "@/app/assets/images/Fairy.webp";
import Image from "next/image";
import Countdown from "./Countdown";
import { useLocale, useTranslations } from "next-intl";
import EmailInput from "./EmailInput";

const Banner = () => {
  const t = useTranslations("Banner");
  const locale = useLocale();
  return (
    <div className="relative h-[calc(100vh+2rem)] w-full mb-[30px]">
      <Image
        src={BannerBackground}
        alt="Banner Background"
        layout="fill"
        objectFit="cover"
        quality={100}
      />
      <Image
        src={Fairy}
        alt="fairy"
        className="absolute left-[60%] -bottom-44 -translate-x-1/2 md:translate-0 md:left-0 md:bottom-0 w-[60%] md:w-[48%] z-30 md:z-0"
      />
      <div className="absolute inset-0 flex flex-col items-center justify-start md:justify-center text-white mt-32 xl:mt-0">
        <div className="absolute top-1/5 md:top-[35%] left-1/2 -translate-x-1/2 w-[50%] h-[400px] rounded-full bg-[radial-gradient(ellipse_27.79%_27.72%_at_50.81%_68.15%,_#210544_0%,_rgba(23,_5,_68,_0.71)_51%,_rgba(23,_5,_68,_0)_100%)] backdrop-blur-[5px]"></div>
        <h1 className="font-black text-[40px] md:text-[80px] font-playfair tracking-wide leading-[1.2] relative z-10 text-center break-words">
          {/* Tiếng Anh */}
          {locale === "en" ? (
            <>
              <span className="block sm:hidden">
                We&apos;re <br /> Getting Ready
              </span>
              <span className="hidden sm:block">{t("comingSoon")}</span>
            </>
          ) : (
            <>
              {/* Tiếng Việt */}
              <span className="block sm:hidden">
                Trò chơi <br /> Sắp ra mắt
              </span>
              <span className="hidden sm:block">{t("comingSoon")}</span>
            </>
          )}
        </h1>

        <Countdown
          day={t("day")}
          hour={t("hour")}
          minute={t("minute")}
          second={t("second")}
        />
        <p className="px-4 mt-10 md:mt-24 w-full md:w-[30%] text-center text-xs md:text-lg relative z-10 mb-8">
          {t("description")}
        </p>
        <EmailInput placeholder={t("emailPlaceholder")} classname="bg-white" />
      </div>
    </div>
  );
};

export default Banner;
