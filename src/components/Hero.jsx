import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { FaGithub, FaLinkedinIn, FaInstagram, FaEnvelope, FaDownload } from 'react-icons/fa';
import { HiArrowRight } from 'react-icons/hi';
import { Link } from 'react-scroll';

const socialLinks = [
  { icon: FaGithub, href: 'https://github.com/YashrajAuti', label: 'GitHub', id: 'social-github' },
  { icon: FaLinkedinIn, href: 'https://www.linkedin.com/in/yashraj-auti', label: 'LinkedIn', id: 'social-linkedin' },
  { icon: FaInstagram, href: 'https://www.instagram.com/yashraj_auti_', label: 'Instagram', id: 'social-instagram' },
  { icon: FaEnvelope, href: 'mailto:autiyashraj8@gmail.com', label: 'Email', id: 'social-email' },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.3 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center hero-bg overflow-hidden"
    >
      {/* Decorative glowing orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full opacity-10 blur-3xl pointer-events-none"
        style={{ background: 'radial-gradient(circle, #00f5ff, transparent)' }} />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full opacity-10 blur-3xl pointer-events-none"
        style={{ background: 'radial-gradient(circle, #4facfe, transparent)' }} />

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-32 w-full">
        <div className="flex flex-col-reverse lg:flex-row items-center gap-12 lg:gap-20">

          {/* Left: Text Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="flex-1 text-center lg:text-left"
          >
            {/* Badge */}
            <motion.div variants={itemVariants} className="inline-flex items-center gap-2 mb-6">
              <div className="relative">
                <span className="absolute inline-flex h-3 w-3 rounded-full bg-cyan-400 opacity-75 animate-ping" />
                <span className="relative inline-flex h-3 w-3 rounded-full bg-cyan-400" />
              </div>
              <span className="text-xs font-mono text-cyan-400 tracking-widest uppercase"
                style={{ background: 'rgba(0,245,255,0.08)', padding: '4px 14px', borderRadius: '20px', border: '1px solid rgba(0,245,255,0.2)' }}>
                Available for Internship
              </span>
            </motion.div>

            {/* Greeting */}
            <motion.p variants={itemVariants} className="font-mono text-cyan-400 text-sm tracking-widest mb-3">
              &gt; Hello World, I'm
            </motion.p>

            {/* Name */}
            <motion.h1 variants={itemVariants} className="text-5xl md:text-6xl lg:text-7xl font-black mb-4 leading-none">
              <span className="text-white">Yashraj</span>{' '}
              <span className="gradient-text">Auti</span>
            </motion.h1>

            {/* Typing Animation */}
            <motion.div variants={itemVariants} className="text-xl md:text-2xl font-semibold mb-6 h-8 text-slate-300">
              <TypeAnimation
                sequence={[
                  'Computer Engineering Student', 2000,
                  'Java Developer', 2000,
                  'Tech Enthusiast', 2000,
                  'AI & Automation Fan', 2000,
                  'Problem Solver', 2000,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
                style={{ color: '#00f5ff' }}
              />
            </motion.div>

            {/* Description */}
            <motion.p variants={itemVariants} className="text-slate-400 text-base md:text-lg leading-relaxed max-w-xl mb-8 mx-auto lg:mx-0">
              Passionate BE Computer Engineering student building innovative solutions with Java, Python & modern web technologies.
              Turning complex problems into elegant, scalable code — one project at a time.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div variants={itemVariants} className="flex flex-wrap gap-4 justify-center lg:justify-start mb-10">
              <Link to="projects" smooth duration={800} offset={-80}>
                <motion.button
                  id="hero-view-projects"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="btn-primary flex items-center gap-2 cursor-pointer"
                >
                  <span>View Projects</span>
                  <HiArrowRight className="relative z-10" />
                </motion.button>
              </Link>

              <motion.a
                id="hero-download-resume"
                href="https://drive.google.com/file/d/1r5fMp88uWLjTqegSZBdeaCPDQKsKGFDa/view?usp=share_link"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-outline flex items-center gap-2"
              >
                <FaDownload size={14} />
                Download Resume
              </motion.a>
            </motion.div>

            {/* Social Icons */}
            <motion.div variants={itemVariants} className="flex gap-4 justify-center lg:justify-start">
              {socialLinks.map(({ icon: Icon, href, label, id }) => (
                <motion.a
                  key={id}
                  id={id}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  whileHover={{ scale: 1.2, y: -4 }}
                  whileTap={{ scale: 0.9 }}
                  className="social-icon w-10 h-10 rounded-full flex items-center justify-center"
                  style={{ background: 'rgba(0,245,255,0.06)', border: '1px solid rgba(0,245,255,0.15)' }}
                >
                  <Icon size={18} />
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          {/* Right: Profile Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5, rotate: -10 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
            className="flex-shrink-0"
          >
            <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96">
              {/* Outer ping ring */}
              <div className="absolute inset-0 rounded-full animate-ping-slow opacity-20"
                style={{ background: 'transparent', border: '2px solid #00f5ff' }} />

              {/* Rotating gradient ring */}
              <div className="absolute inset-0 rounded-full animate-spin-slow"
                style={{
                  background: 'conic-gradient(from 0deg, #00f5ff, #4facfe, #a855f7, transparent, #00f5ff)',
                  padding: '3px',
                }} >
                <div className="w-full h-full rounded-full" style={{ background: '#020817' }} />
              </div>

              {/* Second ring */}
              <div className="absolute inset-2 rounded-full"
                style={{
                  background: 'linear-gradient(135deg, rgba(0,245,255,0.2), rgba(79,172,254,0.2))',
                  border: '1px solid rgba(0,245,255,0.3)',
                }} />

              {/* Profile image */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute inset-4 rounded-full overflow-hidden"
                style={{
                  boxShadow: '0 0 40px rgba(0,245,255,0.3), 0 0 80px rgba(0,245,255,0.1)',
                  border: '2px solid rgba(0,245,255,0.3)',
                }}
              >
                <img
                  src="/profile.png"
                  alt="Yash Auti - Computer Engineering Student"
                  className="w-full h-full object-cover"
                />
              </motion.div>

              {/* Floating badges */}
              <motion.div
                animate={{ y: [0, -8, 0], rotate: [0, 5, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -right-4 top-8 glass-card px-3 py-2 text-xs font-mono text-cyan-400"
                style={{ boxShadow: '0 0 20px rgba(0,245,255,0.2)' }}
              >
                &lt;Java Developer/&gt;
              </motion.div>

              <motion.div
                animate={{ y: [0, 8, 0], rotate: [0, -5, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
                className="absolute -left-6 bottom-10 glass-card px-3 py-2 text-xs font-mono text-blue-400"
                style={{ boxShadow: '0 0 20px rgba(79,172,254,0.2)' }}
              >
                🎓 BE | CE
              </motion.div>

              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
                className="absolute -bottom-4 right-8 glass-card px-3 py-2 text-xs font-mono text-purple-400"
                style={{ boxShadow: '0 0 20px rgba(168,85,247,0.2)' }}
              >
                ✨ Open to Work
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span className="text-xs text-slate-500 tracking-widest font-mono uppercase">Scroll</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-5 h-8 rounded-full border border-slate-600 flex justify-center pt-1"
          >
            <div className="w-1 h-2 rounded-full bg-cyan-400" style={{ boxShadow: '0 0 6px #00f5ff' }} />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
