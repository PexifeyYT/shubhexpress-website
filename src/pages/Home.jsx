import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { motion, useInView, useMotionValue, useSpring } from 'framer-motion'
import {
  Truck, Package, MapPin, Shield, Clock, Award, ArrowRight,
  ChevronDown, Anchor, BarChart3, Users, Star
} from 'lucide-react'

/* ── Animated Counter ── */
function Counter({ target, suffix = '' }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true })
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!inView) return
    let start = 0
    const duration = 1800
    const step = target / (duration / 16)
    const timer = setInterval(() => {
      start += step
      if (start >= target) {
        setCount(target)
        clearInterval(timer)
      } else {
        setCount(Math.floor(start))
      }
    }, 16)
    return () => clearInterval(timer)
  }, [inView, target])

  return (
    <span ref={ref}>
      {count.toLocaleString()}{suffix}
    </span>
  )
}

/* ── Fade-in wrapper ── */
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

const stats = [
  { label: 'Miles Delivered', value: 500000, suffix: '+', icon: Truck },
  { label: 'Happy Clients', value: 200, suffix: '+', icon: Users },
  { label: 'Years in Business', value: 10, suffix: '+', icon: Award },
  { label: 'On-Time Rate', value: 99, suffix: '%', icon: Star },
]

const services = [
  {
    icon: Anchor,
    title: 'Port Drayage',
    desc: 'Specialized container movements from the Port of Oakland — SSA-B58, Trapac, and Everport terminals.',
    link: '/terminals',
  },
  {
    icon: Truck,
    title: 'Freight Transport',
    desc: 'Reliable long-haul and regional freight solutions across California and the West Coast.',
    link: '/services',
  },
  {
    icon: Package,
    title: 'Container Handling',
    desc: 'Full container load (FCL) and less-than-container (LCL) handling with care and precision.',
    link: '/services',
  },
  {
    icon: BarChart3,
    title: 'Logistics Solutions',
    desc: 'End-to-end supply chain support, from port pickup to final warehouse delivery.',
    link: '/services',
  },
]

const whyUs = [
  { icon: Clock, title: '24/7 Dispatch', desc: 'Our team is available around the clock to coordinate your shipments and keep freight moving.' },
  { icon: Shield, title: 'Fully Insured', desc: 'Every load is covered. Drive with confidence knowing your cargo is protected end-to-end.' },
  { icon: MapPin, title: 'Local Experts', desc: 'Deep roots in the Port of Oakland region with relationships at all major terminals.' },
]

export default function Home() {
  const [heroLoaded, setHeroLoaded] = useState(false)

  useEffect(() => {
    const t = setTimeout(() => setHeroLoaded(true), 100)
    return () => clearTimeout(t)
  }, [])

  return (
    <main>
      {/* ── HERO ── */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-[#0A1628]">
          {/* Animated grid */}
          <div
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage: `linear-gradient(rgba(249,115,22,0.3) 1px, transparent 1px),
                                linear-gradient(90deg, rgba(249,115,22,0.3) 1px, transparent 1px)`,
              backgroundSize: '60px 60px',
            }}
          />
          {/* Glowing orbs */}
          <motion.div
            animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
            transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute top-1/4 right-1/4 w-96 h-96 bg-orange-500/20 rounded-full blur-3xl"
          />
          <motion.div
            animate={{ scale: [1.2, 1, 1.2], opacity: [0.2, 0.4, 0.2] }}
            transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute bottom-1/3 left-1/4 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl"
          />
          {/* Road line */}
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#050d1a] to-transparent" />
          <div className="absolute bottom-16 left-0 right-0 flex gap-8 overflow-hidden">
            {[...Array(20)].map((_, i) => (
              <motion.div
                key={i}
                animate={{ x: ['-100vw', '100vw'] }}
                transition={{ duration: 4, delay: i * 0.3, repeat: Infinity, ease: 'linear' }}
                className="w-16 h-1 bg-orange-400/40 rounded-full flex-shrink-0"
              />
            ))}
          </div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={heroLoaded ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 bg-orange-500/20 border border-orange-500/30 text-orange-400 text-sm font-medium px-4 py-2 rounded-full mb-8"
          >
            <Truck className="w-4 h-4" />
            Trusted Trucking & Drayage Services
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={heroLoaded ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-5xl md:text-7xl lg:text-8xl font-black text-white font-['Poppins'] leading-none mb-6"
          >
            Moving Freight.{' '}
            <br />
            <span className="gradient-text">Delivering Trust.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={heroLoaded ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed"
          >
            Shubh Express INC delivers reliable drayage and freight solutions across California — specializing in Port of Oakland container movements.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={heroLoaded ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link
              to="/contact"
              className="group flex items-center justify-center gap-2 gradient-bg text-white font-bold px-8 py-4 rounded-xl text-lg hover:opacity-90 hover:scale-105 transition-all duration-200 shadow-xl shadow-orange-500/30"
            >
              Get a Quote
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              to="/services"
              className="flex items-center justify-center gap-2 bg-white/10 border border-white/20 text-white font-semibold px-8 py-4 rounded-xl text-lg hover:bg-white/20 transition-all duration-200 backdrop-blur-sm"
            >
              Our Services
            </Link>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 text-gray-500"
        >
          <ChevronDown className="w-6 h-6" />
        </motion.div>
      </section>

      {/* ── STATS ── */}
      <section className="bg-[#0F172A] py-16 border-y border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, i) => (
              <FadeUp key={stat.label} delay={i * 0.1}>
                <div className="text-center">
                  <div className="flex justify-center mb-3">
                    <div className="w-12 h-12 rounded-xl gradient-bg flex items-center justify-center shadow-lg shadow-orange-500/20">
                      <stat.icon className="w-5 h-5 text-white" />
                    </div>
                  </div>
                  <div className="text-4xl font-black text-white font-['Poppins'] gradient-text">
                    <Counter target={stat.value} suffix={stat.suffix} />
                  </div>
                  <div className="text-gray-400 text-sm mt-1">{stat.label}</div>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* ── SERVICES ── */}
      <section className="py-24 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeUp>
            <div className="text-center mb-16">
              <span className="text-orange-500 font-semibold text-sm uppercase tracking-widest">What We Do</span>
              <h2 className="text-4xl md:text-5xl font-black text-[#0A1628] font-['Poppins'] mt-3">
                Our Services
              </h2>
              <p className="text-gray-500 mt-4 max-w-xl mx-auto">
                From port to warehouse — we handle every step of your freight journey with precision and care.
              </p>
            </div>
          </FadeUp>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((s, i) => (
              <FadeUp key={s.title} delay={i * 0.1}>
                <Link
                  to={s.link}
                  className="group bg-white rounded-2xl p-7 shadow-sm border border-gray-100 hover:shadow-xl hover:border-orange-200 hover:-translate-y-2 transition-all duration-300 flex flex-col gap-5 h-full"
                >
                  <div className="w-13 h-13 rounded-xl gradient-bg w-12 h-12 flex items-center justify-center shadow-lg shadow-orange-500/20 group-hover:scale-110 transition-transform">
                    <s.icon className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="text-[#0A1628] font-bold text-lg mb-2">{s.title}</h3>
                    <p className="text-gray-500 text-sm leading-relaxed">{s.desc}</p>
                  </div>
                  <div className="mt-auto flex items-center gap-1 text-orange-500 text-sm font-semibold">
                    Learn More <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHY US ── */}
      <section className="py-24 bg-[#0A1628] relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `radial-gradient(rgba(249,115,22,0.8) 1px, transparent 1px)`,
            backgroundSize: '30px 30px',
          }}
        />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeUp>
            <div className="text-center mb-16">
              <span className="text-orange-400 font-semibold text-sm uppercase tracking-widest">Why Choose Us</span>
              <h2 className="text-4xl md:text-5xl font-black text-white font-['Poppins'] mt-3">
                The Shubh Express Difference
              </h2>
            </div>
          </FadeUp>

          <div className="grid md:grid-cols-3 gap-8">
            {whyUs.map((item, i) => (
              <FadeUp key={item.title} delay={i * 0.15}>
                <div className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:bg-white/10 hover:border-orange-500/30 transition-all duration-300 group">
                  <div className="w-14 h-14 rounded-2xl gradient-bg flex items-center justify-center shadow-xl shadow-orange-500/20 mb-6 group-hover:scale-110 transition-transform">
                    <item.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-white font-bold text-xl mb-3 font-['Poppins']">{item.title}</h3>
                  <p className="text-gray-400 leading-relaxed">{item.desc}</p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA BANNER ── */}
      <section className="py-20 gradient-bg relative overflow-hidden">
        <motion.div
          animate={{ rotate: [0, 360] }}
          transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
          className="absolute -right-32 -top-32 w-96 h-96 border-2 border-white/10 rounded-full"
        />
        <motion.div
          animate={{ rotate: [360, 0] }}
          transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
          className="absolute -left-20 -bottom-20 w-64 h-64 border-2 border-white/10 rounded-full"
        />
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeUp>
            <h2 className="text-4xl md:text-5xl font-black text-white font-['Poppins'] mb-4">
              Ready to Ship?
            </h2>
            <p className="text-orange-100 text-lg mb-8 max-w-xl mx-auto">
              Contact our dispatch team now and get your freight moving. We're available 24/7.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="flex items-center justify-center gap-2 bg-white text-orange-600 font-bold px-8 py-4 rounded-xl text-lg hover:bg-orange-50 hover:scale-105 transition-all shadow-xl"
              >
                Contact Dispatch <ArrowRight className="w-5 h-5" />
              </Link>
              <a
                href="tel:+12094071504"
                className="flex items-center justify-center gap-2 bg-white/20 border border-white/30 text-white font-semibold px-8 py-4 rounded-xl text-lg hover:bg-white/30 transition-all backdrop-blur-sm"
              >
                Call Now: +1 209 407 1504
              </a>
            </div>
          </FadeUp>
        </div>
      </section>
    </main>
  )
}
