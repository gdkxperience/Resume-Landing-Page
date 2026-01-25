import { useState, useEffect } from 'react'
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from 'framer-motion'
import { Menu, X, Download } from 'lucide-react'
import { Button } from './ui/Button'
import { ThemeToggle } from './ThemeToggle'
import { navigation, personalInfo } from '@/data/resume'
import { scrollToSection } from '@/lib/utils'
import { generateResumePDF } from '@/lib/generateResumePDF'
import georgiImage from '@/assets/Georgi.png'

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('')
  const { scrollY } = useScroll()
  
  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 50)
  })
  
  // Track active section
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id)
          }
        })
      },
      { threshold: 0.3, rootMargin: '-100px 0px -50% 0px' }
    )
    
    navigation.forEach(({ href }) => {
      const element = document.querySelector(href)
      if (element) observer.observe(element)
    })
    
    return () => observer.disconnect()
  }, [])

  const handleNavClick = (href: string) => {
    const id = href.replace('#', '')
    scrollToSection(id)
    setIsOpen(false)
  }

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className={`
          fixed top-0 left-0 right-0 z-50
          transition-all duration-300
          ${isScrolled 
            ? 'bg-[var(--bg-primary)]/80 backdrop-blur-xl border-b border-[var(--glass-border)]' 
            : 'bg-transparent'
          }
        `}
      >
        <div className="container">
          <nav className="flex items-center justify-between h-20">
            {/* Logo with Profile Image */}
            <motion.a
              href="#"
              className="flex items-center gap-3"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-[var(--color-primary-500)]/50 shadow-lg">
                <img
                  src={georgiImage}
                  alt={personalInfo.name}
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <div className="hidden sm:block">
                <p className="font-semibold text-[var(--text-primary)] text-sm">{personalInfo.name}</p>
                <p className="text-xs text-[var(--text-tertiary)]">{personalInfo.title}</p>
              </div>
            </motion.a>
            
            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-1">
              {navigation.map((item) => (
                <motion.button
                  key={item.href}
                  onClick={() => handleNavClick(item.href)}
                  className={`
                    relative px-4 py-2 text-sm font-medium rounded-lg
                    transition-colors
                    ${activeSection === item.href.replace('#', '')
                      ? 'text-[var(--text-primary)]'
                      : 'text-[var(--text-tertiary)] hover:text-[var(--text-primary)]'
                    }
                  `}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {item.label}
                  {activeSection === item.href.replace('#', '') && (
                    <motion.div
                      layoutId="activeSection"
                      className="absolute inset-0 bg-[var(--glass-border)] rounded-lg -z-10"
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    />
                  )}
                </motion.button>
              ))}
            </div>
            
            {/* Desktop CTA */}
            <div className="hidden lg:flex items-center gap-3">
              <ThemeToggle />
              <Button
                variant="primary"
                size="sm"
                leftIcon={<Download className="w-4 h-4" />}
                onClick={() => generateResumePDF()}
              >
                Resume
              </Button>
            </div>
            
            {/* Mobile Menu Button */}
            <div className="flex items-center gap-2 lg:hidden">
              <ThemeToggle />
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="p-2 rounded-lg hover:bg-[var(--glass-border)] transition-colors"
              >
                {isOpen ? (
                  <X className="w-6 h-6 text-[var(--text-primary)]" />
                ) : (
                  <Menu className="w-6 h-6 text-[var(--text-primary)]" />
                )}
              </button>
            </div>
          </nav>
        </div>
      </motion.header>
      
      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 lg:hidden pt-20"
          >
            <div 
              className="absolute inset-0 bg-[var(--bg-primary)]/80 backdrop-blur-sm"
              onClick={() => setIsOpen(false)}
            />
            <motion.nav
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              className="relative bg-[var(--bg-secondary)] border-b border-[var(--glass-border)] p-6"
            >
              <div className="space-y-2">
                {navigation.map((item, index) => (
                  <motion.button
                    key={item.href}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                    onClick={() => handleNavClick(item.href)}
                    className={`
                      w-full text-left px-4 py-3 rounded-xl
                      font-medium text-lg
                      transition-colors
                      ${activeSection === item.href.replace('#', '')
                        ? 'bg-[var(--glass-border)] text-[var(--text-primary)]'
                        : 'text-[var(--text-tertiary)] hover:bg-[var(--glass-bg)] hover:text-[var(--text-primary)]'
                      }
                    `}
                  >
                    {item.label}
                  </motion.button>
                ))}
              </div>
              
              <div className="mt-6 pt-6 border-t border-[var(--glass-border)]">
                <Button
                  variant="primary"
                  size="lg"
                  className="w-full"
                  leftIcon={<Download className="w-5 h-5" />}
                  onClick={() => {
                    generateResumePDF()
                    setIsOpen(false)
                  }}
                >
                  Download Resume
                </Button>
              </div>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
