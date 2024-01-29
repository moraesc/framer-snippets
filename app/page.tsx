"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import "./globals.css";
import Container from "./Container";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col gap-12 md:gap-24 items-center pb-24 py-12 lg:p-24">
      <div className="z-10 max-w-5xl flex w-full align-center items-center justify-between font-mono text-sm lg:flex">
        <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
          Framer Experiments
        </p>
        <div className="fixed bottom-0 md:flex h-24 lg:h-24 w-full md:items-end items-center justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
          <a
            className="pointer-events-none flex justify-center margin-auto place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
            href="https://github.com/moraesc"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/static/images/github.png"
              alt="Vercel Logo"
              className="dark:invert"
              width={32}
              height={32}
              priority
            />
          </a>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-12">
        <Container label="Hover">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2 }}
            whileHover={{
              scale: [1, 0.5, 1.5],
              transition: { duration: 2 },
            }}
          >
            <p className="text-white text-[20px] cursor-pointer">Hello World</p>
          </motion.div>
        </Container>

        <Container label="Watch">
          <motion.div
            className="box"
            animate={{
              scale: [1, 2, 2, 2, 1],
              rotate: [0, 180, 180, 180, 0],
              borderRadius: ["50%", "0%", "50%", "50%", "50%"],
            }}
            transition={{
              duration: 3,
              ease: "easeInOut",
              repeat: Infinity,
              repeatDelay: 1,
            }}
          />
        </Container>

        <Container label="Drag">
          <motion.div
            drag
            dragConstraints={{
              top: -30,
              left: -50,
              right: 50,
              bottom: 30,
            }}
          >
            <motion.div className="flex flex-col absolute h-[50px] w-[50px] bg-white top-[calc(50%_-_50px/2)] left-[calc(50%_-_50px/2)] relative justify-center"></motion.div>
          </motion.div>
        </Container>

        <Container label="Watch">
          <motion.div
            className="box"
            animate={{
              scale: [1, 2, 2, 1],
              borderRadius: ["50%"],
            }}
            transition={{
              duration: 2,
              ease: "easeInOut",
              repeat: Infinity,
              repeatDelay: 1,
            }}
          />
        </Container>

        <Container label="Watch">
          <motion.div
            className="box"
            animate={{ rotate: 180 }}
            transition={{
              repeat: Infinity,
              repeatType: "reverse",
              duration: 2,
            }}
          />
        </Container>

        <Container label="Hover">
          <motion.button
            className="box"
            whileHover={{
              scale: 1.5,
              transition: { duration: 1 },
            }}
            whileTap={{ scale: 0.9 }}
          />
        </Container>

        <Container label="Hover">
          <motion.div
            className="box"
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          />
        </Container>
      </div>
    </main>
  );
}
