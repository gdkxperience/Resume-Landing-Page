import { useRef } from 'react'
import { motion, useInView, useSpring, useTransform } from 'framer-motion'
import { 
  Calendar, 
  Users, 
  Building, 
  Activity, 
  Clock, 
  Globe 
} from 'lucide-react'
import { Badge } from './ui/Badge'
import { metrics } from '@/data/resume'

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Calendar,
  Users,
  Building,
  Activity,
  Clock,
  Globe
}

interface AnimatedCounterProps {
  value: string
  delay?: number
}

function AnimatedCounter({ value, delay = 0 }: AnimatedCounterProps) {
  const ref = useRef<HTMLSpanElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  
  // Extract number and suffix (e.g., "99%" -> 99, "%")
  const numMatch = value.match(/^([\d.]+)(.*)$/)
  const numValue = numMatch ? parseFloat(numMatch[1]) : 0
  const suffix = numMatch ? numMatch[2] : value
  
  const springValue = useSpring(0, {
    stiffness: 100,
    damping: 30,
    duration: 2
  })
  
  const displayValue = useTransform(springValue, (latest) => {
    if (numValue === 0) return value
    return Math.floor(latest) + suffix
  })
  
  if (isInView && springValue.get() === 0) {
    setTimeout(() => {
      springValue.set(numValue)
    }, delay)
  }
  
  if (numValue === 0) {
    return <span ref={ref}>{value}</span>
  }
  
  return <motion.span ref={ref}>{displayValue}</motion.span>
}

export function Metrics() {
  const containerRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(containerRef, { once: true, margin: "-100px" })

  return (
    <section className="section relative overflow-hidden py-24">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[var(--bg-secondary)] via-[var(--bg-primary)] to-[var(--bg-secondary)]" />
      <div className="absolute inset-0 grid-pattern opacity-20" />
      
      {/* Decorative Orbs */}
      <motion.div
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.2, 0.3, 0.2]
        }}
        transition={{ duration: 8, repeat: Infinity }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] orb orb-primary rounded-full"
      />
      
      <div className="container relative z-10" ref={containerRef}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <Badge variant="primary" size="md" className="mb-4">By the Numbers</Badge>
          <h2 className="section-title">
            <span className="text-[var(--text-primary)]">Impact </span>
            <span className="gradient-text">& Achievements</span>
          </h2>
        </motion.div>
        
        {/* Metrics Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {metrics.map((metric, index) => {
            const IconComponent = iconMap[metric.icon]
            
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ 
                  y: -8,
                  transition: { duration: 0.2 }
                }}
                className="relative group"
              >
                <div className="relative p-6 rounded-2xl bg-[var(--glass-bg)] backdrop-blur-sm border border-[var(--glass-border)] text-center overflow-hidden transition-all duration-300 group-hover:border-[var(--color-primary-500)]/30 group-hover:shadow-lg group-hover:shadow-[var(--color-primary-500)]/10">
                  {/* Glow Effect */}
                  <div className="absolute inset-0 bg-gradient-to-b from-[var(--color-primary-500)]/0 to-[var(--color-primary-500)]/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                  
                  {/* Icon */}
                  <div className="relative mb-4 flex justify-center">
                    <motion.div
                      whileHover={{ rotate: [0, -10, 10, 0] }}
                      transition={{ duration: 0.5 }}
                      className="w-12 h-12 rounded-xl bg-gradient-to-br from-[var(--color-primary-500)]/20 to-[var(--color-accent-500)]/20 flex items-center justify-center"
                    >
                      {IconComponent && (
                        <IconComponent className="w-6 h-6 text-[var(--color-primary-400)]" />
                      )}
                    </motion.div>
                  </div>
                  
                  {/* Value */}
                  <div className="relative">
                    <p className="text-3xl md:text-4xl font-bold gradient-text">
                      <AnimatedCounter value={metric.value} delay={index * 100} />
                    </p>
                    <p className="text-sm text-[var(--text-tertiary)] mt-2">{metric.label}</p>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>
        
        {/* Decorative Line */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.5 }}
          className="mt-16 h-px bg-gradient-to-r from-transparent via-[var(--color-primary-500)]/50 to-transparent"
        />
      </div>
    </section>
  )
}
