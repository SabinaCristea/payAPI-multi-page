import React from "react";

import { Public_Sans } from "next/font/google";

const publicSans = Public_Sans({
  subsets: ["latin"],
  weight: ["400", "700"],
  style: ["normal"],
});

const GridAbout = ({
  name1,
  name2,
  text1,
  text2,
}: {
  name1: string;
  name2: string;
  text1: string;
  text2: string;
}) => {
  return (
    <div className="grid grid-cols-[25.5rem_auto] grid-rows-2 pl-[9.5rem] gap-y-[5.6rem] gap-x-[3rem] pr-[9.5rem]">
      <p className="text-[3.2rem] w-[25.5rem]">{name1}</p>
      <p
        className={`text-[1.5rem] text-[var(--secondary-blue-3)]  ${publicSans.className} leading-[2.8rem]`}
      >
        {text1}
      </p>
      <p className="text-[3.2rem]">{name2}</p>
      <p
        className={`text-[1.5rem] text-[var(--secondary-blue-3)] ${publicSans.className}`}
      >
        {text2}
      </p>
    </div>
  );
};

export default GridAbout;
