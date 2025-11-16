'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { Rocket, DollarSign, Target, Sparkles, Mail, type LucideIcon } from 'lucide-react';

interface FormData {
  name: string;
  email: string;
  company: string;
  industry: string;
  idea: string;
}

const Signup = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    company: '',
    industry: '',
    idea: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState<Partial<FormData>>({});

  const validateForm = (): boolean => {
    const newErrors: Partial<FormData> = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Invalid email format';
    }

    if (!formData.industry) {
      newErrors.industry = 'Please select an industry';
    }

    if (!formData.idea.trim()) {
      newErrors.idea = 'Please describe your idea';
    } else if (formData.idea.trim().length < 20) {
      newErrors.idea = 'Please provide more details (min 20 characters)';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000));

    console.log('Form submitted:', formData);

    // Store in localStorage for demo
    const submissions = JSON.parse(localStorage.getItem('atlantis-submissions') || '[]');
    submissions.push({ ...formData, timestamp: new Date().toISOString() });
    localStorage.setItem('atlantis-submissions', JSON.stringify(submissions));

    setIsSubmitted(true);
    setIsSubmitting(false);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error for this field
    if (errors[name as keyof FormData]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  return (
    <section id="signup" className="relative py-32 overflow-hidden">
      {/* Light Earth Background */}
      <div className="absolute inset-0 bg-gradient-dark">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#a8886015_1px,transparent_1px),linear-gradient(to_bottom,#a8886015_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-30"></div>

        {/* Soft Glowing Orbs */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-emerald-200/30 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-amber-200/30 rounded-full blur-3xl animate-pulse-slow animation-delay-2000"></div>

        {/* Flowing Vector Shapes - Natural Earth Tones */}
        <svg className="absolute inset-0 w-full h-full opacity-25" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <filter id="glow-signup">
              <feGaussianBlur stdDeviation="8" result="coloredBlur"/>
              <feMerge>
                <feMergeNode in="coloredBlur"/>
                <feMergeNode in="SourceGraphic"/>
              </feMerge>
            </filter>
            <linearGradient id="silverGradient-signup" x1="100%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" style={{stopColor: '#a88860', stopOpacity: 0.7}} />
              <stop offset="50%" style={{stopColor: '#7c9885', stopOpacity: 0.9}} />
              <stop offset="100%" style={{stopColor: '#5a8f7b', stopOpacity: 0.7}} />
            </linearGradient>
          </defs>

          {/* Elegant flowing curves */}
          <path
            d="M 0 250 Q 500 150, 1000 250 T 1920 250"
            fill="none"
            stroke="url(#silverGradient-signup)"
            strokeWidth="2"
            filter="url(#glow-signup)"
            opacity="0.5"
          />

          <path
            d="M 1920 650 Q 1200 550, 600 650 T 0 650"
            fill="none"
            stroke="url(#silverGradient-signup)"
            strokeWidth="2"
            filter="url(#glow-signup)"
            opacity="0.45"
          />

          <circle
            cx="15%"
            cy="35%"
            r="180"
            fill="none"
            stroke="url(#silverGradient-signup)"
            strokeWidth="1.5"
            filter="url(#glow-signup)"
            opacity="0.3"
          />

          <circle
            cx="85%"
            cy="65%"
            r="160"
            fill="none"
            stroke="url(#silverGradient-signup)"
            strokeWidth="1.5"
            filter="url(#glow-signup)"
            opacity="0.35"
          />

          <ellipse
            cx="50%"
            cy="50%"
            rx="350"
            ry="220"
            fill="none"
            stroke="url(#silverGradient-signup)"
            strokeWidth="1.5"
            filter="url(#glow-signup)"
            opacity="0.25"
          />
        </svg>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Side - Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-12"
          >
            <div>
              <h2 className="text-4xl md:text-5xl font-bold font-display mb-6 text-stone-800">
                Ready to Get Your{' '}
                <span className="bg-gradient-accent bg-clip-text text-transparent">
                  App?
                </span>
              </h2>
              <p className="text-2xl font-bold text-stone-700 leading-relaxed mb-4">
                Sign up now. Get your app in 7 days.
              </p>
              <p className="text-lg text-stone-600 leading-relaxed">
                Join people who got their ideas built fast with Atlantis.AI.
              </p>
            </div>

            {/* Benefits */}
            <div className="space-y-6">
              {([
                {
                  icon: Rocket,
                  title: 'Ready in 7 Days',
                  description: 'App delivered in one week',
                  image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&q=80',
                },
                {
                  icon: DollarSign,
                  title: 'Save $25K+',
                  description: 'Free for first 5 people',
                  image: 'https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?w=400&q=80',
                },
                {
                  icon: Target,
                  title: 'Start Earning Fast',
                  description: 'Launch and make money quickly',
                  image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&q=80',
                },
              ] as Array<{icon: LucideIcon; title: string; description: string; image: string}>).map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + index * 0.1 }}
                  className="flex items-start space-x-4 group"
                >
                  <div className="relative flex-shrink-0">
                    <div className="w-16 h-16 rounded-xl overflow-hidden bg-white/60 backdrop-blur-sm border border-stone-200">
                      <Image
                        src={benefit.image}
                        alt={benefit.title}
                        width={64}
                        height={64}
                        className="object-cover opacity-30 group-hover:opacity-50 transition-opacity"
                      />
                    </div>
                    <div className="absolute inset-0 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <benefit.icon className="w-8 h-8 text-emerald-600" strokeWidth={2} />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h4 className="text-xl font-bold mb-1 font-display text-stone-800">
                      {benefit.title}
                    </h4>
                    <p className="text-stone-600">{benefit.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Trust Indicators */}
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-white/60 backdrop-blur-sm border border-stone-200 rounded-xl p-6 text-center hover:bg-white/80 hover:shadow-lg transition-all duration-300">
                <div className="text-3xl font-bold bg-gradient-accent bg-clip-text text-transparent mb-2">
                  50+
                </div>
                <div className="text-stone-600 text-sm font-semibold">MVPs Delivered</div>
              </div>
              <div className="bg-white/60 backdrop-blur-sm border border-stone-200 rounded-xl p-6 text-center hover:bg-white/80 hover:shadow-lg transition-all duration-300">
                <div className="text-3xl font-bold bg-gradient-accent bg-clip-text text-transparent mb-2">
                  4.9/5
                </div>
                <div className="text-stone-600 text-sm font-semibold">Client Rating</div>
              </div>
            </div>
          </motion.div>

          {/* Right Side - Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="bg-white/70 backdrop-blur-sm border-2 border-stone-200 rounded-3xl p-8 md:p-12 relative overflow-hidden shadow-xl">
              {/* Glow Effect */}
              <div className="absolute -inset-1 bg-gradient-accent opacity-5 blur-xl"></div>

              <div className="relative">
                {!isSubmitted ? (
                  <>
                    <h3 className="text-3xl font-bold font-display mb-8 text-center text-stone-800">
                      Sign Up for{' '}
                      <span className="bg-gradient-accent bg-clip-text text-transparent">
                        FREE MVP
                      </span>
                    </h3>

                    <form onSubmit={handleSubmit} className="space-y-6">
                      {/* Name */}
                      <div>
                        <label htmlFor="name" className="block text-sm font-semibold mb-2 text-stone-700">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          className={`w-full px-4 py-3 bg-white/80 border ${
                            errors.name ? 'border-red-500' : 'border-stone-200'
                          } rounded-xl focus:outline-none focus:border-emerald-500 transition-colors text-stone-800 placeholder:text-stone-400`}
                          placeholder="John Doe"
                        />
                        {errors.name && (
                          <p className="text-red-500 text-sm mt-1">{errors.name}</p>
                        )}
                      </div>

                      {/* Email */}
                      <div>
                        <label htmlFor="email" className="block text-sm font-semibold mb-2 text-stone-700">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          className={`w-full px-4 py-3 bg-white/80 border ${
                            errors.email ? 'border-red-500' : 'border-stone-200'
                          } rounded-xl focus:outline-none focus:border-emerald-500 transition-colors text-stone-800 placeholder:text-stone-400`}
                          placeholder="john@example.com"
                        />
                        {errors.email && (
                          <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                        )}
                      </div>

                      {/* Company */}
                      <div>
                        <label htmlFor="company" className="block text-sm font-semibold mb-2 text-stone-700">
                          Company/Startup Name
                        </label>
                        <input
                          type="text"
                          id="company"
                          name="company"
                          value={formData.company}
                          onChange={handleChange}
                          className="w-full px-4 py-3 bg-white/80 border border-stone-200 rounded-xl focus:outline-none focus:border-emerald-500 transition-colors text-stone-800 placeholder:text-stone-400"
                          placeholder="Your Startup"
                        />
                      </div>

                      {/* Industry */}
                      <div>
                        <label htmlFor="industry" className="block text-sm font-semibold mb-2 text-stone-700">
                          Industry *
                        </label>
                        <select
                          id="industry"
                          name="industry"
                          value={formData.industry}
                          onChange={handleChange}
                          className={`w-full px-4 py-3 bg-white/80 border ${
                            errors.industry ? 'border-red-500' : 'border-stone-200'
                          } rounded-xl focus:outline-none focus:border-emerald-500 transition-colors text-stone-800`}
                        >
                          <option value="">Select your industry</option>
                          <option value="saas">SaaS</option>
                          <option value="ecommerce">E-commerce</option>
                          <option value="fintech">FinTech</option>
                          <option value="healthcare">Healthcare</option>
                          <option value="education">Education</option>
                          <option value="marketplace">Marketplace</option>
                          <option value="other">Other</option>
                        </select>
                        {errors.industry && (
                          <p className="text-red-500 text-sm mt-1">{errors.industry}</p>
                        )}
                      </div>

                      {/* Idea */}
                      <div>
                        <label htmlFor="idea" className="block text-sm font-semibold mb-2 text-stone-700">
                          Tell us about your idea *
                        </label>
                        <textarea
                          id="idea"
                          name="idea"
                          value={formData.idea}
                          onChange={handleChange}
                          rows={4}
                          className={`w-full px-4 py-3 bg-white/80 border ${
                            errors.idea ? 'border-red-500' : 'border-stone-200'
                          } rounded-xl focus:outline-none focus:border-emerald-500 transition-colors resize-none text-stone-800 placeholder:text-stone-400`}
                          placeholder="Describe your MVP idea in a few sentences..."
                        />
                        {errors.idea && (
                          <p className="text-red-500 text-sm mt-1">{errors.idea}</p>
                        )}
                      </div>

                      {/* Submit Button */}
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full px-8 py-4 bg-gradient-accent text-white rounded-full font-bold text-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 flex items-center justify-center space-x-2"
                      >
                        {isSubmitting ? (
                          <>
                            <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                              <circle
                                className="opacity-25"
                                cx="12"
                                cy="12"
                                r="10"
                                stroke="currentColor"
                                strokeWidth="4"
                                fill="none"
                              />
                              <path
                                className="opacity-75"
                                fill="currentColor"
                                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                              />
                            </svg>
                            <span>Submitting...</span>
                          </>
                        ) : (
                          <>
                            <span>Submit Application</span>
                            <span>✨</span>
                          </>
                        )}
                      </button>

                      <p className="text-center text-sm text-stone-500 font-medium">
                        * Required fields
                      </p>
                    </form>
                  </>
                ) : (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-12"
                  >
                    <div className="mb-6 flex justify-center">
                      <Sparkles className="w-16 h-16 text-amber-500" strokeWidth={2} />
                    </div>
                    <h3 className="text-3xl font-bold font-display mb-4 text-stone-800">
                      Application{' '}
                      <span className="bg-gradient-accent bg-clip-text text-transparent">
                        Submitted!
                      </span>
                    </h3>
                    <p className="text-xl text-stone-600 mb-8">
                      We'll review your submission and get back to you within 24 hours.
                      Check your inbox!
                    </p>
                    <div className="inline-flex items-center space-x-2 px-6 py-3 bg-emerald-100/60 border border-emerald-200 rounded-full">
                      <Mail className="w-5 h-5 text-emerald-600" />
                      <span className="text-sm font-semibold text-stone-700">{formData.email}</span>
                    </div>
                  </motion.div>
                )}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Signup;
