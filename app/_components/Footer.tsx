import { Public_Sans } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const publicSans = Public_Sans({
  subsets: ["latin"],
  weight: ["400", "700"],
  style: ["normal"],
});

export default function Footer() {
  return (
    <nav className="mx-[16.5rem] py-[3.1rem] text-[1.5rem]">
      <ul
        className={`${publicSans.className} font-bold flex items-center text-[var(--primary-white-opac)] `}
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
        <li className="hover:text-[var(--primary-white)]">
          <Link href="/pricing">Pricing</Link>
        </li>

        <li className="mx-[4rem] hover:text-[var(--primary-white)]">
          <Link href="/about">About</Link>
        </li>
        <li className="hover:text-[var(--primary-white)]">
          <Link href="/contact ">Contact</Link>
        </li>
        <li className="ml-auto">
          <button className=""></button>
          <button className=""></button>
          <button className=""></button>
        </li>
      </ul>
    </nav>
  );
}
