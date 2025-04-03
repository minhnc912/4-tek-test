import { useTranslations } from "next-intl";
import React from "react";
import GameImage1 from "@/app/assets/images/games/game1.webp";
import GameImage2 from "@/app/assets/images/games/game2.webp";
import GameImage3 from "@/app/assets/images/games/game3.webp";
import GameImage4 from "@/app/assets/images/games/game4.webp";
import GameImage5 from "@/app/assets/images/games/game5.webp";
import GameImage6 from "@/app/assets/images/games/game6.webp";
import GameImage7 from "@/app/assets/images/games/game7.webp";
import GameImage8 from "@/app/assets/images/games/game8.webp";
import GameImage9 from "@/app/assets/images/games/game9.webp";
import GameImage10 from "@/app/assets/images/games/game10.webp";
import GameImage11 from "@/app/assets/images/games/game11.webp";
import GameImage12 from "@/app/assets/images/games/game12.webp";

const games = [
  {
    title: "E-Space",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    image: GameImage1,
  },
  {
    title: "Kingland",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    image: GameImage4,
  },
  {
    title: "The Last Game",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    image: GameImage7,
  },
  {
    title: "G-Dragon",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    image: GameImage10,
  },
  {
    title: "Pirates",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    image: GameImage2,
  },
  {
    title: "Witch Party",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    image: GameImage5,
  },
  {
    title: "Rocky",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    image: GameImage8,
  },
  {
    title: "Blue Fire",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    image: GameImage11,
  },
  {
    title: "Magic tree",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    image: GameImage3,
  },
  {
    title: "Aborigines",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    image: GameImage6,
  },
  {
    title: "Cinderella",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    image: GameImage9,
  },
  {
    title: "Egypt Game",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    image: GameImage12,
  },
];
const OurGames = () => {
  const t = useTranslations("Game");
  return (
    <div className="flex flex-col gap-20 px-4 lg:px-20 -mt-10" id="games">
      <div className="flex flex-col items-center gap-6">
        <h1 className="text-[40px] xl:text-[42px] 2xl:text-6xl font-black font-playfair leading-[60px]">
          {t("title")}
        </h1>
        <p className="text-center w-full xl:max-w-xl 2xl:max-w-[860px] text-[#757575] text-sm xl:text-[10px] 2xl:text-sm">
          {t("description")}
        </p>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 lg:gap-10 justify-items-center">
        {games.map((game, index) => (
          <div
            key={index}
            className={`relative w-full h-[268px] lg:max-w-[410px] lg:h-[560px] rounded-xl shadow-lg overflow-hidden bg-cover bg-center 
              ${
                index % 2 === 1
                  ? "translate-y-9 md:translate-y-0 lg:translate-y-[120px]"
                  : ""
              }
              ${
                index % 3 === 1 ? "md:translate-y-[120px] lg:translate-y-0" : ""
              }
              `}
            style={{
              backgroundImage: `url("${game.image.src}")`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="text-white px-2 lg:px-8 py-3 lg:py-10 h-full w-full flex flex-col gap-1 lg:gap-4 justify-end">
              <h2 className="text-2xl lg:text-5xl font-bold leading-loose lg:leading-[60px]">
                {game.title}
              </h2>
              <p className="text-xs lg:text-sm leading-tight">
                {game.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurGames;
