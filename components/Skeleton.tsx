import React from "react";

export const Skeleton = () => {
  return (
    <div className="px-8 animate-pulse">
      <div className="bg-[#ebecf0] rounded-[22px] w-screen h-[300px] mx-12" />
      <div className="bg-[#ebecf0] rounded-[22px] w-screen h-[40px] mt-8 mx-12" />
      <div className="bg-[#ebecf0] rounded-[22px] w-screen h-[20px] mt-8 mx-12" />
      <div className="bg-[#ebecf0] rounded-[22px] w-screen h-[20px] mt-4 mx-12" />
    </div>
  );
};

export default Skeleton;
