"use client";
import React, { useState } from "react";
import SearchManufacturer from "./SearchManufacturer";
import Image from "next/image";
import { manufacturers } from "@/constants";
import { useRouter } from "next/navigation";

const SearchButton = ({ otherClass }: { otherClass: string }) => (
  <button type="submit" className={`-ml-3 z-10 ${otherClass}`}>
    <Image
      alt=""
      src={"/magnifying-glass.svg"}
      height={40}
      width={40}
      className="object-contain"
    />
  </button>
);

function SearchBar() {
  const [searchManufacturer, setSearchManufacturer] = useState("");
  const [model, setModel] = useState("");
  const router = useRouter();

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (searchManufacturer === "" || model === "") {
      return alert("Please fill in the search input field");
    }

    updateFormParams(model.toLowerCase(), searchManufacturer.toLowerCase());
  };

  const updateFormParams = (model: string, manufacturer: string) => {
    const searchParams = new URLSearchParams(window.location.search);

    if (model) {
      searchParams.set("model", model);
    } else {
      searchParams.delete(manufacturer);
    }

    const newPathName = `${
      window.location.pathname
    }?${searchParams.toString()}`;

    router.push(newPathName);
  };

  return (
    <form
      onSubmit={handleSearch}
      className="flex items-center justify-start max-sm:flex-col w-full relative max-sm:gap-4 max-w-3xl"
    >
      <div className="flex-1 max-sm: w-full flex justify-start items-center relative">
        <SearchManufacturer
          setManufacturer={setSearchManufacturer}
          manufacturer={searchManufacturer}
        />
        <SearchButton otherClass={"sm:hidden"} />
      </div>
      <div className="flex-1 max-sm:w-full flex justify-start items-center relative">
        <Image
          src={"/model-icon.png"}
          alt=""
          height={25}
          width={25}
          className="absolute w-[20px] h-[20px] ml-4"
        />
        <input
          type="text"
          name="model"
          value={model}
          onChange={(e) => setModel(e.target.value)}
          placeholder="Tiguan"
          className="w-full h-[48px] pl-12 p-4 bg-light-white rounded-r-full max-sm:rounded-full outline-none cursor-pointer text-sm"
        />
        <SearchButton otherClass="sm:hidden" />
      </div>
      <SearchButton otherClass="max-sm:hidden" />
    </form>
  );
}

export default SearchBar;
