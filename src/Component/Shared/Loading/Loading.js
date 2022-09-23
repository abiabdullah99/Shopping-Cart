import React from "react";
import spinner from "../../../Assets/Home/spinner.gif";
const Loading = () => {
  return (
    <div className="w-9/12 mx-auto flex justify-center">
      <img  src={spinner} alt="" />
    </div>
  );
};

export default Loading;
