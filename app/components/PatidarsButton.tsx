"use client";

import Image from "next/image";

type ButtonProps = {
  link: string;
};

const PatidarsButton = ({ link }: ButtonProps) => {
  function handlePatidarsButtonTap() {
    window.open(link, "_blank");
  }

  return (
    <button
      className="flex justify-start items-center -space-x-2 cursor-pointer hover:animate-pulse"
      onClick={handlePatidarsButtonTap}
    >
      <div className="h-14 w-14 bg-white rounded-full flex justify-center items-end">
        <Image
          src={"/icons/the-patidars-black.svg"}
          alt="thepatidars-logo"
          width={36}
          height={36}
        />
      </div>
      <div className="h-14 w-14 border border-white rounded-full flex justify-center items-center">
        <Image
          src={"/icons/arrow-up-right.svg"}
          alt="arrow-up-right"
          width={24}
          height={24}
        />
      </div>
    </button>
  );
};

export default PatidarsButton;
