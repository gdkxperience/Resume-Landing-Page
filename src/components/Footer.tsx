import { motion } from 'framer-motion'
import { Heart, ArrowUp } from 'lucide-react'
import { personalInfo, navigation } from '@/data/resume'
import { scrollToSection } from '@/lib/utils'
import georgiImage from '@/assets/Georgi.png'

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="relative py-12 border-t border-[var(--glass-border)]">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg-secondary)] to-transparent" />
      
      <div className="container relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Logo & Copyright with Profile Image */}
          <div className="flex flex-col items-center md:items-start gap-3">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-[var(--color-primary-500)]/50 shadow-lg">
                <img
                  src={georgiImage}
                  alt={personalInfo.name}
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <span className="font-semibold text-[var(--text-primary)]">{personalInfo.name}</span>
            </div>
            <p className="text-sm text-[var(--text-tertiary)] flex items-center gap-1">
              Made with <Heart className="w-3 h-3 text-red-500 fill-current" /> in {personalInfo.location.split(',')[0]}
            </p>
            <p className="text-xs text-[var(--text-muted)]">
              © {currentYear} All rights reserved.
            </p>
          </div>
          
          {/* Navigation */}
          <div className="flex flex-wrap justify-center gap-6">
            {navigation.map((item) => (
              <button
                key={item.href}
                onClick={() => scrollToSection(item.href.replace('#', ''))}
                className="text-sm text-[var(--text-tertiary)] hover:text-[var(--text-primary)] transition-colors"
              >
                {item.label}
              </button>
            ))}
          </div>
          
          {/* Back to Top */}
          <motion.button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            whileHover={{ y: -3 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2 px-4 py-2 rounded-xl bg-[var(--glass-bg)] hover:bg-[var(--glass-border)] border border-[var(--glass-border)] text-[var(--text-tertiary)] hover:text-[var(--text-primary)] transition-colors"
          >
            <ArrowUp className="w-4 h-4" />
            <span className="text-sm">Back to top</span>
          </motion.button>
        </div>
        
        {/* Bottom Gradient Line */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="mt-8 h-px bg-gradient-to-r from-transparent via-[var(--color-primary-500)]/30 to-transparent"
        />
      </div>
    </footer>
  )
}
