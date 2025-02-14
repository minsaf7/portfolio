"use client";

import { changeTheme } from "@/lib/utils";
import { usePathname } from "next/navigation";
import React, { useContext, useEffect, useState } from "react";
import { BsProjectorFill } from "react-icons/bs";
import { CgUser } from "react-icons/cg";
import { HiHome } from "react-icons/hi";

export function Header() {
  const [currentTime, setCurrentTime] = useState(new Date());

  const path = usePathname();

  const generatePathComponent = () => {
    switch (path) {
      case "/projects":
        return <BsProjectorFill />;

      case "/resume":
        return <CgUser />;
      default:
        return <HiHome />;
    }
  };

  const generateTitle = () => {
    switch (path) {
      case "/projects":
        return <p className="text-xs text-white">Projects</p>;

      case "/resume":
        return <p className="text-xs text-white">Resume</p>;
      default:
        return <p className="text-xs text-white">Home</p>;
    }
  };

  useEffect(() => {
    const timerID = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    // Cleanup the interval on component unmount
    return () => clearInterval(timerID);
  }, []);

  const formatDate = (date: any) => {
    const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    const months = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];
    const dayName = days[date.getDay()];
    const day = date.getDate();
    const month = months[date.getMonth()];
    return `${dayName} ${day} ${month}`;
  };

  const formatTime = (date: any) => {
    let hours = date.getHours();
    const minutes = date.getMinutes();
    const ampm = hours >= 12 ? "PM" : "AM";
    hours = hours % 12 || 12; // Convert to 12-hour format
    const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;
    return `${hours}.${formattedMinutes} ${ampm}`;
  };

  return (
    <header
      // className="flex flex-row backdrop-blur-sm bg-white/10  rounded-lg  border border-white/10"
      className={
        "flex flex-row justify-between bg-gray-800 bg-opacity-50  shadow-lg backdrop-blur-md max-sm:px-8 py-1 px-2"
      }
    >
      <div className="flex flex-row gap-3 items-center">
        {generatePathComponent()}
        {generateTitle()}
        <Example />
      </div>

      <div className="flex flex-row items-center text-xs text-white">
        <p
          className="px-2"
          style={{
            fontSize: 13,
          }}
        >
          {formatDate(currentTime)}
        </p>

        <p
          style={{
            fontSize: 13,
          }}
        >
          {formatTime(currentTime)}
        </p>
      </div>
    </header>
  );
}

import { Field, Select } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import clsx from "clsx";
import { useAppContext } from "@/context/appContext";

function Example() {
  const { theme, setTheme } = useAppContext();
  return (
    <div className="w-full max-w-md">
      <Field>
        <div className="relative">
          <Select
            className={clsx(
              " block w-full appearance-none border-none bg-transparent text-xs text-white",
              "focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-white/25",
              // Make the text of each option black on Windows
              "*:text-black"
            )}
            onChange={(e:any) => {
              changeTheme(e.target.value);
              setTheme(e.target.value);
            }}
          >
            <option value="theme1">Charcoal Blue </option>
            {/* <option value="theme1">Theme 1</option> */}
            <option value="theme2">Olive Green</option>
            {/* <option value="theme3">Dusty Rose</option> */}
            {/* <option value="theme4">Pale Gold</option> */}
            {/* <option value="theme5">Deep Blue</option> */}
            {/* <option value="theme6">Sunflower Yellow</option> */}
          </Select>
         
        </div>
      </Field>
    </div>
  );
}
