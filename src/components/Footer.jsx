import { motion } from 'framer-motion';
import { FaGithub, FaLinkedinIn, FaInstagram, FaHeart } from 'react-icons/fa';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative py-10 border-t" style={{ borderColor: 'rgba(0,245,255,0.08)' }}>
      <div className="absolute inset-0 pointer-events-none"
        style={{ background: 'linear-gradient(to top, rgba(0,245,255,0.02), transparent)' }} />

      <div className="max-w-7xl mx-auto px-6 relative">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-cyan-400 to-blue-500 flex items-center justify-center"
              style={{ boxShadow: '0 0 15px rgba(0,245,255,0.4)' }}>
              <span className="font-black text-xs" style={{ color: '#020817' }}>Y</span>
            </div>
            <span className="font-bold text-base">
              <span className="text-white">Yashraj </span>
              <span className="gradient-text">Auti</span>
            </span>
          </div>

          {/* Copyright */}
          <p className="text-slate-500 text-sm text-center flex items-center gap-1.5 flex-wrap justify-center">
            <span>Designed & Developed with</span>
            <motion.span
              animate={{ scale: [1, 1.3, 1] }}
              transition={{ duration: 1, repeat: Infinity }}
            >
              <FaHeart className="text-red-500" size={12} />
            </motion.span>
            <span>by</span>
            <span className="gradient-text font-semibold">Yashraj Auti</span>
            <span className="text-slate-600">— © {currentYear}</span>
          </p>

          {/* Social */}
          <div className="flex items-center gap-3">
            {[
              { icon: FaGithub, href: 'https://github.com/YashrajAuti', id: 'footer-github' },
              { icon: FaLinkedinIn, href: 'https://www.linkedin.com/in/yashraj-auti', id: 'footer-linkedin' },
              { icon: FaInstagram, href: 'https://www.instagram.com/yashraj_auti_', id: 'footer-instagram' },
            ].map(({ icon: Icon, href, id }) => (
              <motion.a
                key={id}
                id={id}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, y: -3 }}
                className="social-icon w-8 h-8 rounded-full flex items-center justify-center"
                style={{ background: 'rgba(0,245,255,0.06)', border: '1px solid rgba(0,245,255,0.12)' }}
              >
                <Icon size={14} />
              </motion.a>
            ))}
          </div>
        </div>

        {/* Bottom line */}
        <div className="mt-6 h-px w-full"
          style={{ background: 'linear-gradient(90deg, transparent, rgba(0,245,255,0.2), transparent)' }} />
        <p className="text-center text-slate-600 text-xs mt-4 font-mono">
          Built with React + Vite + TailwindCSS + Framer Motion ⚡
        </p>
      </div>
    </footer>
  );
}
