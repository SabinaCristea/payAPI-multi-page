import PhoneMockupSvg from "./../public/assets/home/desktop/illustration-phone-mockup.svg";

import CirclePatternSvg from "./../public/assets/shared/desktop/bg-pattern-circle.svg";

import TeslaSvg from "./../public/assets/shared/desktop/tesla.svg";
import MicrosoftSvg from "./../public/assets/shared/desktop/microsoft.svg";
import HewlettSvg from "./../public/assets/shared/desktop/hewlett-packard.svg";
import OracleSvg from "./../public/assets/shared/desktop/oracle.svg";
import GoogleSvg from "./../public/assets/shared/desktop/google.svg";
import NvidiaSvg from "./../public/assets/shared/desktop/nvidia.svg";

import { Public_Sans } from "next/font/google";
import Link from "next/link";

const publicSans = Public_Sans({
  subsets: ["latin"],
  weight: ["400", "700"],
  style: ["normal"],
});

export default function Home() {
  return (
    <div className="relative">
      <CirclePatternSvg className="absolute top-[-21.6rem] right-[-29.5rem] z-[-1]" />
      <PhoneMockupSvg
        style={{ fontFamily: publicSans }}
        className="absolute top-[3.4rem] right-[2.5rem] z-[-1]"
      />
      {/* HERO */}
      <div className="pt-[15.2rem] w-[54.6rem]">
        <h1 className="text-[7.2rem] text-[var(--secondary-blue-1)] tracking-[-0.554px] leading-[7.2rem]">
          Start building with out APIs for absolutely free.
        </h1>
        <div
          className={`text-[1.5rem] relative w-[44.5rem] h-[4.8rem] ${publicSans.className} font-bold mt-[3.5rem]`}
        >
          <input
            placeholder="Enter email address"
            className="w-[100%] h-[100%] rounded-[50rem] shadow-input focus-visible:outline-none hover:shadow-none pl-[2.7rem] text-[1.5rem]"
          />
          <button className="flex items-center justify-center  text-[var(--primary-white)] bg-[var(--primary-pink)] rounded-[50rem] hover:bg-[var(--secondary-pink)] absolute top-0 right-0 w-[17.3rem] h-[100%] leading-[1.5rem] ">
            Schedule a Demo
          </button>
        </div>
        <p
          className={`mt-[1.6rem] ml-[2.7rem] ${publicSans.className} text-[1.5rem] text-[var(--secondary-blue-1-opac)]`}
        >
          Have any questions? <span className="font-[700]">Contact Us</span>
        </p>
      </div>

      {/* PARTNERS */}
      <div className="mt-[15.1rem] bg-[var(--secondary-blue-2)] mx-[-16.5rem] px-[16.5rem] py-[10rem] text-[var(--primary-white)] mb-[15rem] flex justify-between relative overflow-hidden">
        <CirclePatternSvg className="absolute top-[-33.6rem] left-[-22.5rem] z-0" />
        <div className="flex flex-col items-start z-10">
          <h2 className="text-[4.8rem] mb-[2.4rem]">Who we work with</h2>
          <p
            className={`${publicSans.className} text-[1.5rem] w-[44.5rem] leading-[2.8rem] text-[var(--primary-white-opac)] mb-[3.2rem]`}
          >
            Today, millions of people around the world have successfully
            connected their accounts to apps they love using our API. We provide
            developers with the tools they need to create easy and accessible
            experiences for their users.
          </p>
          {/* <button
            className={`${publicSans.className} font-bold text-[1.5rem] px-[3.2rem] py-[1.5rem] rounded-[50rem] border-[0.1rem] hover:bg-white hover:text-[var(--secondary-blue-2)]`}
          >
            About Us
          </button> */}
          <Link
            href="/about"
            className={`${publicSans.className} font-bold text-[1.5rem] px-[3.2rem] py-[1.5rem] rounded-[50rem] border-[0.1rem] hover:bg-white hover:text-[var(--secondary-blue-2)]`}
          >
            About Us
          </Link>
        </div>
        <div className="grid grid-cols-3 grid-rows-2 items-center justify-center gap-y-[5.5rem] gap-x-[6rem]">
          <div className="flex items-center justify-center self-end">
            <TeslaSvg fill="#fff" />
          </div>
          <div className="flex items-center justify-center self-end">
            <MicrosoftSvg fill="#fff" />
          </div>
          <div className="flex items-center justify-center self-end">
            <HewlettSvg fill="#fff" />
          </div>
          <div className="flex items-center justify-center self-start">
            <OracleSvg fill="#fff" />
          </div>
          <div className="flex items-center justify-center self-start">
            <GoogleSvg fill="#fff" />
          </div>
          <div className="flex items-center justify-center self-start">
            <NvidiaSvg fill="#fff" />
          </div>
        </div>
      </div>
    </div>
  );
}
