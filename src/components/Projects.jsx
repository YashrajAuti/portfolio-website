import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaLock, FaCalendarAlt, FaStethoscope, FaUniversity, FaRegCheckCircle } from 'react-icons/fa';
import { HiSparkles, HiCode } from 'react-icons/hi';
import { BiGitBranch } from 'react-icons/bi';

/* ─── Data: Featured Live Projects ─── */
const featuredProjects = [
  {
    id: 'project-paper-paradox',
    title: 'Paper Paradox – Secure Digital Academic Verification System',
    badges: ['FEATURED PROJECT', 'LIVE'],
    specialTag: 'IEEE Presentation Project',
    shortDescription: 'A cloud-based academic workflow platform designed to replace paper-based verification systems using secure digital validation methods. Solves the "Paper Paradox" problem by integrating cryptographic hashing, timestamps, and cloud storage to create a sustainable and secure paperless verification system.',
    features: [
      'Secure digital document verification',
      'Cryptographic hash generation',
      'Cloud-based storage system',
      'Faculty verification workflow',
      'Role-based authentication',
      'Real-time status tracking',
      'Sustainable paperless workflow',
      'Green IT implementation'
    ],
    techStack: ['HTML', 'CSS', 'JavaScript', 'Python', 'Flask', 'Cloud Computing', 'Cryptographic Hashing'],
    github: 'https://github.com/YashrajAuti/paper-paradox',
    demo: 'https://paper-paradox.onrender.com/',
    icon: FaLock,
    color: '#00f5ff', // Neon cyan
    isFlagship: true,
  },
  {
    id: 'project-timetable',
    title: 'Time Table Management System',
    badges: ['LIVE'],
    specialTag: null,
    shortDescription: 'A DBMS-oriented web application that automates timetable generation and scheduling for educational institutions using optimized rule-based logic and relational database management concepts.',
    features: [
      'Automated timetable generation',
      'Faculty conflict prevention',
      'Subject and schedule management',
      'SQL-based data operations',
      'Relational database design',
      'CRUD functionality',
      'Normalized database schema',
      'User-friendly scheduling workflow'
    ],
    techStack: ['HTML', 'CSS', 'JavaScript', 'Python', 'Flask', 'MySQL', 'SQLite', 'DBMS'],
    github: 'https://github.com/YashrajAuti/Time-Table-Management-System',
    demo: 'https://timetable-generator-p1za.onrender.com/',
    icon: FaCalendarAlt,
    color: '#a855f7', // Purple
    isFlagship: false,
  }
];

/* ─── Data: GitHub Projects ─── */
const githubProjects = [
  {
    id: 'project-lifeline',
    title: 'LifeLine Hospital Management App',
    badges: ['GITHUB ONLY'],
    shortDescription: 'A Java console-based hospital management application that simulates patient handling, doctor assignment, room management, billing, and payment processing through a menu-driven interface.',
    features: [
      'Doctor and specialization selection',
      'Patient registration',
      'Auto-generated patient IDs',
      'Room management system',
      'Treatment billing',
      'Payment and checkout',
      'Patient reports generation'
    ],
    techStack: ['Java', 'OOP', 'Console Application'],
    github: 'https://github.com/YashrajAuti/LifelineHospitalApp',
    icon: FaStethoscope,
    color: '#f472b6', // Pink
  },
  {
    id: 'project-bank',
    title: 'Bank Management System',
    badges: ['GITHUB ONLY'],
    shortDescription: 'A Java-based console banking application developed using Object-Oriented Programming concepts to simulate core banking functionalities like account creation, deposits, withdrawals, and balance management.',
    features: [
      'Account creation',
      'Deposit and withdrawal system',
      'Balance inquiry',
      'Record management',
      'OOP-based architecture',
      'Menu-driven interface'
    ],
    techStack: ['Java', 'OOP', 'Arrays', 'Scanner Class'],
    github: 'https://github.com/YashrajAuti/Java-Bank-Management-System',
    icon: FaUniversity,
    color: '#4facfe', // Electric Blue
  }
];

/* ─── Animations ─── */
const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.98 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.6, ease: 'easeOut' } },
};

/* ════════════════════════════════════════════ */
export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="projects" className="py-24 relative overflow-hidden">
      {/* Background glowing blobs */}
      <div className="absolute top-1/4 left-0 w-96 h-96 rounded-full opacity-5 blur-[100px] pointer-events-none"
        style={{ background: '#00f5ff' }} />
      <div className="absolute bottom-1/4 right-0 w-80 h-80 rounded-full opacity-5 blur-[100px] pointer-events-none"
        style={{ background: '#a855f7' }} />

      <div className="max-w-7xl mx-auto px-6" ref={ref}>
        {/* ── Section Header ── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 mb-4 px-4 py-1.5 rounded-full text-xs font-mono text-cyan-400"
            style={{ background: 'rgba(0,245,255,0.06)', border: '1px solid rgba(0,245,255,0.18)' }}>
            <HiCode className="text-cyan-400" size={16} />
            <span>Developer Portfolio</span>
          </div>

          <p className="font-mono text-cyan-400 text-sm tracking-widest mb-3">
            // public.projects
          </p>
          <h2 className="section-title">Projects Showcase</h2>
          <div className="glow-line" />
          <p className="section-subtitle">
            A selection of my technical work, ranging from secure cloud architectures and DBMS-driven web applications to core Java OOP implementations.
          </p>
        </motion.div>

        {/* ── Section 1: Featured Live Projects ── */}
        <div className="mb-24">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex items-center gap-3 mb-8"
          >
            <div className="w-10 h-10 rounded-xl flex items-center justify-center bg-cyan-500/10 border border-cyan-500/30 shadow-[0_0_15px_rgba(0,245,255,0.2)]">
              <HiSparkles className="text-cyan-400" size={20} />
            </div>
            <h3 className="text-2xl font-bold text-white tracking-wide">Featured Live Projects</h3>
            <div className="flex-1 h-px ml-4" style={{ background: 'linear-gradient(90deg, rgba(0,245,255,0.3), transparent)' }} />
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            className="grid lg:grid-cols-2 gap-8"
          >
            {featuredProjects.map((project) => (
              <motion.div key={project.id} variants={cardVariants} className="h-full">
                <ProjectCard project={project} />
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* ── Section 2: GitHub Projects ── */}
        <div>
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex items-center gap-3 mb-8"
          >
            <div className="w-10 h-10 rounded-xl flex items-center justify-center bg-purple-500/10 border border-purple-500/30 shadow-[0_0_15px_rgba(168,85,247,0.2)]">
              <BiGitBranch className="text-purple-400" size={20} />
            </div>
            <h3 className="text-2xl font-bold text-white tracking-wide">GitHub Projects</h3>
            <div className="flex-1 h-px ml-4" style={{ background: 'linear-gradient(90deg, rgba(168,85,247,0.3), transparent)' }} />
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            className="grid lg:grid-cols-2 gap-8"
          >
            {githubProjects.map((project) => (
              <motion.div key={project.id} variants={cardVariants} className="h-full">
                <ProjectCard project={project} isGithubOnly={true} />
              </motion.div>
            ))}
          </motion.div>
        </div>

      </div>
    </section>
  );
}

/* ════════════════════════════════════════════
   Project Card Component (Reusable)
════════════════════════════════════════════ */
function ProjectCard({ project, isGithubOnly = false }) {
  const { title, badges, specialTag, shortDescription, features, techStack, github, demo, icon: Icon, color, isFlagship } = project;

  return (
    <motion.div
      whileHover={{ y: -8, scale: 1.01 }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      className={`glass-card h-full flex flex-col overflow-hidden group relative z-10 ${isFlagship ? 'border-cyan-500/40 shadow-[0_0_30px_rgba(0,245,255,0.15)]' : 'border-slate-800/60 hover:border-slate-700'}`}
      style={{
        borderColor: isFlagship ? undefined : `${color}25`,
      }}
    >
      {/* Animated glowing border top */}
      <div className="absolute top-0 left-0 right-0 h-[2px] w-full transition-all duration-500"
        style={{
          background: `linear-gradient(90deg, transparent, ${color}, transparent)`,
          boxShadow: `0 0 15px ${color}80`,
          opacity: isFlagship ? 1 : 0.4,
        }} 
      />

      {/* Hover glow background */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none rounded-2xl -z-10"
        style={{ background: `radial-gradient(circle at center 0%, ${color}15, transparent 60%)` }} />

      <div className="p-7 flex flex-col flex-1 relative z-10">
        
        {/* -- Header: Icons & Badges -- */}
        <div className="flex flex-wrap items-start justify-between gap-4 mb-5">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3"
              style={{
                background: `${color}15`,
                border: `1.5px solid ${color}40`,
                boxShadow: `0 0 20px ${color}30`,
              }}>
              <Icon size={24} style={{ color, filter: `drop-shadow(0 0 8px ${color}80)` }} />
            </div>
            {specialTag && (
              <span className="text-xs font-bold px-3 py-1 rounded-full animate-pulse border"
                style={{ color: '#fff', background: `${color}40`, borderColor: `${color}80`, boxShadow: `0 0 10px ${color}60` }}>
                ✨ {specialTag}
              </span>
            )}
          </div>
          
          <div className="flex flex-wrap gap-2 justify-end">
            {badges.map(badge => (
              <span key={badge} className="text-[10px] font-mono tracking-wider font-bold px-2.5 py-1 rounded-full border bg-slate-900/80 backdrop-blur-md"
                style={{ 
                  color: badge === 'LIVE' ? '#10b981' : badge === 'FEATURED PROJECT' ? '#f59e0b' : '#94a3b8',
                  borderColor: badge === 'LIVE' ? '#10b98140' : badge === 'FEATURED PROJECT' ? '#f59e0b40' : '#475569'
                }}>
                {badge === 'LIVE' ? '🟢 ' : ''}{badge}
              </span>
            ))}
          </div>
        </div>

        {/* -- Title & Description -- */}
        <h3 className="text-xl md:text-2xl font-bold text-white leading-tight mb-4 group-hover:text-cyan-100 transition-colors duration-300">
          {title}
        </h3>
        
        <p className="text-slate-300 text-sm md:text-base leading-relaxed mb-6">
          {shortDescription}
        </p>

        {/* -- Detailed Features (Grid list) -- */}
        <div className="mb-6">
          <p className="text-xs font-mono text-slate-500 mb-3 uppercase tracking-wider">// Key Features</p>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-2">
            {features.map((feature, idx) => (
              <li key={idx} className="flex items-start gap-2 text-xs md:text-sm text-slate-400">
                <FaRegCheckCircle className="mt-0.5 flex-shrink-0" style={{ color: `${color}80` }} />
                <span className="leading-tight">{feature}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex-1" /> {/* Spacer to push bottom elements down */}

        {/* -- Tech Stack Tags -- */}
        <div className="mb-8">
          <div className="flex flex-wrap gap-2">
            {techStack.map((tech) => (
              <span key={tech}
                className="text-xs font-mono px-3 py-1 rounded-md transition-all duration-300 hover:-translate-y-1"
                style={{
                  color: color,
                  background: `${color}10`,
                  border: `1px solid ${color}30`,
                }}>
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* -- Action Buttons -- */}
        <div className="flex flex-wrap items-center gap-4 mt-auto pt-4 border-t border-slate-800/60">
          <motion.a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-semibold transition-all duration-300 bg-slate-800 hover:bg-slate-700 border border-slate-700 text-white shadow-[0_0_15px_rgba(255,255,255,0.05)] hover:shadow-[0_0_20px_rgba(255,255,255,0.15)]"
          >
            <FaGithub size={16} />
            <span>View Source</span>
          </motion.a>

          {demo && !isGithubOnly && (
            <motion.a
              href={demo}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-semibold transition-all duration-300 text-white"
              style={{
                background: `linear-gradient(135deg, ${color}90, ${color}40)`,
                border: `1px solid ${color}`,
                boxShadow: `0 0 20px ${color}40`,
              }}
            >
              <FaExternalLinkAlt size={14} />
              <span>Live Demo</span>
            </motion.a>
          )}
        </div>

      </div>
    </motion.div>
  );
}
