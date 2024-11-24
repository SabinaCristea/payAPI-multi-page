import PhoneMockupSvg from "./../public/assets/home/desktop/illustration-phone-mockup.svg";

import CirclePatternSvg from "./../public/assets/shared/desktop/bg-pattern-circle.svg";

import { Public_Sans } from "next/font/google";

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
    </div>
  );
}
