import React from "react";
import Button from "./Button";

const MacIos = () => {
  return (
    <div className="w-full flex flex-col items-center gap-8 text-center">
      <h1 className="text-gray-600 xxsm:text-2xl xsm:text-3xl font-semibold ">
        Clipboard for iOS and Mac OS
      </h1>

      <p className="text-light-graysh">
        Available for free on the App Store. Download for Mac or iOS, sync with
        iCloud and you’re ready to start adding to your clipboard.
      </p>

      <Button />
      <Button text="Download for Mac" styles="bg-light-blue shadB" />
    </div>
  );
};

export default MacIos;
