import { Public_Sans } from "next/font/google";
import React from "react";
import CirclePatternSvg from "./../../public/assets/shared/desktop/bg-pattern-circle.svg";
import PricingPlan from "../_components/PricingPlan";

const publicSans = Public_Sans({
  subsets: ["latin"],
  weight: ["400", "700"],
  style: ["normal"],
});

export default function Page() {
  return (
    <main>
      <CirclePatternSvg className="absolute top-[-55rem] right-[-15.5rem] z-[-1]" />

      <h1 className="text-[5.6rem] text-[var(--secondary-blue-1)] mb-[7.2rem] mt-[8.2rem] leading-[5.6rem]">
        Pricing
      </h1>
      <div className="flex justify-between">
        <PricingPlan
          isInvChecked={false}
          isAsChecked={false}
          isLiChecked={false}
          isIncChecked={false}
          title="Free plan"
          subtitle="Build and test using our core set of products with up to 100 API requests"
          price="0.00"
        />
        <PricingPlan
          isInvChecked={true}
          isAsChecked={true}
          isLiChecked={false}
          isIncChecked={false}
          title="Basic plan"
          subtitle="Launch your project with unlimited requests and no contractual minimums"
          price="249.00"
        />
        <PricingPlan
          isInvChecked={true}
          isAsChecked={true}
          isLiChecked={true}
          isIncChecked={true}
          title="Premium plan"
          subtitle="Get tailored solutions, volume pricing, and dedicated support for your team "
          price="499.00"
        />
      </div>
      <div className="flex items-center justify-between w-[100%] mb-[9.6rem] mt-[10rem]">
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
}
