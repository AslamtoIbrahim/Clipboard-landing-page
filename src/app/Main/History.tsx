import React from "react";
import Button from "./Button";

const History = () => {
  return (
    <div className="w-full text-center flex flex-col items-center  gap-8 md:gap-4 md:px-10 lg:gap-8 lg:px-16 xl:px-96 ">

      <h1 className="text-gray-600 xxsm:text-2xl xsm:text-3xl md:text-4xl font-semibold lg:text-5xl xl:text-6xl ">
        A history of everything you copy
      </h1>

      <p className="text-light-graysh md:text-xl lg:text-2xl xl:text-3xl">
        Clipboard allows you to track and organize everything you copy.
        Instantly access your clipboard on all your devices.
      </p>

      <div className='w-full flex flex-col items-center gap-8 md:flex-row md:px-8 md:mt-4 lg:px-16 xl:px-42'>
        <Button />
        <Button text="Download for Mac" styles="bg-light-blue shadB" />
      </div>

    </div>
  );
};

export default History;
