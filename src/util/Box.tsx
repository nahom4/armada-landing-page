import React from "react";

export const Box = (): JSX.Element => {
  return (
    <div className="w-full max-w-[386px] h-auto" style={{ paddingBottom: '112%' }}> {/* Adjust the padding-bottom value to control the aspect ratio */}
      <div className="relative w-full h-full">
        <div className="absolute w-full h-full top-0 left-0 bg-white rounded-lg border border-black" style={{ transform: 'scale(0.97)' }} />
        <div className="absolute w-full h-full bottom-0 right-0 bg-white rounded-lg border border-black" style={{ transform: 'translate(3.4%, 3.4%)' }} />
      </div>
    </div>
  );
};
