import { motion } from 'framer-motion'
import { Shield } from 'lucide-react'

const sections = [
  {
    title: '1. Information We Collect',
    content: `When you use our website or contact us, we may collect the following types of information:

• **Contact Information:** Name, company name, phone number, and email address submitted through our contact form.
• **Usage Data:** Pages visited, time spent on the site, browser type, device type, and IP address collected automatically via standard web server logs.
• **Cookies:** Small files placed on your device to improve browsing experience and analyze site traffic (see Section 5).`,
  },
  {
    title: '2. How We Use Your Information',
    content: `Shubh Express INC uses the information we collect for the following purposes:

• To respond to your inquiries and quote requests
• To process and coordinate freight and drayage services
• To send operational communications related to your shipments
• To improve our website and service offerings
• To comply with applicable legal and regulatory requirements

We do not sell, rent, or trade your personal information to third parties.`,
  },
  {
    title: '3. How We Share Your Information',
    content: `We may share your information in the following limited circumstances:

• **Service Providers:** Trusted third-party vendors who assist us in operating our website or conducting business (e.g., email service providers, analytics tools), subject to confidentiality agreements.
• **Legal Requirements:** If required by law, court order, or governmental authority.
• **Business Transfers:** In the event of a merger, acquisition, or sale of assets, your information may be transferred as part of that transaction.

We do not share your personal information with advertising networks.`,
  },
  {
    title: '4. Data Retention',
    content: `We retain personal information for as long as necessary to fulfill the purposes outlined in this policy, provide services, resolve disputes, and comply with legal obligations. When information is no longer needed, we securely delete or anonymize it.`,
  },
  {
    title: '5. Cookies and Tracking Technologies',
    content: `Our website may use cookies and similar tracking technologies to:

• Remember your preferences
• Analyze site traffic and usage patterns
• Improve website performance

You can control cookie settings through your browser. Disabling cookies may affect certain features of the website. We do not use cookies for targeted advertising.`,
  },
  {
    title: '6. Third-Party Services',
    content: `Our website may contain links to third-party websites (e.g., Facebook, Google Maps). These sites have their own privacy policies, and we are not responsible for their practices. We encourage you to review the privacy policies of any third-party sites you visit.`,
  },
  {
    title: '7. Data Security',
    content: `We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, loss, or disclosure. However, no method of internet transmission or electronic storage is 100% secure, and we cannot guarantee absolute security.`,
  },
  {
    title: '8. Your Rights',
    content: `Depending on your location, you may have the following rights regarding your personal information:

• **Access:** Request a copy of the personal information we hold about you.
• **Correction:** Request correction of inaccurate or incomplete data.
• **Deletion:** Request deletion of your personal information, subject to legal obligations.
• **Opt-Out:** Opt out of future communications from us.

To exercise any of these rights, contact us at info@shubhexpress.com.`,
  },
  {
    title: '9. Children\'s Privacy',
    content: `Our services are not directed to individuals under the age of 13. We do not knowingly collect personal information from children. If you believe we have inadvertently collected information from a child, please contact us and we will promptly delete it.`,
  },
  {
    title: '10. Changes to This Policy',
    content: `We may update this Privacy Policy from time to time. When we do, we will revise the "Last Updated" date at the top of this page. We encourage you to review this policy periodically. Continued use of our website after changes are posted constitutes your acceptance of the updated policy.`,
  },
  {
    title: '11. Contact Us',
    content: `If you have any questions or concerns about this Privacy Policy or our data practices, please contact us:

**Shubh Express INC**
Address: 1793 Holborn Dr
Phone: +1 209 407 1504 | +1 209 425 5340
Email: info@shubhexpress.com`,
  },
]

function renderContent(text) {
  return text.split('\n').map((line, i) => {
    if (!line.trim()) return <br key={i} />
    // Bold markdown
    const parts = line.split(/\*\*(.*?)\*\*/)
    return (
      <p key={i} className={`text-gray-600 leading-relaxed ${line.startsWith('•') ? 'ml-4' : ''}`}>
        {parts.map((part, j) =>
          j % 2 === 1 ? <strong key={j} className="text-[#0A1628]">{part}</strong> : part
        )}
      </p>
    )
  })
}

export default function PrivacyPolicy() {
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
            <div className="inline-flex items-center gap-2 bg-orange-500/20 border border-orange-500/30 text-orange-400 text-sm font-medium px-4 py-2 rounded-full mb-6">
              <Shield className="w-4 h-4" />
              Legal
            </div>
            <h1 className="text-5xl md:text-6xl font-black text-white font-['Poppins'] mt-3 mb-5">
              Privacy Policy
            </h1>
            <p className="text-gray-400 text-base">
              Last Updated: April 12, 2026
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Intro */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-12 p-8 bg-orange-50 border border-orange-200 rounded-2xl"
          >
            <p className="text-gray-700 leading-relaxed">
              Shubh Express INC ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services. By using our website, you consent to the practices described in this policy.
            </p>
          </motion.div>

          {/* Sections */}
          <div className="space-y-10">
            {sections.map((section, i) => (
              <motion.div
                key={section.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="border-b border-gray-100 pb-10 last:border-0"
              >
                <h2 className="text-xl font-bold text-[#0A1628] font-['Poppins'] mb-4">{section.title}</h2>
                <div className="space-y-2">
                  {renderContent(section.content)}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
