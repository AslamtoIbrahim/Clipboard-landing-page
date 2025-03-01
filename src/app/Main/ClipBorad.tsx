import React from "react";
import device from "../../../public/source/images/image-devices.png";
import Image from "next/image";

const ClipBorad = () => {
  return (
    <section className="flex flex-col items-center gap-16 md:px-4 lg:px-16">
      <div className="w-full flex flex-col items-center gap-6 text-center mt-16">
        <h1 className="text-gray-600 xxsm:text-2xl xsm:text-3xl md:text-4xl xl:text-5xl font-semibold">
          Access Clipboard anywhere
        </h1>
        <p className="text-light-graysh xl:text-2xl">
          Whether you’re on the go, or at your computer, you can access all your
          Clipboard snippets in a few simple clicks.
        </p>
      </div>
      <Image src={device} alt="device" />
    </section>
  );
};

export default ClipBorad;
