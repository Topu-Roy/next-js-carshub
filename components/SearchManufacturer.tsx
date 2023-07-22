"use client";
import { manufacturers } from "@/constants";
import { SearchManufacturerProps } from "@/types";
import { Combobox, Transition } from "@headlessui/react";
import Image from "next/image";
import React, { Fragment, useState } from "react";

function SearchManufacturer({
  manufacturer,
  setManufacturer,
}: SearchManufacturerProps) {
  const [query, setQuery] = useState("");

  const filteredManufacturer =
    query == ""
      ? manufacturers
      : manufacturers.filter((item) => {
          return item
            .toLocaleLowerCase()
            .replace(/\s+/g, " ")
            .includes(query.toLowerCase().replace(/\s+/g, " "));
        });

  return (
    <div className="flex-1 max-sm:w-full flex justify-start items-center">
      <Combobox>
        <div className="relative w-full">
          <Combobox.Button className={"absolute top-[14px]"}>
            <Image
              src={"/car-logo.svg"}
              width={20}
              height={20}
              className="ml-4"
              alt="car logo"
            />
          </Combobox.Button>

          <Combobox.Input
            className="w-full h-[48px] pl-12 p-4 rounded-l-full max-sm: rounded-full bg-light-white outline-none cursor-pointer text-sm"
            placeholder="Volkswagen"
            defaultValue={manufacturer}
            onChange={(e) => setQuery(e.target.value)}
          />

          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
            afterLeave={() => {
              setQuery("");
            }}
          />

          <Combobox.Options>
            {filteredManufacturer.map((item) => (
              <Combobox.Option
                value={item}
                key={item}
                className={({ active }) =>
                  `relative cursor-default select-none py-2 pl-10 pr-4
                     ${active ? "bg-indigo-700 text-white" : "text-gray-900"}
                    `
                }
              >
                {item}
              </Combobox.Option>
            ))}
          </Combobox.Options>
        </div>
      </Combobox>
    </div>
  );
}

export default SearchManufacturer;
