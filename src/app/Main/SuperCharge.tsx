import React from "react";
import ClipFeatures from "./ClipFeatures";

const SuperCharge = () => {
  return (
    <div className="w-full flex flex-col items-center gap-8 text-center mt-12">
      <h1 className="text-gray-600 xxsm:text-2xl xsm:text-3xl font-semibold">
        Supercharge your workflow
      </h1>
      <p className="text-light-graysh">
        We’ve got the tools to boost your productivity.
      </p>
      <ClipFeatures />
    </div>
  );
};

export default SuperCharge;
