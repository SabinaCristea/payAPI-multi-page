import PhoneMockupSvg from "./../public/assets/home/desktop/illustration-phone-mockup.svg";

import CirclePatternSvg from "./../public/assets/shared/desktop/bg-pattern-circle.svg";

import TeslaSvg from "./../public/assets/shared/desktop/tesla.svg";
import MicrosoftSvg from "./../public/assets/shared/desktop/microsoft.svg";
import HewlettSvg from "./../public/assets/shared/desktop/hewlett-packard.svg";
import OracleSvg from "./../public/assets/shared/desktop/oracle.svg";
import GoogleSvg from "./../public/assets/shared/desktop/google.svg";
import NvidiaSvg from "./../public/assets/shared/desktop/nvidia.svg";

import FinancesSvg from "./../public/assets/home/desktop/icon-personal-finances.svg";
import BankingSvg from "./../public/assets/home/desktop/icon-banking-and-coverage.svg";
import ConsumerSvg from "./../public/assets/home/desktop/icon-consumer-payments.svg";

import ImplementSvg from "./../public/assets/home/desktop/illustration-easy-to-implement.svg";
import SimpleSvg from "./../public/assets/home/desktop/illustration-simple-ui.svg";

import { Public_Sans, Roboto_Mono } from "next/font/google";
import Link from "next/link";

const publicSans = Public_Sans({
  subsets: ["latin"],
  weight: ["400", "700"],
  style: ["normal"],
});

const robotoMono = Roboto_Mono({
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

      {/* DETAILS */}
      <div className="flex flex-col relative">
        <CirclePatternSvg className="absolute top-[41%] translate-y-[-50%] right-[-55rem] z-[-1]" />
        <div className="flex w-[100%] gap-[10rem] justify-between">
          <div className="mt-[-5.5rem] ml-[-5.5rem]">
            <ImplementSvg style={{ fontFamily: robotoMono }} />
          </div>
          <div className="flex flex-col w-[57.5rem] h-[28.4rem] gap-[2.4rem] justify-center ">
            <h2 className="text-[4.8rem] text-[var(--secondary-blue-1)]">
              Easy to implement
            </h2>
            <p
              className={`${publicSans.className} text-[1.5rem] opacity-[0.7] leading-[2.8rem]`}
            >
              Our API comes with just a few lines of code. You`ll be up and
              running in no time. We built our documentation page to handle
              payments functionality with ease.
            </p>
          </div>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex flex-col w-[57.5rem] ">
            <h2 className="text-[4.8rem] text-[var(--secondary-blue-1)]">
              Simple UI & UX
            </h2>
            <p
              className={`${publicSans.className} text-[1.5rem] opacity-[0.7] leading-[2.8rem]`}
            >
              Our pre-built form is easy to integrate in your app or website`s
              checkout flow and designed to optimize conversion.
            </p>
          </div>
          <div className="mt-[-5rem] mr-[-10rem]">
            <SimpleSvg />
          </div>
        </div>
        <div
          className={`${publicSans.className} flex gap-[3rem] justify-between items-center text-[var(--secondary-blue-1)] mt-[5rem]`}
        >
          <div className="flex flex-col items-center max-w-[35rem]">
            <FinancesSvg />
            <h3 className="font-bold text-[1.8rem] pt-[3.2rem] pb-[1.6rem]">
              Personal Finances
            </h3>
            <p className="text-[1.5rem] text-center opacity-[0.7]">
              Consolidate financial data from multiple sources and categorize
              transactions up to 2 years of history. Analyze reports to
              reconcile activities in your account.
            </p>
          </div>
          <div className="flex flex-col items-center max-w-[35rem]">
            <BankingSvg />
            <h3 className="font-bold text-[1.8rem] pt-[3.2rem] pb-[1.6rem]">
              Banking & Coverage
            </h3>
            <p className="text-[1.5rem] text-center opacity-[0.7]">
              With our platform, you can speed up account onboarding and support
              ongoing payments for checking, savings, credit card, and brokerage
              accounts.
            </p>
          </div>
          <div className="flex flex-col items-center max-w-[35rem]">
            <ConsumerSvg />
            <h3 className="font-bold text-[1.8rem] pt-[3.2rem] pb-[1.6rem]">
              Consumer Payments
            </h3>
            <p className="text-[1.5rem] text-center  opacity-[0.7]">
              It`s easier to set up secure bank payments with us through a flow
              designed with the user experience in mind. Customers could
              instantly authenticate their account.
            </p>
          </div>
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
      </div>
    </div>
  );
}
