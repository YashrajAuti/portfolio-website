import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { FaCode, FaBrain, FaRocket, FaGraduationCap } from 'react-icons/fa';

const traits = [
  { icon: FaGraduationCap, title: 'BE Computer Engineering', desc: 'Currently pursuing Bachelor of Engineering in Computer Science, building a strong foundation in CS fundamentals.', color: '#00f5ff' },
  { icon: FaCode, title: 'Software Developer', desc: 'Passionate about crafting clean, efficient code. Skilled in Java, Python, and modern web technologies.', color: '#4facfe' },
  { icon: FaBrain, title: 'AI & Automation', desc: 'Fascinated by Artificial Intelligence and automation. Exploring ML models and intelligent system design.', color: '#a855f7' },
  { icon: FaRocket, title: 'Project Builder', desc: 'Love turning ideas into reality. Built real-world projects across management systems, IoT, and web apps.', color: '#f472b6' },
];

const stats = [
  { number: '4+', label: 'Projects Built' },
  { number: '8+', label: 'Technologies' },
  { number: '20+', label: 'Certificates' },
  { number: '∞', label: 'Curiosity' },
];

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="about" className="py-24 relative">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/3 h-full opacity-5 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse at right, #00f5ff, transparent)' }} />

      <div className="max-w-7xl mx-auto px-6" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="font-mono text-cyan-400 text-sm tracking-widest mb-3">// about.me</p>
          <h2 className="section-title">About Me</h2>
          <div className="glow-line" />
          <p className="section-subtitle">
            A passionate engineer who loves building, learning, and creating impactful solutions.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Story Card */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <div className="glass-card p-8 relative overflow-hidden animated-border">
              {/* Corner accent */}
              <div className="absolute top-0 right-0 w-20 h-20 opacity-20"
                style={{ background: 'radial-gradient(circle at top right, #00f5ff, transparent)' }} />

              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center"
                  style={{ background: 'rgba(0,245,255,0.1)', border: '1px solid rgba(0,245,255,0.2)' }}>
                  <FaGraduationCap className="text-cyan-400" size={20} />
                </div>
                <div>
                  <h3 className="text-white font-bold text-lg">Who Am I?</h3>
                  <p className="text-cyan-400 text-xs font-mono">yash.auti.exe</p>
                </div>
              </div>

              <div className="space-y-4 text-slate-300 leading-relaxed">
                <p>
                  Hello! I'm <span className="text-cyan-400 font-semibold">Yashraj Auti</span>, a Computer Engineering student passionate about software development, AI, automation, and problem-solving.
                </p>
                <p>
                  I enjoy building practical projects ranging from Java-based management systems to IoT and cloud-based solutions. My work includes projects like <span className="text-blue-400 font-semibold">Paper Paradox, Time Table Management System, Fire Detection Alarm System</span>, and various Java applications.
                </p>
                <p>
                  I’m constantly learning new technologies, improving my development skills, and exploring innovative ideas in <span className="text-purple-400 font-semibold">web development, artificial intelligence, and sustainable digital systems</span>.
                </p>
                <p>
                  Currently, I’m focused on strengthening my technical skills, building impactful projects, and preparing for <span className="text-pink-400 font-semibold">internships and software engineering opportunities</span> where I can learn, contribute, and grow as a developer.
                </p>
              </div>

              {/* Tech Stack pills */}
              <div className="flex flex-wrap gap-2 mt-6">
                {['Java', 'Python', 'HTML', 'CSS', 'JavaScript', 'React', 'Flask', 'MySQL', 'SQLite', 'Git & GitHub', 'Arduino'].map(tech => (
                  <span key={tech} className="text-xs font-mono px-3 py-1 rounded-full text-cyan-400"
                    style={{ background: 'rgba(0,245,255,0.08)', border: '1px solid rgba(0,245,255,0.2)' }}>
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right: Traits + Stats */}
          <div className="space-y-6">
            {/* Traits Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {traits.map((trait, i) => (
                <motion.div
                  key={trait.title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
                  className="glass-card p-5 skill-card cursor-default"
                  style={{ borderColor: `${trait.color}20` }}
                >
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-lg flex-shrink-0 flex items-center justify-center"
                      style={{ background: `${trait.color}15`, border: `1px solid ${trait.color}30` }}>
                      <trait.icon style={{ color: trait.color }} size={18} />
                    </div>
                    <div>
                      <h4 className="font-semibold text-white text-sm mb-1">{trait.title}</h4>
                      <p className="text-slate-400 text-xs leading-relaxed">{trait.desc}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Stats Row */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="glass-card p-6"
            >
              <div className="grid grid-cols-4 gap-4 text-center">
                {stats.map((stat, i) => (
                  <div key={stat.label} className="relative">
                    {i > 0 && (
                      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-px h-8"
                        style={{ background: 'rgba(0,245,255,0.2)' }} />
                    )}
                    <div className="text-2xl md:text-3xl font-black gradient-text mb-1">{stat.number}</div>
                    <div className="text-xs text-slate-400 font-mono">{stat.label}</div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
