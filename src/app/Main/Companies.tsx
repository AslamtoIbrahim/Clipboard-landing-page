import React from "react";
import { companies } from "./data";
import Image from "next/image";
const Companies = () => {
  return (
    <div className="w-full flex flex-col items-center gap-16 mt-12 lg:flex-row lg:justify-center lg:mt-20 xl:gap-42">
      {companies.map((company, index) => (
        <div key={index} >
          <Image
            src={company.logo}
            alt={company.title}
            width={135}
            height={56}
          />
        </div>
      ))}
    </div>
  );
};

export default Companies;
