import React from "react";
import Logo from "../assets/img/logo.png";

const Loader = () => {
  return (
    <div className="w-full h-[100vh] max-w-full m-0 flex justify-center items-center text-center overflow-hidden bg-primary">
      <div
        id="loading"
        className="w-full h-[100vh] max-w-full m-0 flex justify-center items-center text-center overflow-hidden"
      >
        <img src={Logo} alt="logo" className="w-[100px] h-[100px]" />
      </div>
    </div>
  );
};

export default Loader;
