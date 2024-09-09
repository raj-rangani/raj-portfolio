"use client";

import Image from "next/image";

type ButtonProps = {
  link: string;
};

const GithubButton = ({ link }: ButtonProps) => {
  function handleGithubProfileTap() {
    window.open(link, "_blank");
  }

  return (
    <button
      className="flex justify-center items-center -space-x-2 cursor-pointer hover:animate-pulse"
      onClick={handleGithubProfileTap}
    >
      <Image
        src={"/icons/github-mark-white.svg"}
        alt="github-icon"
        width={56}
        height={56}
      />
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

export default GithubButton;
