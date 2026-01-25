import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  Layout, 
  Server, 
  Cloud, 
  Puzzle, 
  Boxes,
  ChevronRight
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
      transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] }
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
            {skills[activeCategory as keyof typeof skills].items.map((skill, index) => (
              <motion.div
                key={skill.name}
                variants={itemVariants}
                custom={index}
              >
                <Card variant="glass" padding="md" className="group">
                  <div className="flex items-center justify-between mb-3">
                    <h4 className="font-semibold text-[var(--text-primary)] group-hover:text-[var(--color-primary-400)] transition-colors">
                      {skill.name}
                    </h4>
                    <span className="text-xs text-[var(--text-muted)]">{skill.years}+ yrs</span>
                  </div>
                  
                  {/* Progress Bar */}
                  <div className="relative h-2 bg-[var(--glass-border)] rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
                      className="absolute inset-y-0 left-0 bg-gradient-to-r from-[var(--color-primary-500)] to-[var(--color-accent-500)] rounded-full"
                    />
                    {/* Shimmer effect */}
                    <motion.div
                      initial={{ x: '-100%' }}
                      whileInView={{ x: '200%' }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.5, delay: 0.5 + index * 0.1 }}
                      className="absolute inset-y-0 w-1/3 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                    />
                  </div>
                  
                  <div className="flex items-center justify-between mt-2">
                    <span className="text-xs text-[var(--text-muted)]">Proficiency</span>
                    <span className="text-xs font-medium text-[var(--color-primary-400)]">{skill.level}%</span>
                  </div>
                </Card>
              </motion.div>
            ))}
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
