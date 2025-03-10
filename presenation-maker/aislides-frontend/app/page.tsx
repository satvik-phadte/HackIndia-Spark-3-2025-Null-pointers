'use client'
import React, { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { SparklesIcon, ArrowRightIcon } from '@heroicons/react/24/outline'

const LiquidBackground = () => {
  return (
    <div className="fixed inset-0 z-0 overflow-hidden">
      {/* Center Blob */}
      <motion.div
        className="absolute top-[30%] left-[40%] w-[40%] h-[40%] opacity-20"
        initial={{ scale: 1 }}
        animate={{
          scale: [1, 1.2, 1],
          rotate: [0, 180, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
          <motion.path
            fill="#7C3AED"
            animate={{
              d: [
                "M100,10 A90,90 0 1,0 100,190 A90,90 0 1,0 100,10",
                "M100,30 A70,70 0 1,0 100,170 A70,70 0 1,0 100,30",
                "M100,10 A90,90 0 1,0 100,190 A90,90 0 1,0 100,10"
              ]
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </svg>
      </motion.div>

      {/* Top Center Blob */}
      <motion.div
        className="absolute top-[-10%] left-[30%] w-[35%] h-[35%] opacity-20"
        initial={{ scale: 0.8 }}
        animate={{
          scale: [0.8, 1.1, 0.8],
          x: [0, 50, 0],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
          <motion.path
            fill="#EC4899"
            animate={{
              d: [
                "M100,20 A80,80 0 1,0 100,180 A80,80 0 1,0 100,20",
                "M100,40 A60,60 0 1,0 100,160 A60,60 0 1,0 100,40",
                "M100,20 A80,80 0 1,0 100,180 A80,80 0 1,0 100,20"
              ]
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </svg>
      </motion.div>

      {/* Middle Left Blob */}
      <motion.div
        className="absolute top-[40%] left-[-10%] w-[45%] h-[45%] opacity-20"
        initial={{ scale: 1.2 }}
        animate={{
          scale: [1.2, 0.9, 1.2],
          y: [0, 30, 0],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
          <motion.path
            fill="#3B82F6"
            animate={{
              d: [
                "M100,30 A70,70 0 1,0 100,170 A70,70 0 1,0 100,30",
                "M100,50 A50,50 0 1,0 100,150 A50,50 0 1,0 100,50",
                "M100,30 A70,70 0 1,0 100,170 A70,70 0 1,0 100,30"
              ]
            }}
            transition={{
              duration: 12,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </svg>
      </motion.div>

      {/* Middle Right Blob */}
      <motion.div
        className="absolute top-[35%] right-[-15%] w-[50%] h-[50%] opacity-20"
        initial={{ scale: 0.9 }}
        animate={{
          scale: [0.9, 1.3, 0.9],
          y: [0, -40, 0],
        }}
        transition={{
          duration: 16,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
          <motion.path
            fill="#10B981"
            animate={{
              d: [
                "M100,10 A90,90 0 1,0 100,190 A90,90 0 1,0 100,10",
                "M100,40 A60,60 0 1,0 100,160 A60,60 0 1,0 100,40",
                "M100,10 A90,90 0 1,0 100,190 A90,90 0 1,0 100,10"
              ]
            }}
            transition={{
              duration: 14,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </svg>
      </motion.div>

      {/* Bottom Left Blob */}
      <motion.div
        className="absolute bottom-[-20%] left-[20%] w-[40%] h-[40%] opacity-20"
        initial={{ scale: 1.1 }}
        animate={{
          scale: [1.1, 0.8, 1.1],
          rotate: [0, -180, 0],
        }}
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
          <motion.path
            fill="#F472B6"
            animate={{
              d: [
                "M100,20 A80,80 0 1,0 100,180 A80,80 0 1,0 100,20",
                "M100,50 A50,50 0 1,0 100,150 A50,50 0 1,0 100,50",
                "M100,20 A80,80 0 1,0 100,180 A80,80 0 1,0 100,20"
              ]
            }}
            transition={{
              duration: 16,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </svg>
      </motion.div>

      {/* Bottom Right Blob */}
      <motion.div
        className="absolute bottom-[-15%] right-[10%] w-[45%] h-[45%] opacity-20"
        initial={{ scale: 0.8 }}
        animate={{
          scale: [0.8, 1.2, 0.8],
          x: [0, -30, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
          <motion.path
            fill="#8B5CF6"
            animate={{
              d: [
                "M100,30 A70,70 0 1,0 100,170 A70,70 0 1,0 100,30",
                "M100,60 A40,40 0 1,0 100,140 A40,40 0 1,0 100,60",
                "M100,30 A70,70 0 1,0 100,170 A70,70 0 1,0 100,30"
              ]
            }}
            transition={{
              duration: 18,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </svg>
      </motion.div>

      {/* Top Left Small Blob */}
      <motion.div
        className="absolute top-[15%] left-[15%] w-[25%] h-[25%] opacity-20"
        initial={{ scale: 1 }}
        animate={{
          scale: [1, 1.4, 1],
          rotate: [0, 90, 0],
        }}
        transition={{
          duration: 14,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
          <motion.path
            fill="#60A5FA"
            animate={{
              d: [
                "M100,40 A60,60 0 1,0 100,160 A60,60 0 1,0 100,40",
                "M100,70 A30,30 0 1,0 100,130 A30,30 0 1,0 100,70",
                "M100,40 A60,60 0 1,0 100,160 A60,60 0 1,0 100,40"
              ]
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </svg>
      </motion.div>
    </div>
  )
}

export default function Home() {
    const router = useRouter()
    const [prompt, setPrompt] = useState('')
    const [isGenerating, setIsGenerating] = useState(false)
    const [slides, setSlides] = useState<string[]>([])

    const quickActions = [
        {
            text: "Build a business presentation",
            isNew: true,
            tooltip: "Create professional slides for business meetings, pitches, and corporate presentations"
        },
        {
            text: "Create a presentation for use of AI in cyber security",
            tooltip: "Generate comprehensive slides about AI applications in cybersecurity, threats, and protection measures"
        },
        {
            text: "Design an educational slide deck",
            tooltip: "Create engaging educational content with clear explanations and visual examples"
        },
        {
            text: "Make a project proposal presentation",
            tooltip: "Design compelling project proposals with objectives, timelines, and deliverables"
        }
    ];

    const handlePromptSubmit = () => {
        if (!prompt.trim()) return;
        // Store the prompt in localStorage or state management solution
        localStorage.setItem('slidePrompt', prompt);
        // Navigate to customize page
        router.push('/customize');
    };

    const handleQuickActionClick = (text: string) => {
        setPrompt(text);
        localStorage.setItem('slidePrompt', text);
        router.push('/customize');
    };

    return (
        <div className="min-h-screen bg-black/95 text-white relative overflow-hidden">
            <LiquidBackground />
            {/* Gradient Blurs */}
            <div className="gradient-blur top-0 left-0" />
            <div className="gradient-blur gradient-blur-pink bottom-0 right-0" />

            {/* Navigation */}
            <motion.nav
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="flex justify-between items-center px-6 py-4 relative z-10"
            >
                <div className="flex items-center">
                    <span className="text-2xl font-bold text-gradient">AI Slides</span>
                </div>
                <div className="flex items-center gap-4">
                    <Link href="#" className="text-gray-300 hover:text-white transition-colors">
                        Sign In
                    </Link>
                    <Link href="#" className="bg-gradient-to-r from-violet-600 to-pink-500 px-4 py-2 rounded-md hover:opacity-90 transition-opacity">
                        Get Started
                    </Link>
                </div>
            </motion.nav>

            {/* Main Content */}
            <motion.main
                initial={{ y: 40, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="max-w-6xl mx-auto mt-8 px-4 relative z-10"
            >
                {slides.length === 0 ? (
                    <>
                        {/* Banner */}
                        <motion.div
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.2 }}
                            className="flex justify-center mt-4"
                        >
                            <div className="bg-white/5 backdrop-blur-lg rounded-full px-4 py-2 flex items-center gap-2 border border-white/10 hover:border-white/20 transition-colors">
                                <SparklesIcon className="w-5 h-5 text-violet-400" />
                                <span>Introducing the AI slide maker!</span>
                            </div>
                        </motion.div>

                        <motion.h1
                            className="text-6xl font-bold mb-6 text-center mt-24 whitespace-nowrap"
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ delay: 0.6 }}
                        >
                            <span className="text-gradient">What slides do you want to make?</span>
                        </motion.h1>
                        <motion.p
                            className="text-xl text-gray-400 mb-12 text-center"
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.8 }}
                        >
                            Prompt, run, edit and make complete slides.
                        </motion.p>

                        {/* Quick Actions */}
                        <motion.div
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 1.2 }}
                            className="flex flex-wrap justify-center gap-4 mb-12"
                        >
                            {quickActions.map((action, index) => (
                                <motion.div
                                    key={action.text}
                                    initial={{ y: 20, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    transition={{ delay: 1.2 + index * 0.1 }}
                                >
                                    <button
                                        onClick={() => handleQuickActionClick(action.text)}
                                        className="group bg-white/5 backdrop-blur-lg hover:bg-white/10 px-4 py-2 rounded-full flex items-center gap-2 border border-white/10 hover:border-white/20 transition-all duration-300"
                                        title={action.tooltip}
                                    >
                                        {action.isNew && (
                                            <span className="text-violet-400 font-medium">NEW</span>
                                        )}
                                        <span>{action.text}</span>
                                    </button>
                                </motion.div>
                            ))}
                        </motion.div>
                    </>
                ) : (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="w-full"
                    >
                        {/* Slides Display Area */}
                        <div className="bg-white/5 backdrop-blur-lg rounded-lg p-6 mb-8">
                            <h2 className="text-2xl font-bold mb-4">Your Presentation</h2>
                            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                                {slides.map((slide, index) => (
                                    <div
                                        key={index}
                                        className="aspect-[16/9] bg-white/10 rounded-lg p-4 flex items-center justify-center hover:bg-white/15 transition-colors cursor-pointer"
                                    >
                                        <span>{slide}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                )}

                {/* Search Input - Always visible */}
                <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 1 }}
                    className="bg-white/5 backdrop-blur-lg rounded-lg p-6 border border-white/10 hover:border-white/20 transition-colors mx-auto transform -translate-x-1/2 w-[90%] max-w-2xl z-50"
                >
                    <div className="relative flex items-center justify-center">
                        <input
                            type="text"
                            value={prompt}
                            onChange={(e) => setPrompt(e.target.value)}
                            placeholder="What kind of slides would you like to create?"
                            className="w-[90%] bg-transparent outline-none placeholder:text-gray-500 text-center"
                            onKeyPress={(e) => e.key === 'Enter' && handlePromptSubmit()}
                        />
                        <button
                            onClick={handlePromptSubmit}
                            disabled={isGenerating}
                            className="text-gray-400 hover:text-white transition-colors disabled:opacity-50 absolute right-0"
                            title="Next Step"
                        >
                            <ArrowRightIcon className="w-5 h-5" />
                        </button>
                    </div>
                </motion.div>
            </motion.main>
        </div>
    )
} 