"use client";
import React from "react";
import { FloatingDockDemo } from "../FloatingDock";
import { usePathname } from "next/navigation";

export const NavigationDock = () => {
  const pathname = usePathname();
  return (
    <div>
      <FloatingDockDemo pathName={pathname} />
    </div>
  );
};
