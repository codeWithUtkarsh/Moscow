'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Zap, Globe, Gem, Target, RefreshCw, Handshake, type LucideIcon } from 'lucide-react';

const features: Array<{
  icon: LucideIcon;
  title: string;
  description: string;
  image: string;
}> = [
  {
    icon: Zap,
    title: '7-Day Delivery',
    description: 'Your app ready in one week, guaranteed.',
    image: 'https://images.unsplash.com/photo-1556761175-b413da4baf72?w=600&q=80',
  },
  {
    icon: Globe,
    title: 'Any Business Type',
    description: 'E-commerce, mobile apps, websites - we build it all.',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=600&q=80',
  },
  {
    icon: Gem,
    title: 'Professional Quality',
    description: 'Top-grade code that actually works and scales.',
    image: 'https://images.unsplash.com/photo-1516116216624-53e697fedbea?w=600&q=80',
  },
  {
    icon: Target,
    title: 'No Wasted Features',
    description: 'Only what you need. Nothing extra. Pure value.',
    image: 'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=600&q=80',
  },
  {
    icon: RefreshCw,
    title: 'You Stay In Control',
    description: 'See progress daily. Give feedback anytime.',
    image: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?w=600&q=80',
  },
  {
    icon: Handshake,
    title: 'Complete Support',
    description: 'Help from idea to launch and beyond. Always there.',
    image: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=600&q=80',
  },
];

const Features = () => {
  return (
    <section id="features" className="relative py-32 overflow-hidden">
      {/* Dark Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0f] via-[#1a1a2e] to-[#0a0a0f]">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1a1a2e33_1px,transparent_1px),linear-gradient(to_bottom,#1a1a2e33_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-20"></div>

        {/* Glowing Vector Shapes - Silver Lining Effect */}
        <svg className="absolute inset-0 w-full h-full opacity-30" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <filter id="glow-features">
              <feGaussianBlur stdDeviation="6" result="coloredBlur"/>
              <feMerge>
                <feMergeNode in="coloredBlur"/>
                <feMergeNode in="SourceGraphic"/>
              </feMerge>
            </filter>
            <linearGradient id="silverGradient-features" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" style={{stopColor: '#06b6d4', stopOpacity: 0.6}} />
              <stop offset="50%" style={{stopColor: '#a5f3fc', stopOpacity: 1}} />
              <stop offset="100%" style={{stopColor: '#0891b2', stopOpacity: 0.6}} />
            </linearGradient>
          </defs>

          {/* Flowing curved lines */}
          <path
            d="M 0 300 Q 400 250, 800 300 T 1600 300"
            fill="none"
            stroke="url(#silverGradient-features)"
            strokeWidth="2"
            filter="url(#glow-features)"
            opacity="0.5"
          />

          <path
            d="M 1920 500 Q 1400 450, 1000 500 T 200 500"
            fill="none"
            stroke="url(#silverGradient-features)"
            strokeWidth="2"
            filter="url(#glow-features)"
            opacity="0.4"
          />

          <circle
            cx="20%"
            cy="30%"
            r="150"
            fill="none"
            stroke="url(#silverGradient-features)"
            strokeWidth="1.5"
            filter="url(#glow-features)"
            opacity="0.3"
          />

          <circle
            cx="80%"
            cy="70%"
            r="120"
            fill="none"
            stroke="url(#silverGradient-features)"
            strokeWidth="1.5"
            filter="url(#glow-features)"
            opacity="0.35"
          />
        </svg>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold font-display mb-6">
            Why Choose{' '}
            <span className="bg-gradient-accent bg-clip-text text-transparent">
              Us
            </span>
            ?
          </h2>
          <p className="text-2xl font-bold text-white max-w-2xl mx-auto">
            We make app building simple, fast, and affordable
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative"
            >
              <div className="relative h-full glass-effect rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 overflow-hidden">
                {/* Background Image */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-300">
                  <Image
                    src={feature.image}
                    alt={feature.title}
                    fill
                    className="object-cover"
                  />
                </div>

                {/* Content */}
                <div className="relative z-10">
                  <div className="relative inline-block mb-6">
                    <feature.icon className="w-14 h-14 text-cyan-400 group-hover:text-white transition-colors duration-300 group-hover:scale-110" strokeWidth={2} />
                    <div className="absolute inset-0 bg-cyan-400/20 blur-xl group-hover:bg-cyan-400/30 transition-all"></div>
                  </div>
                  <h3 className="text-2xl font-bold mb-4 font-display group-hover:text-transparent group-hover:bg-gradient-accent group-hover:bg-clip-text transition-all duration-300">
                    {feature.title}
                  </h3>
                  <p className="text-gray-400 leading-relaxed">
                    {feature.description}
                  </p>
                </div>

                {/* Gradient Border on Hover */}
                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute inset-0 rounded-2xl bg-gradient-accent opacity-20 blur-xl"></div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center mt-20"
        >
          <a
            href="#signup"
            className="inline-flex items-center space-x-2 px-8 py-4 bg-gradient-accent text-white rounded-full font-semibold text-lg hover:glow-effect transition-all duration-300 hover:scale-105"
          >
            <span>Start Building Your MVP</span>
            <span>→</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Features;
