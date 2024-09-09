"use client";

import Image from "next/image";

type ButtonProps = {
  link: string;
};

const InternetButton = ({ link }: ButtonProps) => {
  function handleInternetButtonTap() {
    window.open(link, "_blank");
  }

  return (
    <button
      className="flex justify-start items-center -space-x-2 cursor-pointer hover:animate-pulse"
      onClick={handleInternetButtonTap}
    >
      <div className="h-14 w-14 bg-white rounded-full flex justify-center items-center">
        <Image
          src={"/icons/globe-black.svg"}
          alt="github-icon"
          width={46}
          height={46}
        />
      </div>
      <div className="h-[52px] w-[52px] border border-white rounded-full flex justify-center items-center">
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

export default InternetButton;
