import React, { useState } from "react";
import { motion } from "motion/react";
import { ArrowLeft } from "lucide-react";
import { User } from "lucide-react";
import { LogOut } from "lucide-react";
import { Clock } from "lucide-react";
import { Menu } from "lucide-react";
import { Home } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const SideBar = () => {
  const [isClosed, setIsClosed] = useState(false);
  const location = useLocation();
  const isHomeActive =
    location.pathname.startsWith("/visits") || location.pathname === "/";

  const handleClose = () => {
    setIsClosed(!isClosed);
  };

  return (
    <>
      {/* Navbar for Laptop view */}
      <motion.nav
        initial={{ width: 300 }}
        animate={{ width: isClosed ? 75 : 300 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="hidden md:z-50 md:fixed md:flex md:flex-col md:gap-28 md:bg-cecOrange md:h-full md:px-8 md:py-8"
      >
        <div
          id="logo"
          className="h-28 w-28 flex items-center gap-28 justify-between"
        >
          <img
            src="/CEC_LOGO.png"
            alt="CEC Logo"
            className={`object-cover ${isClosed && "hidden"}`}
            width={100}
            height={100}
          />
          <div
            className={`cursor-pointer ${isClosed && "hidden"}`}
            onClick={handleClose}
          >
            <ArrowLeft className="text-white" />
          </div>
          <Menu
            size={50}
            className={`${isClosed ? "block" : "hidden"} cursor-pointer`}
            onClick={handleClose}
          />
        </div>

        <ul className="flex flex-col gap-[2vh]">
          <li>
            <Link to={"/"}>
              <div
                className={`flex gap-2 items-center justify-start rounded-md hover:bg-[#8B6200] px-1 py-1 cursor-pointer ${
                  isHomeActive ? "text-white" : "text-black"
                }`}
              >
                <Home
                  size={isClosed ? 30 : 20}
                  className={`${isClosed && "ml-2"}`}
                />
                <h2
                  className={`font-raleway font-semibold ${
                    isClosed && "hidden"
                  } `}
                >
                  Home
                </h2>
              </div>
            </Link>
          </li>
          <li>
            <Link to={"/visitor"}>
              <div
                className={`flex gap-2 items-center justify-start rounded-md hover:bg-[#8B6200] px-1 py-1 cursor-pointer ${
                  location.pathname.startsWith("/visitor")
                    ? "text-white"
                    : "text-black"
                }`}
              >
                <User
                  size={isClosed ? 30 : 20}
                  className={`${isClosed && "ml-2"}`}
                />
                <h2
                  className={`font-raleway font-semibold ${
                    isClosed && "hidden"
                  } `}
                >
                  Visitors
                </h2>
              </div>
            </Link>
          </li>
        </ul>

        <div className="flex gap-2 items-center justify-start rounded-md hover:bg-[#8B6200] px-1 py-1 cursor-pointer">
          <LogOut
            size={isClosed ? 30 : 20}
            className={`${isClosed && "ml-2"}`}
          />
          <h2 className={`font-raleway font-semibold ${isClosed && "hidden"} `}>
            Logout
          </h2>
        </div>
      </motion.nav>

      <nav className="md:hidden fixed z-50 bottom-0 py-4 px-4 bg-cecOrange w-full justify-around flex gap-2">
        <Link to={"/"}>
          <div
            className={`flex gap-1 flex-col items-center justify-center  rounded-md hover:bg-[#8B6200] px-1 py-1 cursor-pointer ${
              isHomeActive ? "text-white" : "text-black"
            }`}
          >
            <Home size={20} />
            <h2 className={`font-raleway font-semibold`}>Home</h2>
          </div>
        </Link>
        <Link to={"/visitor"}>
          <div
            className={`flex gap-1 flex-col items-center justify-center  rounded-md hover:bg-[#8B6200] px-1 py-1 cursor-pointer ${
              location.pathname.startsWith("/visitor")
                ? "text-white"
                : "text-black"
            }`}
          >
            <User size={20} />
            <h2 className={`font-raleway font-semibold text-wrap`}>Visitors</h2>
          </div>
        </Link>

        <div className="flex gap-1 flex-col items-center justify-center  rounded-md hover:bg-[#8B6200] px-1 py-1 cursor-pointer">
          <LogOut size={20} />
          <h2 className={`font-raleway font-semibold`}>Logout</h2>
        </div>
      </nav>
    </>
  );
};

export default SideBar;
