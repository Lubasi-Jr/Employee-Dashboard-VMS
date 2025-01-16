import React from "react";
import { SquareUser } from "lucide-react";

const Details = () => {
  return (
    <button
      type="button"
      className="text-cecOrange hover:text-white border border-cecOrange bg-white hover:bg-cecOrange font-medium rounded-lg text-sm md:text-md lg:text-lg px-5 py-2.5 text-center me-2 mb-2 flex gap-1 justify-center items-center"
    >
      <SquareUser size={30} />
      <p>Details</p>
    </button>
  );
};

export default Details;
