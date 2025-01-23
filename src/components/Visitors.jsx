import React, { useState } from "react";
import VisitorCard from "./VisitorCard";
import { Search } from "lucide-react";
import { Plus } from "lucide-react";

const Visitors = () => {
  const [name, setName] = useState("");
  const [nrc, setNRC] = useState("");

  function searchForVisitors() {
    console.log(`Name ${name}`);
    console.log(`NRC ${nrc}`);
  }

  return (
    <div className="flex flex-col items-center gap-3 justify-center text-3xl h-full bg-[#F5F5F5] md:pl-24 md:pt-8 px-20 pt-8 pb-28 md:pb-2">
      <div className="flex items-start justify-start">
        <h2 className="font-oxygen font-bold">Search By:</h2>
      </div>
      <div className="rounded-md w-full h-auto bg-[#F5F5F5] px-4 py-4 flex flex-col lg:flex-row items-start justify-start gap-5">
        <div className="flex flex-col gap-2">
          <label htmlFor="" className="text-base">
            Name
          </label>
          <input
            placeholder="E.g Michael Musonda"
            onChange={(e) => {
              setName(e.target.value);
            }}
            type="text"
            className="rounded-md focus:border-cecOrange focus:ring-cecOrange truncate w-[250px]"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="" className="text-base">
            NRC
          </label>
          <input
            placeholder="E.g 34458/65/1"
            onChange={(e) => {
              setNRC(e.target.value);
            }}
            type="text"
            className="rounded-md focus:border-cecOrange focus:ring-cecOrange truncate w-[250px]"
          />
        </div>
        <div className="flex items-center justify-center gap-6">
          <button
            type="button"
            onClick={searchForVisitors}
            className="text-white w-[40px] h-[40px] hover:text-cecOrange border border-cecOrange bg-cecOrange hover:bg-white font-sm rounded-full text-sm md:text-md lg:text-lg px-1 py-1 text-center mt-8 flex gap-1 justify-center items-center"
          >
            <Search size={30} />
          </button>
        </div>
        <h2 className="text-[25px] mt-8">OR</h2>
        <button className="border border-cecOrange rounded-md px-2 py-2 w-[170px]  lg:w-[250px] whitespace-nowrap text-base mt-8 font-semibold text-center h-[41px]  text-cecOrange hover:text-white hover:bg-cecOrange">
          Reset
        </button>
      </div>
      <div className="rounded-md w-full h-full bg-[#F5F5F5] px-4 py-4 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4">
        <VisitorCard id={1} />
      </div>
    </div>
  );
};

export default Visitors;
