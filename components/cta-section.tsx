"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Button } from "./ui/button"
import { Input } from "./ui/input"

export function CTASection() {
  const [username, setUsername] = useState("")
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle username submission
    console.log("Username submitted:", username)
  }

  return (
    <section className="py-20 bg-gradient-to-b from-blue-500 to-blue-600 dark:from-blue-900 dark:to-blue-800">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center text-white"
        >
          <h2 className="text-4xl font-bold mb-6">Create Your linkb.org Profile</h2>
          <p className="text-xl mb-8 text-blue-100">
            Join creators who use linkb.org to share their content
          </p>

          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <div className="flex-1">
              <Input
                type="text"
                placeholder="Choose your username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="w-full h-12 px-4 rounded-lg border-2 border-blue-400 focus:border-white bg-white/10 text-white placeholder:text-blue-200"
              />
            </div>
            <Button 
              type="submit" 
              size="lg"
              className="bg-white text-blue-600 hover:bg-blue-50"
            >
              Claim Now
            </Button>
          </form>

          <p className="mt-4 text-sm text-blue-100">
            linkb.org/{username || "username"}
          </p>
        </motion.div>
      </div>
    </section>
  )
}