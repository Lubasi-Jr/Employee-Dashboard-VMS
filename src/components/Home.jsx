import React, { useState, useEffect } from "react";
import VisitCard from "./VisitCard";
import { Search } from "lucide-react";
import { Plus } from "lucide-react";
import DatePicker from "./Filters/DatePicker";
import DropDown from "./Filters/DropDown";
import axiosInstance from "../api/axiosInstance";
import { ClipLoader } from "react-spinners";

const Home = () => {
  const [allVisits, setVisits] = useState(null);
  const [loading, setLoading] = useState(true);

  const [datePicked, setDate] = useState("");
  const [purpose, setPurpose] = useState("");
  const [name, setName] = useState("");

  useEffect(() => {
    getVisits();
  }, []);

  async function getVisits() {
    setLoading(true);
    try {
      const response = await axiosInstance.get("/Visits");
      setVisits(response.data);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  }

  function handleDateChange(date) {
    setDate(date);
  }
  function handlePurposeChange(p) {
    setPurpose(p);
  }

  function searchForVisits() {
    console.log(`Date ${datePicked}`);
    //console.log(`Name ${name}`);
    console.log(`Purpose ${purpose}`);
  }

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
          <DatePicker handleDateChange={handleDateChange} />
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
          <DropDown handlePurposeChange={handlePurposeChange} />
        </div>
        {/* <div className="flex flex-col gap-0">
          <label htmlFor="" className="text-base">
            Name
          </label>
          <input
            onChange={(e) => {
              setName(e.target.value);
            }}
            placeholder="E.g Michael Kors"
            type="text"
            className="rounded-md focus:border-cecOrange focus:ring-cecOrange truncate w-[250px] mt-1"
          />
        </div> */}
        <div className="flex items-center justify-center gap-6">
          <button
            type="button"
            onClick={searchForVisits}
            className="text-white w-[40px] h-[40px] hover:text-cecOrange border border-cecOrange bg-cecOrange hover:bg-white font-sm rounded-full text-sm md:text-md lg:text-lg px-1 py-1 text-center me-2 mb-2 flex gap-1 justify-center items-center mt-7"
          >
            <Search size={30} />
          </button>
        </div>
        <h2 className="text-[25px] mt-8">OR</h2>
        <button
          onClick={getVisits}
          className="border border-cecOrange rounded-md px-2 py-2 w-[170px]  lg:w-[250px] whitespace-nowrap text-base mt-8 font-semibold text-center h-[41px]  text-cecOrange hover:text-white hover:bg-cecOrange"
        >
          Reset
        </button>
      </div>

      {loading ? (
        <div className="lg:w-1/2 w-full flex flex-col lg:flex-row lg:gap-9 gap-2 items-center justify-center px-4 py-2">
          <ClipLoader
            color="#AD7900"
            loading={loading}
            size={150}
            aria-label="Fetching Visits"
          />
        </div>
      ) : (
        <div className="rounded-md w-full h-full bg-[#F5F5F5] px-4 py-4 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4">
          {allVisits ? (
            allVisits.map((visit, index) => (
              <VisitCard key={index} id={visit?.visit_id} visit={visit} />
            ))
          ) : (
            <div className="col-span-1 md:col-span-3 lg:col-span-4 flex flex-col font-raleway ">
              <h1>No Visits that match this criteria</h1>
              <p className="text-md text-cecOrange font-raleway">
                Adjust filters and search again OR Reset
              </p>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Home;
