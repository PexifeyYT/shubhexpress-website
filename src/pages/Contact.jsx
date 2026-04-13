import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { useForm } from 'react-hook-form'
import { Phone, Mail, MapPin, Send, CheckCircle, Loader2 } from 'lucide-react'

function FacebookIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878V14.89h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
    </svg>
  )
}
import submitForm from '../utils/submitForm'

function FadeUp({ children, delay = 0, className = '' }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay, ease: 'easeOut' }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

export default function Contact() {
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm()

  const onSubmit = async (data) => {
    setLoading(true)
    await submitForm(data)
    setLoading(false)
    setSubmitted(true)
    reset()
  }

  return (
    <main className="pt-20">
      {/* Hero */}
      <section className="bg-[#0A1628] py-24 relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `linear-gradient(rgba(249,115,22,0.3) 1px, transparent 1px),
                              linear-gradient(90deg, rgba(249,115,22,0.3) 1px, transparent 1px)`,
            backgroundSize: '60px 60px',
          }}
        />
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-orange-400 font-semibold text-sm uppercase tracking-widest">Reach Out</span>
            <h1 className="text-5xl md:text-6xl font-black text-white font-['Poppins'] mt-3 mb-5">
              Contact Us
            </h1>
            <p className="text-gray-400 text-lg leading-relaxed max-w-xl mx-auto">
              Ready to move freight? Fill out the form and we'll get back to you quickly.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-12">
            {/* Left: Info */}
            <FadeUp className="lg:col-span-2">
              <div>
                <h2 className="text-2xl font-black text-[#0A1628] font-['Poppins'] mb-2">Get in Touch</h2>
                <p className="text-gray-500 mb-8 text-sm leading-relaxed">
                  Whether you need a drayage quote, have a freight question, or want to discuss an ongoing shipment — we're here.
                </p>

                <div className="space-y-6">
                  {/* Address */}
                  <div className="flex items-start gap-4">
                    <div className="w-11 h-11 rounded-xl gradient-bg flex items-center justify-center flex-shrink-0 shadow-lg shadow-orange-500/20">
                      <MapPin className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p className="text-[#0A1628] font-semibold text-sm mb-1">Address</p>
                      <p className="text-gray-500 text-sm">1793 Holborn Dr</p>
                    </div>
                  </div>

                  {/* Phone */}
                  <div className="flex items-start gap-4">
                    <div className="w-11 h-11 rounded-xl gradient-bg flex items-center justify-center flex-shrink-0 shadow-lg shadow-orange-500/20">
                      <Phone className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p className="text-[#0A1628] font-semibold text-sm mb-1">Phone</p>
                      <a href="tel:+12094071504" className="block text-gray-500 text-sm hover:text-orange-500 transition-colors">
                        +1 209 407 1504
                      </a>
                      <a href="tel:+12094255340" className="block text-gray-500 text-sm hover:text-orange-500 transition-colors">
                        +1 209 425 5340
                      </a>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="flex items-start gap-4">
                    <div className="w-11 h-11 rounded-xl gradient-bg flex items-center justify-center flex-shrink-0 shadow-lg shadow-orange-500/20">
                      <Mail className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p className="text-[#0A1628] font-semibold text-sm mb-1">Email</p>
                      <a href="mailto:info@shubhexpress.com" className="block text-gray-500 text-sm hover:text-orange-500 transition-colors">
                        info@shubhexpress.com
                      </a>
                      <a href="mailto:dispatch@shubhexpress.com" className="block text-gray-500 text-sm hover:text-orange-500 transition-colors">
                        dispatch@shubhexpress.com
                      </a>
                    </div>
                  </div>

                  {/* Facebook */}
                  <div className="flex items-start gap-4">
                    <div className="w-11 h-11 rounded-xl gradient-bg flex items-center justify-center flex-shrink-0 shadow-lg shadow-orange-500/20">
                      <FacebookIcon className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p className="text-[#0A1628] font-semibold text-sm mb-1">Facebook</p>
                      <a
                        href="https://www.facebook.com/shubhexpressinc"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-500 text-sm hover:text-orange-500 transition-colors"
                      >
                        Shubh Express INC
                      </a>
                    </div>
                  </div>
                </div>

                {/* Hours */}
                <div className="mt-8 bg-[#0A1628] rounded-2xl p-6 text-white">
                  <h3 className="font-bold mb-4 text-sm uppercase tracking-wider text-orange-400">Dispatch Hours</h3>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-400">Mon – Fri</span>
                      <span className="text-white font-medium">24 Hours</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-400">Saturday</span>
                      <span className="text-white font-medium">24 Hours</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-400">Sunday</span>
                      <span className="text-white font-medium">24 Hours</span>
                    </div>
                  </div>
                  <p className="text-orange-400 text-xs mt-4 font-medium">We never stop — your freight doesn't wait.</p>
                </div>
              </div>
            </FadeUp>

            {/* Right: Form */}
            <FadeUp delay={0.2} className="lg:col-span-3">
              <div className="bg-white rounded-3xl shadow-xl border border-gray-100 p-8 md:p-10">
                {submitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-12"
                  >
                    <div className="w-20 h-20 rounded-full gradient-bg flex items-center justify-center mx-auto mb-6 shadow-xl shadow-orange-500/30">
                      <CheckCircle className="w-10 h-10 text-white" />
                    </div>
                    <h3 className="text-2xl font-black text-[#0A1628] font-['Poppins'] mb-3">Message Sent!</h3>
                    <p className="text-gray-500 mb-6">
                      Thanks for reaching out. We'll get back to you as soon as possible.
                    </p>
                    <button
                      onClick={() => setSubmitted(false)}
                      className="text-orange-500 font-semibold hover:text-orange-600 transition-colors text-sm"
                    >
                      Send another message
                    </button>
                  </motion.div>
                ) : (
                  <>
                    <div className="mb-8">
                      <h2 className="text-2xl font-black text-[#0A1628] font-['Poppins'] mb-1">Send Us a Message</h2>
                      <p className="text-gray-500 text-sm">Fill out the form below and we'll get back to you shortly.</p>
                    </div>

                    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                      <div className="grid sm:grid-cols-2 gap-5">
                        {/* Full Name */}
                        <div>
                          <label className="block text-sm font-semibold text-[#0A1628] mb-2">
                            Full Name <span className="text-orange-500">*</span>
                          </label>
                          <input
                            {...register('fullName', { required: 'Full name is required' })}
                            placeholder="John Smith"
                            className={`w-full px-4 py-3 rounded-xl border text-sm transition-all focus:outline-none focus:ring-2 focus:ring-orange-400/50 ${
                              errors.fullName
                                ? 'border-red-400 bg-red-50'
                                : 'border-gray-200 bg-gray-50 focus:border-orange-400 focus:bg-white'
                            }`}
                          />
                          {errors.fullName && (
                            <p className="mt-1 text-xs text-red-500">{errors.fullName.message}</p>
                          )}
                        </div>

                        {/* Company */}
                        <div>
                          <label className="block text-sm font-semibold text-[#0A1628] mb-2">
                            Company Name
                          </label>
                          <input
                            {...register('company')}
                            placeholder="Your Company LLC"
                            className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 text-sm transition-all focus:outline-none focus:ring-2 focus:ring-orange-400/50 focus:border-orange-400 focus:bg-white"
                          />
                        </div>
                      </div>

                      <div className="grid sm:grid-cols-2 gap-5">
                        {/* Phone */}
                        <div>
                          <label className="block text-sm font-semibold text-[#0A1628] mb-2">
                            Phone Number
                          </label>
                          <input
                            {...register('phone')}
                            placeholder="+1 (555) 000-0000"
                            type="tel"
                            className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 text-sm transition-all focus:outline-none focus:ring-2 focus:ring-orange-400/50 focus:border-orange-400 focus:bg-white"
                          />
                        </div>

                        {/* Email */}
                        <div>
                          <label className="block text-sm font-semibold text-[#0A1628] mb-2">
                            Email Address <span className="text-orange-500">*</span>
                          </label>
                          <input
                            {...register('email', {
                              required: 'Email is required',
                              pattern: { value: /^\S+@\S+\.\S+$/, message: 'Enter a valid email' },
                            })}
                            placeholder="you@company.com"
                            type="email"
                            className={`w-full px-4 py-3 rounded-xl border text-sm transition-all focus:outline-none focus:ring-2 focus:ring-orange-400/50 ${
                              errors.email
                                ? 'border-red-400 bg-red-50'
                                : 'border-gray-200 bg-gray-50 focus:border-orange-400 focus:bg-white'
                            }`}
                          />
                          {errors.email && (
                            <p className="mt-1 text-xs text-red-500">{errors.email.message}</p>
                          )}
                        </div>
                      </div>

                      {/* Service */}
                      <div>
                        <label className="block text-sm font-semibold text-[#0A1628] mb-2">
                          Service Needed
                        </label>
                        <select
                          {...register('service')}
                          className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 text-sm text-gray-700 transition-all focus:outline-none focus:ring-2 focus:ring-orange-400/50 focus:border-orange-400 focus:bg-white"
                        >
                          <option value="">Select a service...</option>
                          <option value="drayage">Port Drayage (Oakland)</option>
                          <option value="freight">Freight Transport</option>
                          <option value="container">Container Handling</option>
                          <option value="logistics">Logistics Solutions</option>
                          <option value="other">Other</option>
                        </select>
                      </div>

                      {/* Message */}
                      <div>
                        <label className="block text-sm font-semibold text-[#0A1628] mb-2">
                          Message <span className="text-orange-500">*</span>
                        </label>
                        <textarea
                          {...register('message', { required: 'Please provide a message' })}
                          rows={5}
                          placeholder="Tell us about your freight needs — container number, destination, timeline, etc."
                          className={`w-full px-4 py-3 rounded-xl border text-sm transition-all focus:outline-none focus:ring-2 focus:ring-orange-400/50 resize-none ${
                            errors.message
                              ? 'border-red-400 bg-red-50'
                              : 'border-gray-200 bg-gray-50 focus:border-orange-400 focus:bg-white'
                          }`}
                        />
                        {errors.message && (
                          <p className="mt-1 text-xs text-red-500">{errors.message.message}</p>
                        )}
                      </div>

                      <button
                        type="submit"
                        disabled={loading}
                        className="w-full flex items-center justify-center gap-3 gradient-bg text-white font-bold py-4 rounded-xl text-base hover:opacity-90 hover:scale-[1.02] transition-all shadow-xl shadow-orange-500/30 disabled:opacity-70 disabled:cursor-not-allowed disabled:scale-100"
                      >
                        {loading ? (
                          <>
                            <Loader2 className="w-5 h-5 animate-spin" />
                            Sending...
                          </>
                        ) : (
                          <>
                            <Send className="w-5 h-5" />
                            Send Message
                          </>
                        )}
                      </button>
                    </form>
                  </>
                )}
              </div>
            </FadeUp>
          </div>
        </div>
      </section>
    </main>
  )
}
