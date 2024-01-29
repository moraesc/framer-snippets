"use client";

import React from "react";
import { motion } from "framer-motion";

export default function Container({
  children,
  label,
}: {
  children: React.ReactNode;
  label: string;
}) {
  return (
    <div className="bg-[#1d1f20] rounded-[12px] w-[220px] h-[170px] flex justify-center items-center relative">
      {children}
      <p className="text-gray-300 text-[11px] absolute bottom-2">{label}</p>
    </div>
  );
}
