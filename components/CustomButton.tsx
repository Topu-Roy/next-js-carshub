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
      className={`${containerStyles} flex flex-row relative justify-center items-center py-3 px-6 outline-none`}
      onClick={() => {
        () => handleClick;
      }}
    >
      <span className="flex-1">{title}</span>
    </button>
  );
}

export default CustomButton;
