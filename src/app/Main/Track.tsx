import React from "react";
import laptop from "../../../public/source/images/image-computer.png";
import Image from "next/image";
import Features from "./Features";

const Track = () => {
  return (
    <section className="flex flex-col gap-16">
      <div className="w-full flex flex-col items-center gap-6 text-center mt-16">
        <h1 className="text-gray-600 xxsm:text-2xl xsm:text-3xl font-semibold">
          Keep track of your snippets
        </h1>
        <p className="text-light-graysh">
          Clipboard instantly stores any item you copy in the cloud, meaning you
          can access your snippets immediately on all your devices. Our Mac and
          iOS apps will help you organize everything.
        </p>
      </div>
      <Image src={laptop} alt="laptop" />
      <Features />
    </section>
  );
};

export default Track;
