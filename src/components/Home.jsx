import React from "react";
import VisitCard from "./VisitCard";
import { Search } from "lucide-react";
import { Plus } from "lucide-react";
import DatePicker from "./Filters/DatePicker";
import DropDown from "./Filters/DropDown";

const Home = () => {
  return (
    <div className="flex flex-col items-center gap-3 justify-center text-3xl h-full bg-[#F5F5F5] md:pl-24 md:pt-8 px-20 pt-8 pb-28 md:pb-2">
      <div className="flex items-start justify-start">
        <h2 className="font-oxygen font-bold">Filter By:</h2>
      </div>
      <div
        id="flitration"
        className="rounded-md w-full h-auto bg-[#F5F5F5] px-4 py-4 flex  lg:flex-row flex-col items-start gap-5"
      >
        <div className="flex flex-col gap-2">
          <DatePicker />
        </div>
        <div className="flex flex-col gap-0">
          <label htmlFor="" className="text-base">
            Purpose
          </label>
          {/* <input
            placeholder="E.g Business"
            type="text"
            className="rounded-md focus:border-cecOrange focus:ring-cecOrange truncate w-[250px]"
          /> */}
          <DropDown />
        </div>
        <div className="flex flex-col gap-0">
          <label htmlFor="" className="text-base">
            Name
          </label>
          <input
            placeholder="E.g Michael Kors"
            type="text"
            className="rounded-md focus:border-cecOrange focus:ring-cecOrange truncate w-[250px] mt-1"
          />
        </div>
        <div className="flex items-center justify-center gap-6">
          <button
            type="button"
            className="text-white w-[40px] h-[40px] hover:text-cecOrange border border-cecOrange bg-cecOrange hover:bg-white font-sm rounded-full text-sm md:text-md lg:text-lg px-1 py-1 text-center me-2 mb-2 flex gap-1 justify-center items-center mt-7"
          >
            <Search size={30} />
          </button>
        </div>
      </div>
      <div className="rounded-md w-full h-full bg-[#F5F5F5] px-4 py-4 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4">
        <VisitCard id={1} />
      </div>
    </div>
  );
};

export default Home;
