'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';

const Offer = () => {
  return (
    <section id="offer" className="relative py-32 overflow-hidden">
      {/* Dramatic Dark Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-[#1a0033] via-[#0a0a0f] to-[#0a192f]"></div>

        {/* Animated Background Image */}
        <div className="absolute inset-0 opacity-10">
          <Image
            src="https://images.unsplash.com/photo-1639322537228-f710d846310a?w=1920&q=80"
            alt="Background"
            fill
            className="object-cover"
          />
        </div>

        {/* Gradient Overlays */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-indigo-900/30 via-transparent to-transparent"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-purple-900/30 via-transparent to-transparent"></div>

        {/* Glowing Orbs */}
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-indigo-600/20 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-pink-600/20 rounded-full blur-3xl animate-pulse-slow animation-delay-2000"></div>
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
          <div className="relative glass-effect rounded-3xl overflow-hidden">
            {/* Glow Effect */}
            <div className="absolute inset-0 bg-gradient-accent opacity-5 blur-2xl"></div>
            <div className="absolute -inset-1 bg-gradient-accent opacity-20 blur-xl"></div>

            <div className="relative p-12 md:p-16">
              {/* Badge */}
              <motion.div
                initial={{ y: -20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="inline-flex items-center space-x-2 px-6 py-3 bg-gradient-accent rounded-full mb-8"
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
                className="text-4xl md:text-6xl font-bold font-[family-name:var(--font-space-grotesk)] mb-8 leading-tight"
              >
                First 5 Founders Get Their MVP{' '}
                <span className="bg-gradient-accent bg-clip-text text-transparent text-glow">
                  100% FREE!
                </span>
              </motion.h2>

              {/* Description */}
              <motion.p
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="text-xl text-gray-300 mb-12 max-w-3xl leading-relaxed"
              >
                We're celebrating our launch by offering the first 5 founders a completely free MVP development.
                That's thousands of dollars in value, absolutely free. But you need to act fast – spots are filling up!
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
                    className="glass-effect rounded-xl p-6 hover:bg-white/10 transition-all duration-300 group"
                  >
                    <div className="flex items-start space-x-3">
                      <div className="w-8 h-8 bg-gradient-accent rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                        <span className="text-white font-bold">{feature.icon}</span>
                      </div>
                      <div className="flex-1">
                        <div className="text-white font-semibold mb-1">
                          {feature.text}
                        </div>
                        <div className="text-gray-400 text-sm line-through">
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
                className="text-center mb-12 p-8 glass-effect rounded-2xl"
              >
                <div className="text-gray-400 text-lg mb-2">Total Value</div>
                <div className="text-5xl font-bold mb-2">
                  <span className="line-through text-gray-600">$25,000</span>
                  <span className="ml-4 bg-gradient-accent bg-clip-text text-transparent">
                    $0
                  </span>
                </div>
                <div className="text-gray-400">For the first 5 founders only</div>
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
                  className="inline-flex items-center space-x-3 px-12 py-6 bg-gradient-accent text-white rounded-full font-bold text-xl hover:glow-effect transition-all duration-300 hover:scale-105 group"
                >
                  <span>Claim Your Free Spot</span>
                  <span className="text-2xl group-hover:translate-x-2 transition-transform">
                    🎁
                  </span>
                </Link>

                <div className="flex items-center justify-center space-x-2 text-pink-400 font-semibold">
                  <span className="text-2xl">⏰</span>
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
                className="glass-effect rounded-xl p-6 text-center hover:bg-white/10 transition-all duration-300 group"
              >
                <div className="text-4xl mb-2 group-hover:scale-110 transition-transform">
                  {stat.icon}
                </div>
                <div className="text-3xl font-bold bg-gradient-accent bg-clip-text text-transparent mb-1">
                  {stat.value}
                </div>
                <div className="text-gray-400 text-sm">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Offer;
