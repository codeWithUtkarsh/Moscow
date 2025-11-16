'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { Check, Gift, Clock } from 'lucide-react';

const Offer = () => {
  return (
    <section id="offer" className="relative py-32 overflow-hidden">
      {/* Light Earth Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-[#f5f3ef] via-[#e8e4db] to-[#d4cfc4]"></div>

        {/* Animated Background Image */}
        <div className="absolute inset-0 opacity-5">
          <Image
            src="https://images.unsplash.com/photo-1639322537228-f710d846310a?w=1920&q=80"
            alt="Background"
            fill
            className="object-cover"
          />
        </div>

        {/* Earth Gradient Overlays */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-amber-100/40 via-transparent to-transparent"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-emerald-100/30 via-transparent to-transparent"></div>

        {/* Flowing Vector Shapes - Earth Tones */}
        <svg className="absolute inset-0 w-full h-full opacity-20" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <filter id="glow-offer">
              <feGaussianBlur stdDeviation="10" result="coloredBlur"/>
              <feMerge>
                <feMergeNode in="coloredBlur"/>
                <feMergeNode in="SourceGraphic"/>
              </feMerge>
            </filter>
            <linearGradient id="silverGradient-offer" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" style={{stopColor: '#7c9885', stopOpacity: 0.6}} />
              <stop offset="50%" style={{stopColor: '#a88860', stopOpacity: 0.8}} />
              <stop offset="100%" style={{stopColor: '#8b6f47', stopOpacity: 0.6}} />
            </linearGradient>
          </defs>

          {/* Dramatic sweeping curves */}
          <path
            d="M -100 400 Q 400 200, 800 400 T 1600 400 Q 1900 500, 2020 400"
            fill="none"
            stroke="url(#silverGradient-offer)"
            strokeWidth="3"
            filter="url(#glow-offer)"
            opacity="0.6"
          />

          <path
            d="M 1920 200 Q 1400 100, 1000 200 T 200 200 Q 0 300, -100 200"
            fill="none"
            stroke="url(#silverGradient-offer)"
            strokeWidth="2.5"
            filter="url(#glow-offer)"
            opacity="0.5"
          />

          <ellipse
            cx="25%"
            cy="25%"
            rx="200"
            ry="300"
            fill="none"
            stroke="url(#silverGradient-offer)"
            strokeWidth="2"
            filter="url(#glow-offer)"
            opacity="0.35"
          />

          <ellipse
            cx="75%"
            cy="75%"
            rx="250"
            ry="200"
            fill="none"
            stroke="url(#silverGradient-offer)"
            strokeWidth="2"
            filter="url(#glow-offer)"
            opacity="0.4"
          />
        </svg>

        {/* Soft Glowing Orbs */}
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-emerald-200/30 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-amber-200/30 rounded-full blur-3xl animate-pulse-slow animation-delay-2000"></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative"
        >
          {/* Main Card */}
          <div className="relative bg-white/70 backdrop-blur-sm border-2 border-stone-200 rounded-3xl overflow-hidden shadow-2xl">
            {/* Subtle Glow Effect */}
            <div className="absolute inset-0 bg-gradient-accent opacity-5 blur-2xl"></div>
            <div className="absolute -inset-1 bg-gradient-accent opacity-10 blur-xl"></div>

            <div className="relative p-12 md:p-16">
              {/* Badge */}
              <motion.div
                initial={{ y: -20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="inline-flex items-center space-x-2 px-6 py-3 bg-gradient-accent rounded-full mb-8 shadow-lg"
              >
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-white"></span>
                </span>
                <span className="text-white font-bold text-sm uppercase tracking-wider">
                  Limited Time Offer
                </span>
              </motion.div>

              {/* Title */}
              <motion.h2
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="text-4xl md:text-6xl font-bold font-display mb-8 leading-tight text-stone-800"
              >
                First 5 People Get{' '}
                <span className="bg-gradient-accent bg-clip-text text-transparent">
                  100% FREE APP
                </span>
              </motion.h2>

              {/* Description */}
              <motion.p
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="text-2xl font-bold text-stone-700 mb-12 max-w-3xl leading-relaxed"
              >
                Worth $25,000. Completely FREE. No tricks. No hidden fees.
              </motion.p>
              <motion.p
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.45 }}
                className="text-lg text-stone-600 mb-12 max-w-3xl"
              >
                Sign up now before all 5 spots are gone!
              </motion.p>

              {/* Features Grid */}
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
                className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12"
              >
                {[
                  { icon: '✓', text: 'Full MVP Development', value: '$15,000' },
                  { icon: '✓', text: 'Modern Tech Stack', value: '$5,000' },
                  { icon: '✓', text: 'Production Ready', value: '$3,000' },
                  { icon: '✓', text: '30-Day Support', value: '$2,000' },
                ].map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.6 + index * 0.1 }}
                    className="bg-white/60 backdrop-blur-sm border border-stone-200 rounded-xl p-6 hover:bg-white/80 hover:shadow-lg transition-all duration-300 group"
                  >
                    <div className="flex items-start space-x-3">
                      <div className="w-8 h-8 bg-gradient-accent rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform shadow-md">
                        <Check className="w-5 h-5 text-white" strokeWidth={3} />
                      </div>
                      <div className="flex-1">
                        <div className="text-stone-800 font-semibold mb-1">
                          {feature.text}
                        </div>
                        <div className="text-stone-500 text-sm line-through">
                          {feature.value}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>

              {/* Total Value */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.9 }}
                className="text-center mb-12 p-8 bg-white/60 backdrop-blur-sm border border-stone-200 rounded-2xl shadow-lg"
              >
                <div className="text-stone-600 text-lg mb-2 font-semibold">Total Value</div>
                <div className="text-5xl font-bold mb-2">
                  <span className="line-through text-stone-400">$25,000</span>
                  <span className="ml-4 bg-gradient-accent bg-clip-text text-transparent">
                    $0
                  </span>
                </div>
                <div className="text-stone-600 font-medium">For the first 5 founders only</div>
              </motion.div>

              {/* CTA */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 1 }}
                className="text-center space-y-6"
              >
                <Link
                  href="#signup"
                  className="inline-flex items-center space-x-3 px-12 py-6 bg-gradient-accent text-white rounded-full font-bold text-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 group"
                >
                  <span>Claim Your Free Spot</span>
                  <Gift className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
                </Link>

                <div className="flex items-center justify-center space-x-2 text-emerald-700 font-semibold">
                  <Clock className="w-6 h-6" />
                  <span>Hurry! Only 5 spots available</span>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Floating Stats */}
          <div className="absolute -bottom-16 left-0 right-0 hidden lg:grid grid-cols-3 gap-6 px-12">
            {[
              { value: '5', label: 'Spots Left', icon: '🎯' },
              { value: '$25K', label: 'Value FREE', icon: '💰' },
              { value: '7-14d', label: 'Delivery', icon: '⚡' },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 1.1 + index * 0.1 }}
                className="bg-white/60 backdrop-blur-sm border border-stone-200 rounded-xl p-6 text-center hover:bg-white/80 hover:shadow-lg transition-all duration-300 group"
              >
                <div className="text-4xl mb-2 group-hover:scale-110 transition-transform">
                  {stat.icon}
                </div>
                <div className="text-3xl font-bold bg-gradient-accent bg-clip-text text-transparent mb-1">
                  {stat.value}
                </div>
                <div className="text-stone-600 text-sm font-semibold">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Offer;
