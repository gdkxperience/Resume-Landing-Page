import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  Briefcase, 
  Calendar, 
  MapPin, 
  ChevronDown,
  Award
} from 'lucide-react'
import { Card } from './ui/Card'
import { Badge } from './ui/Badge'
import { experiences } from '@/data/resume'
import mvpforgeLogo from '@/assets/logos/mvpforge.png'
import endurosatLogo from '@/assets/logos/endurosat.png'
import hefiveLogo from '@/assets/logos/he-five.png'
import aucodaLogo from '@/assets/logos/aucoda.png'

export function Experience() {
  const [expandedId, setExpandedId] = useState<string | null>('mvp-forge')
  
  const toggleExpand = (id: string) => {
    setExpandedId(expandedId === id ? null : id)
  }

  return (
    <section id="experience" className="section relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 dot-pattern opacity-20" />
      <div className="absolute top-1/2 -translate-y-1/2 left-0 w-[500px] h-[800px] orb orb-accent opacity-20" />
      
      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <Badge variant="secondary" size="md" className="mb-4">Career Journey</Badge>
          <h2 className="section-title">
            <span className="text-[var(--text-primary)]">Professional </span>
            <span className="gradient-text">Experience</span>
          </h2>
          <p className="section-subtitle mx-auto">
            From building robot control systems to architecting satellite platforms
          </p>
        </motion.div>
        
        {/* Timeline */}
        <div className="relative max-w-4xl mx-auto">
          {/* Timeline Line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-[var(--color-primary-500)] via-[var(--color-accent-500)] to-pink-500 md:-translate-x-1/2" />
          
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`relative mb-12 md:mb-16 ${
                index % 2 === 0 ? 'md:pr-[50%] md:text-right' : 'md:pl-[50%]'
              }`}
            >
              {/* Timeline Dot */}
              <motion.div
                whileHover={{ scale: 1.2 }}
                className={`
                  absolute left-0 md:left-1/2 top-0 
                  w-4 h-4 rounded-full 
                  bg-gradient-to-r from-[var(--color-primary-500)] to-[var(--color-accent-500)]
                  border-4 border-[var(--bg-primary)]
                  -translate-x-1/2 md:-translate-x-1/2
                  z-10
                  ${exp.type === 'current' ? 'animate-pulse' : ''}
                `}
              />
              
              {/* Card */}
              <div className={`ml-8 md:ml-0 ${index % 2 === 0 ? 'md:mr-8' : 'md:ml-8'}`}>
                <Card 
                  variant="glow" 
                  padding="none"
                  className="overflow-hidden cursor-pointer"
                  onClick={() => toggleExpand(exp.id)}
                >
                  {/* Header */}
                  <div className="p-6">
                    <div className={`flex items-start gap-4 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                      {/* Company Icon */}
                      <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-[var(--color-primary-500)]/20 to-[var(--color-accent-500)]/20 flex items-center justify-center border border-[var(--glass-border)] overflow-hidden">
                        {exp.id === 'mvp-forge' ? (
                          <img src={mvpforgeLogo} alt="MVP Forge" className="w-8 h-8 object-contain" />
                        ) : exp.id === 'endurosat' ? (
                          <img src={endurosatLogo} alt="EnduroSat" className="w-8 h-8 object-contain" />
                        ) : exp.id === 'he-five' ? (
                          <img src={hefiveLogo} alt="He-Five" className="w-8 h-8 object-contain" />
                        ) : exp.id === 'aucoda' ? (
                          <img src={aucodaLogo} alt="Aucoda" className="w-8 h-8 object-contain" />
                        ) : (
                          <Briefcase className="w-6 h-6 text-[var(--color-primary-400)]" />
                        )}
                      </div>
                      
                      <div className={`flex-1 ${index % 2 === 0 ? 'md:text-right' : ''}`}>
                        <div className="flex items-center gap-2 flex-wrap mb-1">
                          <h3 className="text-xl font-bold text-[var(--text-primary)]">{exp.company}</h3>
                          {exp.type === 'current' && (
                            <Badge variant="success" size="sm">Current</Badge>
                          )}
                        </div>
                        {exp.subtitle && (
                          <p className="text-sm text-[var(--text-tertiary)] mb-1">{exp.subtitle}</p>
                        )}
                        <p className="text-[var(--color-primary-400)] font-medium">{exp.title}</p>
                        {exp.officialTitle && (
                          <p className="text-xs text-[var(--text-muted)] mt-1">
                            Official: {exp.officialTitle}
                          </p>
                        )}
                        
                        <div className={`flex items-center gap-4 mt-3 text-sm text-[var(--text-tertiary)] ${index % 2 === 0 ? 'md:justify-end' : ''}`}>
                          <span className="flex items-center gap-1">
                            <Calendar className="w-4 h-4" />
                            {exp.period}
                          </span>
                          <span className="flex items-center gap-1">
                            <MapPin className="w-4 h-4" />
                            {exp.location}
                          </span>
                        </div>
                      </div>
                    </div>
                    
                    <p className={`mt-4 text-[var(--text-secondary)] ${index % 2 === 0 ? 'md:text-right' : ''}`}>
                      {exp.description}
                    </p>
                    
                    {/* Expand Button */}
                    <div className={`flex items-center gap-2 mt-4 text-sm text-[var(--color-primary-400)] ${index % 2 === 0 ? 'md:justify-end' : ''}`}>
                      <span>{expandedId === exp.id ? 'Show less' : 'View achievements'}</span>
                      <motion.div
                        animate={{ rotate: expandedId === exp.id ? 180 : 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <ChevronDown className="w-4 h-4" />
                      </motion.div>
                    </div>
                  </div>
                  
                  {/* Expanded Content */}
                  <AnimatePresence>
                    {expandedId === exp.id && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <div className="px-6 pb-6 border-t border-[var(--glass-border)] pt-6">
                          {/* Achievements */}
                          <div className="space-y-4">
                            {exp.achievements.map((achievement, achIndex) => (
                              <motion.div
                                key={achIndex}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: achIndex * 0.1 }}
                                className="relative pl-6"
                              >
                                <Award className="absolute left-0 top-0 w-4 h-4 text-[var(--color-accent-500)]" />
                                <h4 className="font-semibold text-[var(--text-primary)] text-left">{achievement.title}</h4>
                                <p className="text-sm text-[var(--text-secondary)] mt-1 text-left">{achievement.description}</p>
                                <p className="text-sm text-emerald-400 mt-1 text-left">
                                  Impact: {achievement.impact}
                                </p>
                                <div className="flex flex-wrap gap-1.5 mt-3">
                                  {achievement.tags.map((tag) => (
                                    <Badge key={tag} variant="outline" size="sm">
                                      {tag}
                                    </Badge>
                                  ))}
                                </div>
                              </motion.div>
                            ))}
                          </div>
                          
                          {/* Technologies */}
                          <div className="mt-6 pt-4 border-t border-[var(--glass-border)]">
                            <p className="text-xs text-[var(--text-muted)] mb-3 text-left">Technologies used</p>
                            <div className="flex flex-wrap gap-2">
                              {exp.technologies.map((tech) => (
                                <Badge key={tech} variant="tech" size="sm">
                                  {tech}
                                </Badge>
                              ))}
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </Card>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
