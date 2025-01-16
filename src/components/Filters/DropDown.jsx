import React, { useState } from "react";

const DropDown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState("Select");

  const handleClick = (event) => {
    setSelected(event.target.name);
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="text-cecOrange bg-white hover:bg-cecOrange hover:text-white focus:ring-cecOrange border border-cecOrange focus:outline-none font-medium rounded-lg text-sm w-[250px] px-5 py-2.5 text-center inline-flex items-center"
        type="button"
      >
        {selected}
        <svg
          className="w-4 h-4 ml-2"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>

      {isOpen && (
        <div className="z-10 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700">
          <ul className="py-2 text-sm text-gray-700 dark:text-gray-200">
            <li>
              <button
                name="Business"
                onClick={handleClick}
                className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
              >
                Business
              </button>
            </li>
            <li>
              <button
                name="Induction"
                onClick={handleClick}
                className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
              >
                Induction
              </button>
            </li>
            <li>
              <button
                name="Other"
                onClick={handleClick}
                className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
              >
                Other
              </button>
            </li>
            <li>
              <button
                name="Select"
                onClick={handleClick}
                className="block px-4 py-2 hover:bg-gray-100 text-neutral-600"
              >
                None
              </button>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default DropDown;
