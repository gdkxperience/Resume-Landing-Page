import { motion } from 'framer-motion'
import { Search, Zap, Code, MessageSquare, CheckCircle2, ArrowRight, Trophy } from 'lucide-react'
import { Card } from './ui/Card'
import { Badge } from './ui/Badge'
import { howIWork } from '@/data/resume'

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Search,
  Zap,
  Code,
  MessageSquare
}

const stepColors = [
  { bg: 'from-blue-500/5 to-cyan-500/10', border: 'border-blue-400/60', text: 'text-blue-800 dark:text-blue-400', glow: 'bg-blue-500/30' },
  { bg: 'from-amber-500/5 to-orange-500/10', border: 'border-amber-400/60', text: 'text-amber-800 dark:text-amber-300', glow: 'bg-amber-500/30' },
  { bg: 'from-emerald-500/5 to-teal-500/10', border: 'border-emerald-400/60', text: 'text-emerald-800 dark:text-emerald-300', glow: 'bg-emerald-500/30' },
  { bg: 'from-violet-500/5 to-purple-500/10', border: 'border-violet-400/60', text: 'text-violet-800 dark:text-violet-300', glow: 'bg-violet-500/30' },
]

export function HowIWork() {
  return (
    <section className="section relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 dot-pattern opacity-15" />
      <div className="absolute top-0 right-0 w-[500px] h-[500px] orb orb-accent opacity-20" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] orb orb-primary opacity-15" />
      
      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <Badge variant="secondary" size="md" className="mb-4">Work Philosophy</Badge>
          <h2 className="section-title">
            <span className="text-[var(--text-primary)]">How I </span>
            <span className="gradient-text">Work</span>
          </h2>
          <p className="section-subtitle mx-auto">
            A proven process refined over 9+ years and dozens of successful projects
          </p>
        </motion.div>
        
        {/* Process Timeline - Desktop */}
        <div className="hidden lg:block relative mb-8">
          {/* Connecting Line */}
          <div className="absolute top-8 left-[12.5%] right-[12.5%] h-0.5 bg-gradient-to-r from-blue-500/30 via-amber-500/30 via-emerald-500/30 to-violet-500/30" />
          
          {/* Step Indicators */}
          <div className="flex justify-between px-[10%]">
            {howIWork.map((_, index) => (
              <motion.div
                key={index}
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15, type: "spring" }}
                className={`w-16 h-16 rounded-full bg-gradient-to-br ${stepColors[index].bg} border-2 ${stepColors[index].border} flex items-center justify-center z-10`}
              >
                <span className={`text-2xl font-bold ${stepColors[index].text}`}>0{index + 1}</span>
              </motion.div>
            ))}
          </div>
        </div>
        
        {/* Process Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {howIWork.map((item, index) => {
            const IconComponent = iconMap[item.icon]
            const colors = stepColors[index]
            
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card variant="glass" padding="lg" className="h-full relative overflow-hidden group hover:border-[var(--color-primary-500)]/30 transition-all duration-300 flex flex-col">
                  {/* Mobile Step Number */}
                  <div className="lg:hidden absolute top-4 right-4">
                    <div className={`w-10 h-10 rounded-full bg-gradient-to-br ${colors.bg} border ${colors.border} flex items-center justify-center`}>
                      <span className={`text-lg font-bold ${colors.text}`}>0{index + 1}</span>
                    </div>
                  </div>
                  
                  {/* Icon */}
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className={`w-14 h-14 rounded-xl bg-gradient-to-br ${colors.bg} border ${colors.border} flex items-center justify-center mb-5 relative`}
                  >
                    {IconComponent && (
                      <IconComponent className={`w-7 h-7 ${colors.text}`} />
                    )}
                    {/* Glow */}
                    <div className={`absolute inset-0 rounded-xl ${colors.glow} blur-xl opacity-0 group-hover:opacity-100 transition-opacity`} />
                  </motion.div>
                  
                  {/* Content */}
                  <h3 className="text-lg font-bold text-[var(--text-primary)] mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-[var(--text-secondary)] mb-4">
                    {item.description}
                  </p>
                  
                  {/* Details List */}
                  <ul className="space-y-2 mb-4 flex-1">
                    {item.details.map((detail, i) => (
                      <motion.li
                        key={i}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 + i * 0.1 }}
                        className="flex items-start gap-2 text-xs text-[var(--text-secondary)]"
                      >
                        <CheckCircle2 className={`w-3.5 h-3.5 ${colors.text} flex-shrink-0 mt-0.5`} />
                        <span>{detail}</span>
                      </motion.li>
                    ))}
                  </ul>
                  
                  {/* Outcome Badge - Always at bottom */}
                  <div className={`flex items-center gap-2 px-3 py-2 rounded-lg bg-gradient-to-r ${colors.bg} border ${colors.border} mt-auto`}>
                    <Trophy className={`w-4 h-4 ${colors.text} flex-shrink-0`} />
                    <span className={`text-xs font-semibold ${colors.text}`}>{item.outcome}</span>
                  </div>
                  
                  {/* Bottom Gradient */}
                  <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${colors.bg} opacity-0 group-hover:opacity-100 transition-opacity`} />
                  
                  {/* Arrow to next (not on last) */}
                  {index < howIWork.length - 1 && (
                    <div className="hidden lg:block absolute -right-3 top-1/2 -translate-y-1/2 z-20">
                      <ArrowRight className="w-5 h-5 text-[var(--text-muted)] opacity-30" />
                    </div>
                  )}
                </Card>
              </motion.div>
            )
          })}
        </div>
        
        {/* Bottom Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-12 flex flex-wrap justify-center gap-8 text-center"
        >
          <div>
            <p className="text-3xl font-bold gradient-text">3-4x</p>
            <p className="text-sm text-[var(--text-muted)]">Faster MVP Delivery</p>
          </div>
          <div className="w-px bg-[var(--glass-border)]" />
          <div>
            <p className="text-3xl font-bold gradient-text">15+</p>
            <p className="text-sm text-[var(--text-muted)]">Team Members Led</p>
          </div>
          <div className="w-px bg-[var(--glass-border)]" />
          <div>
            <p className="text-3xl font-bold gradient-text">99%+</p>
            <p className="text-sm text-[var(--text-muted)]">Uptime Delivered</p>
          </div>
          <div className="w-px bg-[var(--glass-border)]" />
          <div>
            <p className="text-3xl font-bold gradient-text">80h</p>
            <p className="text-sm text-[var(--text-muted)]">Monthly Savings</p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
