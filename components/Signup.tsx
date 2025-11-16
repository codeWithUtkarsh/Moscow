'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

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
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0f] via-[#1a1a2e] to-[#0a0a0f]">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1a1a2e33_1px,transparent_1px),linear-gradient(to_bottom,#1a1a2e33_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-20"></div>
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
              <h2 className="text-4xl md:text-5xl font-bold font-[family-name:var(--font-space-grotesk)] mb-6">
                Ready to Transform Your Idea?
              </h2>
              <p className="text-xl text-gray-400 leading-relaxed">
                Join the next generation of successful founders who turned their vision into reality with Atlantis.AI.
              </p>
            </div>

            {/* Benefits */}
            <div className="space-y-6">
              {[
                {
                  icon: '🚀',
                  title: 'Fast Turnaround',
                  description: 'Get your MVP in days, not months',
                  image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&q=80',
                },
                {
                  icon: '💰',
                  title: 'Cost Effective',
                  description: 'Save thousands on development costs',
                  image: 'https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?w=400&q=80',
                },
                {
                  icon: '🎯',
                  title: 'Market Ready',
                  description: 'Launch and start validating immediately',
                  image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&q=80',
                },
              ].map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + index * 0.1 }}
                  className="flex items-start space-x-4 group"
                >
                  <div className="relative flex-shrink-0">
                    <div className="w-16 h-16 rounded-xl overflow-hidden glass-effect">
                      <Image
                        src={benefit.image}
                        alt={benefit.title}
                        width={64}
                        height={64}
                        className="object-cover opacity-50 group-hover:opacity-100 transition-opacity"
                      />
                    </div>
                    <div className="absolute inset-0 flex items-center justify-center text-3xl group-hover:scale-110 transition-transform">
                      {benefit.icon}
                    </div>
                  </div>
                  <div className="flex-1">
                    <h4 className="text-xl font-bold mb-1 font-[family-name:var(--font-space-grotesk)]">
                      {benefit.title}
                    </h4>
                    <p className="text-gray-400">{benefit.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Trust Indicators */}
            <div className="grid grid-cols-2 gap-6">
              <div className="glass-effect rounded-xl p-6 text-center">
                <div className="text-3xl font-bold bg-gradient-accent bg-clip-text text-transparent mb-2">
                  50+
                </div>
                <div className="text-gray-400 text-sm">MVPs Delivered</div>
              </div>
              <div className="glass-effect rounded-xl p-6 text-center">
                <div className="text-3xl font-bold bg-gradient-accent bg-clip-text text-transparent mb-2">
                  4.9/5
                </div>
                <div className="text-gray-400 text-sm">Client Rating</div>
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
            <div className="glass-effect rounded-3xl p-8 md:p-12 relative overflow-hidden">
              {/* Glow Effect */}
              <div className="absolute -inset-1 bg-gradient-accent opacity-10 blur-xl"></div>

              <div className="relative">
                {!isSubmitted ? (
                  <>
                    <h3 className="text-3xl font-bold font-[family-name:var(--font-space-grotesk)] mb-8 text-center">
                      Sign Up for FREE MVP
                    </h3>

                    <form onSubmit={handleSubmit} className="space-y-6">
                      {/* Name */}
                      <div>
                        <label htmlFor="name" className="block text-sm font-semibold mb-2">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          className={`w-full px-4 py-3 bg-white/5 border ${
                            errors.name ? 'border-red-500' : 'border-gray-700'
                          } rounded-xl focus:outline-none focus:border-indigo-500 transition-colors`}
                          placeholder="John Doe"
                        />
                        {errors.name && (
                          <p className="text-red-400 text-sm mt-1">{errors.name}</p>
                        )}
                      </div>

                      {/* Email */}
                      <div>
                        <label htmlFor="email" className="block text-sm font-semibold mb-2">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          className={`w-full px-4 py-3 bg-white/5 border ${
                            errors.email ? 'border-red-500' : 'border-gray-700'
                          } rounded-xl focus:outline-none focus:border-indigo-500 transition-colors`}
                          placeholder="john@example.com"
                        />
                        {errors.email && (
                          <p className="text-red-400 text-sm mt-1">{errors.email}</p>
                        )}
                      </div>

                      {/* Company */}
                      <div>
                        <label htmlFor="company" className="block text-sm font-semibold mb-2">
                          Company/Startup Name
                        </label>
                        <input
                          type="text"
                          id="company"
                          name="company"
                          value={formData.company}
                          onChange={handleChange}
                          className="w-full px-4 py-3 bg-white/5 border border-gray-700 rounded-xl focus:outline-none focus:border-indigo-500 transition-colors"
                          placeholder="Your Startup"
                        />
                      </div>

                      {/* Industry */}
                      <div>
                        <label htmlFor="industry" className="block text-sm font-semibold mb-2">
                          Industry *
                        </label>
                        <select
                          id="industry"
                          name="industry"
                          value={formData.industry}
                          onChange={handleChange}
                          className={`w-full px-4 py-3 bg-white/5 border ${
                            errors.industry ? 'border-red-500' : 'border-gray-700'
                          } rounded-xl focus:outline-none focus:border-indigo-500 transition-colors`}
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
                          <p className="text-red-400 text-sm mt-1">{errors.industry}</p>
                        )}
                      </div>

                      {/* Idea */}
                      <div>
                        <label htmlFor="idea" className="block text-sm font-semibold mb-2">
                          Tell us about your idea *
                        </label>
                        <textarea
                          id="idea"
                          name="idea"
                          value={formData.idea}
                          onChange={handleChange}
                          rows={4}
                          className={`w-full px-4 py-3 bg-white/5 border ${
                            errors.idea ? 'border-red-500' : 'border-gray-700'
                          } rounded-xl focus:outline-none focus:border-indigo-500 transition-colors resize-none`}
                          placeholder="Describe your MVP idea in a few sentences..."
                        />
                        {errors.idea && (
                          <p className="text-red-400 text-sm mt-1">{errors.idea}</p>
                        )}
                      </div>

                      {/* Submit Button */}
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full px-8 py-4 bg-gradient-accent text-white rounded-full font-bold text-lg hover:glow-effect transition-all duration-300 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 flex items-center justify-center space-x-2"
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

                      <p className="text-center text-sm text-gray-500">
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
                    <div className="text-7xl mb-6">🎉</div>
                    <h3 className="text-3xl font-bold font-[family-name:var(--font-space-grotesk)] mb-4">
                      Application Submitted!
                    </h3>
                    <p className="text-xl text-gray-400 mb-8">
                      We'll review your submission and get back to you within 24 hours.
                      Check your inbox!
                    </p>
                    <div className="inline-flex items-center space-x-2 px-6 py-3 bg-gradient-accent/20 rounded-full">
                      <span>📧</span>
                      <span className="text-sm">{formData.email}</span>
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
