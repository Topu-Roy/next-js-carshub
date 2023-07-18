import { footerLinks } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import React from "react";

function Footer() {
  return (
    <footer className="flex flex-col text-gray-600 mt-5 border-t border-gray-200">
      <div className="flex max-md:flex-col 2xl:min-w-[1440px] 2xl:mx-auto flex-wrap items-start justify-between gap-5 sm:px-16 px-6 py-10">
        <div className="flex flex-col justify-start items-start gap-6">
          <Image
            src={"/logo.svg"}
            alt="CarsHub"
            width={118}
            height={18}
            className="object-contain"
          />
          <p className="text-base text-gray-700">
            CarsHub 2023 <br />
            All Rights Reserved &copy;
          </p>
        </div>

        {/* Footer Links */}
        <div className="flex-1 w-full flex md:justify-end flex-wrap max-md:mt-10 gap-20">
          {footerLinks.map((link) => (
            <div className="flex flex-col gap-6 text-lg min-w-[170px]">
              <h3 className="font-bold">{link.title}</h3>
              {link.links.map((item) => (
                <Link
                  key={item.title}
                  href={item.url}
                  className="text-gray-500 text-base"
                >
                  {item.title}
                </Link>
              ))}
            </div>
          ))}
        </div>
      </div>

      <div className="flex 2xl:min-w-[1440px] 2xl:mx-auto justify-between items-center flex-wrap mt-10 border-t border-r-gray-100 sm:px-16 px-6 py-10">
        <p>@2023 CarsHub. All Rights Reserved.</p>
        <div className="flex-1 flex sm:justify-end justify-center max-sm:mt-4 gap-10">
          <Link href={"/"} className="text-gray-500">
            Privacy Policy
          </Link>
          <Link href={"/"} className="text-gray-500">
            Terms & Conditions
          </Link>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
