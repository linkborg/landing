"use client"

import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import { Button } from "./ui/button"
import { UsernameInput } from "./username-input"
import Link from "next/link"

export function HeroSection() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center pt-16">
      <div className="container mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-6"
        >
          <motion.div
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2 }}
            className="mx-auto w-20 h-20 bg-blue-600 rounded-2xl flex items-center justify-center"
          >
            <img src="/favicon.ico" className="w-20 h-20 rounded-2xl text-white" />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-2xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-green-600 to-red-400"
          >
            The Ultimate Link Sharing Platform
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto"
          >
            Simplify your link sharing with our powerful, easy-to-use platform.
            Share multiple links with a single URL.
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-12"
          >
            <Link href="https://app.linkb.org" target="_blank">
              <span className="group relative inline-block overflow-hidden rounded-full  bg-white px-12 py-3 text-sm font-medium text-slate-800 hover:text-blue-600 focus:outline-none focus:ring active:bg-blue-600 active:text-white">
                <span className="ease absolute left-0 top-0 h-0 w-0 border-t-2 rounded-full  border-blue-500 transition-all duration-200 group-hover:w-full"></span>
                <span className="ease absolute right-0 top-0 h-0 w-0 border-r-2 rounded-full  border-blue-500 transition-all duration-200 group-hover:h-full"></span>
                <span className="ease absolute bottom-0 right-0 h-0 w-0 border-b-2 rounded-full  border-blue-500 transition-all duration-200 group-hover:w-full"></span>
                <span className="ease absolute bottom-0 left-0 h-0 w-0 border-l-2 rounded-full  border-blue-500 transition-all duration-200 group-hover:h-full"></span>
                Get Started
                <ArrowRight className="ml-2 w-4 h-4 inline-block group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>
            <Link href="https://github.com/linkborg/linkborg" target="_blank">
              <span className="group relative inline-block overflow-hidden rounded border border-gray-600 bg-gray-800 px-12 py-3 text-sm font-medium text-white hover:bg-gray-700 focus:outline-none focus:ring">
                Explore source code
              </span>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}