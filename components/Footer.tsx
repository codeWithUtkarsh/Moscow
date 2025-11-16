'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Waves, Twitter, Linkedin, Github, MessageSquare } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    product: [
      { label: 'Features', href: '#features' },
      { label: 'How It Works', href: '#how-it-works' },
      { label: 'Special Offer', href: '#offer' },
      { label: 'Pricing', href: '#signup' },
    ],
    company: [
      { label: 'About Us', href: '#home' },
      { label: 'Contact', href: '#signup' },
      { label: 'Careers', href: '#signup' },
      { label: 'Blog', href: '#home' },
    ],
    legal: [
      { label: 'Privacy Policy', href: '#home' },
      { label: 'Terms of Service', href: '#home' },
      { label: 'Cookie Policy', href: '#home' },
      { label: 'GDPR', href: '#home' },
    ],
  };

  const socialLinks = [
    { icon: Twitter, label: 'Twitter', href: '#' },
    { icon: Linkedin, label: 'LinkedIn', href: '#' },
    { icon: Github, label: 'GitHub', href: '#' },
    { icon: MessageSquare, label: 'Discord', href: '#' },
  ];

  return (
    <footer className="relative bg-gradient-to-b from-[#0a0a0f] to-[#000000] overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1a1a2e33_1px,transparent_1px),linear-gradient(to_bottom,#1a1a2e33_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-10"></div>

      {/* Gradient Glow */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-accent opacity-30"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <Link href="#home" className="flex items-center space-x-3 group">
                <div className="relative">
                  <Waves className="w-10 h-10 text-cyan-400" strokeWidth={2.5} />
                  <div className="absolute inset-0 bg-cyan-400/20 blur-xl rounded-full"></div>
                </div>
                <span className="text-2xl font-bold bg-gradient-accent bg-clip-text text-transparent font-display">
                  Atlantis.AI
                </span>
              </Link>

              <p className="text-gray-400 leading-relaxed max-w-sm">
                Transforming ideas into reality, one MVP at a time. Building the future of rapid product development with AI.
              </p>

              {/* Social Links */}
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    aria-label={social.label}
                    whileHover={{ scale: 1.1, y: -2 }}
                    className="w-12 h-12 glass-effect rounded-xl flex items-center justify-center hover:bg-gradient-accent transition-all duration-300 group"
                  >
                    <social.icon className="w-5 h-5 text-gray-400 group-hover:text-white group-hover:scale-110 transition-all" />
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Product Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <h4 className="text-white font-bold mb-6 font-display">
              Product
            </h4>
            <ul className="space-y-3">
              {footerLinks.product.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-white hover:translate-x-1 inline-block transition-all duration-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Company Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h4 className="text-white font-bold mb-6 font-display">
              Company
            </h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-white hover:translate-x-1 inline-block transition-all duration-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Legal Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <h4 className="text-white font-bold mb-6 font-display">
              Legal
            </h4>
            <ul className="space-y-3">
              {footerLinks.legal.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-white hover:translate-x-1 inline-block transition-all duration-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-gray-500 text-sm"
            >
              &copy; {currentYear} Atlantis.AI. All rights reserved.
            </motion.p>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="flex items-center space-x-6 text-sm text-gray-500"
            >
              <span>Built with Next.js & TypeScript</span>
              <span className="hidden md:inline">•</span>
              <span className="hidden md:inline">Powered by AI</span>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Bottom Glow Effect */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-96 h-32 bg-gradient-accent opacity-5 blur-3xl"></div>
    </footer>
  );
};

export default Footer;
