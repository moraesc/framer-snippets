"use client";

import Image from "next/image";
import React, { useState } from "react";
import reactElementToJSXString from "react-element-to-jsx-string";
import { motion } from "framer-motion";

export default function Container({
  children,
  label,
}: {
  children: React.ReactNode;
  label: string;
}) {
  const [copied, setCopied] = useState<boolean>(false);

  const copyCode = ({ children }: { children: React.ReactNode }) => {
    const codeAsString = reactElementToJSXString(children);

    // reactElementToJSXString converts motion.div to MotionComponent
    // So this code snippet can be easily used in other codebases we
    // should replace MotionComponent with motion.div
    const formattedString = codeAsString.replace(
      "MotionComponent",
      "motion.div"
    );

    navigator.clipboard.writeText(formattedString);
    setCopied(true);

    setTimeout(() => {
      setCopied(false);
    }, 1000);
  };

  return (
    <motion.div
      className="bg-[#1d1f20] rounded-[12px] w-[220px] h-[170px] flex justify-center items-center relative shadow-lg"
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { type: "spring" },
      }}
      exit={{
        opacity: 0,
      }}
      layout
    >
      <div
        className="absolute right-4 top-4 hover:cursor-pointer"
        onClick={() => (children ? copyCode({ children }) : null)}
      >
        {!copied && (
          <Image
            src="/static/images/copy.png"
            alt="copy"
            width={16}
            height={14}
          />
        )}
        {copied === true && (
          <Image
            src="/static/images/check.png"
            alt="check"
            width={16}
            height={14}
          />
        )}
      </div>
      {children}
      <p className="text-gray-300 text-[11px] absolute bottom-2">{label}</p>
    </motion.div>
  );
}
