import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import {
  FaExternalLinkAlt, FaMedal, FaTrophy, FaCertificate,
  FaRobot, FaMicrochip, FaWifi, FaBrain, FaComments, FaLightbulb
} from 'react-icons/fa';
import { SiInfosys, SiIeee, SiArduino } from 'react-icons/si';
import { HiSparkles, HiAcademicCap } from 'react-icons/hi';

/* ─── Featured Certificates ─── */
const featured = [
  {
    id: 'cert-ibm-ai',
    title: 'Getting Started with Artificial Intelligence',
    issuer: 'IBM SkillsBuild',
    date: 'January 2026',
    description:
      'Successfully completed the AI fundamentals certification covering machine learning concepts, neural networks, and emerging AI technologies on IBM SkillsBuild platform.',
    tags: ['Artificial Intelligence', 'Machine Learning', 'IBM'],
    icon: FaBrain,
    issuerIcon: FaCertificate,
    color: '#00f5ff',
    badge: '🤖',
    credentialUrl:
      'https://drive.google.com/file/d/1p92TPkMRx6bCLFgT3b0MMD4ba-i1pseJ/view?usp=share_link',
    category: 'AI / ML',
  },
  {
    id: 'cert-infosys-robotics',
    title: 'Robotics & Automation Training',
    issuer: 'Infosys Springboard',
    date: 'April 2026',
    description:
      'Completed hands-on robotics & automation training — Robot Arms in Industry, DobotStudio, Line Finder & Ultrasonic Sensors, Garbage Moving Robot, TaskBot Design, and Bot Movement Programming.',
    tags: ['Robotics', 'DobotStudio', 'Automation', 'IoT'],
    icon: FaRobot,
    issuerIcon: SiInfosys,
    color: '#4facfe',
    badge: '🦾',
    credentialUrl:
      'https://drive.google.com/drive/folders/1eVVt14Wv-9LcjKW2klb5rnQg4_d8lgfu?usp=share_link',
    category: 'Robotics',
  },
  {
    id: 'cert-ieee-praxis',
    title: 'IEEE PRAXIS – Paper Paradox Presentation',
    issuer: 'MMIT IEEE Student Branch',
    date: '2026',
    description:
      'Presented "Paper Paradox" at PRAXIS — A Premier Scholar\'s Knowledge Exchange. Project focused on secure digital proof systems using hashing, timestamps, and AI-assisted validation for academic verification.',
    tags: ['IEEE', 'Research', 'Blockchain', 'AI Validation'],
    icon: HiAcademicCap,
    issuerIcon: SiIeee,
    color: '#a855f7',
    badge: '🏛️',
    credentialUrl:
      'https://drive.google.com/file/d/1o7d7VAm1lezSpb0QV6w4VFK8Dfz-iOau/view?usp=share_link',
    category: 'Research',
  },
  {
    id: 'cert-hackathon',
    title: 'InnovateYou Techathon 2.0 – Hackathon',
    issuer: 'Innovation Foundation & AISSMS IOIT Pune',
    date: 'February 2025',
    description:
      'Participated in a 24-hour national-level hackathon solving real-world problems through rapid prototyping, teamwork, and innovation under extreme time constraints.',
    tags: ['Hackathon', 'Rapid Prototyping', 'Innovation'],
    icon: FaTrophy,
    issuerIcon: FaLightbulb,
    color: '#f59e0b',
    badge: '🏆',
    credentialUrl:
      'https://drive.google.com/file/d/1e5mraeB2MMDxTZrnhggSJI5pTXZLobY0/view?usp=share_link',
    category: 'Hackathon',
  },
  {
    id: 'cert-fire-detection',
    title: 'Fire Detection Alarm System Certification',
    issuer: 'Project Certification',
    date: '2025',
    description:
      'Designed & developed a Fire Detection Alarm System using Arduino Uno, Flame Sensor, DHT11, LEDs, and buzzer modules for real-time fire safety monitoring and automated alert systems.',
    tags: ['Arduino', 'Embedded C', 'IoT', 'Sensors'],
    icon: FaMicrochip,
    issuerIcon: SiArduino,
    color: '#f472b6',
    badge: '🔥',
    credentialUrl:
      'https://drive.google.com/file/d/1RBxQVsB32wnGqjK1bNyyKu_75m4yctyK/view?usp=share_link',
    category: 'IoT / Embedded',
  },
  {
    id: 'cert-iot-workshop',
    title: 'IoT Technologies & Industrial Applications',
    issuer: 'Indeed Inspiring Infotech',
    date: 'March 2026',
    description:
      'Attended an intensive workshop on IoT technologies and industrial applications, covering practical implementation, sensor integration, and hardware-software connectivity concepts.',
    tags: ['IoT', 'Industrial Automation', 'Hardware'],
    icon: FaWifi,
    issuerIcon: FaMicrochip,
    color: '#10b981',
    badge: '⚡',
    credentialUrl:
      'https://drive.google.com/file/d/1r-4ZSXC_g-64i6T5ybNs5DOtH3VUdDQ_/view?usp=share_link',
    category: 'IoT',
  },
];

/* ─── Additional Certifications ─── */
const additional = [
  {
    id: 'cert-communication',
    title: 'Professional Communication Skills',
    issuer: 'Gurukul Academy',
    date: '2025',
    description:
      'Certified training in verbal communication, email writing, group discussions, presentations, and workplace communication skills.',
    badge: '🗣️',
    color: '#6366f1',
    icon: FaComments,
    credentialUrl:
      'https://drive.google.com/file/d/1YKR68pRsaCSyvxWRSZUTAIC30Tsjmhsp/view?usp=share_link',
  },
  {
    id: 'cert-ai-productivity',
    title: 'Digital Productivity with AI',
    issuer: 'YuWaah! (UNICEF)',
    date: 'February 2026',
    description:
      'Completed AI productivity and digital skills training with a score of 100%, covering AI tools, digital literacy, and workplace automation strategies.',
    badge: '🌐',
    color: '#00f5ff',
    icon: FaBrain,
    credentialUrl:
      'https://drive.google.com/file/d/1_Hhoj6edBt0ePK2Qieooy86lx7WKQtcO/view?usp=share_link',
  },
];

/* ─── Animations ─── */
const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.12 } },
};
const cardVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.55, ease: 'easeOut' } },
};

/* ════════════════════════════════════════════ */
export default function Certificates() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="certificates" className="py-24 relative overflow-hidden">
      {/* Background blobs */}
      <div className="absolute top-0 left-1/4 w-96 h-96 rounded-full opacity-5 blur-3xl pointer-events-none"
        style={{ background: 'radial-gradient(circle, #a855f7, transparent)' }} />
      <div className="absolute bottom-0 right-1/4 w-80 h-80 rounded-full opacity-5 blur-3xl pointer-events-none"
        style={{ background: 'radial-gradient(circle, #00f5ff, transparent)' }} />

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
            <HiSparkles className="text-yellow-400" />
            <span>Certified & Recognized</span>
          </div>

          <p className="font-mono text-cyan-400 text-sm tracking-widest mb-3">
            // certificates.sort(by_date)
          </p>
          <h2 className="section-title">Certificates & Achievements</h2>
          <div className="glow-line" />
          <p className="section-subtitle">
            Real-world certifications, hackathon wins, and research recognitions that
            validate hands-on skills and continuous learning.
          </p>

          {/* Stats row */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="inline-flex flex-wrap items-center gap-6 mt-4 px-8 py-3 rounded-full"
            style={{ background: 'rgba(0,245,255,0.04)', border: '1px solid rgba(0,245,255,0.1)' }}
          >
            {[
              { n: '6', label: 'Featured Certs' },
              { n: '2', label: 'Extra Skills' },
              { n: '1', label: 'Hackathon' },
              { n: '1', label: 'IEEE Paper' },
            ].map((s, i) => (
              <div key={i} className="text-center">
                <div className="text-xl font-black gradient-text">{s.n}</div>
                <div className="text-xs text-slate-400 font-mono">{s.label}</div>
              </div>
            ))}
          </motion.div>
        </motion.div>

        {/* ── Featured Certificates Grid ── */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid md:grid-cols-2 xl:grid-cols-3 gap-6 mb-14"
        >
          {featured.map((cert) => (
            <motion.div key={cert.id} variants={cardVariants}>
              <FeaturedCard cert={cert} />
            </motion.div>
          ))}
        </motion.div>

        {/* ── Additional Certifications Divider ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="flex items-center gap-4 mb-8"
        >
          <div className="flex-1 h-px" style={{ background: 'linear-gradient(90deg, transparent, rgba(0,245,255,0.2))' }} />
          <div className="flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-mono text-slate-400"
            style={{ background: 'rgba(0,245,255,0.05)', border: '1px solid rgba(0,245,255,0.12)' }}>
            <FaCertificate className="text-cyan-400" size={12} />
            Additional Certifications
          </div>
          <div className="flex-1 h-px" style={{ background: 'linear-gradient(90deg, rgba(0,245,255,0.2), transparent)' }} />
        </motion.div>

        {/* ── Additional Certificates Row ── */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid sm:grid-cols-2 gap-5"
        >
          {additional.map((cert) => (
            <motion.div key={cert.id} variants={cardVariants}>
              <AdditionalCard cert={cert} />
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}

/* ════════════════════════════════════════════
   Featured Card
════════════════════════════════════════════ */
function FeaturedCard({ cert }) {
  const { id, title, issuer, date, description, tags, icon: Icon,
    issuerIcon: IssuerIcon, color, badge, credentialUrl, category } = cert;

  return (
    <motion.div
      id={id}
      whileHover={{ y: -10, scale: 1.02 }}
      transition={{ type: 'spring', stiffness: 200, damping: 18 }}
      className="glass-card h-full flex flex-col overflow-hidden group cursor-default relative"
      style={{ borderColor: `${color}22` }}
    >
      {/* Animated top border */}
      <div className="h-0.5 w-full transition-all duration-500"
        style={{
          background: `linear-gradient(90deg, transparent, ${color}, transparent)`,
          boxShadow: `0 0 12px ${color}60`,
        }} />

      {/* Hover glow overlay */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-2xl"
        style={{ background: `radial-gradient(ellipse at top, ${color}08, transparent 60%)` }} />

      <div className="p-6 flex flex-col flex-1 relative">
        {/* Header row */}
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-center gap-3">
            {/* Main icon */}
            <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 transition-transform duration-300 group-hover:scale-110"
              style={{
                background: `${color}15`,
                border: `1.5px solid ${color}35`,
                boxShadow: `0 0 20px ${color}25`,
              }}>
              <Icon size={22} style={{ color, filter: `drop-shadow(0 0 6px ${color})` }} />
            </div>

            {/* Category + Issuer icon */}
            <div>
              <span className="text-xs font-mono px-2 py-0.5 rounded-full mb-1 inline-block"
                style={{ color, background: `${color}12`, border: `1px solid ${color}30` }}>
                {category}
              </span>
              <div className="flex items-center gap-1.5 mt-0.5">
                <IssuerIcon size={12} style={{ color: '#94a3b8' }} />
                <span className="text-xs text-slate-400">{issuer}</span>
              </div>
            </div>
          </div>

          {/* Badge + date */}
          <div className="text-right flex-shrink-0">
            <div className="text-2xl mb-1">{badge}</div>
            <div className="text-xs font-mono text-slate-500">{date}</div>
          </div>
        </div>

        {/* Title */}
        <h3 className="text-white font-bold text-base leading-snug mb-3 group-hover:text-cyan-100 transition-colors duration-300">
          {title}
        </h3>

        {/* Description */}
        <p className="text-slate-400 text-sm leading-relaxed mb-4 flex-1">{description}</p>

        {/* Tags */}
        {tags && tags.length > 0 && (
          <div className="flex flex-wrap gap-1.5 mb-5">
            {tags.map((tag) => (
              <span key={tag}
                className="text-xs font-mono px-2.5 py-1 rounded-full transition-all duration-300"
                style={{
                  color,
                  background: `${color}10`,
                  border: `1px solid ${color}28`,
                }}>
                {tag}
              </span>
            ))}
          </div>
        )}

        {/* Verified badge + CTA */}
        <div className="flex items-center justify-between mt-auto">
          <div className="flex items-center gap-1.5">
            <FaMedal size={12} style={{ color }} />
            <span className="text-xs font-mono" style={{ color }}>Verified</span>
          </div>

          <motion.a
            href={credentialUrl}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.06, boxShadow: `0 0 25px ${color}50` }}
            whileTap={{ scale: 0.96 }}
            className="flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold transition-all duration-300"
            style={{
              background: `linear-gradient(135deg, ${color}25, ${color}10)`,
              border: `1.5px solid ${color}45`,
              color,
            }}
          >
            <FaExternalLinkAlt size={10} />
            View Credential
          </motion.a>
        </div>
      </div>
    </motion.div>
  );
}

/* ════════════════════════════════════════════
   Additional Card (compact)
════════════════════════════════════════════ */
function AdditionalCard({ cert }) {
  const { id, title, issuer, date, description, badge, color, icon: Icon, credentialUrl } = cert;

  return (
    <motion.div
      id={id}
      whileHover={{ y: -6, scale: 1.02 }}
      transition={{ type: 'spring', stiffness: 220, damping: 20 }}
      className="glass-card overflow-hidden group cursor-default relative"
      style={{ borderColor: `${color}20` }}
    >
      {/* Left accent bar */}
      <div className="absolute left-0 top-0 bottom-0 w-0.5 rounded-l-2xl transition-all duration-300"
        style={{ background: `linear-gradient(to bottom, transparent, ${color}, transparent)` }} />

      <div className="p-5 pl-6">
        <div className="flex items-start gap-4">
          {/* Icon */}
          <div className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0"
            style={{
              background: `${color}12`,
              border: `1.5px solid ${color}30`,
              boxShadow: `0 0 16px ${color}20`,
            }}>
            <Icon size={20} style={{ color }} />
          </div>

          <div className="flex-1 min-w-0">
            <div className="flex items-start justify-between gap-2 mb-1">
              <div>
                <span className="text-lg mr-2">{badge}</span>
                <h3 className="text-white font-bold text-sm leading-snug inline">{title}</h3>
              </div>
              <span className="text-xs font-mono text-slate-500 flex-shrink-0">{date}</span>
            </div>

            <p className="text-xs font-semibold mb-2" style={{ color }}>{issuer}</p>
            <p className="text-slate-400 text-xs leading-relaxed mb-4">{description}</p>

            <motion.a
              href={credentialUrl}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all duration-300"
              style={{
                background: `${color}10`,
                border: `1px solid ${color}35`,
                color,
              }}
            >
              <FaExternalLinkAlt size={9} />
              View Credential
            </motion.a>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
