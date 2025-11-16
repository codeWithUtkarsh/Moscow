'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { FileText, Wrench, Rocket, type LucideIcon } from 'lucide-react';

const steps: Array<{
  number: string;
  title: string;
  description: string;
  icon: LucideIcon;
  image: string;
}> = [
  {
    number: '01',
    title: 'Tell Us Your Idea',
    description: 'Describe your app in simple words. No tech knowledge needed.',
    icon: FileText,
    image: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?w=600&q=80',
  },
  {
    number: '02',
    title: 'We Build Your App',
    description: 'We code, design, and test everything. You just watch and give feedback.',
    icon: Wrench,
    image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&q=80',
  },
  {
    number: '03',
    title: 'Launch & Make Money',
    description: 'Get your ready app. Start getting customers. Begin earning.',
    icon: Rocket,
    image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=600&q=80',
  },
];

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="relative py-32 overflow-hidden">
      {/* Gaia Background */}
      <div className="absolute inset-0 bg-gradient-dark">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-purple-600/15 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-teal-600/15 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 w-[400px] h-[400px] bg-pink-500/10 rounded-full blur-3xl"></div>

        {/* Glowing Vector Shapes - Gaia Cosmic Effect */}
        <svg className="absolute inset-0 w-full h-full opacity-35" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <filter id="glow-howitworks">
              <feGaussianBlur stdDeviation="7" result="coloredBlur"/>
              <feMerge>
                <feMergeNode in="coloredBlur"/>
                <feMergeNode in="SourceGraphic"/>
              </feMerge>
            </filter>
            <linearGradient id="silverGradient-howitworks" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" style={{stopColor: '#c084fc', stopOpacity: 0.7}} />
              <stop offset="50%" style={{stopColor: '#14b8a6', stopOpacity: 1}} />
              <stop offset="100%" style={{stopColor: '#f0abfc', stopOpacity: 0.7}} />
            </linearGradient>
          </defs>

          {/* Diagonal flowing lines */}
          <path
            d="M 0 100 Q 500 200, 1000 100 T 1920 100"
            fill="none"
            stroke="url(#silverGradient-howitworks)"
            strokeWidth="2"
            filter="url(#glow-howitworks)"
            opacity="0.4"
          />

          <path
            d="M 0 800 Q 600 700, 1200 800 T 1920 800"
            fill="none"
            stroke="url(#silverGradient-howitworks)"
            strokeWidth="2"
            filter="url(#glow-howitworks)"
            opacity="0.5"
          />

          <path
            d="M 200 400 Q 600 300, 1000 400 T 1800 400"
            fill="none"
            stroke="url(#silverGradient-howitworks)"
            strokeWidth="1.5"
            filter="url(#glow-howitworks)"
            opacity="0.35"
          />

          <ellipse
            cx="50%"
            cy="50%"
            rx="400"
            ry="250"
            fill="none"
            stroke="url(#silverGradient-howitworks)"
            strokeWidth="1.5"
            filter="url(#glow-howitworks)"
            opacity="0.25"
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
            How It{' '}
            <span className="bg-gradient-accent bg-clip-text text-transparent">
              Works
            </span>
          </h2>
          <p className="text-2xl font-bold text-white max-w-2xl mx-auto">
            3 easy steps. No confusion. No hassle.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="space-y-32">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className={`grid lg:grid-cols-2 gap-12 items-center ${
                index % 2 === 1 ? 'lg:grid-flow-dense' : ''
              }`}
            >
              {/* Content */}
              <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                <div className="space-y-6">
                  <div className="inline-flex items-center space-x-4">
                    <div className="text-7xl font-bold bg-gradient-accent bg-clip-text text-transparent font-display">
                      {step.number}
                    </div>
                    <div className="relative">
                      <step.icon className="w-16 h-16 text-cyan-400" strokeWidth={2} />
                      <div className="absolute inset-0 bg-cyan-400/20 blur-2xl"></div>
                    </div>
                  </div>
                  <h3 className="text-4xl font-bold font-display">
                    {step.title}
                  </h3>
                  <p className="text-xl text-gray-400 leading-relaxed">
                    {step.description}
                  </p>

                  {/* Progress Bar */}
                  <div className="pt-4">
                    <div className="flex items-center space-x-4">
                      <div className="flex-1 h-2 bg-gray-800 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: '100%' }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, delay: 0.5 }}
                          className="h-full bg-gradient-accent"
                        ></motion.div>
                      </div>
                      <span className="text-sm text-gray-500 font-mono">
                        Step {index + 1}/3
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Image */}
              <div className={index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                  className="relative h-[400px] rounded-3xl overflow-hidden glass-effect group"
                >
                  <Image
                    src={step.image}
                    alt={step.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>

                  {/* Overlay Content */}
                  <div className="absolute bottom-0 left-0 right-0 p-8">
                    <div className="flex items-center space-x-4">
                      <div className="w-16 h-16 bg-gradient-accent rounded-xl flex items-center justify-center">
                        <step.icon className="w-8 h-8 text-white" strokeWidth={2.5} />
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-white">
                          {step.title}
                        </div>
                        <div className="text-gray-300">
                          Step {step.number}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Glow Effect on Hover */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute inset-0 bg-gradient-accent opacity-10"></div>
                  </div>
                </motion.div>
              </div>

              {/* Connector Line (except for last item) */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block lg:col-span-2 h-32 relative">
                  <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-indigo-500 via-purple-500 to-pink-500 opacity-30 -translate-x-1/2"></div>
                  <motion.div
                    initial={{ height: 0 }}
                    whileInView={{ height: '100%' }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="absolute left-1/2 top-0 w-1 bg-gradient-accent -translate-x-1/2"
                  ></motion.div>
                </div>
              )}
            </motion.div>
          ))}
        </div>

        {/* Timeline Summary */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-32 text-center"
        >
          <div className="glass-effect rounded-2xl p-8 inline-block">
            <div className="text-5xl font-bold bg-gradient-accent bg-clip-text text-transparent mb-4">
              7-14 Days
            </div>
            <div className="text-xl text-gray-400">
              Average time from idea to working MVP
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HowItWorks;
