import React from "react";
import Button from "./Button";

const History = () => {
  return (
    <div className="w-full flex flex-col items-center gap-8 text-center">
      <h1 className="text-gray-600 xxsm:text-2xl xsm:text-3xl font-semibold ">
        A history of everything you copy
      </h1>

      <p className="text-light-graysh">
        Clipboard allows you to track and organize everything you copy.
        Instantly access your clipboard on all your devices.
      </p>

      <Button />
      <Button text="Download for Mac" styles="bg-light-blue shadB" />
    </div>
  );
};

export default History;
