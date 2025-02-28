import React from "react";
import Logo from "./Logo";
import History from "./History";
import Track from "./Track";
import ClipBorad from "./ClipBorad";
import SuperCharge from "./SuperCharge";
import Companies from "./Companies";
import MacIos from "./MacIos";

const Main = () => {
  return (
    <div className="bg-hero bg-no-repeat font-baij px-4 py-24  w-full h-full flex flex-col items-center gap-16 ">
      <Logo />
      <History />
      <Track />
      <ClipBorad />
      <SuperCharge />
      <Companies />
      <MacIos />
    </div>
  );
};

export default Main;
