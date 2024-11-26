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
}: {
  isInvChecked: boolean;
  isAsChecked: boolean;
  isLiChecked: boolean;
  isIncChecked: boolean;
}) {
  return (
    <div>
      <h2></h2>
      <p></p>
      <span></span>
      <div></div>

      <ul
        className={`${publicSans.className} text-[1.6rem] flex flex-col gap-[0.8rem]`}
      >
        <li className="flex items-center gap-[2.4rem]">
          <CheckedSvg />
          Transactions
        </li>
        <li className="flex items-center gap-[2.4rem]">
          <CheckedSvg />
          Auth
        </li>
        <li className="flex items-center gap-[2.4rem]">
          <CheckedSvg />
          Identity
        </li>
        <li className="flex items-center gap-[2.4rem]">
          <CheckedSvg className={isInvChecked ? "" : "hidden"} />
          Investments
        </li>
        <li className="flex items-center gap-[2.4rem]">
          <CheckedSvg className={isAsChecked ? "" : "hidden"} />
          Assets
        </li>
        <li className="flex items-center gap-[2.4rem]">
          <CheckedSvg className={isLiChecked ? "" : "hidden"} />
          Liabilities
        </li>
        <li className="flex items-center gap-[2.4rem]">
          <CheckedSvg className={isIncChecked ? "" : "hidden"} />
          Income
        </li>

        <div></div>

        <button></button>
      </ul>
    </div>
  );
}

export default PricingPlan;
