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
  Cpu
} from 'lucide-react'
import { Card } from './ui/Card'
import { Badge } from './ui/Badge'
import { caseStudies } from '@/data/resume'

const thumbnailIcons: Record<string, React.ComponentType<{ className?: string }>> = {
  fuel: Fuel,
  satellite: Satellite,
  automation: Bot,
  survey: ClipboardList,
  robot: Cpu
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
            const IconComponent = thumbnailIcons[study.thumbnail]
            
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
                  className="h-full cursor-pointer group"
                  onClick={() => setSelectedStudy(study)}
                >
                  {/* Thumbnail */}
                  <div className="relative h-48 bg-gradient-to-br from-[var(--color-primary-500)]/20 to-[var(--color-accent-500)]/20 flex items-center justify-center overflow-hidden">
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ type: "spring" }}
                    >
                      {IconComponent && (
                        <IconComponent className="w-20 h-20 text-[var(--text-muted)]" />
                      )}
                    </motion.div>
                    
                    {/* Hover Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg-secondary)] via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-center pb-4">
                      <span className="flex items-center gap-2 text-[var(--text-primary)] text-sm font-medium">
                        View Case Study <ArrowRight className="w-4 h-4" />
                      </span>
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="p-6">
                    <Badge variant="primary" size="sm" className="mb-3">{study.category}</Badge>
                    <h3 className="text-xl font-bold text-[var(--text-primary)] mb-2 group-hover:text-[var(--color-primary-400)] transition-colors">
                      {study.title}
                    </h3>
                    <p className="text-sm text-[var(--text-secondary)] mb-4">{study.subtitle}</p>
                    
                    {/* Quick Stats */}
                    <div className="grid grid-cols-2 gap-2 mb-4">
                      {study.results.slice(0, 2).map((result, i) => (
                        <div key={i} className="text-center p-2 rounded-lg bg-[var(--glass-bg)]">
                          <p className="text-lg font-bold text-[var(--color-primary-400)]">{result.metric}</p>
                          <p className="text-xs text-[var(--text-muted)]">{result.label}</p>
                        </div>
                      ))}
                    </div>
                    
                    {/* Meta */}
                    <div className="flex items-center justify-between text-xs text-[var(--text-muted)]">
                      <span>Team of {study.teamSize}</span>
                      <span>{study.duration}</span>
                    </div>
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
