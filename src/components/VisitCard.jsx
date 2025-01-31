import React, { useEffect } from "react";
import Details from "./Buttons/Details";
import { Link } from "react-router-dom";

const VisitCard = ({ id, visit }) => {
  useEffect(() => {
    if (visit && id) {
      sessionStorage.setItem(`visit${id}`, JSON.stringify(visit));
    }
  }, [visit, id]);

  return (
    <div
      id="child"
      className="w-full col-span-1 rounded-md h-64 bg-white px-4 py-4 flex flex-col justify-between"
    >
      <div className="flex flex-col gap-1 font-oxygen">
        <h1 className="truncate md:text-lg text-base  ">{`${visit?.visitor?.first_name} ${visit?.visitor?.last_name}`}</h1>
        <h1 className="font-bold text-3xl truncate">{`ID: ${visit?.visitor?.id_number}`}</h1>
        <h2 className="text-neutral-500 text-base truncate">{`Company: ${visit?.visitor?.company_name}`}</h2>
        <h2 className="text-neutral-500 text-base truncate">{`Visit Date: ${visit?.visit_date}`}</h2>
      </div>
      <div>
        <Link to={"/visits/" + id}>
          <Details />
        </Link>
      </div>
    </div>
  );
};

export default VisitCard;
