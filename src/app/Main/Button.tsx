import React from "react";

type prop = {
  text?: string;
  styles?: string;
};
const Button = ({ text = "Download for iOS", styles }: prop) => {
  return <button className={` ${styles ? styles : `bg-strong-cyan shadG `}
   py-3 rounded-full w-full text-white text-xl cursor-pointer hover:opacity-90 `}>{text}</button>;
};

export default Button;
