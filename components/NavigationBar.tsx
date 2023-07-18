import React from "react";
import CustomButton from "./CustomButton";
import Image from "next/image";
import Link from "next/link";

function NavigationBar() {
  return (
    <header className="w-full absolute z-10">
      <nav className="max-w-[1440px] mx-auto flex items-center justify-between sm:px-16 px-6 py-4">
        <Link href={"/"} className="flex items-center justify-center">
          <Image
            src={"/logo.svg"}
            width={118}
            height={18}
            className="object-contain"
            alt="CarsHub"
          />
        </Link>

        <CustomButton
          title="Sign In"
          containerStyles="bg-transparent text-black xl:text-white font-normal ring-1 ring-gray-800 xl:ring-white py-1 px-4 hover:ring-2 hover:ring-blue-700"
        />
      </nav>
    </header>
  );
}

export default NavigationBar;
