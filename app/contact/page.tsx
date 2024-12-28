"use client";

import { Public_Sans } from "next/font/google";
import React, { useState } from "react";
import TeslaSvg from "/public/assets/shared/desktop/tesla.svg";
import MicrosoftSvg from "/public/assets/shared/desktop/microsoft.svg";
import HewlettSvg from "/public/assets/shared/desktop/hewlett-packard.svg";
import OracleSvg from "/public/assets/shared/desktop/oracle.svg";
import GoogleSvg from "/public/assets/shared/desktop/google.svg";
import NvidiaSvg from "/public/assets/shared/desktop/nvidia.svg";
import Form from "next/form";

import CirclePatternSvg from "/public/assets/shared/desktop/bg-pattern-circle.svg";
import CustomCheckbox from "../_components/CustomCheckbox";

const publicSans = Public_Sans({
  subsets: ["latin"],
  weight: ["400", "700"],
  style: ["normal"],
});

interface FormErrors {
  name?: string;
  email?: string;
  company?: string;
  title?: string;
  message?: string;
}

const Page = () => {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [company, setCompany] = useState<string>("");
  const [title, setTitle] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const [errors, setErrors] = useState<FormErrors>({});

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formErrors: FormErrors = {};

    if (!name) formErrors.name = "This field can't be empty";
    if (!email) formErrors.email = "This field can't be empty";
    if (!company) formErrors.company = "This field can't be empty";
    if (!title) formErrors.title = "This field can't be empty";
    if (!message) formErrors.message = "This field can't be empty";
    else if (!/\S+@\S+\.\S+/.test(email)) formErrors.email = "Email is invalid";

    setErrors(formErrors);

    if (Object.keys(formErrors).length === 0) {
      // Submit form data to the API
      console.log("Form submitted:", { name, email, company, title, message });
    }
  };

  return (
    <div>
      <CirclePatternSvg className="absolute top-[-55rem] right-[-15.5rem] z-[-1]" />
      <h1 className="max-w-[73rem] text-[5.6rem] text-[var(--secondary-blue-1)] mb-[4.3rem] mt-[8.2rem] leading-[5.6rem] tracking-[-0.431px]">
        Submit a help request and we&rsquo;ll get in touch shortly.
      </h1>

      <div className="flex justify-between items-center">
        <Form
          action="/"
          onSubmit={handleSubmit}
          className="flex flex-col w-[44.5rem] "
        >
          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            maxLength={40}
            className={`${
              publicSans.className
            } bg-transparent text-[1.5rem] pl-[2rem] pb-[1.6rem] leading-[2.5rem] border-b-[1.5px] ${
              errors.name
                ? "border-b-[rgba(255,0,0,0.5)] placeholder-[rgba(255,0,0,0.5)]"
                : "border-b-[var(--secondary-blue-1-opac2)]"
            } focus-visible:outline-none focus-visible:border-b-[var(--secondary-blue-1)] focus-visible:placeholder:text-[var(--secondary-blue-1)]`}
          />
          {errors.name && (
            <p
              className={`${publicSans.className} text-[rgba(255,0,0,0.5)]  text-[1.1rem] pl-[2rem] pt-[0.8rem]`}
            >
              {errors.name}
            </p>
          )}
          <input
            type="text"
            placeholder="Email Address"
            maxLength={40}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={`${
              publicSans.className
            } bg-transparent text-[1.5rem] pl-[2rem] pb-[1.6rem] pt-[2.4rem] leading-[2.5rem] border-b-[1.5px] ${
              errors.email
                ? "border-b-[rgba(255,0,0,0.5)] placeholder-[rgba(255,0,0,0.5)]"
                : "border-b-[var(--secondary-blue-1-opac2)]"
            }  focus-visible:outline-none focus-visible:border-b-[var(--secondary-blue-1)] focus-visible:placeholder:text-[var(--secondary-blue-1)]`}
          />
          {errors.email && (
            <p
              className={`${publicSans.className} text-[#f00] opacity-50 text-[1.1rem] pl-[2rem] pt-[0.8rem]`}
            >
              {errors.email}
            </p>
          )}
          <input
            type="text"
            maxLength={40}
            placeholder="Company Name"
            value={company}
            onChange={(e) => setCompany(e.target.value)}
            className={`${
              publicSans.className
            } bg-transparent text-[1.5rem] pl-[2rem] pb-[1.6rem] pt-[2.4rem] leading-[2.5rem] border-b-[1.5px] ${
              errors.company
                ? "border-b-[rgba(255,0,0,0.5)] placeholder-[rgba(255,0,0,0.5)]"
                : "border-b-[var(--secondary-blue-1-opac2)]"
            } focus-visible:outline-none focus-visible:border-b-[var(--secondary-blue-1)] focus-visible:placeholder:text-[var(--secondary-blue-1)]`}
          />
          {errors.company && (
            <p
              className={`${publicSans.className} text-[#f00] opacity-50 text-[1.1rem] pl-[2rem] pt-[0.8rem]`}
            >
              {errors.company}
            </p>
          )}
          <input
            type="text"
            maxLength={40}
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className={`${
              publicSans.className
            } bg-transparent text-[1.5rem] pl-[2rem] pb-[1.6rem] pt-[2.4rem] leading-[2.5rem] border-b-[1.5px] ${
              errors.title
                ? "border-b-[rgba(255,0,0,0.5)] placeholder-[rgba(255,0,0,0.5)]"
                : "border-b-[var(--secondary-blue-1-opac2)]"
            } focus-visible:outline-none focus-visible:border-b-[var(--secondary-blue-1)] focus-visible:placeholder:text-[var(--secondary-blue-1)]`}
          />
          {errors.title && (
            <p
              className={`${publicSans.className} text-[#f00] opacity-50 text-[1.1rem] pl-[2rem] pt-[0.8rem]`}
            >
              {errors.title}
            </p>
          )}
          <textarea
            placeholder="Message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className={`${
              publicSans.className
            } bg-transparent text-[1.5rem] pl-[2rem] pb-[6.3rem] pt-[2.4rem] leading-[2.5rem] border-b-[1.5px] ${
              errors.message
                ? "border-b-[rgba(255,0,0,0.5)] placeholder-[rgba(255,0,0,0.5)]"
                : "border-b-[var(--secondary-blue-1-opac2)]"
            } focus-visible:outline-none focus-visible:border-b-[var(--secondary-blue-1)] focus-visible:placeholder:text-[var(--secondary-blue-1)] break-words resize-none`}
          />
          {errors.message && (
            <p
              className={`${publicSans.className} text-[#f00] opacity-50 text-[1.1rem] pl-[2rem] pt-[0.8rem]`}
            >
              {errors.message}
            </p>
          )}

          <div className="mt-[2.4rem] flex justify-center items-center gap-[2.6rem]">
            <CustomCheckbox />

            <p
              className={`${publicSans.className} text-[1.5rem] text-[var(--secondary-blue-1)]`}
            >
              Stay up-to-date with company announcements and updates to our API
            </p>
          </div>

          <button
            type="submit"
            className={`${publicSans.className} mt-[2.4rem] self-start px-[5rem] py-[1.5rem] text-[1.5rem] font-bold rounded-[50rem] border-[0.15rem] border-[var(--secondary-blue-1)] tracking-[-0.115px] hover:text-[var(--primary-white)] hover:bg-[var(--secondary-blue-1)]`}
          >
            Submit
          </button>
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
    </div>
  );
};

export default Page;
