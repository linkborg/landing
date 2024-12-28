"use client"

import { useState } from "react"
import { Input } from "./ui/input"
import { Button } from "./ui/button"
import { cn } from "@/lib/utils"

interface UsernameInputProps {
  variant?: "hero" | "cta"
}

export function UsernameInput({ variant = "cta" }: UsernameInputProps) {
  const [username, setUsername] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Username submitted:", username)
  }

  return (
    <form onSubmit={handleSubmit} className={cn(
      "flex flex-col sm:flex-row gap-4",
      variant === "hero" && "bg-white dark:bg-gray-900 p-4 sm:p-2 rounded-xl shadow-lg dark:shadow-blue-500/20"
    )}>
      <div className="flex-1">
        <Input
          type="text"
          placeholder="Choose your username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className={cn(
            "w-full text-lg",
            variant === "cta" && "h-12 border-2 border-blue-400 focus:border-white bg-white/10 text-white placeholder:text-blue-200",
            variant === "hero" && "h-14 border-2 border-blue-200 focus:border-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:focus:border-blue-400"
          )}
        />
      </div>
      <Button 
        type="submit" 
        size="lg"
        className={cn(
          "text-lg font-semibold px-8",
          variant === "cta" && "bg-white text-blue-600 hover:bg-blue-50",
          variant === "hero" && "bg-blue-600 text-white hover:bg-blue-700 shadow-md hover:shadow-lg transition-all duration-200"
        )}
      >
        Claim Now
      </Button>
      <p className={cn(
        "text-sm font-medium",
        variant === "cta" && "text-blue-100",
        variant === "hero" && "text-gray-500 dark:text-gray-400"
      )}>
        linkb.org/{username || "username"}
      </p>
    </form>
  )
}