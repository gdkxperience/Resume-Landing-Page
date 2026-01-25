import { motion } from 'framer-motion'
import { Search, Zap, Code, MessageSquare } from 'lucide-react'
import { Card } from './ui/Card'
import { Badge } from './ui/Badge'
import { howIWork } from '@/data/resume'

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Search,
  Zap,
  Code,
  MessageSquare
}

export function HowIWork() {
  return (
    <section className="section relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 dot-pattern opacity-15" />
      <div className="absolute top-0 right-0 w-[500px] h-[500px] orb orb-accent opacity-20" />
      
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
            Principles that guide my approach to building great software
          </p>
        </motion.div>
        
        {/* Process Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {howIWork.map((item, index) => {
            const IconComponent = iconMap[item.icon]
            
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card variant="glass" padding="lg" className="h-full relative overflow-hidden group">
                  {/* Step Number */}
                  <div className="absolute top-4 right-4 text-6xl font-bold text-[var(--text-primary)]/[0.03] group-hover:text-[var(--color-primary-500)]/10 transition-colors">
                    0{index + 1}
                  </div>
                  
                  {/* Icon */}
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className="w-14 h-14 rounded-xl bg-gradient-to-br from-[var(--color-primary-500)]/20 to-[var(--color-accent-500)]/20 flex items-center justify-center mb-6 relative"
                  >
                    {IconComponent && (
                      <IconComponent className="w-7 h-7 text-[var(--color-primary-400)]" />
                    )}
                    {/* Glow */}
                    <div className="absolute inset-0 rounded-xl bg-[var(--color-primary-500)]/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
                  </motion.div>
                  
                  {/* Content */}
                  <h3 className="text-xl font-bold text-[var(--text-primary)] mb-3 relative">
                    {item.title}
                  </h3>
                  <p className="text-[var(--text-secondary)] relative">
                    {item.description}
                  </p>
                  
                  {/* Bottom Gradient */}
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[var(--color-primary-500)] to-[var(--color-accent-500)] opacity-0 group-hover:opacity-100 transition-opacity" />
                </Card>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
