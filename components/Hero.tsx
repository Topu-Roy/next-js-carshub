"use client";
import Image from "next/image";
import CustomButton from "./CustomButton";

function Hero() {
  const handleScroll = () => {
    console.log("Button Clicked");
  };
  return (
    <section className="flex xl:flex-row flex-col gap-5 relative z-0 max-w-[1440px] mx-auto">
      <div className="flex-1 pt-36 sm:px-16 px-6">
        {/* Headline */}
        <h1 className="2xl:text-[72px] sm:text-[64px] text-[50px] font-extrabold">
          Find, Book Or Rent A Car Quickly And Easily!
        </h1>

        {/* Sub Heading */}
        <p className="text-[27px] text-black-100 font-light mt-5">
          Streamline your car rental experience with our effortless process.
        </p>

        <CustomButton
          title="Explore Cars"
          containerStyles="bg-blue-700 text-white mt-10 outline-none py-3 px-6 hover:bg-blue-800 "
          handleClick={handleScroll}
        />
      </div>

      {/* Hero Image */}
      <div className="xl:flex-[1.5] flex justify-end items-end w-full xl:h-screen">
        <div className="relative xl:w-full w-[90%] xl:h-full h-[590px] z-0">
          <Image src={"/hero.png"} alt="Hero" fill className="object-contain" />
        </div>
        <div className="absolute xl:-top-24 xl:-right-1/2 -right-1/4 bg-[url('/hero-bg.png')] bg-repeat-round -z-10 w-full xl:h-screen h-[590px] overflow-hidden" />
      </div>
    </section>
  );
}

export default Hero;
