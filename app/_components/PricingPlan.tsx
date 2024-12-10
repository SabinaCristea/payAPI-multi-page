import { Public_Sans } from "next/font/google";
import CheckedSvg from "./../../public/assets/shared/desktop/check.svg";

const publicSans = Public_Sans({
  subsets: ["latin"],
  weight: ["400", "700"],
  style: ["normal"],
});

function PricingPlan({
  isInvChecked,
  isAsChecked,
  isLiChecked,
  isIncChecked,
  title,
  subtitle,
  price,
}: {
  isInvChecked: boolean;
  isAsChecked: boolean;
  isLiChecked: boolean;
  isIncChecked: boolean;
  title: string;
  subtitle: string;
  price: string;
}) {
  return (
    <div className="text-[var(--secondary-blue-1)] flex flex-col max-w-[35rem]">
      <h2 className="text-[var(--primary-pink)] text-[3.2rem] mb-[1.6rem]">
        {title}
      </h2>
      <p
        className={`${publicSans.className} text-[1.5rem] text-[var(--secondary-blue-3)] leading-[2.8rem]`}
      >
        {subtitle}
      </p>
      <span className="text-[5.6rem] leading-[7.2rem] tracking-[-0.431px] mb-[2.4rem]">
        ${price}
      </span>
      <div
        className="max-w-[35rem] h-[0.1rem] bg-[var(--secondary-blue-1)] opacity-[0.25] mb-[2.4rem]
      "
      ></div>

      <ul
        className={`${publicSans.className} text-[1.6rem] flex flex-col gap-[0.8rem]`}
      >
        <li className="flex items-center gap-[2.4rem] leading-[2.8rem]">
          <CheckedSvg />
          Transactions
        </li>
        <li className="flex items-center gap-[2.4rem] leading-[2.8rem]">
          <CheckedSvg />
          Auth
        </li>
        <li className="flex items-center gap-[2.4rem] leading-[2.8rem]">
          <CheckedSvg />
          Identity
        </li>
        <li
          className={`${
            isInvChecked
              ? ""
              : "text-[var(--secondary-blue-1)] opacity-[0.5] pl-[3.6rem]"
          } flex items-center gap-[2.4rem] leading-[2.8rem]`}
        >
          <CheckedSvg className={isInvChecked ? "" : "hidden"} />
          Investments
        </li>
        <li
          className={`${
            isAsChecked
              ? ""
              : "text-[var(--secondary-blue-1)] opacity-[0.5] pl-[3.6rem]"
          } flex items-center gap-[2.4rem] leading-[2.8rem]`}
        >
          <CheckedSvg className={isAsChecked ? "" : "hidden"} />
          Assets
        </li>
        <li
          className={`${
            isLiChecked
              ? ""
              : "text-[var(--secondary-blue-1)] opacity-[0.5] pl-[3.6rem]"
          } flex items-center gap-[2.4rem] leading-[2.8rem]`}
        >
          <CheckedSvg className={isLiChecked ? "" : "hidden"} />
          Liabilities
        </li>
        <li
          className={`${
            isIncChecked
              ? ""
              : "text-[var(--secondary-blue-1)] opacity-[0.5] pl-[3.6rem]"
          } flex items-center gap-[2.4rem] leading-[2.8rem]`}
        >
          <CheckedSvg className={isIncChecked ? "" : "hidden"} />
          Income
        </li>

        <div className="w-[35rem] h-[0.1rem] bg-[var(--secondary-blue-1)] opacity-[0.25] mt-[2.4rem] mb-[2.4rem]"></div>

        <button className="flex self-start px-[2.8rem] py-[1.5rem] text-[1.5rem] font-bold rounded-[50rem] border-[0.15rem] border-[var(--secondary-blue-1)] tracking-[-0.115px] hover:text-[var(--primary-white)] hover:bg-[var(--secondary-blue-1)]">
          Request Access
        </button>
      </ul>
    </div>
  );
}

export default PricingPlan;
