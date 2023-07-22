"use client";
import React, { useState } from "react";
import SearchManufacturer from "./SearchManufacturer";

function SearchBar() {
  const handleSearch = () => {};
  const [searchManufacturer, setSearchManufacturer] = useState("");
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
      </div>
    </form>
  );
}

export default SearchBar;
