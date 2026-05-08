import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import {
  FaJava, FaPython, FaHtml5, FaCss3Alt, FaJs, FaReact, FaDatabase, FaGithub
} from 'react-icons/fa';

const skills = [
  {
    name: 'Java',
    icon: FaJava,
    level: 85,
    color: '#f89820',
    glow: '#f89820',
    desc: 'Core Java, OOP, Data Structures',
    category: 'Backend',
  },
  {
    name: 'Python',
    icon: FaPython,
    level: 75,
    color: '#3776ab',
    glow: '#4facfe',
    desc: 'Scripting, Automation, ML basics',
    category: 'Backend',
  },
  {
    name: 'HTML5',
    icon: FaHtml5,
    level: 90,
    color: '#e34f26',
    glow: '#f472b6',
    desc: 'Semantic HTML, Accessibility',
    category: 'Frontend',
  },
  {
    name: 'CSS3',
    icon: FaCss3Alt,
    level: 85,
    color: '#1572b6',
    glow: '#4facfe',
    desc: 'Flexbox, Grid, Animations',
    category: 'Frontend',
  },
  {
    name: 'JavaScript',
    icon: FaJs,
    level: 75,
    color: '#f7df1e',
    glow: '#fbbf24',
    desc: 'ES6+, DOM, Async/Await',
    category: 'Frontend',
  },
  {
    name: 'React',
    icon: FaReact,
    level: 70,
    color: '#61dafb',
    glow: '#00f5ff',
    desc: 'Components, Hooks, State Mgmt',
    category: 'Frontend',
  },
  {
    name: 'MySQL',
    icon: FaDatabase,
    level: 80,
    color: '#00758f',
    glow: '#00f5ff',
    desc: 'Queries, Relations, Joins',
    category: 'Database',
  },
  {
    name: 'GitHub',
    icon: FaGithub,
    level: 85,
    color: '#ffffff',
    glow: '#a855f7',
    desc: 'Version Control, Collaboration',
    category: 'Tools',
  },
];

export default function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="skills" className="py-24 relative">
      <div className="absolute top-1/2 left-0 w-1/3 h-96 opacity-5 -translate-y-1/2 pointer-events-none blur-3xl"
        style={{ background: 'radial-gradient(ellipse, #00f5ff, transparent)' }} />

      <div className="max-w-7xl mx-auto px-6" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="font-mono text-cyan-400 text-sm tracking-widest mb-3">// skills.map()</p>
          <h2 className="section-title">My Skills</h2>
          <div className="glow-line" />
          <p className="section-subtitle">
            Technologies I work with to bring ideas to life.
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-5">
          {skills.map((skill, i) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, scale: 0.7, y: 20 }}
              animate={isInView ? { opacity: 1, scale: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.08, type: 'spring', stiffness: 150 }}
            >
              <SkillCard skill={skill} isInView={isInView} />
            </motion.div>
          ))}
        </div>

        {/* Category Legend */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="flex flex-wrap justify-center gap-4 mt-12"
        >
          {['Frontend', 'Backend', 'Database', 'Tools'].map((cat) => (
            <span key={cat}
              className="flex items-center gap-2 text-xs font-mono text-slate-400 px-4 py-2 rounded-full"
              style={{ background: 'rgba(0,245,255,0.05)', border: '1px solid rgba(0,245,255,0.15)' }}>
              <span className="w-2 h-2 rounded-full bg-cyan-400" style={{ boxShadow: '0 0 6px #00f5ff' }} />
              {cat}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function SkillCard({ skill, isInView }) {
  const { icon: Icon, name, level, color, glow, desc, category } = skill;

  return (
    <div
      className="glass-card skill-card p-6 text-center cursor-default group"
      style={{ borderColor: `${glow}20` }}
    >
      {/* Category badge */}
      <span className="inline-block text-xs font-mono mb-4 px-2 py-0.5 rounded-full opacity-60"
        style={{ color, background: `${color}15`, border: `1px solid ${color}30` }}>
        {category}
      </span>

      {/* Icon */}
      <div className="flex justify-center mb-4">
        <div
          className="w-16 h-16 rounded-2xl flex items-center justify-center transition-all duration-300 group-hover:scale-110"
          style={{
            background: `${color}15`,
            border: `1.5px solid ${color}40`,
            boxShadow: `0 0 20px ${glow}20`,
          }}
        >
          <Icon
            size={32}
            style={{
              color,
              filter: `drop-shadow(0 0 8px ${glow})`,
            }}
          />
        </div>
      </div>

      {/* Name */}
      <h3 className="text-white font-bold mb-1 text-base">{name}</h3>
      <p className="text-slate-500 text-xs mb-4 leading-relaxed">{desc}</p>

      {/* Progress bar */}
      <div className="skill-bar">
        <motion.div
          className="skill-bar-fill"
          style={{ background: `linear-gradient(90deg, ${color}, ${glow})`, boxShadow: `0 0 10px ${glow}60` }}
          initial={{ scaleX: 0 }}
          animate={isInView ? { scaleX: level / 100 } : { scaleX: 0 }}
          transition={{ duration: 1.2, delay: 0.3, ease: 'easeOut' }}
        />
      </div>
      <div className="text-right mt-1">
        <span className="text-xs font-mono" style={{ color: glow }}>{level}%</span>
      </div>
    </div>
  );
}
