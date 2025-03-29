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
    title: "Pirates",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    image: GameImage2,
  },
  {
    title: "Magic tree",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    image: GameImage3,
  },
  {
    title: "Kingland",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    image: GameImage4,
  },
  {
    title: "Witch Party",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    image: GameImage5,
  },
  {
    title: "Aborigines",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    image: GameImage6,
  },
  {
    title: "The Last Game",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    image: GameImage7,
  },
  {
    title: "Rocky",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    image: GameImage8,
  },
  {
    title: "Cinderella",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    image: GameImage9,
  },
  {
    title: "G-Dragon",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    image: GameImage10,
  },
  {
    title: "Blue Fire",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    image: GameImage11,
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
    <div className="flex flex-col gap-20 px-4 md:px-20" id="games">
      <div className="flex flex-col items-center gap-6">
        <h1 className="text-6xl font-black font-playfair leading-[60px]">
          {t("title")}
        </h1>
        <p className="text-center w-full max-w-[860px] text-[#757575] text-sm">
          {t("description")}
        </p>
      </div>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-10 justify-items-center">
        {games.map((game, index) => (
          <div
            key={index}
            className={`relative w-full min-w-[180px] lg:min-w-[250px] max-w-[300px] aspect-[2/3] rounded-[20px] shadow-lg overflow-hidden bg-cover bg-center 
              ${index % 2 === 1 ? "translate-y-[120px]" : ""}`}
            style={{
              backgroundImage: `url("${game.image.src}")`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="text-white px-2 md:px-8 py-3 md:py-10 h-full w-full flex flex-col gap-1 md:gap-4 justify-end bg-black/30">
              <h2 className="text-2xl md:text-5xl font-bold leading-loose md:leading-[60px]">
                {game.title}
              </h2>
              <p className="text-xs md:text-sm leading-tight">
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
