import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { FaGithub, FaLinkedinIn, FaEnvelope, FaMapMarkerAlt, FaPaperPlane } from 'react-icons/fa';

// ─── EmailJS Config ───────────────────────────────────────────────────────────
const EMAILJS_SERVICE_ID  = 'service_yokwt7i';
const ADMIN_TEMPLATE_ID   = 'template_wwb9qvu';   // notification to autiyashraj8@gmail.com
const REPLY_TEMPLATE_ID   = 'template_qsuwk2u';   // auto-reply to visitor
const EMAILJS_PUBLIC_KEY  = 'cehLwxLshrQUStgbV';
// ─────────────────────────────────────────────────────────────────────────────

const contactInfo = [
  {
    id: 'contact-email',
    icon: FaEnvelope,
    label: 'Email',
    value: 'autiyashraj8@gmail.com',
    href: 'mailto:autiyashraj8@gmail.com',
    color: '#00f5ff',
  },
  {
    id: 'contact-linkedin',
    icon: FaLinkedinIn,
    label: 'LinkedIn',
    value: 'linkedin.com/in/yashraj-auti',
    href: 'https://www.linkedin.com/in/yashraj-auti',
    color: '#4facfe',
  },
  {
    id: 'contact-github',
    icon: FaGithub,
    label: 'GitHub',
    value: 'github.com/YashrajAuti',
    href: 'https://github.com/YashrajAuti',
    color: '#a855f7',
  },
  {
    id: 'contact-location',
    icon: FaMapMarkerAlt,
    label: 'Location',
    value: 'Pune, Maharashtra, India',
    href: null,
    color: '#f472b6',
  },
];

export default function Contact() {
  const ref = useRef(null);
  const formRef = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const [formData, setFormData] = useState({
    from_name: '',
    from_email: '',
    subject: '',
    message: '',
  });

  // status: null | 'sending' | 'sent' | 'error'
  const [status, setStatus] = useState(null);
  const [errorMsg, setErrorMsg] = useState('');

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');
    setErrorMsg('');

    // Build template params — field names MUST match your EmailJS template variables
    const adminParams = {
      from_name:  formData.from_name,
      from_email: formData.from_email,
      subject:    `[Portfolio Contact] ${formData.subject}`,
      message:    formData.message,
    };

    const replyParams = {
      from_name:  formData.from_name,
      from_email: formData.from_email,   // EmailJS sends auto-reply TO this address
      subject:    formData.subject,
      message:    formData.message,
    };

    try {
      // STEP 1 — Send admin notification
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        ADMIN_TEMPLATE_ID,
        adminParams,
        EMAILJS_PUBLIC_KEY
      );

      // STEP 2 — Send auto-reply to visitor
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        REPLY_TEMPLATE_ID,
        replyParams,
        EMAILJS_PUBLIC_KEY
      );

      setStatus('sent');
      setFormData({ from_name: '', from_email: '', subject: '', message: '' });
      setTimeout(() => setStatus(null), 5000);
    } catch (err) {
      console.error('EmailJS error:', err);
      setErrorMsg('Something went wrong. Please try again or email me directly.');
      setStatus('error');
      setTimeout(() => setStatus(null), 6000);
    }
  };

  const isSending = status === 'sending';

  return (
    <section id="contact" className="py-24 relative">
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-2/3 h-1/2 opacity-5 pointer-events-none blur-3xl"
        style={{ background: 'radial-gradient(ellipse, #00f5ff, transparent)' }}
      />

      <div className="max-w-7xl mx-auto px-6" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="font-mono text-cyan-400 text-sm tracking-widest mb-3">// contact.init()</p>
          <h2 className="section-title">Get In Touch</h2>
          <div className="glow-line" />
          <p className="section-subtitle">
            Have a project in mind or want to hire me? Let's talk!
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-10">
          {/* Left: Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-2 flex flex-col gap-5"
          >
            {/* Intro card */}
            <div className="glass-card p-6 relative overflow-hidden animated-border">
              <div
                className="absolute top-0 right-0 w-24 h-24 opacity-10 pointer-events-none"
                style={{ background: 'radial-gradient(circle at top right, #00f5ff, transparent)' }}
              />
              <h3 className="text-white font-bold text-xl mb-3">Let's Connect</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                I'm actively looking for internship and placement opportunities.&nbsp;
                Whether you have a project, a question, or just want to say hi —&nbsp;
                my inbox is always open!
              </p>
            </div>

            {/* Contact items */}
            {contactInfo.map((item, i) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
              >
                {item.href ? (
                  <a
                    id={item.id}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="glass-card p-4 flex items-center gap-4 skill-card block"
                    style={{ borderColor: `${item.color}20` }}
                  >
                    <ContactIcon icon={item.icon} color={item.color} />
                    <div>
                      <p className="text-xs text-slate-500 font-mono mb-0.5">{item.label}</p>
                      <p className="text-white text-sm font-medium">{item.value}</p>
                    </div>
                  </a>
                ) : (
                  <div
                    id={item.id}
                    className="glass-card p-4 flex items-center gap-4 cursor-default"
                    style={{ borderColor: `${item.color}20` }}
                  >
                    <ContactIcon icon={item.icon} color={item.color} />
                    <div>
                      <p className="text-xs text-slate-500 font-mono mb-0.5">{item.label}</p>
                      <p className="text-white text-sm font-medium">{item.value}</p>
                    </div>
                  </div>
                )}
              </motion.div>
            ))}
          </motion.div>

          {/* Right: Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="lg:col-span-3"
          >
            <div className="glass-card p-8 animated-border">
              <form id="contact-form" ref={formRef} onSubmit={handleSubmit} className="space-y-5">

                <div className="grid sm:grid-cols-2 gap-5">
                  {/* Name */}
                  <div>
                    <label
                      htmlFor="from_name"
                      className="block text-xs font-mono text-slate-400 mb-2 tracking-wider uppercase"
                    >
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="from_name"
                      name="from_name"
                      value={formData.from_name}
                      onChange={handleChange}
                      required
                      placeholder="John Doe"
                      className="form-input"
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label
                      htmlFor="from_email"
                      className="block text-xs font-mono text-slate-400 mb-2 tracking-wider uppercase"
                    >
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="from_email"
                      name="from_email"
                      value={formData.from_email}
                      onChange={handleChange}
                      required
                      placeholder="john@example.com"
                      className="form-input"
                    />
                  </div>
                </div>

                {/* Subject */}
                <div>
                  <label
                    htmlFor="subject"
                    className="block text-xs font-mono text-slate-400 mb-2 tracking-wider uppercase"
                  >
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    placeholder="Internship Opportunity / Project Collaboration"
                    className="form-input"
                  />
                </div>

                {/* Message */}
                <div>
                  <label
                    htmlFor="message"
                    className="block text-xs font-mono text-slate-400 mb-2 tracking-wider uppercase"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    placeholder="Hey Yashraj, I'd love to discuss..."
                    className="form-input resize-none"
                  />
                </div>

                {/* Submit Button */}
                <motion.button
                  id="contact-submit"
                  type="submit"
                  disabled={isSending}
                  whileHover={!isSending ? { scale: 1.02 } : {}}
                  whileTap={!isSending ? { scale: 0.98 } : {}}
                  className="w-full btn-primary flex items-center justify-center gap-3 py-4 disabled:opacity-80 transition-all duration-300"
                  style={
                    isSending
                      ? { boxShadow: '0 0 36px #00f5ffaa, 0 0 10px #00f5ff55' }
                      : {}
                  }
                >
                  {isSending ? (
                    <>
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 0.85, repeat: Infinity, ease: 'linear' }}
                        className="w-4 h-4 rounded-full"
                        style={{
                          border: '2px solid transparent',
                          borderTopColor: '#020817',
                          borderRightColor: '#020817',
                          background: 'transparent',
                        }}
                      />
                      <span className="tracking-widest font-mono text-xs">Sending...</span>
                    </>
                  ) : status === 'sent' ? (
                    <>
                      <span>✅</span>
                      <span className="tracking-widest font-mono text-xs">Message Sent ✔</span>
                    </>
                  ) : status === 'error' ? (
                    <>
                      <span>⚠️</span>
                      <span className="tracking-widest font-mono text-xs">Failed to Send</span>
                    </>
                  ) : (
                    <>
                      <FaPaperPlane size={14} className="relative z-10" />
                      <span className="tracking-widest font-mono text-xs">SEND MESSAGE</span>
                    </>
                  )}
                </motion.button>

                {/* Success feedback */}
                {status === 'sent' && (
                  <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center text-sm text-cyan-400 font-mono"
                  >
                    🚀 Message delivered! An auto-reply has been sent to your inbox.
                  </motion.p>
                )}

                {/* Error feedback */}
                {status === 'error' && (
                  <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center text-sm text-rose-400 font-mono"
                  >
                    ⚠️ {errorMsg}
                  </motion.p>
                )}

              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function ContactIcon({ icon: Icon, color }) {
  return (
    <div
      className="w-10 h-10 rounded-xl flex-shrink-0 flex items-center justify-center"
      style={{
        background: `${color}12`,
        border: `1px solid ${color}30`,
        boxShadow: `0 0 15px ${color}20`,
      }}
    >
      <Icon style={{ color }} size={16} />
    </div>
  );
}
