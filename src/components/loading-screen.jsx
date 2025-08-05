"use client"

import { motion } from "framer-motion"
import { useState, useEffect } from "react"
import Image from "next/image"

export default function LoadingScreen() {
  const [progress, setProgress] = useState(0)
  const [loadingText, setLoadingText] = useState("Initializing...")
  const [dimensions, setDimensions] = useState({ width: 1200, height: 800 })
  const [particles, setParticles] = useState([])

  const loadingSteps = [
    "Initializing...",
    "Loading assets...",
    "Almost ready...",
  ]

  useEffect(() => {
    // Set dimensions and generate particles on client side only
    setDimensions({
      width: window.innerWidth,
      height: window.innerHeight
    })

    // Generate particle data once on client side
    const particleData = [...Array(20)].map((_, i) => ({
      id: i,
      x: Math.random() * window.innerWidth,
      duration: Math.random() * 3 + 2,
      delay: Math.random() * 2,
    }))
    setParticles(particleData)

    const interval = setInterval(() => {
      setProgress((prev) => {
        const newProgress = prev + 2

        // Update loading text based on progress
        if (newProgress < 33) setLoadingText(loadingSteps[0])
        else if (newProgress < 66) setLoadingText(loadingSteps[1])
        else setLoadingText(loadingSteps[2])

        return newProgress >= 100 ? 100 : newProgress
      })
    }, 50)

    return () => clearInterval(interval)
  }, [])

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black flex items-center justify-center z-50"
    >
      <div className="text-center max-w-md mx-auto px-6">
        {/* Logo Animation */}
        <motion.div
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="w-24 h-24 mx-auto mb-8 relative"
        >
          <div className="w-full h-full bg-purple-400 rounded-full flex items-center justify-center">
            <Image
              src="/131859874.png?height=128&width=128"
              alt="Profile"
              width={130}
              height={130}
              className="rounded-full object-cover"
            />
          </div>
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
            className="absolute inset-0 border-4 border-transparent border-t-purple-500 rounded-full"
          />
        </motion.div>

        {/* Loading Text */}
        <motion.h2
          key={loadingText}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="text-2xl font-bold text-white mb-4"
        >
          Welcome to My Portfolio
        </motion.h2>

        <motion.p
          key={loadingText + "desc"}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
          className="text-purple-400 mb-8"
        >
          {loadingText}
        </motion.p>

        {/* Progress Bar */}
        <div className="w-full bg-gray-800 rounded-full h-2 mb-4">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.1 }}
            className="bg-gradient-to-r from-indigo-400 to-purple-500 h-2 rounded-full"
          />
        </div>

        {/* Progress Percentage */}
        <motion.p
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
          className="text-gray-400 text-sm"
        >
          {progress}%
        </motion.p>

        {/* Floating Particles */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {particles.map((particle) => (
            <motion.div
              key={particle.id}
              initial={{
                x: particle.x,
                y: dimensions.height + 10,
                opacity: 0,
              }}
              animate={{
                y: -10,
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: particle.duration,
                repeat: Number.POSITIVE_INFINITY,
                delay: particle.delay,
              }}
              className="absolute w-1 h-1 bg-purple-200 rounded-full"
            />
          ))}
        </div>
      </div>
    </motion.div>
  )
}
