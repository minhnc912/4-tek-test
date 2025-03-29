import React from "react";
import BGFooter from "@/app/assets/images/bg-footer.webp";
import WhiteLogo from "../assets/icons/white-logo";
import Link from "next/link";
import TwitterIcon from "../assets/icons/twitter-icon";
import FacebookIcon from "../assets/icons/facebook-icon";
import LinkedinIcon from "../assets/icons/linkedin-icon";
import ArressIcon from "../assets/icons/arress-icon";
import PhoneIcon from "../assets/icons/phone-icon";
import EmailInput from "./EmailInput";
import { useTranslations } from "next-intl";

const Footer = () => {
  const t = useTranslations("Contact");
  return (
    <div
      id="contact"
      className="w-full flex flex-col xl:flex-row items-center xl:items-start justify-between gap-16 py-10 xl:py-[100px] px-4 xl:px-[230px]"
      style={{
        backgroundImage: `url("${BGFooter.src}")`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="flex flex-col gap-10">
        <WhiteLogo />

        <div className="flex gap-6">
          <Link href="#contact">
            <TwitterIcon />
          </Link>
          <Link href="#contact">
            <FacebookIcon />
          </Link>
          <Link href="#contact">
            <LinkedinIcon />
          </Link>
        </div>
      </div>

      <div className="flex flex-col xl:flex-row gap-10 text-white">
        <div className="w-96 flex flex-col  gap-10">
          <h3 className="text-2xl font-bold">Address</h3>
          <div className="flex gap-2 items-start">
            <ArressIcon />
            <div className="flex flex-col gap-3 text-sm">
              <p>
                Valletta Buildings, South Street, Valletta - VLT 1103 Malta, US
              </p>
              <p>
                20 Phan Dang Luu street, Hai Chau District, Danang city, Vietnam
              </p>
            </div>
          </div>
          <div className="flex gap-2 items-center text-sm">
            <PhoneIcon />
            <p>(+1) 555-0108-000</p>
            <p>or</p>
            <p>(+236) 555-0108</p>
          </div>
        </div>
        <div className="w-96 flex flex-col gap-10">
          <h3 className="text-2xl font-bold">Subscribe</h3>
          <p className="text-sm">
            Subscribe to our newsletter and be the first to know about our
            updates
          </p>
          <EmailInput
            placeholder={t("emailPlaceholder")}
            classname="bg-transparent text-white border border-white"
            buttonColor="white"
          />
        </div>
      </div>
    </div>
  );
};

export default Footer;
