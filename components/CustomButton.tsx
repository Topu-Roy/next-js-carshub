"use client";

import { CustomButtonInterface } from "@/types";

function CustomButton({
  title,
  containerStyles,
  handleClick,
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
      <span className="flex-1">{title}</span>
    </button>
  );
}

export default CustomButton;
