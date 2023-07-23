"use client";

import { CustomButtonInterface } from "@/types";
import Image from "next/image";

function CustomButton({
  title,
  containerStyles,
  handleClick,
  rightIcon,
  textStyle,
}: CustomButtonInterface) {
  return (
    <button
      disabled={false}
      type="button"
      className={`${containerStyles} flex flex-row rounded-full justify-center items-center`}
      onClick={() => {
        () => handleClick;
      }}
    >
      <span className={`flex-1 ${textStyle}`}>{title}</span>

      {rightIcon && (
        <div className="relative mr-4 w-6 h-6">
          <Image src={rightIcon} alt="" fill className="object-contain" />
        </div>
      )}
    </button>
  );
}

export default CustomButton;
