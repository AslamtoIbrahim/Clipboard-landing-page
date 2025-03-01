import React from "react";
import laptop from "../../../public/source/images/image-computer.png";
import Image from "next/image";
import Features from "./Features";

const Track = () => {
  return (
    <section className="flex flex-col gap-16 md:px-8 lg:px-10 ">
      <div className="w-full flex flex-col items-center gap-6 text-center mt-16 xl:px-96">
        <h1 className="text-gray-600 xxsm:text-2xl xsm:text-3xl md:text-4xl xl:text-5xl font-semibold">
          Keep track of your snippets
        </h1>
        <p className="text-light-graysh lg:text-xl xl:text-2xl ">
          Clipboard instantly stores any item you copy in the cloud, meaning you
          can access your snippets immediately on all your devices. Our Mac and
          iOS apps will help you organize everything.
        </p>
      </div>
      <div className='flex flex-col gap-16 xl:gap-32 lg:flex-row lg:items-center '>
        <Image className='lg:w-[65rem] xl:w-[75rem] lg:h-auto lg:-ml-32 ' src={laptop} alt="laptop" />
        <Features />
      </div>
    </section>
  );
};

export default Track;
