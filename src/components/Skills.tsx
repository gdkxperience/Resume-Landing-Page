import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  Layout, 
  Server, 
  Cloud, 
  Puzzle, 
  Boxes,
  Star,
  Sparkles,
  Zap,
  Award
} from 'lucide-react'
import { Card } from './ui/Card'
import { Badge } from './ui/Badge'
import { skills } from '@/data/resume'

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Layout,
  Server,
  Cloud,
  Puzzle,
  Boxes
}

// Convert numeric level to descriptive proficiency
function getProficiency(level: number): { label: string; color: string; icon: React.ComponentType<{ className?: string }> } {
  if (level >= 90) return { label: 'Expert', color: 'text-emerald-400', icon: Award }
  if (level >= 85) return { label: 'Advanced', color: 'text-blue-400', icon: Sparkles }
  if (level >= 80) return { label: 'Proficient', color: 'text-violet-400', icon: Zap }
  return { label: 'Skilled', color: 'text-amber-400', icon: Star }
}

export function Skills() {
  const [activeCategory, setActiveCategory] = useState<string>('frontend')
  const categories = Object.entries(skills)
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  }
  
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as const }
    }
  }

  return (
    <section id="skills" className="section relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-1/4 w-[600px] h-[600px] orb orb-primary opacity-30" />
      <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] orb orb-accent opacity-20" />
      
      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <Badge variant="primary" size="md" className="mb-4">Technical Expertise</Badge>
          <h2 className="section-title">
            <span className="text-[var(--text-primary)]">Skills & </span>
            <span className="gradient-text">Technologies</span>
          </h2>
          <p className="section-subtitle mx-auto">
            A deep toolkit built over 9+ years, from frontend frameworks to cloud infrastructure
          </p>
        </motion.div>
        
        {/* Category Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-2 mb-12"
        >
          {categories.map(([key, category]) => {
            const IconComponent = iconMap[category.icon]
            const isActive = activeCategory === key
            
            return (
              <button
                key={key}
                onClick={() => setActiveCategory(key)}
                className={`
                  flex items-center gap-2 px-4 py-3 rounded-xl
                  font-medium text-sm
                  transition-all duration-300
                  ${isActive 
                    ? 'bg-gradient-to-r from-[var(--color-primary-500)] to-[var(--color-accent-500)] text-white shadow-lg shadow-[var(--color-primary-500)]/25' 
                    : 'bg-[var(--glass-bg)] text-[var(--text-secondary)] hover:bg-[var(--glass-bg-hover)] hover:text-[var(--text-primary)] border border-[var(--glass-border)]'
                  }
                `}
              >
                {IconComponent && <IconComponent className="w-4 h-4" />}
                {category.title}
              </button>
            )
          })}
        </motion.div>
        
        {/* Skills Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
          >
            {skills[activeCategory as keyof typeof skills].items.map((skill, index) => {
              const proficiency = getProficiency(skill.level)
              const ProficiencyIcon = proficiency.icon
              
              return (
                <motion.div
                  key={skill.name}
                  variants={itemVariants}
                  custom={index}
                >
                  <Card variant="glass" padding="md" className="group hover:border-[var(--color-primary-500)]/30 transition-all duration-300">
                    <div className="flex items-start justify-between gap-3">
                      <div className="flex-1">
                        <h4 className="font-semibold text-[var(--text-primary)] group-hover:text-[var(--color-primary-400)] transition-colors mb-1">
                          {skill.name}
                        </h4>
                        <p className="text-xs text-[var(--text-muted)]">
                          {skill.years}+ years of hands-on experience
                        </p>
                      </div>
                      
                      {/* Proficiency Badge */}
                      <div className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg bg-[var(--glass-bg)] border border-[var(--glass-border)]">
                        <ProficiencyIcon className={`w-3.5 h-3.5 ${proficiency.color}`} />
                        <span className={`text-xs font-medium ${proficiency.color}`}>
                          {proficiency.label}
                        </span>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              )
            })}
          </motion.div>
        </AnimatePresence>
        
        {/* All Skills Quick View */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-16 text-center"
        >
          <p className="text-sm text-[var(--text-muted)] mb-4">Full technology stack</p>
          <div className="flex flex-wrap justify-center gap-2 max-w-4xl mx-auto">
            {['React', 'TypeScript', 'Vue 3', 'Redux', 'Node.js', 'Express', 'AWS', 'Docker', 
              'PostgreSQL', 'MongoDB', 'Supabase', 'WebSockets', 'n8n', 'GitHub Actions', 
              'Tailwind', 'Storybook', 'OAuth', 'RBAC', 'SOAP', 'REST APIs'].map((tech, index) => (
              <motion.div
                key={tech}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.03 }}
              >
                <Badge variant="outline" size="sm" className="cursor-default">
                  {tech}
                </Badge>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
