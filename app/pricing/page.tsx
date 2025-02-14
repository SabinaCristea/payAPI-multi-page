// import { Public_Sans } from "next/font/google";
import React from "react";
import CirclePatternSvg from "./../../public/assets/shared/desktop/bg-pattern-circle.svg";
import PricingPlan from "../_components/PricingPlan";
import CTASection from "../_components/CTASection";

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

      <CTASection />
    </main>
  );
}
