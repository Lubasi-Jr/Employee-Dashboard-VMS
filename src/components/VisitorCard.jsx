import React, { useEffect } from "react";
import Details from "./Buttons/Details";
import { Link } from "react-router-dom";

const VisitorCard = ({ id, visitor }) => {
  useEffect(() => {
    if (visitor && id) {
      sessionStorage.setItem(`visitor${id}`, JSON.stringify(visitor));
    }
  }, [visitor, id]);

  return (
    <div
      id="child"
      className="w-full col-span-1 rounded-md h-64 bg-white px-4 py-4 flex flex-col justify-between"
    >
      <div className="flex flex-col gap-1 font-oxygen">
        <h1 className="truncate md:text-lg text-base  ">{`${visitor?.first_name} ${visitor?.last_name}`}</h1>
        <h1 className="font-bold text-3xl truncate">{`ID: ${visitor?.id_number}`}</h1>
        <h1 className="font-bold text-xl truncate">{`Phone: ${visitor?.phone}`}</h1>
        <h2 className="text-neutral-500 text-base truncate">{`Company Name: ${visitor?.company_name}`}</h2>
      </div>
    </div>
  );
};

export default VisitorCard;
