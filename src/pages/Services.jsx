import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Anchor, Truck, Package, BarChart3, Clock, Shield, MapPin, ArrowRight } from 'lucide-react'

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

const services = [
  {
    icon: Anchor,
    title: 'Port Drayage',
    desc: 'Our core specialty. We move containers from the Port of Oakland directly to your facility. We operate at all major Oakland terminals: SSA-B58, Trapac, and Everport.',
    features: ['Same-day pickup available', 'All Oakland terminals', 'Real-time tracking', 'Hazmat certified'],
    accent: 'from-orange-500 to-amber-500',
    link: '/terminals',
    cta: 'View Terminals',
  },
  {
    icon: Truck,
    title: 'Freight Transport',
    desc: 'Reliable regional and long-haul trucking across California and the West Coast. We handle various freight types with care and on-time delivery.',
    features: ['Dry van & flatbed', 'Temperature controlled', 'Oversized loads', 'California-wide coverage'],
    accent: 'from-blue-500 to-indigo-500',
    link: '/contact',
    cta: 'Request a Quote',
  },
  {
    icon: Package,
    title: 'Container Handling',
    desc: 'Expert FCL and LCL container handling with meticulous attention to cargo security, documentation, and customs coordination.',
    features: ['FCL & LCL options', 'Customs coordination', 'Container inspection', 'Secure handling'],
    accent: 'from-emerald-500 to-teal-500',
    link: '/contact',
    cta: 'Get Started',
  },
  {
    icon: BarChart3,
    title: 'Logistics Solutions',
    desc: 'End-to-end supply chain management support — from port pickup to last-mile delivery, with full visibility throughout.',
    features: ['Supply chain consulting', 'Warehouse coordination', 'Last-mile delivery', 'Reporting & analytics'],
    accent: 'from-purple-500 to-pink-500',
    link: '/contact',
    cta: 'Learn More',
  },
]

const features = [
  { icon: Clock, title: '24/7 Availability', desc: 'Our dispatch team never sleeps. Your freight moves on your schedule.' },
  { icon: Shield, title: 'Fully Insured', desc: 'Every shipment is fully covered. Your cargo is safe with us.' },
  { icon: MapPin, title: 'Local Expertise', desc: 'Deep knowledge of Oakland ports and California logistics networks.' },
]

export default function Services() {
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
            <span className="text-orange-400 font-semibold text-sm uppercase tracking-widest">What We Offer</span>
            <h1 className="text-5xl md:text-6xl font-black text-white font-['Poppins'] mt-3 mb-5">
              Our Services
            </h1>
            <p className="text-gray-400 text-lg leading-relaxed max-w-2xl mx-auto">
              Comprehensive trucking and logistics solutions designed to keep your supply chain moving smoothly.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            {services.map((s, i) => (
              <FadeUp key={s.title} delay={i * 0.1}>
                <div className="bg-white rounded-3xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-2xl hover:-translate-y-2 transition-all duration-400 flex flex-col h-full group">
                  <div className={`bg-gradient-to-r ${s.accent} p-8`}>
                    <div className="w-14 h-14 bg-white/20 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                      <s.icon className="w-7 h-7 text-white" />
                    </div>
                    <h3 className="text-white font-black text-2xl font-['Poppins']">{s.title}</h3>
                  </div>
                  <div className="p-8 flex flex-col flex-1">
                    <p className="text-gray-600 leading-relaxed mb-6">{s.desc}</p>
                    <ul className="space-y-2 mb-8">
                      {s.features.map((f) => (
                        <li key={f} className="flex items-center gap-3 text-sm text-gray-600">
                          <div className="w-1.5 h-1.5 rounded-full bg-orange-500 flex-shrink-0" />
                          {f}
                        </li>
                      ))}
                    </ul>
                    <Link
                      to={s.link}
                      className="mt-auto inline-flex items-center gap-2 text-orange-500 font-semibold hover:text-orange-600 transition-colors group/link"
                    >
                      {s.cta}
                      <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-[#0A1628]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeUp>
            <div className="text-center mb-14">
              <h2 className="text-3xl font-black text-white font-['Poppins']">Every Service Comes With</h2>
            </div>
          </FadeUp>
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((f, i) => (
              <FadeUp key={f.title} delay={i * 0.1}>
                <div className="flex gap-5 items-start">
                  <div className="w-12 h-12 rounded-xl gradient-bg flex-shrink-0 flex items-center justify-center shadow-lg shadow-orange-500/20">
                    <f.icon className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="text-white font-bold mb-2">{f.title}</h3>
                    <p className="text-gray-400 text-sm leading-relaxed">{f.desc}</p>
                  </div>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 gradient-bg">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <FadeUp>
            <h2 className="text-4xl font-black text-white font-['Poppins'] mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-orange-100 mb-8">
              Contact us today and let's build a freight solution that works for you.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-white text-orange-600 font-bold px-8 py-4 rounded-xl text-lg hover:bg-orange-50 hover:scale-105 transition-all shadow-xl"
            >
              Contact Us Now <ArrowRight className="w-5 h-5" />
            </Link>
          </FadeUp>
        </div>
      </section>
    </main>
  )
}
