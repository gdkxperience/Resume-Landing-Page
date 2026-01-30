import { motion } from 'framer-motion'
import { 
  Mail, 
  Phone, 
  MapPin, 
  Download,
  Send,
  Globe,
  ArrowUpRight
} from 'lucide-react'
import { Button } from './ui/Button'
import { Card } from './ui/Card'
import { Badge } from './ui/Badge'
import { personalInfo, education } from '@/data/resume'

const downloadResume = () => {
  const link = document.createElement('a')
  link.href = '/GK_Resume.pdf'
  link.download = 'Georgi_Krastev_Resume.pdf'
  document.body.appendChild(link)
  link.click()
  document.body.removeChild(link)
}

const downloadCompactResume = () => {
  const link = document.createElement('a')
  link.href = '/GK_Resume_Compact.pdf'
  link.download = 'Georgi_Krastev_Resume_Compact.pdf'
  document.body.appendChild(link)
  link.click()
  document.body.removeChild(link)
}

export function Contact() {
  const contactMethods = [
    {
      icon: Mail,
      label: 'Email',
      value: personalInfo.email,
      href: `mailto:${personalInfo.email}`,
      description: 'Best for detailed inquiries'
    },
    {
      icon: Phone,
      label: 'Phone',
      value: personalInfo.phone,
      href: `tel:${personalInfo.phone.replace(/\s/g, '')}`,
      description: 'Available during EU business hours'
    },
    {
      icon: MapPin,
      label: 'Location',
      value: personalInfo.location,
      href: '#',
      description: 'Open to remote & hybrid'
    }
  ]

  return (
    <section id="contact" className="section relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 mesh-bg" />
      <div className="absolute bottom-0 left-1/4 w-[600px] h-[600px] orb orb-primary opacity-25" />
      <div className="absolute top-1/3 right-0 w-[400px] h-[400px] orb orb-accent opacity-20" />
      
      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <Badge variant="primary" size="md" className="mb-4">Let's Connect</Badge>
          <h2 className="section-title">
            <span className="text-[var(--text-primary)]">Get in </span>
            <span className="gradient-text">Touch</span>
          </h2>
          <p className="section-subtitle mx-auto">
            Ready to discuss your next project or just want to say hi? I'd love to hear from you.
          </p>
        </motion.div>
        
        <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="min-w-0 overflow-hidden"
          >
            <div className="space-y-6">
              {contactMethods.map((method, index) => (
                <motion.a
                  key={method.label}
                  href={method.href}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="block group"
                >
                  <Card variant="glass" padding="md" className="flex items-center gap-4">
                    <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[var(--color-primary-500)]/20 to-[var(--color-accent-500)]/20 flex items-center justify-center flex-shrink-0 group-hover:from-[var(--color-primary-500)]/30 group-hover:to-[var(--color-accent-500)]/30 transition-colors">
                      <method.icon className="w-6 h-6 text-[var(--color-primary-400)]" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm text-[var(--text-muted)]">{method.label}</p>
                      <p className="text-lg font-semibold text-[var(--text-primary)] truncate group-hover:text-[var(--color-primary-400)] transition-colors">
                        {method.value}
                      </p>
                      <p className="text-xs text-[var(--text-muted)]">{method.description}</p>
                    </div>
                    <ArrowUpRight className="w-5 h-5 text-[var(--text-muted)] group-hover:text-[var(--color-primary-400)] transition-colors flex-shrink-0" />
                  </Card>
                </motion.a>
              ))}
            </div>
            
            {/* Languages */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="mt-8 p-4 rounded-xl bg-[var(--glass-bg)] border border-[var(--glass-border)]"
            >
              <p className="text-sm text-[var(--text-muted)] mb-2 flex items-center gap-2">
                <Globe className="w-4 h-4" />
                Languages
              </p>
              <div className="flex flex-wrap gap-2">
                {personalInfo.languages.map((lang) => (
                  <Badge key={lang} variant="outline" size="md">{lang}</Badge>
                ))}
              </div>
            </motion.div>
            
            {/* Education */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="mt-4 p-4 rounded-xl bg-[var(--glass-bg)] border border-[var(--glass-border)]"
            >
              <p className="text-sm text-[var(--text-muted)] mb-2">Education</p>
              <p className="text-[var(--text-primary)] font-medium">{education.degree}</p>
              <p className="text-[var(--text-secondary)] text-sm">{education.institution}</p>
              <p className="text-[var(--text-muted)] text-xs">{education.period} • {education.location}</p>
            </motion.div>
          </motion.div>
          
          {/* CTA Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="min-w-0 overflow-hidden"
          >
            <Card variant="gradient" padding="lg" className="h-full relative overflow-hidden">
              {/* Decorative Elements */}
              <div className="absolute top-0 right-0 w-40 h-40 orb orb-primary opacity-30" />
              
              <div className="relative">
                <h3 className="text-2xl font-bold text-[var(--text-primary)] mb-4">
                  Ready to Build Something Great?
                </h3>
                <p className="text-[var(--text-secondary)] mb-8">
                  Whether you need a technical architect for your next project, a senior engineer to lead your frontend team, or someone to build your MVP from scratch-let's talk.
                </p>
                
                {/* Quick Actions */}
                <div className="space-y-4 mb-8">
                  <Button
                    variant="primary"
                    size="lg"
                    className="w-full"
                    leftIcon={<Send className="w-5 h-5" />}
                    onClick={() => window.location.href = `mailto:${personalInfo.email}?subject=Let's Work Together`}
                  >
                    Send Me a Message
                  </Button>
                  <Button
                    variant="secondary"
                    size="lg"
                    className="w-full"
                    leftIcon={<Download className="w-5 h-5" />}
                    onClick={downloadResume}
                  >
                    Download Full Resume (PDF)
                  </Button>
                  <Button
                    variant="outline"
                    size="lg"
                    className="w-full"
                    leftIcon={<Download className="w-5 h-5" />}
                    onClick={downloadCompactResume}
                  >
                    Download Compact Resume (PDF)
                  </Button>
                </div>
                
                {/* Availability */}
                <div className="flex items-center gap-3 p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/20">
                  <span className="relative flex h-3 w-3">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
                  </span>
                  <div>
                    <p className="text-sm font-medium text-emerald-400">Currently Available</p>
                    <p className="text-xs text-[var(--text-muted)]">Open to full-time, contract, and consulting roles</p>
                  </div>
                </div>
              </div>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
