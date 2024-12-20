import { Public_Sans } from "next/font/google";
import React from "react";
import TeslaSvg from "/public/assets/shared/desktop/tesla.svg";
import MicrosoftSvg from "/public/assets/shared/desktop/microsoft.svg";
import HewlettSvg from "/public/assets/shared/desktop/hewlett-packard.svg";
import OracleSvg from "/public/assets/shared/desktop/oracle.svg";
import GoogleSvg from "/public/assets/shared/desktop/google.svg";
import NvidiaSvg from "/public/assets/shared/desktop/nvidia.svg";
import Form from "next/form";

import CirclePatternSvg from "/public/assets/shared/desktop/bg-pattern-circle.svg";

// import { Checkbox } from "@nextui-org/checkbox";

const publicSans = Public_Sans({
  subsets: ["latin"],
  weight: ["400", "700"],
  style: ["normal"],
});

const page = () => {
  return (
    <div>
      <CirclePatternSvg className="absolute top-[-55rem] right-[-15.5rem] z-[-1]" />
      <h1 className="max-w-[73rem] text-[5.6rem] text-[var(--secondary-blue-1)] mb-[4.3rem] mt-[8.2rem] leading-[5.6rem] tracking-[-0.431px]">
        Submit a help request and we&rsquo;ll get in touch shortly.
      </h1>

      <div className="flex justify-between">
        <Form action="/" className="flex flex-col w-[44.5rem]">
          <input type="text" placeholder="Name" />
          <input type="text" placeholder="Email Address" />
          <input type="text" placeholder="Company Name" />
          <input type="text" placeholder="Title" />
          <input type="text" placeholder="Message" />
          {/* <Checkbox defaultSelected>Option</Checkbox> */}

          <button type="submit">Submit</button>
        </Form>

        <div className="w-[54.1rem]">
          <h2 className="text-[2.4rem] leading-[3.2rem] tracking-[-0.185px] text-[var(--secondary-blue-1-opac)] mb-[4rem] w-[44.5rem]">
            Join the thousands of innovators already building with us
          </h2>
          <div className="grid grid-cols-3 grid-rows-2 items-center justify-center gap-y-[5.5rem] gap-x-[5rem]">
            <div className="flex items-center justify-center self-end">
              <TeslaSvg style={{ fill: "#36536b" }} />
            </div>
            <div className="flex items-center justify-center self-end">
              <MicrosoftSvg style={{ fill: "#36536b" }} />
            </div>
            <div className="flex items-center justify-center self-end">
              <HewlettSvg style={{ fill: "#36536b" }} />
            </div>
            <div className="flex items-center justify-center self-start">
              <OracleSvg style={{ fill: "#36536b" }} />
            </div>
            <div className="flex items-center justify-center self-start">
              <GoogleSvg style={{ fill: "#36536b" }} />
            </div>
            <div className="flex items-center justify-center self-start">
              <NvidiaSvg style={{ fill: "#36536b" }} />
            </div>
          </div>
        </div>
      </div>

      {/* CTA section */}
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
    </div>
  );
};

export default page;
