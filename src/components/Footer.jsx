import { Link } from 'react-router-dom'
import { Truck, Phone, Mail, MapPin, ArrowRight } from 'lucide-react'

function FacebookIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878V14.89h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
    </svg>
  )
}

const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About Us' },
  { to: '/services', label: 'Services' },
  { to: '/terminals', label: 'Terminals' },
  { to: '/contact', label: 'Contact' },
  { to: '/privacy', label: 'Privacy Policy' },
]

export default function Footer() {
  return (
    <footer className="bg-[#0A1628] text-gray-300">
      {/* Top CTA Bar */}
      <div className="gradient-bg py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <div>
            <h3 className="text-white text-xl font-bold font-['Poppins']">Ready to Move Your Freight?</h3>
            <p className="text-orange-100 text-sm mt-1">Get in touch with our dispatch team today.</p>
          </div>
          <Link
            to="/contact"
            className="flex items-center gap-2 bg-white text-orange-600 font-bold px-6 py-3 rounded-xl hover:bg-orange-50 transition-colors shadow-lg whitespace-nowrap"
          >
            Get a Quote <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-11 h-11 rounded-xl gradient-bg flex items-center justify-center shadow-lg">
                <Truck className="w-5 h-5 text-white" strokeWidth={2.5} />
              </div>
              <div>
                <div className="text-white font-bold text-lg font-['Poppins'] leading-none">SHUBH EXPRESS</div>
                <div className="text-orange-400 text-xs font-semibold tracking-widest uppercase">INC</div>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
              Professional trucking and drayage services based in California. Specializing in Port of Oakland container movements.
            </p>
            {/* Social */}
            <div className="flex gap-3 mt-5">
              <a
                href="https://www.facebook.com/shubhexpressinc"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:border-orange-500 hover:bg-orange-500/10 transition-all"
                aria-label="Facebook"
              >
                <FacebookIcon className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-5">Quick Links</h4>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="text-gray-400 hover:text-orange-400 text-sm transition-colors flex items-center gap-2 group"
                  >
                    <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-5">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-orange-400 mt-0.5 flex-shrink-0" />
                <span className="text-gray-400 text-sm">1793 Holborn Dr</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-orange-400 flex-shrink-0" />
                <div className="flex flex-col gap-1">
                  <a href="tel:+12094071504" className="text-gray-400 hover:text-orange-400 text-sm transition-colors">
                    +1 209 407 1504
                  </a>
                  <a href="tel:+12094255340" className="text-gray-400 hover:text-orange-400 text-sm transition-colors">
                    +1 209 425 5340
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-4 h-4 text-orange-400 mt-0.5 flex-shrink-0" />
                <div className="flex flex-col gap-1">
                  <a href="mailto:info@shubhexpress.com" className="text-gray-400 hover:text-orange-400 text-sm transition-colors">
                    info@shubhexpress.com
                  </a>
                  <a href="mailto:dispatch@shubhexpress.com" className="text-gray-400 hover:text-orange-400 text-sm transition-colors">
                    dispatch@shubhexpress.com
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 mt-12 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} Shubh Express INC. All rights reserved.
          </p>
          <div className="flex gap-4">
            <Link to="/privacy" className="text-gray-500 hover:text-gray-300 text-sm transition-colors">
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
