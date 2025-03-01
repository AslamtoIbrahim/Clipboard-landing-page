import React from "react";
import Button from "./Button";

const MacIos = () => {
  return (
    <div className="w-full text-center flex flex-col items-center gap-8  md:gap-4 md:px-10 lg:gap-8 lg:px-16 lg:mt-20 xl:px-96">

      <h1 className="text-gray-600 xxsm:text-2xl xsm:text-3xl font-semibold md:text-4xl lg:text-5xl xl:text-6xl">
        Clipboard for iOS and Mac OS
      </h1>

      <p className="text-light-graysh md:text-xl lg:text-2xl xl:text-3xl">
        Available for free on the App Store. Download for Mac or iOS, sync with
        iCloud and you’re ready to start adding to your clipboard.
      </p>

      <div className='w-full flex flex-col items-center gap-8 md:flex-row md:px-8 md:mt-4 lg:px-16 xl:px-42'>
        <Button />
        <Button text="Download for Mac" styles="bg-light-blue shadB" />
      </div>
    </div>
  );
};

export default MacIos;
