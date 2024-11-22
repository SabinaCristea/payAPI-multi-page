// import Image from "next/image";

import Image from "next/image";

export default function Home() {
  return (
    <div className="relative">
      <svg
        width="780"
        height="780"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        className="absolute top-[-21.6rem] right-[-29.5rem] z-[-1]"
      >
        <defs>
          <circle id="a" cx="390" cy="390" r="390" />
          <circle id="b" cx="390" cy="390" r="390" />
        </defs>
        <g fill="#36536B" fillRule="evenodd" opacity=".15">
          <use xlinkHref="#a" />
          <use xlinkHref="#b" />
        </g>
      </svg>
      <Image
        src="/assets/home/desktop/illustration-phone-mockup.svg"
        width="419"
        height="660"
        alt="Phone mockup"
      />
    </div>
  );
}
