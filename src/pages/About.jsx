import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Truck, Target, Heart, ArrowRight, CheckCircle } from 'lucide-react'

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

const values = [
  { icon: Target, title: 'Reliability', desc: 'Every commitment we make, we keep. Your freight moves on schedule, every time.' },
  { icon: Heart, title: 'Integrity', desc: 'Honest pricing, transparent communication, and accountable partnerships.' },
  { icon: Truck, title: 'Excellence', desc: 'We hold ourselves to the highest standards of safety and professional service.' },
]

const highlights = [
  'Licensed and insured carrier operating in California',
  'Experienced team of professional drivers',
  'Specialized in Port of Oakland container drayage',
  'Servicing SSA-B58, Trapac, and Everport terminals',
  'Flexible scheduling to meet your business needs',
  '24/7 dispatch and customer support',
]

export default function About() {
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
            <span className="text-orange-400 font-semibold text-sm uppercase tracking-widest">Our Story</span>
            <h1 className="text-5xl md:text-6xl font-black text-white font-['Poppins'] mt-3 mb-5">
              About Shubh Express
            </h1>
            <p className="text-gray-400 text-lg leading-relaxed">
              A California-based trucking company built on hard work, reliability, and a relentless commitment to moving your freight safely.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <FadeUp>
              <span className="text-orange-500 font-semibold text-sm uppercase tracking-widest">Who We Are</span>
              <h2 className="text-4xl font-black text-[#0A1628] font-['Poppins'] mt-3 mb-6">
                Built on the Road. Proven by Results.
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Shubh Express INC is a professional trucking and drayage company headquartered in California. We specialize in moving containers from the Port of Oakland to warehouses, distribution centers, and destinations across the state.
              </p>
              <p className="text-gray-600 leading-relaxed mb-8">
                Our team of experienced drivers and logistics professionals are dedicated to safe, efficient, and on-time delivery. Whether you need a single container moved or a recurring drayage solution, we have the capacity and expertise to get it done.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {highlights.map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-orange-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-600 text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </FadeUp>
            <FadeUp delay={0.2}>
              <div className="relative">
                <div className="bg-gradient-to-br from-[#0A1628] to-[#1e3a5f] rounded-3xl p-10 text-white">
                  <Truck className="w-16 h-16 text-orange-400 mb-6 animate-float" />
                  <h3 className="text-2xl font-bold font-['Poppins'] mb-3">Shubh Express INC</h3>
                  <p className="text-gray-300 leading-relaxed mb-6">
                    Connecting California shippers with efficient, professional drayage and freight services. Based out of the Central Valley, serving the entire state.
                  </p>
                  <div className="grid grid-cols-2 gap-4 pt-6 border-t border-white/10">
                    <div>
                      <div className="text-3xl font-black text-orange-400 font-['Poppins']">10+</div>
                      <div className="text-gray-400 text-sm">Years Experience</div>
                    </div>
                    <div>
                      <div className="text-3xl font-black text-orange-400 font-['Poppins']">200+</div>
                      <div className="text-gray-400 text-sm">Happy Clients</div>
                    </div>
                  </div>
                </div>
                <div className="absolute -bottom-4 -right-4 w-24 h-24 gradient-bg rounded-2xl opacity-30 blur-xl" />
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeUp>
            <div className="text-center mb-16">
              <span className="text-orange-500 font-semibold text-sm uppercase tracking-widest">Our Values</span>
              <h2 className="text-4xl font-black text-[#0A1628] font-['Poppins'] mt-3">What Drives Us</h2>
            </div>
          </FadeUp>
          <div className="grid md:grid-cols-3 gap-8">
            {values.map((v, i) => (
              <FadeUp key={v.title} delay={i * 0.15}>
                <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 text-center">
                  <div className="w-16 h-16 rounded-2xl gradient-bg flex items-center justify-center shadow-lg shadow-orange-500/20 mx-auto mb-6">
                    <v.icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-[#0A1628] font-bold text-xl mb-3 font-['Poppins']">{v.title}</h3>
                  <p className="text-gray-500 leading-relaxed">{v.desc}</p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[#0A1628]">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <FadeUp>
            <h2 className="text-4xl font-black text-white font-['Poppins'] mb-4">
              Partner With Us
            </h2>
            <p className="text-gray-400 mb-8">
              Ready to experience the Shubh Express difference? Let's talk about your freight needs.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 gradient-bg text-white font-bold px-8 py-4 rounded-xl text-lg hover:opacity-90 hover:scale-105 transition-all shadow-xl shadow-orange-500/30"
            >
              Get in Touch <ArrowRight className="w-5 h-5" />
            </Link>
          </FadeUp>
        </div>
      </section>
    </main>
  )
}
