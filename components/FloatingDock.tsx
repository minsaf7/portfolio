import React from "react";
import { FloatingDock } from "@/components/ui/floating-dock";
import {
  IconBrandGithub,
  IconBrandX,
  IconExchange,
  IconHome,
  IconNewSection,
  IconTerminal2,
  IconUser,
} from "@tabler/icons-react";
import Image from "next/image";

export function FloatingDockDemo({pathName}:{pathName:string}) {
  const links = [
    {
      title: "Projects",
      icon: (
        <IconTerminal2 
        className="h-full w-full text-neutral-500 dark:text-neutral-300"
        // className={`${pathName === '/projects' && 'text-red-500'} h-full`}
         />
      ),
      href: "/projects",
    },
    {
      title: "Home",
      icon: (
        <IconHome className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "/",
    },
    {
      title: "Resume",
      icon: (
        <IconUser className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "/resume",
    },
    
    // {
    //   title: "LinkedIn",
    //   icon: (
    //     <IconLinkedIn />
    //   ),
    //   href: "https://www.linkedin.com/in/mohamed-minsaaf/",
    // },

    // {
    //   title: "Twitter",
    //   icon: (
    //     <IconBrandX className="h-full w-full text-neutral-500 dark:text-neutral-300" />
    //   ),
    //   href: "#",
    // },
    // {
    //   title: "GitHub",
    //   icon: (
    //     <IconBrandGithub className="h-full w-full text-neutral-500 dark:text-neutral-300" />
    //   ),
    //   href: "#",
    // },
  ];
  return (
    <div className="flex items-end justify-center  w-full">
      <FloatingDock
        mobileClassName="translate-y-20 " // only for demo, remove for production
        items={links}
        // pathName={pathName}
      />
    </div>
  );
}

const IconLinkedIn = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="icon icon-tabler icons-tabler-outline icon-tabler-brand-linkedin"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M8 11v5" />
      <path d="M8 8v.01" />
      <path d="M12 16v-5" />
      <path d="M16 16v-3a2 2 0 1 0 -4 0" />
      <path d="M3 7a4 4 0 0 1 4 -4h10a4 4 0 0 1 4 4v10a4 4 0 0 1 -4 4h-10a4 4 0 0 1 -4 -4z" />
    </svg>
  );
};
