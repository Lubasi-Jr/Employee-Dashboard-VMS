import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import BackButton from "./Buttons/BackButton";
import { DoorOpen } from "lucide-react";

const VisitDetails = () => {
  const { visitId } = useParams();
  return (
    <div className="flex items-center justify-center text-3xl h-full bg-[#F5F5F5] md:pl-44 md:pt-8 px-20 pt-8 pb-28 md:pb-2">
      <div className="rounded-md w-full h-full bg-white px-4 py-4 flex flex-col gap-5">
        <BackButton backTo="/" />
        <div
          id="main-details"
          className="flex items-center justify-center flex-col gap-1 text-center mb-8 font-oxygen"
        >
          <h1 className="truncate md:text-lg text-base  ">Phil Foden</h1>
          <h1 className="font-bold text-3xl truncate">33456/65/1</h1>
          <h2 className="text-neutral-500 text-base truncate">ABSA Bank Ltd</h2>
        </div>
        <div
          id="generall-info"
          className="flex flex-col gap-1 items-start justify-start mb-16 font-oxygen"
        >
          <h1 className="truncate md:text-lg text-base  font-bold ">
            Visit Date:{" "}
            <span className="text-neutral-500 text-base truncate font-normal">
              03/01/2025
            </span>
          </h1>
          <h1 className="truncate md:text-lg text-base  font-bold ">
            PhoneNo:{" "}
            <span className="text-neutral-500 text-base truncate font-normal">
              +260 78845321
            </span>
          </h1>

          <h1 className="truncate md:text-lg text-base  font-bold ">
            Purpose:{" "}
            <span className="text-neutral-500 text-base truncate font-normal">
              Business
            </span>
          </h1>

          <h1 className="truncate md:text-lg text-base  font-bold ">
            Time-In:{" "}
            <span className="text-neutral-500 text-base truncate font-normal">
              09:40
            </span>
          </h1>
          <h1 className="truncate md:text-lg text-base  font-bold ">
            Time-Out:{" "}
            <span className="text-neutral-500 text-base truncate font-normal">
              N/A
            </span>
          </h1>
        </div>
        <button
          type="button"
          className="text-cecRed w-[250px] hover:text-white border border-cecRed bg-white hover:bg-cecRed font-medium rounded-lg text-sm md:text-md lg:text-lg px-5 py-2.5 text-center me-2 mb-2 flex gap-1 justify-center items-center"
        >
          <DoorOpen size={30} />
          <p>Check-out</p>
        </button>
      </div>
    </div>
  );
};

export default VisitDetails;
