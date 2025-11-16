'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { Rocket, ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background with dark gradients */}
      <div className="absolute inset-0 bg-gradient-dark">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-indigo-900/20 via-transparent to-transparent"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-purple-900/20 via-transparent to-transparent"></div>

        {/* Animated grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1a1a2e33_1px,transparent_1px),linear-gradient(to_bottom,#1a1a2e33_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>

        {/* Glowing orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-indigo-600/20 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl animate-pulse-slow animation-delay-2000"></div>

        {/* Dramatic Storm Waves with Atlantis Ship */}
        <div className="absolute bottom-0 left-0 right-0 h-[600px] opacity-40 overflow-hidden">
          <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" viewBox="0 0 1440 600">
            <defs>
              <linearGradient id="stormWave1" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" style={{stopColor: '#0c4a6e', stopOpacity: 0.8}} />
                <stop offset="50%" style={{stopColor: '#06b6d4', stopOpacity: 0.9}} />
                <stop offset="100%" style={{stopColor: '#164e63', stopOpacity: 1}} />
              </linearGradient>
              <linearGradient id="stormWave2" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" style={{stopColor: '#0e7490', stopOpacity: 0.7}} />
                <stop offset="50%" style={{stopColor: '#0891b2', stopOpacity: 0.85}} />
                <stop offset="100%" style={{stopColor: '#155e75', stopOpacity: 0.95}} />
              </linearGradient>
              <linearGradient id="stormWave3" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" style={{stopColor: '#075985', stopOpacity: 0.6}} />
                <stop offset="50%" style={{stopColor: '#0ea5e9', stopOpacity: 0.75}} />
                <stop offset="100%" style={{stopColor: '#0c4a6e', stopOpacity: 0.9}} />
              </linearGradient>
              <filter id="turbulence">
                <feTurbulence type="fractalNoise" baseFrequency="0.02" numOctaves="3" result="turbulence"/>
                <feDisplacementMap in="SourceGraphic" in2="turbulence" scale="10" xChannelSelector="R" yChannelSelector="G"/>
              </filter>
            </defs>

            {/* Storm Wave Layer 5 - Far Back - Huge Waves */}
            <path fill="url(#stormWave3)" d="M0,100 Q200,20 400,100 T800,100 Q1000,20 1200,100 T1440,100 L1440,600 L0,600 Z">
              <animate attributeName="d" dur="7s" repeatCount="indefinite"
                values="M0,100 Q200,20 400,100 T800,100 Q1000,20 1200,100 T1440,100 L1440,600 L0,600 Z;
                        M0,100 Q200,180 400,100 T800,100 Q1000,180 1200,100 T1440,100 L1440,600 L0,600 Z;
                        M0,100 Q200,20 400,100 T800,100 Q1000,20 1200,100 T1440,100 L1440,600 L0,600 Z" />
            </path>

            {/* Storm Wave Layer 4 - Large Swells */}
            <path fill="url(#stormWave2)" d="M0,180 Q300,80 600,180 T1200,180 Q1320,80 1440,180 L1440,600 L0,600 Z">
              <animate attributeName="d" dur="6s" repeatCount="indefinite"
                values="M0,180 Q300,80 600,180 T1200,180 Q1320,80 1440,180 L1440,600 L0,600 Z;
                        M0,180 Q300,280 600,180 T1200,180 Q1320,280 1440,180 L1440,600 L0,600 Z;
                        M0,180 Q300,80 600,180 T1200,180 Q1320,80 1440,180 L1440,600 L0,600 Z" />
            </path>

            {/* Storm Wave Layer 3 - Turbulent Mid Waves */}
            <path fill="url(#stormWave1)" d="M0,260 Q240,160 480,260 T960,260 Q1200,160 1440,260 L1440,600 L0,600 Z">
              <animate attributeName="d" dur="5s" repeatCount="indefinite"
                values="M0,260 Q240,160 480,260 T960,260 Q1200,160 1440,260 L1440,600 L0,600 Z;
                        M0,260 Q240,360 480,260 T960,260 Q1200,360 1440,260 L1440,600 L0,600 Z;
                        M0,260 Q240,160 480,260 T960,260 Q1200,160 1440,260 L1440,600 L0,600 Z" />
            </path>

            {/* Storm Wave Layer 2 - Aggressive Waves */}
            <path fill="url(#stormWave2)" d="M0,340 Q180,220 360,340 T720,340 Q900,220 1080,340 T1440,340 L1440,600 L0,600 Z" opacity="0.9">
              <animate attributeName="d" dur="4s" repeatCount="indefinite"
                values="M0,340 Q180,220 360,340 T720,340 Q900,220 1080,340 T1440,340 L1440,600 L0,600 Z;
                        M0,340 Q180,420 360,340 T720,340 Q900,420 1080,340 T1440,340 L1440,600 L0,600 Z;
                        M0,340 Q180,220 360,340 T720,340 Q900,220 1080,340 T1440,340 L1440,600 L0,600 Z" />
            </path>

            {/* Storm Wave Layer 1 - Front Crashing Waves */}
            <path fill="url(#stormWave1)" d="M0,420 Q120,300 240,420 T480,420 Q600,300 720,420 T960,420 Q1080,300 1200,420 T1440,420 L1440,600 L0,600 Z" opacity="0.95">
              <animate attributeName="d" dur="3s" repeatCount="indefinite"
                values="M0,420 Q120,300 240,420 T480,420 Q600,300 720,420 T960,420 Q1080,300 1200,420 T1440,420 L1440,600 L0,600 Z;
                        M0,420 Q120,500 240,420 T480,420 Q600,500 720,420 T960,420 Q1080,500 1200,420 T1440,420 L1440,600 L0,600 Z;
                        M0,420 Q120,300 240,420 T480,420 Q600,300 720,420 T960,420 Q1080,300 1200,420 T1440,420 L1440,600 L0,600 Z" />
            </path>

            {/* White Foam Caps on Storm Waves */}
            <path fill="#ffffff" opacity="0.15" d="M100,380 Q150,360 200,380 T300,380 M500,380 Q550,360 600,380 T700,380 M900,380 Q950,360 1000,380 T1100,380">
              <animate attributeName="d" dur="3s" repeatCount="indefinite"
                values="M100,380 Q150,360 200,380 T300,380 M500,380 Q550,360 600,380 T700,380 M900,380 Q950,360 1000,380 T1100,380;
                        M100,420 Q150,400 200,420 T300,420 M500,420 Q550,400 600,420 T700,420 M900,420 Q950,400 1000,420 T1100,420;
                        M100,380 Q150,360 200,380 T300,380 M500,380 Q550,360 600,380 T700,380 M900,380 Q950,360 1000,380 T1100,380" />
            </path>
          </svg>

          {/* Atlantis Ship - Majestic Colorful Ship on Right Side */}
          <motion.div
            className="absolute"
            style={{ right: '8%', bottom: '22%' }}
            animate={{
              y: [0, -35, 5, -30, 0],
              x: [0, 12, -6, 18, 0],
              rotate: [0, -5, 3, -4, 0]
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <svg width="700" height="700" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <linearGradient id="shipGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" style={{stopColor: '#ec4899', stopOpacity: 1}} />
                  <stop offset="25%" style={{stopColor: '#a78bfa', stopOpacity: 1}} />
                  <stop offset="50%" style={{stopColor: '#6366f1', stopOpacity: 1}} />
                  <stop offset="75%" style={{stopColor: '#06b6d4', stopOpacity: 1}} />
                  <stop offset="100%" style={{stopColor: '#8b5cf6', stopOpacity: 1}} />
                </linearGradient>
                <linearGradient id="sailGradient1" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" style={{stopColor: '#fbbf24', stopOpacity: 0.9}} />
                  <stop offset="50%" style={{stopColor: '#f59e0b', stopOpacity: 0.95}} />
                  <stop offset="100%" style={{stopColor: '#d97706', stopOpacity: 0.9}} />
                </linearGradient>
                <linearGradient id="sailGradient2" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" style={{stopColor: '#06b6d4', stopOpacity: 0.9}} />
                  <stop offset="50%" style={{stopColor: '#0891b2', stopOpacity: 0.95}} />
                  <stop offset="100%" style={{stopColor: '#0e7490', stopOpacity: 0.9}} />
                </linearGradient>
                <linearGradient id="deckGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" style={{stopColor: '#fbbf24', stopOpacity: 1}} />
                  <stop offset="100%" style={{stopColor: '#d97706', stopOpacity: 1}} />
                </linearGradient>
                <filter id="shipGlow">
                  <feGaussianBlur stdDeviation="4" result="coloredBlur"/>
                  <feMerge>
                    <feMergeNode in="coloredBlur"/>
                    <feMergeNode in="SourceGraphic"/>
                  </feMerge>
                </filter>
                <filter id="strongGlow">
                  <feGaussianBlur stdDeviation="6" result="coloredBlur"/>
                  <feMerge>
                    <feMergeNode in="coloredBlur"/>
                    <feMergeNode in="SourceGraphic"/>
                  </feMerge>
                </filter>
              </defs>

              {/* Ship Hull - Larger and More Detailed */}
              <path d="M 45 145 Q 35 115, 48 95 L 55 92 L 72 88 L 128 88 L 145 92 L 152 95 Q 165 115, 155 145 L 148 152 L 52 152 Z"
                fill="url(#shipGradient)" stroke="#fff" strokeWidth="3" filter="url(#strongGlow)" opacity="1"/>

              {/* Hull Details - Sharp Lines */}
              <path d="M 55 92 L 58 140" stroke="#fbbf24" strokeWidth="2" opacity="0.8" filter="url(#shipGlow)"/>
              <path d="M 145 92 L 142 140" stroke="#fbbf24" strokeWidth="2" opacity="0.8" filter="url(#shipGlow)"/>
              <path d="M 70 90 Q 100 88, 130 90" stroke="#06b6d4" strokeWidth="2" opacity="0.9" fill="none" filter="url(#shipGlow)"/>

              {/* Deck */}
              <ellipse cx="100" cy="95" rx="50" ry="8" fill="url(#deckGradient)" stroke="#fff" strokeWidth="1.5" opacity="0.9" filter="url(#shipGlow)"/>

              {/* Main Mast - Thicker */}
              <rect x="93" y="35" width="6" height="65" fill="#fff" filter="url(#strongGlow)" opacity="0.95"/>
              <rect x="94" y="36" width="4" height="63" fill="url(#shipGradient)" opacity="0.8"/>

              {/* Front Mast */}
              <rect x="68" y="50" width="5" height="50" fill="#fff" filter="url(#shipGlow)" opacity="0.9"/>
              <rect x="69" y="51" width="3" height="48" fill="url(#sailGradient2)" opacity="0.7"/>

              {/* Rear Mast */}
              <rect x="128" y="55" width="5" height="45" fill="#fff" filter="url(#shipGlow)" opacity="0.9"/>
              <rect x="129" y="56" width="3" height="43" fill="url(#sailGradient1)" opacity="0.7"/>

              {/* Main Sail - Large and Colorful */}
              <path d="M 96 40 Q 135 60, 140 90 L 96 85 Z" fill="url(#sailGradient1)" stroke="#fff" strokeWidth="2.5" opacity="0.85" filter="url(#shipGlow)">
                <animate attributeName="d" dur="3.5s" repeatCount="indefinite"
                  values="M 96 40 Q 135 60, 140 90 L 96 85 Z;
                          M 96 40 Q 145 60, 150 90 L 96 85 Z;
                          M 96 40 Q 135 60, 140 90 L 96 85 Z" />
              </path>

              {/* Front Sail - Cyan */}
              <path d="M 71 55 Q 45 70, 40 95 L 71 90 Z" fill="url(#sailGradient2)" stroke="#fff" strokeWidth="2.5" opacity="0.85" filter="url(#shipGlow)">
                <animate attributeName="d" dur="3.5s" repeatCount="indefinite"
                  values="M 71 55 Q 45 70, 40 95 L 71 90 Z;
                          M 71 55 Q 35 70, 30 95 L 71 90 Z;
                          M 71 55 Q 45 70, 40 95 L 71 90 Z" />
              </path>

              {/* Rear Sail */}
              <path d="M 131 60 Q 155 75, 160 95 L 131 90 Z" fill="url(#sailGradient1)" stroke="#fff" strokeWidth="2.5" opacity="0.85" filter="url(#shipGlow)">
                <animate attributeName="d" dur="3.5s" repeatCount="indefinite"
                  values="M 131 60 Q 155 75, 160 95 L 131 90 Z;
                          M 131 60 Q 165 75, 170 95 L 131 90 Z;
                          M 131 60 Q 155 75, 160 95 L 131 90 Z" />
              </path>

              {/* Ornamental Details */}
              <circle cx="100" cy="105" r="5" fill="#fbbf24" stroke="#fff" strokeWidth="2" opacity="0.95" filter="url(#strongGlow)"/>
              <path d="M 52 152 Q 100 158, 148 152" stroke="#fbbf24" strokeWidth="3" fill="none" opacity="0.85" filter="url(#shipGlow)"/>

              {/* Windows/Portholes */}
              <circle cx="70" cy="110" r="3" fill="#06b6d4" stroke="#fff" strokeWidth="1" opacity="0.9" filter="url(#shipGlow)"/>
              <circle cx="85" cy="108" r="3" fill="#06b6d4" stroke="#fff" strokeWidth="1" opacity="0.9" filter="url(#shipGlow)"/>
              <circle cx="115" cy="108" r="3" fill="#06b6d4" stroke="#fff" strokeWidth="1" opacity="0.9" filter="url(#shipGlow)"/>
              <circle cx="130" cy="110" r="3" fill="#06b6d4" stroke="#fff" strokeWidth="1" opacity="0.9" filter="url(#shipGlow)"/>

              {/* Mystical Glow at Ship Base - Multi-colored */}
              <ellipse cx="100" cy="152" rx="70" ry="15" fill="#ec4899" opacity="0.3" filter="url(#strongGlow)">
                <animate attributeName="opacity" dur="2s" repeatCount="indefinite"
                  values="0.3;0.6;0.3" />
                <animate attributeName="rx" dur="2s" repeatCount="indefinite"
                  values="70;85;70" />
              </ellipse>

              <ellipse cx="100" cy="152" rx="60" ry="12" fill="#06b6d4" opacity="0.5" filter="url(#strongGlow)">
                <animate attributeName="opacity" dur="2.5s" repeatCount="indefinite"
                  values="0.5;0.8;0.5" />
                <animate attributeName="rx" dur="2.5s" repeatCount="indefinite"
                  values="60;75;60" />
              </ellipse>

              {/* Rainbow Aura Around Ship */}
              <circle cx="100" cy="100" r="80" fill="none" stroke="url(#shipGradient)" strokeWidth="2" opacity="0.15" filter="url(#strongGlow)">
                <animate attributeName="r" dur="3s" repeatCount="indefinite"
                  values="80;90;80" />
                <animate attributeName="opacity" dur="3s" repeatCount="indefinite"
                  values="0.15;0.25;0.15" />
              </circle>

              {/* Flags - Colorful */}
              <rect x="95" y="32" width="2" height="10" fill="#fff" opacity="0.9"/>
              <path d="M 97 32 L 115 37 L 97 42 Z" fill="#ec4899" stroke="#fff" strokeWidth="1" opacity="0.95" filter="url(#shipGlow)">
                <animate attributeName="d" dur="1.8s" repeatCount="indefinite"
                  values="M 97 32 L 115 37 L 97 42 Z;
                          M 97 32 L 120 37 L 97 42 Z;
                          M 97 32 L 115 37 L 97 42 Z" />
              </path>

              <rect x="69" y="48" width="2" height="8" fill="#fff" opacity="0.9"/>
              <path d="M 71 48 L 85 52 L 71 56 Z" fill="#fbbf24" stroke="#fff" strokeWidth="1" opacity="0.95" filter="url(#shipGlow)">
                <animate attributeName="d" dur="1.8s" repeatCount="indefinite"
                  values="M 71 48 L 85 52 L 71 56 Z;
                          M 71 48 L 90 52 L 71 56 Z;
                          M 71 48 L 85 52 L 71 56 Z" />
              </path>

              <rect x="130" y="53" width="2" height="8" fill="#fff" opacity="0.9"/>
              <path d="M 132 53 L 146 57 L 132 61 Z" fill="#06b6d4" stroke="#fff" strokeWidth="1" opacity="0.95" filter="url(#shipGlow)">
                <animate attributeName="d" dur="1.8s" repeatCount="indefinite"
                  values="M 132 53 L 146 57 L 132 61 Z;
                          M 132 53 L 151 57 L 132 61 Z;
                          M 132 53 L 146 57 L 132 61 Z" />
              </path>
            </svg>
          </motion.div>

          {/* Storm Spray and Foam Effects */}
          {[...Array(15)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute bg-white rounded-full"
              style={{
                right: `${5 + i * 3}%`,
                bottom: `${20 + (i % 5) * 7}%`,
                width: i % 3 === 0 ? '6px' : '5px',
                height: i % 3 === 0 ? '6px' : '5px',
              }}
              animate={{
                opacity: [0, 0.8, 0],
                scale: [0, 1.8, 0],
                y: [0, -30, -60],
              }}
              transition={{
                duration: 2 + (i % 3),
                repeat: Infinity,
                delay: i * 0.3,
              }}
            />
          ))}

          {/* Mystical Blue Sparkles Around Ship */}
          {[...Array(10)].map((_, i) => (
            <motion.div
              key={`sparkle-${i}`}
              className="absolute bg-cyan-300 rounded-full"
              style={{
                right: `${6 + i * 2.5}%`,
                bottom: `${25 + (i % 3) * 8}%`,
                width: i % 2 === 0 ? '5px' : '4px',
                height: i % 2 === 0 ? '5px' : '4px',
              }}
              animate={{
                opacity: [0, 1, 0],
                scale: [0, 1.5, 0],
              }}
              transition={{
                duration: 2.5,
                repeat: Infinity,
                delay: i * 0.4,
              }}
            />
          ))}
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center space-x-2 px-4 py-2 glass-effect rounded-full"
            >
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-pink-500 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-pink-600"></span>
              </span>
              <span className="text-sm font-medium text-gray-300">Only 5 FREE spots remaining!</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-5xl md:text-7xl font-bold font-display leading-tight"
            >
              <span className="bg-gradient-accent bg-clip-text text-transparent text-glow">
                We Build Your App
              </span>
              <br />
              In 7 Days
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-2xl md:text-3xl font-bold text-white leading-relaxed max-w-xl"
            >
              Just tell us your idea. We handle everything else.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.45 }}
              className="text-lg text-gray-400 max-w-xl"
            >
              No coding required. No technical skills needed. Get a real, working app fast.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Link
                href="#signup"
                className="group px-8 py-4 bg-gradient-accent text-white rounded-full font-semibold text-lg hover:glow-effect transition-all duration-300 hover:scale-105 flex items-center justify-center space-x-2"
              >
                <span>Get Started Free</span>
                <Rocket className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="#how-it-works"
                className="px-8 py-4 glass-effect text-white rounded-full font-semibold text-lg hover:bg-white/10 transition-all duration-300 flex items-center justify-center"
              >
                Learn More
              </Link>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="grid grid-cols-3 gap-8 pt-8"
            >
              <div>
                <div className="text-3xl font-bold bg-gradient-accent bg-clip-text text-transparent">50+</div>
                <div className="text-sm text-gray-400 mt-1">MVPs Built</div>
              </div>
              <div>
                <div className="text-3xl font-bold bg-gradient-accent bg-clip-text text-transparent">10x</div>
                <div className="text-sm text-gray-400 mt-1">Faster Launch</div>
              </div>
              <div>
                <div className="text-3xl font-bold bg-gradient-accent bg-clip-text text-transparent">100%</div>
                <div className="text-sm text-gray-400 mt-1">Satisfaction</div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Content - Images and Visuals */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative hidden lg:block"
          >
            <div className="relative w-full h-[600px]">
              {/* Main Image */}
              <motion.div
                animate={{ y: [0, -20, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute top-0 right-0 w-80 h-80 rounded-3xl overflow-hidden glass-effect glow-effect"
              >
                <Image
                  src="https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&q=80"
                  alt="Team collaboration"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="text-white font-bold text-xl">Fast & Professional</div>
                  <div className="text-gray-300 text-sm">Ready in 7 days</div>
                </div>
              </motion.div>

              {/* Floating Card 1 */}
              <motion.div
                animate={{ y: [0, -15, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
                className="absolute top-40 left-0 w-64 h-64 rounded-2xl overflow-hidden glass-effect"
              >
                <Image
                  src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&q=80"
                  alt="Analytics dashboard"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-indigo-900/80 to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="text-white font-bold">Your Vision</div>
                  <div className="text-gray-300 text-sm">Our expertise</div>
                </div>
              </motion.div>

              {/* Floating Card 2 */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
                className="absolute bottom-0 right-20 w-56 h-56 rounded-2xl overflow-hidden glass-effect"
              >
                <Image
                  src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&q=80"
                  alt="Coding"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-purple-900/80 to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="text-white font-bold">Launch Ready</div>
                  <div className="text-gray-300 text-sm">Start making money</div>
                </div>
              </motion.div>

              {/* Decorative elements */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] border-2 border-indigo-500/20 rounded-full"
              ></motion.div>

              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border-2 border-purple-500/10 rounded-full"
              ></motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center"
        >
          <div className="w-1 h-3 bg-gray-400 rounded-full mt-2"></div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
