import { useEffect } from "react";

const DatePicker = () => {
  useEffect(() => {
    const datepickerEl = document.getElementById("datepicker");
    const datepicker = new Datepicker(datepickerEl, {
      autohide: true,
      format: "yyyy-mm-dd",
    });
  }, []);

  return (
    <div className="relative w-64">
      <label
        htmlFor="datepicker"
        className="block text-base font-medium text-gray-700 "
      >
        Date
      </label>
      <div className="relative mt-1">
        <input
          type="text"
          id="datepicker"
          className="bg-gray-50 border  text-gray-900 text-sm rounded-lg focus:ring-cecOrange focus:border-cecOrange block w-full pl-10 p-2.5    "
          placeholder="Select a date"
        />
        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
          <svg
            className="w-5 h-5 text-gray-500 dark:text-gray-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M8 7V3m0 0H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2h-2m-4 0v4M4 11h16m-7 4h3m-3 4h3"
            ></path>
          </svg>
        </div>
      </div>
    </div>
  );
};

export default DatePicker;
