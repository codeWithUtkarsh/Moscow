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

          {/* Atlantis Ship - Sharp Geometric Design with Vibrant Red & Blue */}
          <motion.div
            className="absolute"
            style={{ right: '15%', bottom: '18%' }}
            animate={{
              y: [0, -40, 8, -35, 0],
              x: [0, 15, -8, 20, 0],
              rotate: [0, -6, 4, -5, 0]
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <svg width="900" height="900" viewBox="0 0 240 240" xmlns="http://www.w3.org/2000/svg">
              <defs>
                {/* Vibrant Red Gradient */}
                <linearGradient id="redGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" style={{stopColor: '#ef4444', stopOpacity: 1}} />
                  <stop offset="50%" style={{stopColor: '#dc2626', stopOpacity: 1}} />
                  <stop offset="100%" style={{stopColor: '#b91c1c', stopOpacity: 1}} />
                </linearGradient>

                {/* Vibrant Blue Gradient */}
                <linearGradient id="blueGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" style={{stopColor: '#3b82f6', stopOpacity: 1}} />
                  <stop offset="50%" style={{stopColor: '#2563eb', stopOpacity: 1}} />
                  <stop offset="100%" style={{stopColor: '#1d4ed8', stopOpacity: 1}} />
                </linearGradient>

                {/* Cyan Gradient for accents */}
                <linearGradient id="cyanGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" style={{stopColor: '#06b6d4', stopOpacity: 1}} />
                  <stop offset="50%" style={{stopColor: '#0891b2', stopOpacity: 1}} />
                  <stop offset="100%" style={{stopColor: '#0e7490', stopOpacity: 1}} />
                </linearGradient>

                {/* Red to Blue Gradient for main hull */}
                <linearGradient id="redBlueGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" style={{stopColor: '#dc2626', stopOpacity: 1}} />
                  <stop offset="50%" style={{stopColor: '#8b5cf6', stopOpacity: 1}} />
                  <stop offset="100%" style={{stopColor: '#2563eb', stopOpacity: 1}} />
                </linearGradient>

                <filter id="superGlow">
                  <feGaussianBlur stdDeviation="8" result="coloredBlur"/>
                  <feMerge>
                    <feMergeNode in="coloredBlur"/>
                    <feMergeNode in="SourceGraphic"/>
                  </feMerge>
                </filter>

                <filter id="intensiveGlow">
                  <feGaussianBlur stdDeviation="12" result="coloredBlur"/>
                  <feMerge>
                    <feMergeNode in="coloredBlur"/>
                    <feMergeNode in="SourceGraphic"/>
                  </feMerge>
                </filter>
              </defs>

              {/* Main Hull - Sharp Geometric Design */}
              {/* Bottom hull - Red */}
              <polygon points="50,160 60,155 80,150 160,150 180,155 190,160 185,175 55,175"
                fill="url(#redGradient)" stroke="#ffffff" strokeWidth="4" filter="url(#superGlow)" opacity="1"/>

              {/* Upper hull - Blue */}
              <polygon points="60,155 70,130 80,120 90,115 150,115 160,120 170,130 180,155"
                fill="url(#blueGradient)" stroke="#ffffff" strokeWidth="4" filter="url(#superGlow)" opacity="1"/>

              {/* Center accent stripe - Red to Blue blend */}
              <polygon points="80,150 85,135 155,135 160,150"
                fill="url(#redBlueGradient)" stroke="#ffffff" strokeWidth="3" opacity="0.95" filter="url(#superGlow)"/>

              {/* Sharp White Lines - Geometric Details */}
              <line x1="70" y1="130" x2="75" y2="165" stroke="#ffffff" strokeWidth="3" opacity="0.9" filter="url(#superGlow)"/>
              <line x1="170" y1="130" x2="165" y2="165" stroke="#ffffff" strokeWidth="3" opacity="0.9" filter="url(#superGlow)"/>
              <line x1="90" y1="115" x2="95" y2="155" stroke="#06b6d4" strokeWidth="2.5" opacity="1" filter="url(#superGlow)"/>
              <line x1="150" y1="115" x2="145" y2="155" stroke="#06b6d4" strokeWidth="2.5" opacity="1" filter="url(#superGlow)"/>

              {/* Geometric Deck Platform */}
              <polygon points="75,125 85,120 155,120 165,125 160,132 80,132"
                fill="url(#cyanGradient)" stroke="#ffffff" strokeWidth="3" opacity="0.95" filter="url(#superGlow)"/>

              {/* MASTS - Tall Sharp White Poles */}
              {/* Main Center Mast - Tallest */}
              <rect x="115" y="40" width="10" height="90" fill="#ffffff" filter="url(#intensiveGlow)" opacity="1"/>
              <rect x="117" y="42" width="6" height="86" fill="url(#blueGradient)" opacity="0.9"/>

              {/* Front Mast - Left */}
              <rect x="85" y="60" width="8" height="70" fill="#ffffff" filter="url(#superGlow)" opacity="1"/>
              <rect x="87" y="62" width="4" height="66" fill="url(#redGradient)" opacity="0.9"/>

              {/* Rear Mast - Right */}
              <rect x="150" y="65" width="8" height="65" fill="#ffffff" filter="url(#superGlow)" opacity="1"/>
              <rect x="152" y="67" width="4" height="61" fill="url(#blueGradient)" opacity="0.9"/>

              {/* SAILS - Sharp Triangular Geometric Shapes */}
              {/* Main Sail - Center - Large Blue Triangle */}
              <polygon points="120,45 175,80 175,120 120,115"
                fill="url(#blueGradient)" stroke="#ffffff" strokeWidth="4" opacity="0.95" filter="url(#superGlow)">
                <animate attributeName="points" dur="3.5s" repeatCount="indefinite"
                  values="120,45 175,80 175,120 120,115;
                          120,45 185,80 185,120 120,115;
                          120,45 175,80 175,120 120,115" />
              </polygon>

              {/* Front Sail - Left - Red Triangle */}
              <polygon points="89,65 50,90 50,125 89,120"
                fill="url(#redGradient)" stroke="#ffffff" strokeWidth="4" opacity="0.95" filter="url(#superGlow)">
                <animate attributeName="points" dur="3.5s" repeatCount="indefinite"
                  values="89,65 50,90 50,125 89,120;
                          89,65 40,90 40,125 89,120;
                          89,65 50,90 50,125 89,120" />
              </polygon>

              {/* Rear Sail - Right - Cyan Triangle */}
              <polygon points="154,70 190,95 190,125 154,120"
                fill="url(#cyanGradient)" stroke="#ffffff" strokeWidth="4" opacity="0.95" filter="url(#superGlow)">
                <animate attributeName="points" dur="3.5s" repeatCount="indefinite"
                  values="154,70 190,95 190,125 154,120;
                          154,70 200,95 200,125 154,120;
                          154,70 190,95 190,125 154,120" />
              </polygon>

              {/* Sharp Geometric Windows - Diamond Shapes */}
              <polygon points="95,140 100,137 105,140 100,143" fill="#06b6d4" stroke="#ffffff" strokeWidth="2" opacity="1" filter="url(#superGlow)"/>
              <polygon points="115,138 120,135 125,138 120,141" fill="#ef4444" stroke="#ffffff" strokeWidth="2" opacity="1" filter="url(#superGlow)"/>
              <polygon points="135,138 140,135 145,138 140,141" fill="#06b6d4" stroke="#ffffff" strokeWidth="2" opacity="1" filter="url(#superGlow)"/>

              {/* Bow Ornament - Sharp Star */}
              <polygon points="120,128 125,135 120,142 115,135" fill="#ffffff" stroke="#06b6d4" strokeWidth="2" opacity="1" filter="url(#intensiveGlow)"/>
              <circle cx="120" cy="135" r="3" fill="#ef4444" stroke="#ffffff" strokeWidth="1.5" opacity="1" filter="url(#superGlow)"/>

              {/* Sharp Geometric Bottom Trim */}
              <polygon points="55,175 60,170 180,170 185,175" fill="url(#redBlueGradient)" stroke="#ffffff" strokeWidth="3" opacity="0.9" filter="url(#superGlow)"/>

              {/* Intense Multi-colored Glow Base - Red and Blue */}
              <ellipse cx="120" cy="175" rx="90" ry="20" fill="#ef4444" opacity="0.4" filter="url(#intensiveGlow)">
                <animate attributeName="opacity" dur="2s" repeatCount="indefinite"
                  values="0.4;0.7;0.4" />
                <animate attributeName="rx" dur="2s" repeatCount="indefinite"
                  values="90;105;90" />
              </ellipse>

              <ellipse cx="120" cy="175" rx="75" ry="15" fill="#2563eb" opacity="0.6" filter="url(#intensiveGlow)">
                <animate attributeName="opacity" dur="2.5s" repeatCount="indefinite"
                  values="0.6;0.9;0.6" />
                <animate attributeName="rx" dur="2.5s" repeatCount="indefinite"
                  values="75;90;75" />
              </ellipse>

              {/* Vibrant Aura - Pulsing Red & Blue Circle */}
              <circle cx="120" cy="120" r="100" fill="none" stroke="#ef4444" strokeWidth="3" opacity="0.25" filter="url(#intensiveGlow)">
                <animate attributeName="r" dur="3s" repeatCount="indefinite"
                  values="100;115;100" />
                <animate attributeName="opacity" dur="3s" repeatCount="indefinite"
                  values="0.25;0.4;0.25" />
              </circle>

              <circle cx="120" cy="120" r="95" fill="none" stroke="#3b82f6" strokeWidth="3" opacity="0.3" filter="url(#intensiveGlow)">
                <animate attributeName="r" dur="3s" repeatCount="indefinite"
                  values="95;110;95" />
                <animate attributeName="opacity" dur="3s" repeatCount="indefinite"
                  values="0.3;0.5;0.3" />
              </circle>

              {/* Sharp Flags - Geometric Triangles */}
              {/* Main Mast Flag - Red */}
              <rect x="118" y="35" width="3" height="12" fill="#ffffff" opacity="1"/>
              <polygon points="121,35 145,42 121,49" fill="#ef4444" stroke="#ffffff" strokeWidth="2" opacity="1" filter="url(#superGlow)">
                <animate attributeName="points" dur="1.8s" repeatCount="indefinite"
                  values="121,35 145,42 121,49;
                          121,35 152,42 121,49;
                          121,35 145,42 121,49" />
              </polygon>

              {/* Front Mast Flag - Blue */}
              <rect x="88" y="56" width="3" height="10" fill="#ffffff" opacity="1"/>
              <polygon points="91,56 110,62 91,68" fill="#3b82f6" stroke="#ffffff" strokeWidth="2" opacity="1" filter="url(#superGlow)">
                <animate attributeName="points" dur="1.8s" repeatCount="indefinite"
                  values="91,56 110,62 91,68;
                          91,56 117,62 91,68;
                          91,56 110,62 91,68" />
              </polygon>

              {/* Rear Mast Flag - Cyan */}
              <rect x="153" y="61" width="3" height="10" fill="#ffffff" opacity="1"/>
              <polygon points="156,61 175,67 156,73" fill="#06b6d4" stroke="#ffffff" strokeWidth="2" opacity="1" filter="url(#superGlow)">
                <animate attributeName="points" dur="1.8s" repeatCount="indefinite"
                  values="156,61 175,67 156,73;
                          156,61 182,67 156,73;
                          156,61 175,67 156,73" />
              </polygon>

              {/* Additional Sharp Accent Lines for Pop */}
              <line x1="60" y1="155" x2="180" y2="155" stroke="#ffffff" strokeWidth="2" opacity="0.7" strokeDasharray="5,3"/>
              <line x1="80" y1="135" x2="160" y2="135" stroke="#06b6d4" strokeWidth="2" opacity="0.8" filter="url(#superGlow)"/>
            </svg>
          </motion.div>

          {/* Storm Spray and Foam Effects - Red & Blue Particles */}
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full"
              style={{
                right: `${12 + i * 2.5}%`,
                bottom: `${18 + (i % 6) * 8}%`,
                width: i % 3 === 0 ? '8px' : '6px',
                height: i % 3 === 0 ? '8px' : '6px',
                backgroundColor: i % 2 === 0 ? '#ef4444' : '#ffffff',
              }}
              animate={{
                opacity: [0, 0.9, 0],
                scale: [0, 2, 0],
                y: [0, -40, -80],
              }}
              transition={{
                duration: 2 + (i % 3),
                repeat: Infinity,
                delay: i * 0.25,
              }}
            />
          ))}

          {/* Mystical Blue & Cyan Sparkles Around Ship */}
          {[...Array(15)].map((_, i) => (
            <motion.div
              key={`sparkle-${i}`}
              className="absolute rounded-full"
              style={{
                right: `${13 + i * 2}%`,
                bottom: `${20 + (i % 4) * 9}%`,
                width: i % 2 === 0 ? '6px' : '5px',
                height: i % 2 === 0 ? '6px' : '5px',
                backgroundColor: i % 3 === 0 ? '#3b82f6' : '#06b6d4',
              }}
              animate={{
                opacity: [0, 1, 0],
                scale: [0, 1.8, 0],
              }}
              transition={{
                duration: 2.5,
                repeat: Infinity,
                delay: i * 0.35,
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
