import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  X, 
  Fuel, 
  Satellite, 
  Bot,
  ArrowRight,
  Users,
  Clock,
  CheckCircle2,
  AlertTriangle,
  ClipboardList,
  Cpu,
  Sparkles,
  Zap,
  Globe,
  Rocket,
  BarChart3
} from 'lucide-react'
import { Card } from './ui/Card'
import { Badge } from './ui/Badge'
import { caseStudies } from '@/data/resume'

// Import logos
import tabiSymbolLogo from '@/assets/logos/tabi-symbol.png'
import prezarediSymbolLogo from '@/assets/logos/prezaredi-symbol.png'
import endurosatLogo from '@/assets/logos/endurosat.png'
import hefiveLogo from '@/assets/logos/he-five.png'
import mvpforgeLogo from '@/assets/logos/mvpforge.png'

// Logo mapping by case study ID
const caseStudyLogos: Record<string, string> = {
  'tabisurvey': tabiSymbolLogo,
  'prezaredi': prezarediSymbolLogo,
  'endurosat-platform': endurosatLogo,
  'robot-control-center': hefiveLogo,
  'ai-automation': mvpforgeLogo,
}

// Highlight tags for each case study
const caseStudyHighlights: Record<string, string> = {
  'tabisurvey': '100k+ Survey Completions',
  'robot-control-center': 'Deployed in China Production',
  'prezaredi': '99% System Uptime',
  'endurosat-platform': '20-25% Codebase Reduction',
  'ai-automation': '80 Hours Saved/Month',
}

// Personalized theme configurations for each case study
const caseStudyThemes: Record<string, {
  icon: React.ComponentType<{ className?: string }>
  gradient: string
  accentColor: string
  bgPattern: string
  decorativeIcons: React.ComponentType<{ className?: string }>[]
}> = {
  survey: {
    icon: ClipboardList,
    gradient: 'from-emerald-500/30 via-teal-500/20 to-cyan-500/30',
    accentColor: 'text-emerald-400',
    bgPattern: 'radial-gradient(circle at 20% 80%, rgba(16, 185, 129, 0.15) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(6, 182, 212, 0.15) 0%, transparent 50%)',
    decorativeIcons: [BarChart3, Sparkles]
  },
  robot: {
    icon: Cpu,
    gradient: 'from-orange-500/30 via-amber-500/20 to-yellow-500/30',
    accentColor: 'text-orange-400',
    bgPattern: 'radial-gradient(circle at 30% 70%, rgba(249, 115, 22, 0.15) 0%, transparent 50%), radial-gradient(circle at 70% 30%, rgba(245, 158, 11, 0.15) 0%, transparent 50%)',
    decorativeIcons: [Zap, Sparkles]
  },
  fuel: {
    icon: Fuel,
    gradient: 'from-blue-500/30 via-indigo-500/20 to-violet-500/30',
    accentColor: 'text-blue-400',
    bgPattern: 'radial-gradient(circle at 25% 75%, rgba(59, 130, 246, 0.15) 0%, transparent 50%), radial-gradient(circle at 75% 25%, rgba(139, 92, 246, 0.15) 0%, transparent 50%)',
    decorativeIcons: [Globe, Sparkles]
  },
  satellite: {
    icon: Satellite,
    gradient: 'from-purple-500/30 via-fuchsia-500/20 to-pink-500/30',
    accentColor: 'text-purple-400',
    bgPattern: 'radial-gradient(circle at 20% 80%, rgba(168, 85, 247, 0.15) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(236, 72, 153, 0.15) 0%, transparent 50%)',
    decorativeIcons: [Rocket, Sparkles]
  },
  automation: {
    icon: Bot,
    gradient: 'from-rose-500/30 via-red-500/20 to-orange-500/30',
    accentColor: 'text-rose-400',
    bgPattern: 'radial-gradient(circle at 30% 70%, rgba(244, 63, 94, 0.15) 0%, transparent 50%), radial-gradient(circle at 70% 30%, rgba(249, 115, 22, 0.15) 0%, transparent 50%)',
    decorativeIcons: [Zap, Sparkles]
  }
}

interface CaseStudyModalProps {
  study: typeof caseStudies[0]
  onClose: () => void
}

function CaseStudyModal({ study, onClose }: CaseStudyModalProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
      onClick={onClose}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.9, y: 20 }}
        transition={{ type: "spring", duration: 0.5 }}
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-2xl bg-[var(--bg-secondary)] border border-[var(--glass-border)]"
      >
        {/* Header */}
        <div className="sticky top-0 z-10 flex items-center justify-between p-6 bg-[var(--bg-secondary)]/95 backdrop-blur-sm border-b border-[var(--glass-border)]">
          <div>
            <Badge variant="primary" size="sm" className="mb-2">{study.category}</Badge>
            <h2 className="text-2xl font-bold text-[var(--text-primary)]">{study.title}</h2>
            <p className="text-[var(--text-secondary)]">{study.subtitle}</p>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-lg hover:bg-[var(--glass-bg)] transition-colors"
          >
            <X className="w-6 h-6 text-[var(--text-secondary)]" />
          </button>
        </div>
        
        <div className="p-6 space-y-8">
          {/* Meta */}
          <div className="flex flex-wrap gap-4 text-sm text-[var(--text-secondary)]">
            <span className="flex items-center gap-2">
              <Users className="w-4 h-4" />
              Team of {study.teamSize}
            </span>
            <span className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              {study.duration}
            </span>
          </div>
          
          {/* Problem */}
          <div>
            <h3 className="text-lg font-semibold text-[var(--text-primary)] mb-3 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-red-500" />
              The Problem
            </h3>
            <p className="text-[var(--text-secondary)]">{study.problem}</p>
          </div>
          
          {/* Constraints */}
          <div>
            <h3 className="text-lg font-semibold text-[var(--text-primary)] mb-3 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
              Constraints
            </h3>
            <ul className="space-y-2">
              {study.constraints.map((constraint, i) => (
                <li key={i} className="flex items-start gap-2 text-[var(--text-secondary)]">
                  <AlertTriangle className="w-4 h-4 text-amber-500 flex-shrink-0 mt-0.5" />
                  {constraint}
                </li>
              ))}
            </ul>
          </div>
          
          {/* Approach */}
          <div>
            <h3 className="text-lg font-semibold text-[var(--text-primary)] mb-3 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-primary-500)]" />
              Approach
            </h3>
            <ul className="space-y-2">
              {study.approach.map((step, i) => (
                <li key={i} className="flex items-start gap-2 text-[var(--text-secondary)]">
                  <CheckCircle2 className="w-4 h-4 text-[var(--color-primary-500)] flex-shrink-0 mt-0.5" />
                  {step}
                </li>
              ))}
            </ul>
          </div>
          
          {/* Architecture */}
          <div>
            <h3 className="text-lg font-semibold text-[var(--text-primary)] mb-3 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-accent-500)]" />
              Architecture
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {Object.entries(study.architecture).map(([key, techs]) => (
                <div key={key} className="p-4 rounded-xl bg-[var(--glass-bg)] border border-[var(--glass-border)]">
                  <h4 className="text-xs text-[var(--text-muted)] uppercase tracking-wider mb-2">{key}</h4>
                  <div className="space-y-1">
                    {techs.map((tech) => (
                      <p key={tech} className="text-sm text-[var(--text-secondary)]">{tech}</p>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Results */}
          <div>
            <h3 className="text-lg font-semibold text-[var(--text-primary)] mb-3 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
              Results
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {study.results.map((result, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="p-4 rounded-xl bg-gradient-to-br from-[var(--color-primary-500)]/10 to-[var(--color-accent-500)]/10 border border-[var(--glass-border)] text-center"
                >
                  <p className="text-2xl font-bold gradient-text">{result.metric}</p>
                  <p className="text-sm text-[var(--text-secondary)]">{result.label}</p>
                </motion.div>
              ))}
            </div>
          </div>
          
          {/* Risks */}
          <div className="p-4 rounded-xl bg-amber-500/10 border border-amber-500/20">
            <h3 className="text-sm font-semibold text-amber-400 mb-2">Risk Mitigation</h3>
            <ul className="space-y-1 text-sm text-[var(--text-secondary)]">
              {study.risks.map((risk, i) => (
                <li key={i}>• {risk}</li>
              ))}
            </ul>
          </div>
        </div>
      </motion.div>
    </motion.div>
  )
}

export function CaseStudies() {
  const [selectedStudy, setSelectedStudy] = useState<typeof caseStudies[0] | null>(null)

  return (
    <section id="cases" className="section relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 mesh-bg" />
      <div className="absolute bottom-0 left-1/3 w-[600px] h-[600px] orb orb-pink opacity-20" />
      
      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <Badge variant="secondary" size="md" className="mb-4">Deep Dives</Badge>
          <h2 className="section-title">
            <span className="text-[var(--text-primary)]">Featured </span>
            <span className="gradient-text">Case Studies</span>
          </h2>
          <p className="section-subtitle mx-auto">
            A closer look at complex problems solved with elegant solutions
          </p>
        </motion.div>
        
        {/* Case Study Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {caseStudies.map((study, index) => {
            const theme = caseStudyThemes[study.thumbnail] || caseStudyThemes.automation
            const IconComponent = theme.icon
            const [DecorIcon1, DecorIcon2] = theme.decorativeIcons
            
            return (
              <motion.div
                key={study.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card 
                  variant="gradient" 
                  padding="none"
                  className="h-full cursor-pointer group overflow-hidden"
                  onClick={() => setSelectedStudy(study)}
                >
                  {/* Thumbnail - Fixed rounded corners */}
                  <div 
                    className={`relative h-48 bg-gradient-to-br ${theme.gradient} flex items-center justify-center overflow-hidden rounded-t-2xl`}
                    style={{ background: theme.bgPattern }}
                  >
                    {/* Animated gradient overlay */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${theme.gradient} opacity-60`} />
                    
                    {/* Decorative floating icons */}
                    <motion.div
                      className="absolute top-4 left-4 opacity-20"
                      animate={{ y: [0, -8, 0], rotate: [0, 10, 0] }}
                      transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                    >
                      {DecorIcon1 && <DecorIcon1 className={`w-8 h-8 ${theme.accentColor}`} />}
                    </motion.div>
                    
                    <motion.div
                      className="absolute bottom-4 right-4 opacity-20"
                      animate={{ y: [0, 8, 0], rotate: [0, -10, 0] }}
                      transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                    >
                      {DecorIcon2 && <DecorIcon2 className={`w-6 h-6 ${theme.accentColor}`} />}
                    </motion.div>
                    
                    {/* Grid pattern overlay */}
                    <div 
                      className="absolute inset-0 opacity-10"
                      style={{
                        backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
                        backgroundSize: '20px 20px'
                      }}
                    />
                    
                    {/* Main icon with glow effect */}
                    <motion.div
                      className="relative z-10"
                      whileHover={{ scale: 1.15, rotate: 5 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      {/* Glow behind icon */}
                      <div className={`absolute inset-0 blur-2xl ${theme.accentColor} opacity-40 scale-150`} />
                      
                      {/* Icon container with glass effect */}
                      <div className="relative p-5 rounded-2xl bg-[var(--bg-primary)]/40 backdrop-blur-sm border border-white/10 shadow-xl">
                        {caseStudyLogos[study.id] ? (
                          <img 
                            src={caseStudyLogos[study.id]} 
                            alt={study.title} 
                            className="w-12 h-12 object-contain"
                          />
                        ) : IconComponent && (
                          <IconComponent className={`w-12 h-12 ${theme.accentColor}`} />
                        )}
                      </div>
                    </motion.div>
                    
                    {/* Hover Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg-secondary)] via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4 rounded-t-2xl">
                      <motion.span 
                        className="flex items-center gap-2 text-[var(--text-primary)] text-sm font-medium px-4 py-2 rounded-full bg-[var(--glass-bg)] backdrop-blur-sm border border-[var(--glass-border)]"
                        initial={{ y: 10, opacity: 0 }}
                        whileHover={{ y: 0, opacity: 1 }}
                      >
                        View Case Study <ArrowRight className="w-4 h-4" />
                      </motion.span>
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="p-6">
                    <Badge variant="primary" size="sm" className="mb-3">{study.category}</Badge>
                    <h3 className={`text-xl font-bold text-[var(--text-primary)] mb-2 group-hover:${theme.accentColor} transition-colors`}>
                      {study.title}
                    </h3>
                    <p className="text-sm text-[var(--text-secondary)] mb-4">{study.subtitle}</p>
                    
                    {/* Quick Stats with themed colors */}
                    <div className="grid grid-cols-2 gap-2 mb-4">
                      {study.results.slice(0, 2).map((result, i) => (
                        <div key={i} className="text-center p-2 rounded-lg bg-[var(--glass-bg)] border border-[var(--glass-border)]">
                          <p className={`text-lg font-bold ${theme.accentColor}`}>{result.metric}</p>
                          <p className="text-xs text-[var(--text-muted)]">{result.label}</p>
                        </div>
                      ))}
                    </div>
                    
                    {/* Meta */}
                    <div className="flex items-center justify-between text-xs text-[var(--text-muted)]">
                      <span className="flex items-center gap-1">
                        <Users className="w-3 h-3" />
                        Team of {study.teamSize}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        {study.duration}
                      </span>
                    </div>
                    
                    {/* Highlight tag at bottom */}
                    {caseStudyHighlights[study.id] && (
                      <div className="mt-4 pt-4 border-t border-[var(--glass-border)]">
                        <Badge variant="success" size="sm" className="w-full justify-center">
                          {caseStudyHighlights[study.id]}
                        </Badge>
                      </div>
                    )}
                  </div>
                </Card>
              </motion.div>
            )
          })}
        </div>
      </div>
      
      {/* Modal */}
      <AnimatePresence>
        {selectedStudy && (
          <CaseStudyModal 
            study={selectedStudy} 
            onClose={() => setSelectedStudy(null)} 
          />
        )}
      </AnimatePresence>
    </section>
  )
}
