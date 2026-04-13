import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Anchor, MapPin, Ship, ArrowRight, CheckCircle, Container } from 'lucide-react'

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

const terminals = [
  {
    name: 'SSA-B58 Oakland',
    fullName: 'SSA Terminals — Berth 58',
    location: 'Port of Oakland, CA',
    desc: 'SSA Terminals at Berth 58 is one of the Port of Oakland\'s premier container terminals. Our experienced drivers are fully registered and credentialed for seamless operations at this facility, ensuring fast container pickup and delivery.',
    features: [
      'Registered and credentialed drivers on-site',
      'Import & export container handling',
      'Time-slot appointment system compliance',
      'Hazmat container capabilities',
    ],
    color: 'from-blue-600 to-blue-800',
    accentColor: 'blue',
    icon: '🚢',
  },
  {
    name: 'Trapac Oakland',
    fullName: 'TraPac Terminal — Port of Oakland',
    location: 'Port of Oakland, CA',
    desc: 'TraPac Terminal is an automated facility at the Port of Oakland known for its efficiency and advanced operations. Shubh Express INC\'s drivers are trained and registered to operate within TraPac\'s automated gate and yard systems.',
    features: [
      'Trained for automated terminal operations',
      'Efficient gate-in/gate-out processes',
      'Chassis and equipment coordination',
      'Real-time container tracking',
    ],
    color: 'from-emerald-600 to-teal-800',
    accentColor: 'emerald',
    icon: '⚓',
  },
  {
    name: 'Everport Oakland',
    fullName: 'Everport Terminal Services — Port of Oakland',
    location: 'Port of Oakland, CA',
    desc: 'Everport Terminal Services handles a significant volume of container traffic at the Port of Oakland. Our team maintains active credentials and deep familiarity with Everport\'s operational procedures, enabling smooth, fast moves.',
    features: [
      'Active terminal credentials maintained',
      'High-volume container throughput',
      'Flexible pickup and delivery windows',
      'LCL and FCL container support',
    ],
    color: 'from-purple-600 to-indigo-800',
    accentColor: 'purple',
    icon: '🏗️',
  },
]

export default function Terminals() {
  return (
    <main className="pt-20">
      {/* Hero */}
      <section className="bg-[#0A1628] py-28 relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `linear-gradient(rgba(249,115,22,0.3) 1px, transparent 1px),
                              linear-gradient(90deg, rgba(249,115,22,0.3) 1px, transparent 1px)`,
            backgroundSize: '60px 60px',
          }}
        />
        {/* Animated port silhouette */}
        <div className="absolute inset-0 flex items-end justify-center opacity-5 overflow-hidden">
          <div className="flex gap-8 items-end pb-0">
            {[120, 200, 160, 240, 140, 180].map((h, i) => (
              <motion.div
                key={i}
                initial={{ height: 0 }}
                animate={{ height: h }}
                transition={{ duration: 1, delay: i * 0.1 }}
                className="w-8 bg-white rounded-t-sm"
                style={{ height: h }}
              />
            ))}
          </div>
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 bg-orange-500/20 border border-orange-500/30 text-orange-400 text-sm font-medium px-4 py-2 rounded-full mb-6">
              <Anchor className="w-4 h-4" />
              Port of Oakland Operations
            </div>
            <h1 className="text-5xl md:text-7xl font-black text-white font-['Poppins'] mt-3 mb-5">
              Drayage &{' '}
              <span className="gradient-text">Terminals</span>
            </h1>
            <p className="text-gray-400 text-lg leading-relaxed max-w-2xl mx-auto">
              Shubh Express INC specializes in drayage — moving containers from the Port of Oakland to your destination with speed, precision, and care.
            </p>
          </motion.div>
        </div>
      </section>

      {/* What is Drayage */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <FadeUp>
              <span className="text-orange-500 font-semibold text-sm uppercase tracking-widest">What is Drayage?</span>
              <h2 className="text-4xl font-black text-[#0A1628] font-['Poppins'] mt-3 mb-6">
                The Critical Port-to-Door Link
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Drayage is the short-distance movement of shipping containers from a port or rail yard to a nearby warehouse, distribution center, or other destination. It's the critical "first mile" of the supply chain that unlocks your cargo after it arrives by sea.
              </p>
              <p className="text-gray-600 leading-relaxed mb-6">
                Shubh Express INC is your trusted drayage partner at the Port of Oakland. Our registered drivers, credentialed equipment, and deep terminal knowledge mean your containers move without delay.
              </p>
              <div className="flex flex-wrap gap-3">
                {['Port Pickup', 'Container Inspection', 'Warehousing Handoff', 'Same-Day Options'].map((tag) => (
                  <span key={tag} className="bg-orange-50 text-orange-600 border border-orange-200 text-sm font-medium px-4 py-1.5 rounded-full">
                    {tag}
                  </span>
                ))}
              </div>
            </FadeUp>
            <FadeUp delay={0.2}>
              <div className="bg-gradient-to-br from-[#0A1628] to-[#1a3a5c] rounded-3xl p-8 text-white">
                <Ship className="w-12 h-12 text-orange-400 mb-5 animate-float" />
                <h3 className="text-xl font-bold font-['Poppins'] mb-4">Port of Oakland Drayage</h3>
                <div className="space-y-4">
                  {[
                    { label: 'Terminals Served', value: '3 Active Terminals' },
                    { label: 'Container Types', value: 'FCL & LCL' },
                    { label: 'Service Area', value: 'California Statewide' },
                    { label: 'Dispatch', value: '24/7 Available' },
                  ].map((item) => (
                    <div key={item.label} className="flex justify-between items-center py-3 border-b border-white/10 last:border-0">
                      <span className="text-gray-400 text-sm">{item.label}</span>
                      <span className="text-white font-semibold text-sm">{item.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* Terminals */}
      <section className="py-24 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeUp>
            <div className="text-center mb-16">
              <span className="text-orange-500 font-semibold text-sm uppercase tracking-widest">Where We Operate</span>
              <h2 className="text-4xl md:text-5xl font-black text-[#0A1628] font-['Poppins'] mt-3">
                Oakland Port Terminals
              </h2>
              <p className="text-gray-500 mt-4 max-w-xl mx-auto">
                We maintain active credentials and relationships at all three major Oakland container terminals.
              </p>
            </div>
          </FadeUp>

          <div className="space-y-8">
            {terminals.map((t, i) => (
              <FadeUp key={t.name} delay={i * 0.15}>
                <div className="bg-white rounded-3xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-2xl transition-all duration-400 group">
                  <div className="flex flex-col lg:flex-row">
                    {/* Color panel */}
                    <div className={`bg-gradient-to-br ${t.color} p-10 lg:w-72 flex-shrink-0 flex flex-col justify-between`}>
                      <div>
                        <div className="text-5xl mb-4">{t.icon}</div>
                        <h3 className="text-white font-black text-2xl font-['Poppins'] mb-2">{t.name}</h3>
                        <p className="text-white/70 text-sm">{t.fullName}</p>
                      </div>
                      <div className="flex items-center gap-2 mt-6 text-white/70 text-sm">
                        <MapPin className="w-4 h-4" />
                        {t.location}
                      </div>
                    </div>
                    {/* Content */}
                    <div className="p-10 flex-1 flex flex-col justify-between">
                      <div>
                        <p className="text-gray-600 leading-relaxed mb-6">{t.desc}</p>
                        <div className="grid sm:grid-cols-2 gap-3">
                          {t.features.map((f) => (
                            <div key={f} className="flex items-start gap-3">
                              <CheckCircle className="w-4 h-4 text-orange-500 mt-0.5 flex-shrink-0" />
                              <span className="text-gray-600 text-sm">{f}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                      <div className="mt-8 pt-6 border-t border-gray-100">
                        <Link
                          to="/contact"
                          className="inline-flex items-center gap-2 gradient-bg text-white font-semibold px-6 py-3 rounded-xl hover:opacity-90 hover:scale-105 transition-all shadow-lg shadow-orange-500/20 text-sm"
                        >
                          Book a Drayage Run at {t.name.split(' ')[0]}
                          <ArrowRight className="w-4 h-4" />
                        </Link>
                      </div>
                    </div>
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
            <Container className="w-16 h-16 text-white/30 mx-auto mb-6 animate-float" />
            <h2 className="text-4xl font-black text-white font-['Poppins'] mb-4">
              Book a Drayage Run
            </h2>
            <p className="text-orange-100 mb-8 text-lg">
              Container at the port? We'll get it moving. Contact our dispatch team now.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="flex items-center justify-center gap-2 bg-white text-orange-600 font-bold px-8 py-4 rounded-xl text-lg hover:bg-orange-50 hover:scale-105 transition-all shadow-xl"
              >
                Request a Pickup <ArrowRight className="w-5 h-5" />
              </Link>
              <a
                href="tel:+12094255340"
                className="flex items-center justify-center gap-2 bg-white/20 border border-white/30 text-white font-semibold px-8 py-4 rounded-xl text-lg hover:bg-white/30 transition-all backdrop-blur-sm"
              >
                Call Dispatch: +1 209 425 5340
              </a>
            </div>
          </FadeUp>
        </div>
      </section>
    </main>
  )
}
