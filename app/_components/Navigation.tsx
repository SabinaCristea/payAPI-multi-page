import { Public_Sans } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import React from "react";
// import DemoBtn from "./DemoBtn";

const publicSans = Public_Sans({
  subsets: ["latin"],
  weight: ["400", "700"],
  style: ["normal"],
});

export default function Navigation() {
  return (
    <nav className="mx-[16.5rem] mt-[4rem] text-[1.5rem]">
      <ul
        className={`${publicSans.className} font-bold flex items-center text-[var(--secondary-blue-1-opac)]`}
      >
        <li className="mr-[6.4rem]">
          <Link href="/">
            <Image
              src="/assets/shared/desktop/logo.svg"
              alt="logo"
              width="135"
              height="38"
            />
          </Link>
        </li>
        <li className=" hover:text-[var(--secondary-blue-2)]">
          <Link href="/pricing">Pricing</Link>
        </li>
        <li className="mx-[4rem]  hover:text-[var(--secondary-blue-2)]">
          <Link href="/about">About</Link>
        </li>
        <li className=" hover:text-[var(--secondary-blue-2)]">
          <Link href="/contact">Contact</Link>
        </li>
        <li className="ml-auto">
          <button className="pt-[1.6rem] pr-[2.45rem] pb-[1.4rem] pl-[2.65rem] text-[var(--primary-white)] bg-[var(--primary-pink)] rounded-[50rem] hover:bg-[var(--secondary-pink)]">
            Schedule a Demo
          </button>
        </li>
      </ul>
    </nav>
  );
}
