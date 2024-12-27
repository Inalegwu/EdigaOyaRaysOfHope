"use client";
import { ChevronRight, Info } from "lucide-react";
import { motion, useScroll, useTransform } from "motion/react";
import Link from "next/link";
import { useRef } from "react";

export default function Home() {
  const textRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);
  const { scrollYProgress } = useScroll({
    target: textRef,
  });
  const y = useTransform(scrollYProgress, [0, 1], [-60, 60]);

  return (
    <div className="w-full h-screen">
      <nav className="fixed z-10 top-0 left-0 w-full flex items-center justify-between backdrop-blur-2xl px-6 py-6">
        <Link href="/" className="font-bold text-sm text-neutral-300">
          Ediga-Oya Rays Of Hope Foundation
        </Link>
      </nav>
      <div className="w-full h-screen flex items-center justify-start px-6">
        <motion.div
          style={{ y }}
          ref={textRef}
          className="space-y-2 w-4/6 h-full flex flex-col items-start justify-center"
        >
          <motion.h1 className="text-7xl font-extrabold">Ediga-Oya</motion.h1>
          <motion.h1 className="text-5xl font-bold">
            Rays of Hope Foundation
          </motion.h1>
          <motion.h1 className="text-2xl font-medium text-neutral-500">
            building futures for children in egbologba
          </motion.h1>
          <div className="flex items-center py-6 justify-start space-x-3">
            <Link
              href="/support-us"
              className="bg-neutral-900 border-[1px] border-solid border-neutral-700 text-green-100 px-6 py-3 rounded-full flex items-center justify-center space-x-3"
            >
              <p>Learn More</p>
              <Info size={14} />
            </Link>
            <Link
              href="/support-us"
              className="bg-green-900 border-[1px] border-solid border-green-700 text-green-100 px-6 py-3 rounded-full flex items-center justify-center space-x-2"
            >
              <p>Support Us</p>
              <ChevronRight size={18} />
            </Link>
          </div>
        </motion.div>
        <motion.div className="w-2/6 h-full flex flex-col items-end justify-center px-6">
          <motion.img
            style={{
              transform: "rotateZ(1.4deg)",
            }}
            ref={imageRef}
            className="rounded-lg shadow-xl shadow-neutral-900/80 w-full h-4/6 object-cover border-[1px] border-solid border-neutral-800"
            src="https://images.unsplash.com/photo-1497375638960-ca368c7231e4?q=80&w=1440&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          />
        </motion.div>
      </div>
      <div className="w-full h-[120vh] py-[6rem] space-y-5 flex flex-col items-center justify-center">
        <div className="flex flex-col items-center justify-center">
          <h1 className="text-center text-5xl font-extrabold">The Gallery</h1>
          <p className="text-center font-medium text-neutral-500 text-2xl">
            our best moments over the years
          </p>
        </div>
        <motion.div className="w-full h-3/6 bg-green-700 overflow-hidden"></motion.div>
        <motion.div className="w-full h-3/6 bg-blue-700 overflow-hidden"></motion.div>
        <Link
          href="/gallery"
          className="bg-green-900 text-green-100 flex items-center justify-center space-x-3 rounded-full px-6 py-3 border-[1px] border-solid border-green-800"
        >
          <p>See More</p>
          <ChevronRight size={16} />
        </Link>
      </div>
      <div className="w-full h-screen py-[5rem] space-y-5 flex flex-col items-center justify-center">
        <div className="flex flex-col items-center justify-center">
          <h1 className="text-5xl font-extrabold">The Team</h1>
          <p className="text-neutral-500 font-medium text-2xl">
            The people who make it work
          </p>
        </div>
      </div>
      <footer className="w-full h-[70vh] bg-neutral-200 text-black px-8 py-7">
        footer
      </footer>
    </div>
  );
}
