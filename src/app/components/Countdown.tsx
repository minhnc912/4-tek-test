"use client";

import React, { useEffect, useState } from "react";

interface CountdownProps {
  day: string;
  hour: string;
  minute: string;
  second: string;
}
const Countdown: React.FC<CountdownProps> = ({ day, hour, minute, second }) => {
  const [timeLeft, setTimeLeft] = useState<null | {
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
  }>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const targetDate = new Date();
    targetDate.setDate(targetDate.getDate() + 30);

    const calculateTimeLeft = () => {
      const difference = targetDate.getTime() - new Date().getTime();
      if (difference < 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 };

      return {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / (1000 * 60)) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    };

    setTimeLeft(calculateTimeLeft());

    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  if (!timeLeft) return null;

  const countdownTimes = [
    { label: day, value: timeLeft.days },
    { label: hour, value: timeLeft.hours },
    { label: minute, value: timeLeft.minutes },
    { label: second, value: timeLeft.seconds },
  ];

  return (
    <div className="flex items-center justify-center relative z-10 mt-9 md:mt-5">
      <div className="bg-white w-full max-w-[343px] lg:max-w-2xl 2xl:max-w-[756px] px-[26px] md:px-10 py-6 flex space-x-4 lg:space-x-9 2xl:space-x-14 rounded-3xl h-[118px] 2xl:h-[150px] shadow-[0px_4px_10px_0px_rgba(0,0,0,0.25)]">
        {countdownTimes.map((item, index) => (
          <div
            className="flex gap-4 lg:gap-9 2xl:gap-14 items-center"
            key={index}
          >
            <div className="flex flex-col justify-center items-center">
              <span className="text-black text-4xl 2xl:text-6xl font-playfair font-black leading-10 2xl:leading-16">
                {item.value}
              </span>
              <span className="font-bold text-black mt-2 text-xs 2xl:text-base">
                {item.label}
              </span>
            </div>
            <p
              className={`text-6xl text-black ${
                index >= countdownTimes.length - 1 && "hidden"
              }`}
            >
              :
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Countdown;
