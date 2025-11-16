'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const features = [
  {
    icon: '⚡',
    title: 'Lightning Speed',
    description: 'Get your MVP built in days, not months. Our AI-powered workflow accelerates development without compromising quality.',
    image: 'https://images.unsplash.com/photo-1556761175-b413da4baf72?w=600&q=80',
  },
  {
    icon: '🌐',
    title: 'Any Industry',
    description: 'Healthcare, FinTech, E-commerce, SaaS – we\'ve got you covered. Our platform adapts to your unique business needs.',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=600&q=80',
  },
  {
    icon: '💎',
    title: 'Premium Quality',
    description: 'Professional-grade code, modern tech stack, and best practices. Your MVP will be production-ready from day one.',
    image: 'https://images.unsplash.com/photo-1516116216624-53e697fedbea?w=600&q=80',
  },
  {
    icon: '🎯',
    title: 'Laser Focused',
    description: 'We build exactly what you need – no bloat, no unnecessary features. Just a lean, mean MVP machine.',
    image: 'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=600&q=80',
  },
  {
    icon: '🔄',
    title: 'Iterative Process',
    description: 'Continuous feedback and rapid iterations ensure your vision comes to life exactly as you imagined.',
    image: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?w=600&q=80',
  },
  {
    icon: '🤝',
    title: 'Full Support',
    description: 'From initial concept to launch and beyond, our team is with you every step of the journey.',
    image: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=600&q=80',
  },
];

const Features = () => {
  return (
    <section id="features" className="relative py-32 overflow-hidden">
      {/* Dark Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0f] via-[#1a1a2e] to-[#0a0a0f]">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1a1a2e33_1px,transparent_1px),linear-gradient(to_bottom,#1a1a2e33_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-20"></div>
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
            Why{' '}
            <span className="bg-gradient-accent bg-clip-text text-transparent">
              Atlantis.AI
            </span>
            ?
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Lightning-fast MVP development powered by cutting-edge AI
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
                  <div className="text-5xl mb-6 transform group-hover:scale-110 transition-transform duration-300">
                    {feature.icon}
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
