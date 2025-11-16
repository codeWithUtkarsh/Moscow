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

        {/* Glowing Vector Shapes - Silver Lining Effect */}
        <svg className="absolute inset-0 w-full h-full opacity-40" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <filter id="glow">
              <feGaussianBlur stdDeviation="8" result="coloredBlur"/>
              <feMerge>
                <feMergeNode in="coloredBlur"/>
                <feMergeNode in="SourceGraphic"/>
              </feMerge>
            </filter>
            <linearGradient id="silverGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" style={{stopColor: '#a78bfa', stopOpacity: 0.8}} />
              <stop offset="50%" style={{stopColor: '#e0e7ff', stopOpacity: 1}} />
              <stop offset="100%" style={{stopColor: '#6366f1', stopOpacity: 0.8}} />
            </linearGradient>
          </defs>

          {/* Organic cloud-like shapes with glowing edges */}
          <path
            d="M 100 200 Q 200 150, 350 200 T 650 200 Q 750 250, 800 200 L 800 0 L 100 0 Z"
            fill="none"
            stroke="url(#silverGradient)"
            strokeWidth="2"
            filter="url(#glow)"
            opacity="0.6"
          />

          <path
            d="M 1920 600 Q 1600 550, 1400 600 T 1000 600 Q 800 650, 600 600 L 600 800 L 1920 800 Z"
            fill="none"
            stroke="url(#silverGradient)"
            strokeWidth="2"
            filter="url(#glow)"
            opacity="0.5"
          />

          <ellipse
            cx="30%"
            cy="40%"
            rx="300"
            ry="200"
            fill="none"
            stroke="url(#silverGradient)"
            strokeWidth="1.5"
            filter="url(#glow)"
            opacity="0.3"
          />

          <ellipse
            cx="75%"
            cy="65%"
            rx="250"
            ry="180"
            fill="none"
            stroke="url(#silverGradient)"
            strokeWidth="1.5"
            filter="url(#glow)"
            opacity="0.4"
          />
        </svg>

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

          {/* Atlantis Ship - Sailing Confidently Through Storm */}
          <motion.div
            className="absolute"
            style={{ left: '18%', bottom: '35%' }}
            animate={{
              y: [0, -25, 5, -20, 0],
              x: [0, 8, -3, 12, 0],
              rotate: [0, -4, 2, -3, 0]
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <svg width="220" height="220" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <linearGradient id="shipGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" style={{stopColor: '#a78bfa', stopOpacity: 0.9}} />
                  <stop offset="100%" style={{stopColor: '#6366f1', stopOpacity: 0.9}} />
                </linearGradient>
                <filter id="shipGlow">
                  <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
                  <feMerge>
                    <feMergeNode in="coloredBlur"/>
                    <feMergeNode in="SourceGraphic"/>
                  </feMerge>
                </filter>
              </defs>

              {/* Ship Hull */}
              <path d="M 50 140 Q 40 120, 50 100 L 70 100 L 130 100 L 150 100 Q 160 120, 150 140 L 140 145 L 60 145 Z"
                fill="url(#shipGradient)" stroke="#e0e7ff" strokeWidth="2" filter="url(#shipGlow)" opacity="0.9"/>

              {/* Main Mast */}
              <rect x="95" y="50" width="4" height="60" fill="#e0e7ff" filter="url(#shipGlow)" opacity="0.8"/>

              {/* Sail 1 - Main Sail */}
              <path d="M 99 55 Q 130 70, 135 85 L 99 95 Z" fill="#a78bfa" stroke="#e0e7ff" strokeWidth="1.5" opacity="0.7">
                <animate attributeName="d" dur="4s" repeatCount="indefinite"
                  values="M 99 55 Q 130 70, 135 85 L 99 95 Z;
                          M 99 55 Q 135 70, 140 85 L 99 95 Z;
                          M 99 55 Q 130 70, 135 85 L 99 95 Z" />
              </path>

              {/* Sail 2 - Front Sail */}
              <path d="M 97 65 Q 70 75, 65 90 L 97 100 Z" fill="#6366f1" stroke="#e0e7ff" strokeWidth="1.5" opacity="0.7">
                <animate attributeName="d" dur="4s" repeatCount="indefinite"
                  values="M 97 65 Q 70 75, 65 90 L 97 100 Z;
                          M 97 65 Q 65 75, 60 90 L 97 100 Z;
                          M 97 65 Q 70 75, 65 90 L 97 100 Z" />
              </path>

              {/* Decorative Details */}
              <circle cx="100" cy="110" r="3" fill="#fbbf24" opacity="0.8" filter="url(#shipGlow)"/>
              <path d="M 60 145 Q 100 150, 140 145" stroke="#fbbf24" strokeWidth="2" fill="none" opacity="0.6"/>

              {/* Mystical Glow at Ship Base - Enhanced for Storm */}
              <ellipse cx="100" cy="145" rx="60" ry="12" fill="#06b6d4" opacity="0.4" filter="url(#shipGlow)">
                <animate attributeName="opacity" dur="2.5s" repeatCount="indefinite"
                  values="0.4;0.7;0.4" />
                <animate attributeName="rx" dur="2.5s" repeatCount="indefinite"
                  values="60;70;60" />
              </ellipse>

              {/* Storm Lightning Glow */}
              <circle cx="100" cy="90" r="40" fill="#a78bfa" opacity="0.1" filter="url(#shipGlow)">
                <animate attributeName="opacity" dur="5s" repeatCount="indefinite"
                  values="0.1;0.3;0.1;0.1;0.1" />
              </circle>

              {/* Flag */}
              <rect x="99" y="48" width="1" height="8" fill="#e0e7ff" opacity="0.8"/>
              <path d="M 100 48 L 115 52 L 100 56 Z" fill="#ec4899" opacity="0.8">
                <animate attributeName="d" dur="2s" repeatCount="indefinite"
                  values="M 100 48 L 115 52 L 100 56 Z;
                          M 100 48 L 118 52 L 100 56 Z;
                          M 100 48 L 115 52 L 100 56 Z" />
              </path>
            </svg>
          </motion.div>

          {/* Storm Spray and Foam Effects */}
          {[...Array(12)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute bg-white rounded-full"
              style={{
                left: `${10 + i * 7}%`,
                bottom: `${25 + (i % 4) * 8}%`,
                width: i % 3 === 0 ? '4px' : '3px',
                height: i % 3 === 0 ? '4px' : '3px',
              }}
              animate={{
                opacity: [0, 0.8, 0],
                scale: [0, 1.5, 0],
                y: [0, -20, -40],
              }}
              transition={{
                duration: 2 + (i % 3),
                repeat: Infinity,
                delay: i * 0.3,
              }}
            />
          ))}

          {/* Mystical Blue Sparkles Around Ship */}
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={`sparkle-${i}`}
              className="absolute w-3 h-3 bg-cyan-300 rounded-full"
              style={{
                left: `${16 + i * 3}%`,
                bottom: `${32 + (i % 2) * 6}%`,
              }}
              animate={{
                opacity: [0, 1, 0],
                scale: [0, 1.2, 0],
              }}
              transition={{
                duration: 2.5,
                repeat: Infinity,
                delay: i * 0.5,
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
