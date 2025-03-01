import React from "react";
import { links } from "../Main/data";
const Links = () => {
  // this array for large screen links order
  // const lgOrder = [1, 4, 2, 3, 5];
  const lgOrder = [1, 2, 3, 4, 5];
  return (
    <div
      className="w-full flex flex-col items-center text-center gap-4 font-baij lg:w-fit 
    lg:flex-row lg:flex-wrap lg:px-32 lg:gap-6 whitespace-nowrap xl:gap-12 xl:w-1/2 xl:px-40   "
    >
      <a href="#" className="link  lg:order-1">
        FAQs
      </a>
      <a href="#" className="link  lg:order-2">
        Privacy Policy
      </a>
      <a href="#" className="link  lg:order-3">
        Install Guide
      </a>

      <a href="#" className="link  lg:order-4">
        Contact Us
      </a>
      <a href="#" className="link  lg:order-5">
        Press Kit
      </a>
    </div>
  );
};

export default Links;
