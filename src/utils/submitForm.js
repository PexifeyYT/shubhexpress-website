/**
 * Form submission handler for Shubh Express INC contact form.
 *
 * TODO: Wire up one of the following options:
 *
 * OPTION 1 — EmailJS (recommended for static/Vite deployments):
 *   1. Sign up at https://www.emailjs.com
 *   2. Create a service connected to info@shubhexpress.com
 *   3. Create an email template using the field names below
 *   4. Install: npm install @emailjs/browser
 *   5. Replace the stub below with:
 *
 *      import emailjs from '@emailjs/browser'
 *      await emailjs.send(
 *        'YOUR_SERVICE_ID',
 *        'YOUR_TEMPLATE_ID',
 *        {
 *          from_name: data.fullName,
 *          company: data.company,
 *          phone: data.phone,
 *          reply_to: data.email,
 *          service: data.service,
 *          message: data.message,
 *        },
 *        'YOUR_PUBLIC_KEY'
 *      )
 *
 * OPTION 2 — Backend API (Node/Express or Next.js API route):
 *   Replace the stub below with:
 *
 *      await fetch('/api/contact', {
 *        method: 'POST',
 *        headers: { 'Content-Type': 'application/json' },
 *        body: JSON.stringify(data),
 *      })
 *
 * Fields available in `data`:
 *   - data.fullName    (string, required)
 *   - data.company     (string, optional)
 *   - data.phone       (string, optional)
 *   - data.email       (string, required)
 *   - data.service     (string, optional — dropdown value)
 *   - data.message     (string, required)
 *
 * Target email: info@shubhexpress.com / dispatch@shubhexpress.com
 */
export default async function submitForm(data) {
  // STUB: simulates a network delay until real integration is wired up
  console.log('[submitForm] Form data received:', data)
  await new Promise((resolve) => setTimeout(resolve, 1200))
  console.log('[submitForm] TODO: integrate EmailJS or backend API to deliver this to info@shubhexpress.com')
}
