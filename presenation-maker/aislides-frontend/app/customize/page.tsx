'use client'
import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { ArrowLeftIcon } from '@heroicons/react/24/outline'
import { useRouter } from 'next/navigation'

// Import the LiquidBackground component
const LiquidBackground = () => {
  return (
    <div className="fixed inset-0 z-0 overflow-hidden">
      {/* Purple Blob - Top Left */}
      <motion.div
        className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] opacity-20"
        initial={{ scale: 1 }}
        animate={{
          scale: [1, 1.2, 1],
          rotate: [0, 15, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
          <motion.path
            fill="#7C3AED"
            animate={{
              d: [
                "M55.2,-15.4C55.2,2.9,27.6,21.5,1.7,21.5C-24.2,21.5,-48.4,2.9,-48.4,-15.4C-48.4,-33.7,-24.2,-67.4,1.7,-67.4C27.6,-67.4,55.2,-33.7,55.2,-15.4Z",
                "M42.3,-57.2C55.1,-47.3,66.1,-32.5,69.9,-15.7C73.7,1.2,70.2,20.1,61.1,35.7C52,51.4,37.2,63.8,20.1,68.4C3,73,-16.4,69.8,-31.9,60.9C-47.4,52.1,-59,37.6,-65.7,19.8C-72.3,2.1,-74,-18.9,-66.1,-35.6C-58.2,-52.3,-40.7,-64.7,-23.2,-71.8C-5.7,-78.9,11.8,-80.7,26.3,-73.1C40.8,-65.5,52.3,-48.5,42.3,-57.2Z",
                "M55.2,-15.4C55.2,2.9,27.6,21.5,1.7,21.5C-24.2,21.5,-48.4,2.9,-48.4,-15.4C-48.4,-33.7,-24.2,-67.4,1.7,-67.4C27.6,-67.4,55.2,-33.7,55.2,-15.4Z"
              ]
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </svg>
      </motion.div>

      {/* Pink Blob - Top Right */}
      <motion.div
        className="absolute top-[-10%] right-[-10%] w-[60%] h-[60%] opacity-20"
        initial={{ scale: 1.2, rotate: 45 }}
        animate={{
          scale: [1.2, 1, 1.2],
          rotate: [45, 30, 45],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
          <motion.path
            fill="#EC4899"
            animate={{
              d: [
                "M40.7,-62.9C50.9,-51.9,56.3,-37.3,61.4,-22.7C66.4,-8.1,71.1,6.4,67.8,18.8C64.5,31.2,53.2,41.5,41.1,48.5C29,55.5,16.1,59.2,1.3,57.5C-13.5,55.9,-29.3,48.9,-42.8,39.1C-56.3,29.3,-67.5,16.6,-70.2,1.6C-72.9,-13.5,-67,-30.9,-56.2,-43.1C-45.4,-55.3,-29.7,-62.3,-13.8,-64.8C2.1,-67.4,18.2,-65.5,29.1,-74.5C40,-83.5,45.7,-103.4,40.7,-62.9Z",
                "M43.1,-69.6C55.9,-64.3,66.4,-52.5,71.5,-38.7C76.6,-24.9,76.2,-9,73.7,6.1C71.1,21.2,66.4,35.5,57.7,47.4C49,59.3,36.3,68.8,22.3,71.9C8.2,75,-7.2,71.7,-21.1,66.2C-35,60.7,-47.5,53,-57.5,42.1C-67.5,31.2,-75,17.1,-77.1,1.8C-79.2,-13.5,-75.8,-30,-66.8,-42.3C-57.8,-54.6,-43.1,-62.7,-28.8,-67.1C-14.5,-71.5,-0.6,-72.2,13.1,-71.1C26.8,-70,40.3,-67.1,43.1,-69.6Z",
                "M40.7,-62.9C50.9,-51.9,56.3,-37.3,61.4,-22.7C66.4,-8.1,71.1,6.4,67.8,18.8C64.5,31.2,53.2,41.5,41.1,48.5C29,55.5,16.1,59.2,1.3,57.5C-13.5,55.9,-29.3,48.9,-42.8,39.1C-56.3,29.3,-67.5,16.6,-70.2,1.6C-72.9,-13.5,-67,-30.9,-56.2,-43.1C-45.4,-55.3,-29.7,-62.3,-13.8,-64.8C2.1,-67.4,18.2,-65.5,29.1,-74.5C40,-83.5,45.7,-103.4,40.7,-62.9Z"
              ]
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </svg>
      </motion.div>

      {/* Blue Blob - Bottom Left */}
      <motion.div
        className="absolute bottom-[-20%] left-[-15%] w-[55%] h-[55%] opacity-20"
        initial={{ scale: 0.8, rotate: -30 }}
        animate={{
          scale: [0.8, 1.1, 0.8],
          rotate: [-30, -45, -30],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1
        }}
      >
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
          <motion.path
            fill="#3B82F6"
            animate={{
              d: [
                "M46.5,-67.7C58.8,-64.5,66.2,-48.3,71.1,-31.8C76,-15.3,78.4,1.5,73.7,15.5C69,29.5,57.2,40.7,44.7,47.1C32.1,53.5,18.8,55.2,4.1,50.2C-10.6,45.3,-26.7,33.7,-39.5,19.9C-52.4,6.1,-62,-9.9,-60.8,-25.1C-59.6,-40.3,-47.6,-54.7,-33.8,-57.4C-19.9,-60.1,-4.2,-51.1,12.3,-47.8C28.8,-44.5,46.2,-46.9,46.5,-67.7Z",
                "M35.7,-49.4C47.8,-44.5,60.2,-37,65.8,-25.9C71.3,-14.8,69.9,-0.1,65.1,12.3C60.3,24.7,52,34.8,42.1,43.1C32.1,51.4,20.4,57.9,7.4,59.5C-5.6,61,-19.9,57.6,-33.2,51.1C-46.5,44.6,-58.8,35,-65.2,21.8C-71.6,8.6,-72.1,-8.2,-66.4,-22C-60.8,-35.8,-49,-46.6,-36.3,-51.4C-23.6,-56.2,-9.9,-55,1.5,-57.1C12.9,-59.2,25.8,-64.6,35.7,-49.4Z",
                "M46.5,-67.7C58.8,-64.5,66.2,-48.3,71.1,-31.8C76,-15.3,78.4,1.5,73.7,15.5C69,29.5,57.2,40.7,44.7,47.1C32.1,53.5,18.8,55.2,4.1,50.2C-10.6,45.3,-26.7,33.7,-39.5,19.9C-52.4,6.1,-62,-9.9,-60.8,-25.1C-59.6,-40.3,-47.6,-54.7,-33.8,-57.4C-19.9,-60.1,-4.2,-51.1,12.3,-47.8C28.8,-44.5,46.2,-46.9,46.5,-67.7Z"
              ]
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </svg>
      </motion.div>

      {/* Green Blob - Bottom Right */}
      <motion.div
        className="absolute bottom-[-15%] right-[-20%] w-[65%] h-[65%] opacity-20"
        initial={{ scale: 1.1, rotate: 90 }}
        animate={{
          scale: [1.1, 0.9, 1.1],
          rotate: [90, 75, 90],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2
        }}
      >
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
          <motion.path
            fill="#10B981"
            animate={{
              d: [
                "M42.3,-65.7C54.4,-59.8,63.5,-47.3,69.7,-33.5C75.9,-19.7,79.2,-4.6,76.3,9.2C73.4,23,64.3,35.5,53.7,45.7C43.1,55.9,31,63.8,17.5,67.1C4,70.4,-10.9,69.2,-24.7,64.6C-38.5,60,-51.2,52,-61.5,40.6C-71.8,29.2,-79.7,14.6,-80.1,-0.2C-80.5,-15.1,-73.4,-30.1,-63.1,-41.6C-52.8,-53.1,-39.3,-61,-25.8,-64.9C-12.3,-68.8,1.2,-68.7,14.4,-66.5C27.7,-64.3,40.7,-60,42.3,-65.7Z",
                "M38.1,-57.6C47.5,-50.9,52.3,-37.5,57.7,-24.2C63.2,-10.9,69.3,2.3,67.8,14.5C66.3,26.7,57.2,37.9,46.3,46.3C35.4,54.7,22.7,60.3,9.2,62.4C-4.3,64.4,-18.6,62.9,-32.1,57.4C-45.6,51.9,-58.3,42.4,-65.8,29.2C-73.3,16,-75.6,-0.8,-71.2,-15.2C-66.8,-29.6,-55.8,-41.6,-43.1,-47.6C-30.4,-53.6,-15.2,-53.6,-0.2,-53.3C14.8,-53,29.6,-52.4,38.1,-57.6Z",
                "M42.3,-65.7C54.4,-59.8,63.5,-47.3,69.7,-33.5C75.9,-19.7,79.2,-4.6,76.3,9.2C73.4,23,64.3,35.5,53.7,45.7C43.1,55.9,31,63.8,17.5,67.1C4,70.4,-10.9,69.2,-24.7,64.6C-38.5,60,-51.2,52,-61.5,40.6C-71.8,29.2,-79.7,14.6,-80.1,-0.2C-80.5,-15.1,-73.4,-30.1,-63.1,-41.6C-52.8,-53.1,-39.3,-61,-25.8,-64.9C-12.3,-68.8,1.2,-68.7,14.4,-66.5C27.7,-64.3,40.7,-60,42.3,-65.7Z"
              ]
            }}
            transition={{
              duration: 7,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </svg>
      </motion.div>
    </div>
  )
}

export default function CustomizePage() {
  const router = useRouter()
  const [prompt, setPrompt] = useState('')
  const [settings, setSettings] = useState({
    theme: 'modern',
    layout: 'standard',
    numSlides: 5,
    includeImages: true,
    font: 'inter',
  })

  useEffect(() => {
    // Get the prompt from localStorage
    const savedPrompt = localStorage.getItem('slidePrompt')
    if (!savedPrompt) {
      router.push('/')
      return
    }
    setPrompt(savedPrompt)
  }, [router])

  const themes = ['modern', 'classic', 'minimal', 'bold']
  const layouts = ['standard', 'creative', 'professional', 'academic']
  const fonts = ['inter', 'poppins', 'roboto', 'playfair']

  const handleSubmit = () => {
    // TODO: Handle slide generation with prompt and settings
    console.log('Generating slides with prompt:', prompt, 'and settings:', settings)
  }

  const handleBack = () => {
    router.push('/')
  }

  return (
    <div className="min-h-screen bg-black/95 text-white relative overflow-hidden">
      <LiquidBackground />
      
      {/* Navigation */}
      <motion.nav
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="flex items-center px-6 py-4 relative z-10"
      >
        <button
          onClick={handleBack}
          className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors"
        >
          <ArrowLeftIcon className="w-5 h-5" />
          <span>Back</span>
        </button>
      </motion.nav>

      <div className="max-w-4xl mx-auto px-4 py-8">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="bg-white/5 backdrop-blur-lg rounded-lg p-8 border border-white/10"
        >
          <h1 className="text-3xl font-bold mb-6 text-gradient">Customize Your Slides</h1>
          
          {/* Prompt Display */}
          <div className="mb-8 p-4 bg-white/5 rounded-lg border border-white/10">
            <label className="block text-gray-300 mb-2">Your Prompt</label>
            <p className="text-white">{prompt}</p>
          </div>

          {/* Theme Selection */}
          <div className="mb-6">
            <label className="block text-gray-300 mb-2">Choose Theme</label>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {themes.map((theme) => (
                <button
                  key={theme}
                  onClick={() => setSettings({ ...settings, theme })}
                  className={`p-4 rounded-lg border transition-all ${
                    settings.theme === theme
                      ? 'border-violet-500 bg-violet-500/20'
                      : 'border-white/10 hover:border-white/30 bg-white/5'
                  }`}
                >
                  {theme.charAt(0).toUpperCase() + theme.slice(1)}
                </button>
              ))}
            </div>
          </div>

          {/* Layout Selection */}
          <div className="mb-6">
            <label className="block text-gray-300 mb-2">Choose Layout</label>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {layouts.map((layout) => (
                <button
                  key={layout}
                  onClick={() => setSettings({ ...settings, layout })}
                  className={`p-4 rounded-lg border transition-all ${
                    settings.layout === layout
                      ? 'border-violet-500 bg-violet-500/20'
                      : 'border-white/10 hover:border-white/30 bg-white/5'
                  }`}
                >
                  {layout.charAt(0).toUpperCase() + layout.slice(1)}
                </button>
              ))}
            </div>
          </div>

          {/* Number of Slides */}
          <div className="mb-6">
            <label className="block text-gray-300 mb-2">Number of Slides</label>
            <input
              type="number"
              min="1"
              max="20"
              value={settings.numSlides}
              onChange={(e) => setSettings({ ...settings, numSlides: parseInt(e.target.value) })}
              className="bg-white/5 border border-white/10 rounded-lg p-2 w-24 text-center"
            />
          </div>

          {/* Include Images Toggle */}
          <div className="mb-6">
            <label className="flex items-center gap-2 text-gray-300">
              <input
                type="checkbox"
                checked={settings.includeImages}
                onChange={(e) => setSettings({ ...settings, includeImages: e.target.checked })}
                className="form-checkbox bg-white/5 border border-white/10 rounded text-violet-500 focus:ring-violet-500"
              />
              Include AI-generated images
            </label>
          </div>

          {/* Font Selection */}
          <div className="mb-8">
            <label className="block text-gray-300 mb-2">Choose Font</label>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {fonts.map((font) => (
                <button
                  key={font}
                  onClick={() => setSettings({ ...settings, font })}
                  className={`p-4 rounded-lg border transition-all ${
                    settings.font === font
                      ? 'border-violet-500 bg-violet-500/20'
                      : 'border-white/10 hover:border-white/30 bg-white/5'
                  }`}
                >
                  {font.charAt(0).toUpperCase() + font.slice(1)}
                </button>
              ))}
            </div>
          </div>

          {/* Generate Button */}
          <button
            onClick={handleSubmit}
            className="w-full bg-gradient-to-r from-violet-600 to-pink-500 text-white py-4 rounded-lg font-medium hover:opacity-90 transition-opacity"
          >
            Generate Slides
          </button>
        </motion.div>
      </div>
    </div>
  )
} 