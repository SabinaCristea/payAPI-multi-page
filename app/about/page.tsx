import React from "react";
import CirclePatternSvg from "./../../public/assets/shared/desktop/bg-pattern-circle.svg";

import GridAbout from "../_components/GridAbout";
import { Public_Sans } from "next/font/google";
import Image from "next/image";

const publicSans = Public_Sans({
  subsets: ["latin"],
  weight: ["400", "700"],
  style: ["normal"],
});

const page = () => {
  return (
    <main className=" text-[var(--secondary-blue-1)]">
      <CirclePatternSvg className="absolute top-[-55rem] right-[-15.5rem] z-[-1]" />

      <h1 className="text-[5.6rem] mb-[7.2rem] mt-[8.2rem] leading-[5.6rem] tracking-[-0.431px] pl-[9.5rem] w-[75rem]">
        We empower innovators by delivering access to the financial system
      </h1>

      <GridAbout
        name1="Our Vision"
        name2="Our Business"
        text1="Our main goal is to build beautiful consumer experiences along with developer-friendly infrastructure. The result is an intelligent tool that gives everyone the ability to create amazing products that solve big problems. We are deeply focused on democratizing financial services through technology. "
        text2="At the core of our platform is the technical infrastructure APIs that connect consumers. Our innovative product provides key insights for businesses and individuals, as well as robust reporting for traditional financial institutions and developers. "
      />

      <div className="relative w-[100vw] h-[50rem] ml-[-16.5rem] mt-[5rem] mb-[5rem]">
        <CirclePatternSvg className="absolute top-[-30%] left-[-53rem] z-[-1]" />
        <Image
          src="/assets/about/desktop/image-team-members.jpg"
          fill
          alt="team image"
          className="object-cover"
        />
      </div>

      <div className="flex justify-between gap-[3rem] mb-[7.2rem]">
        <div>
          <div
            className="w-[35rem] h-[0.1rem] bg-[var(--secondary-blue-1)] opacity-[0.25] mb-[2.4rem]
      "
          ></div>
          <p
            className={`${publicSans.className} text-[1.6rem] text-[var(--secondary-blue-3)]`}
          >
            Team Members
          </p>
          <h1 className="text-[5.6rem] leading-[7.2rem] text-[var(--primary-pink)]">
            300+
          </h1>
          <div
            className="max-w-[35rem] h-[0.1rem] bg-[var(--secondary-blue-1)] opacity-[0.25] mt-[1.7rem]
      "
          ></div>
        </div>
        <div>
          <div
            className="w-[35rem] h-[0.1rem] bg-[var(--secondary-blue-1)] opacity-[0.25] mb-[2.4rem]
      "
          ></div>
          <p
            className={`${publicSans.className} text-[1.6rem] text-[var(--secondary-blue-3)]`}
          >
            Offices in the US
          </p>
          <h1 className="text-[5.6rem] leading-[7.2rem] text-[var(--primary-pink)]">
            3
          </h1>
          <div
            className="max-w-[35rem] h-[0.1rem] bg-[var(--secondary-blue-1)] opacity-[0.25] mt-[1.7rem]
      "
          ></div>
        </div>
        <div>
          <div
            className="w-[35rem] h-[0.1rem] bg-[var(--secondary-blue-1)] opacity-[0.25] mb-[2.4rem]
      "
          ></div>
          <p
            className={`${publicSans.className} text-[1.6rem] text-[var(--secondary-blue-3)]`}
          >
            Transactions analyzed
          </p>
          <h1 className="text-[5.6rem] leading-[7.2rem] text-[var(--primary-pink)]">
            10M+
          </h1>
          <div
            className="max-w-[35rem] h-[0.1rem] bg-[var(--secondary-blue-1)] opacity-[0.25] mt-[1.7rem]
      "
          ></div>
        </div>
      </div>

      <GridAbout
        name1="The Culture"
        name2="The People"
        text1="We strongly believe there's always an opportunity to learn from each other outside of day-to-day work, whether it's company-wide offsites, internal hackathons, or co-worker meetups. We always value cross-team collaboration and diversity of thought, no matter the job title."
        text2="We're all passionate about building a more efficient and inclusive financial infrastructure together. At PayAPI, we have diverse backgrounds and skills."
      />

      <div className="flex items-center justify-between w-[100%] mb-[9.6rem] mt-[8rem]">
        <h2 className="text-[4.8rem] text-[var(--secondary-blue-1)]">
          Ready to start?
        </h2>
        <div
          className={`text-[1.5rem] relative w-[44.5rem] h-[4.8rem] ${publicSans.className} font-bold `}
        >
          <input
            placeholder="Enter email address"
            className="w-[100%] h-[100%] rounded-[50rem] shadow-input focus-visible:outline-none  pl-[2.7rem] text-[1.5rem]"
          />
          <button className="flex items-center justify-center  text-[var(--primary-white)] bg-[var(--primary-pink)] rounded-[50rem] hover:bg-[var(--secondary-pink)] absolute top-0 right-0 w-[17.3rem] h-[100%] leading-[1.5rem] ">
            Schedule a Demo
          </button>
        </div>
      </div>
    </main>
  );
};

export default page;
