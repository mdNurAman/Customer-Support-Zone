import React from "react";
import vector1 from "../assets/vector1.png";
const Status = () => {
  return (
    <div className="container mx-auto my-20 ">
      <div className="flex justify-between gap-5 text-white">
        {/* Card 1 */}
        <div className="relative overflow-hidden flex-1 text-center text-4xl font-bold py-14 bg-gradient-to-br from-[#632EE3] to-[#9F62F2] rounded-md">
          <div
            className="pointer-events-none absolute inset-y-0 left-0 w-1/2"
            style={{
              backgroundImage: `url(${vector1})`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "auto 100%",
            }}
          />
          <div
            className="pointer-events-none absolute inset-y-0 right-0 w-1/2"
            style={{
              backgroundImage: `url(${vector1})`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "auto 100%",
              transform: "scaleX(-1)",
            }}
          />
          <div className="relative z-10">
            <h1 className="text-2xl">In-Progress</h1>
            <h1 className="text-6xl">0</h1>
          </div>
        </div>

        <div className="relative overflow-hidden flex-1 text-center text-4xl font-bold py-14 bg-gradient-to-br from-[#54CF68] to-[#00827A] rounded-md">
          <div
            className="pointer-events-none absolute inset-y-0 left-0 w-1/2"
            style={{
              backgroundImage: `url(${vector1})`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "auto 100%",
            }}
          />
          <div
            className="pointer-events-none absolute inset-y-0 right-0 w-1/2"
            style={{
              backgroundImage: `url(${vector1})`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "auto 100%",
              transform: "scaleX(-1)",
            }}
          />
          <div className="relative z-10">
            <h1 className="text-2xl">Resolved</h1>
            <h1 className="text-6xl">0</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Status;
