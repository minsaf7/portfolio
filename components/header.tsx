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
            onChange={(e) => {
              changeTheme(e.target.value);
              setTheme(e.target.value);
            }}
          >
            <option value="theme1">Charcoal Blue </option>
            {/* <option value="theme1">Theme 1</option> */}
            <option value="theme2">Olive Green</option>
            {/* <option value="theme3">Dusty Rose</option> */}
            <option value="theme4">TPale Gold</option>
            {/* <option value="theme5">Deep Blue</option> */}
            {/* <option value="theme6">Sunflower Yellow</option> */}
          </Select>
          {/* <ChevronDownIcon
            className="group pointer-events-none absolute top-2.5 right-2.5 size-4 fill-white/60"
            aria-hidden="true"
          /> */}
        </div>
      </Field>
    </div>
  );
}

// import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
// import {
//   ArchiveBoxXMarkIcon,
//   PencilIcon,
//   Square2StackIcon,
//   TrashIcon,
// } from "@heroicons/react/16/solid";

// export default function ExampleTheme() {
//   return (
//     <div className="fixed top-24 w-52 text-right">
//       <Menu __demoMode>
//         <MenuButton className="inline-flex items-center gap-2 rounded-md bg-gray-800 py-1.5 px-3 text-sm/6 font-semibold text-white shadow-inner shadow-white/10 focus:outline-none data-[hover]:bg-gray-700 data-[open]:bg-gray-700 data-[focus]:outline-1 data-[focus]:outline-white">
//           Options
//           <ChevronDownIcon className="size-4 fill-white/60" />
//         </MenuButton>

//         <MenuItems
//           transition
//           anchor="bottom end"
//           className="w-52 origin-top-right rounded-xl border border-white/5 bg-white/5 p-1 text-sm/6 text-white transition duration-100 ease-out [--anchor-gap:var(--spacing-1)] focus:outline-none data-[closed]:scale-95 data-[closed]:opacity-0"
//         >
//           <MenuItem>
//             <button className="group flex w-full items-center gap-2 rounded-lg py-1.5 px-3 data-[focus]:bg-white/10">
//               <PencilIcon className="size-4 fill-white/30" />
//               Edit
//               <kbd className="ml-auto hidden font-sans text-xs text-white/50 group-data-[focus]:inline">
//                 ⌘E
//               </kbd>
//             </button>
//           </MenuItem>
//           <MenuItem>
//             <button className="group flex w-full items-center gap-2 rounded-lg py-1.5 px-3 data-[focus]:bg-white/10">
//               <Square2StackIcon className="size-4 fill-white/30" />
//               Duplicate
//               <kbd className="ml-auto hidden font-sans text-xs text-white/50 group-data-[focus]:inline">
//                 ⌘D
//               </kbd>
//             </button>
//           </MenuItem>
//           <div className="my-1 h-px bg-white/5" />
//           <MenuItem>
//             <button className="group flex w-full items-center gap-2 rounded-lg py-1.5 px-3 data-[focus]:bg-white/10">
//               <ArchiveBoxXMarkIcon className="size-4 fill-white/30" />
//               Archive
//               <kbd className="ml-auto hidden font-sans text-xs text-white/50 group-data-[focus]:inline">
//                 ⌘A
//               </kbd>
//             </button>
//           </MenuItem>
//           <MenuItem>
//             <button className="group flex w-full items-center gap-2 rounded-lg py-1.5 px-3 data-[focus]:bg-white/10">
//               <TrashIcon className="size-4 fill-white/30" />
//               Delete
//               <kbd className="ml-auto hidden font-sans text-xs text-white/50 group-data-[focus]:inline">
//                 ⌘D
//               </kbd>
//             </button>
//           </MenuItem>
//         </MenuItems>
//       </Menu>
//     </div>
//   );
// }

// components/FontSelector.tsx

const fonts = [
  { name: "Inter", value: "font-inter" },
  { name: "Roboto", value: "font-roboto" },
  { name: "Open Sans", value: "font-open-sans" },
  { name: "Lato", value: "font-lato" },
];

export default function FontSelector() {
  const [selectedFont, setSelectedFont] = useState(fonts[0].value);

  const handleFontChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedFont(event.target.value);
    document.documentElement.classList.remove(
      ...fonts.map((font) => font.value)
    );
    document.documentElement.classList.add(event.target.value);
  };

  return (
    <select
      value={selectedFont}
      onChange={handleFontChange}
      className="p-2 border rounded"
    >
      {fonts.map((font) => (
        <option key={font.value} value={font.value}>
          {font.name}
        </option>
      ))}
    </select>
  );
}
