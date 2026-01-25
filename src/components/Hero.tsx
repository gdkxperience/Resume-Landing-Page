import { useState, useEffect, useRef, memo, useMemo } from 'react'
import { motion, useScroll, useTransform, useMotionValue, useSpring } from 'framer-motion'
import { 
  ArrowDown,
  Terminal,
  Cpu,
  Database,
  Cloud,
  Code2,
  Layers,
  Zap,
  GitBranch,
  CheckCircle2,
  Loader2
} from 'lucide-react'
import { Badge } from './ui/Badge'
import { personalInfo } from '@/data/resume'

// Memoized particle component to prevent re-renders
const Particle = memo(function Particle({ delay, initialX, initialY }: { delay: number; initialX: number; initialY: number }) {
  return (
    <motion.div
      className="absolute w-1 h-1 rounded-full bg-[var(--color-primary-400)]/60"
      style={{
        left: `${initialX}%`,
        top: `${initialY}%`,
      }}
      initial={{ opacity: 0, scale: 0 }}
      animate={{
        opacity: [0, 0.8, 0],
        scale: [0, 1, 0],
        y: [0, -80],
      }}
      transition={{
        duration: 4 + Math.random() * 2,
        repeat: Infinity,
        delay: delay,
        ease: "easeOut",
      }}
    />
  )
})

// Memoized particles container
const ParticlesContainer = memo(function ParticlesContainer() {
  // Generate stable random positions once
  const particles = useMemo(() => 
    [...Array(15)].map((_, i) => ({
      id: i,
      delay: i * 0.8,
      initialX: Math.random() * 100,
      initialY: 30 + Math.random() * 60,
    })), 
  [])

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((particle) => (
        <Particle 
          key={particle.id} 
          delay={particle.delay} 
          initialX={particle.initialX}
          initialY={particle.initialY}
        />
      ))}
    </div>
  )
})

// Boot sequence line component
function BootLine({ 
  text, 
  delay, 
  type = 'info',
  showProgress = false,
  progressDuration = 1000,
}: { 
  text: string
  delay: number
  type?: 'info' | 'success' | 'loading' | 'command' | 'header'
  showProgress?: boolean
  progressDuration?: number
}) {
  const [visible, setVisible] = useState(false)
  const [progress, setProgress] = useState(0)
  const [complete, setComplete] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), delay)
    return () => clearTimeout(timer)
  }, [delay])

  useEffect(() => {
    if (!visible || !showProgress) return
    
    const startTime = Date.now()
    const interval = setInterval(() => {
      const elapsed = Date.now() - startTime
      const newProgress = Math.min(100, (elapsed / progressDuration) * 100)
      setProgress(newProgress)
      if (newProgress >= 100) {
        clearInterval(interval)
        setTimeout(() => setComplete(true), 200)
      }
    }, 30)
    
    return () => clearInterval(interval)
  }, [visible, showProgress, progressDuration])

  if (!visible) return null

  const colors = {
    info: 'text-[var(--text-secondary)]',
    success: 'text-emerald-400',
    loading: 'text-[var(--color-primary-400)]',
    command: 'text-[var(--text-primary)]',
    header: 'text-[var(--color-accent-400)]',
  }

  const icons = {
    info: null,
    success: <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0" />,
    loading: complete ? <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0" /> : <Loader2 className="w-3.5 h-3.5 text-[var(--color-primary-400)] animate-spin flex-shrink-0" />,
    command: <span className="text-emerald-400 flex-shrink-0">➜</span>,
    header: <span className="text-[var(--color-accent-400)] flex-shrink-0">[SYS]</span>,
  }

  return (
    <motion.div
      initial={{ opacity: 0, x: -10 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.3 }}
      className={`font-mono text-xs md:text-sm flex items-start gap-2 ${colors[type]}`}
    >
      {icons[type]}
      <div className="flex-1 min-w-0">
        <span>{text}</span>
        {showProgress && !complete && (
          <div className="mt-1 h-1.5 bg-[var(--glass-border)] rounded-full overflow-hidden max-w-[200px]">
            <motion.div
              className="h-full bg-gradient-to-r from-[var(--color-primary-500)] to-[var(--color-accent-500)] rounded-full"
              style={{ width: `${progress}%` }}
            />
          </div>
        )}
      </div>
    </motion.div>
  )
}

// Skill loading line
function SkillLine({ name, years, delay }: { name: string; years: number; delay: number }) {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), delay)
    return () => clearTimeout(timer)
  }, [delay])

  if (!visible) return null

  return (
    <motion.div
      initial={{ opacity: 0, x: -10 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.2 }}
      className="font-mono text-xs md:text-sm flex items-center gap-2 pl-4"
    >
      <CheckCircle2 className="w-3 h-3 text-emerald-400 flex-shrink-0" />
      <span className="text-[var(--text-primary)]">{name}</span>
      <span className="text-[var(--text-muted)]">[{years}y]</span>
    </motion.div>
  )
}

// Orbiting icon component
const OrbitingIcon = memo(function OrbitingIcon({ 
  icon: Icon, 
  radius, 
  duration, 
  delay = 0,
  color 
}: { 
  icon: React.ComponentType<{ className?: string }>
  radius: number
  duration: number
  delay?: number
  color: string
}) {
  return (
    <motion.div
      className="absolute"
      style={{
        width: radius * 2,
        height: radius * 2,
        left: `calc(50% - ${radius}px)`,
        top: `calc(50% - ${radius}px)`,
      }}
      animate={{ rotate: 360 }}
      transition={{
        duration,
        repeat: Infinity,
        ease: "linear",
        delay,
      }}
    >
      <motion.div
        className="absolute p-2.5 rounded-xl bg-[var(--glass-bg)] border border-[var(--glass-border)] backdrop-blur-md shadow-lg"
        style={{
          left: radius - 20,
          top: -20,
        }}
        whileHover={{ scale: 1.2, boxShadow: `0 0 30px ${color}40` }}
      >
        <Icon className="w-5 h-5" style={{ color }} />
      </motion.div>
    </motion.div>
  )
})

// Typewriter hook for roles
function useTypewriter(texts: string[], speed = 80, deleteSpeed = 40, pauseDuration = 2000) {
  const [displayText, setDisplayText] = useState('')
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const currentText = texts[currentIndex]
    
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (displayText.length < currentText.length) {
          setDisplayText(currentText.slice(0, displayText.length + 1))
        } else {
          setTimeout(() => setIsDeleting(true), pauseDuration)
        }
      } else {
        if (displayText.length > 0) {
          setDisplayText(displayText.slice(0, -1))
        } else {
          setIsDeleting(false)
          setCurrentIndex((prev) => (prev + 1) % texts.length)
        }
      }
    }, isDeleting ? deleteSpeed : speed)

    return () => clearTimeout(timeout)
  }, [displayText, currentIndex, isDeleting, texts, speed, deleteSpeed, pauseDuration])

  return displayText
}

export function Hero() {
  const { scrollY } = useScroll()
  const containerRef = useRef<HTMLDivElement>(null)
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)
  
  const springConfig = { damping: 25, stiffness: 150 }
  const mouseXSpring = useSpring(mouseX, springConfig)
  const mouseYSpring = useSpring(mouseY, springConfig)
  
  const y = useTransform(scrollY, [0, 500], [0, 150])
  const opacity = useTransform(scrollY, [0, 300], [1, 0])
  
  // Rotating roles
  const roles = [
    "Technical Architect",
    "Full-Stack Engineer", 
    "Solution Designer",
    "Team Leader",
    "System Builder"
  ]
  const currentRole = useTypewriter(roles, 100, 50, 2500)

  // Mouse move handler
  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = containerRef.current?.getBoundingClientRect()
    if (rect) {
      const x = (e.clientX - rect.left - rect.width / 2) / 50
      const y = (e.clientY - rect.top - rect.height / 2) / 50
      mouseX.set(x)
      mouseY.set(y)
    }
  }

  // Tech stack for orbit - memoized
  const orbitingTech = useMemo(() => [
    { icon: Code2, radius: 110, duration: 25, color: '#3b82f6', delay: 0 },
    { icon: Database, radius: 110, duration: 25, delay: 6.25, color: '#8b5cf6' },
    { icon: Cloud, radius: 110, duration: 25, delay: 12.5, color: '#06b6d4' },
    { icon: Layers, radius: 110, duration: 25, delay: 18.75, color: '#f59e0b' },
    { icon: GitBranch, radius: 170, duration: 35, color: '#ec4899', delay: 0 },
    { icon: Cpu, radius: 170, duration: 35, delay: 8.75, color: '#10b981' },
    { icon: Zap, radius: 170, duration: 35, delay: 17.5, color: '#f97316' },
    { icon: Terminal, radius: 170, duration: 35, delay: 26.25, color: '#6366f1' },
  ], [])

  // Boot sequence timing
  const bootSequence = useMemo(() => ({
    header: 0,
    init: 400,
    progress: 600,
    loadingModules: 2000,
    frontend: 2200,
    backend: 2400,
    architecture: 2600,
    cloud: 2800,
    mounting: 3200,
    ready: 4000,
    welcome: 4400,
    status: 4800,
  }), [])

  return (
    <section 
      ref={containerRef}
      onMouseMove={handleMouseMove}
      id="hero" 
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
    >
      {/* Animated Gradient Background */}
      <div className="absolute inset-0 mesh-bg" />
      <motion.div
        className="absolute inset-0"
        style={{
          background: `radial-gradient(circle at 50% 50%, var(--color-primary-500) 0%, transparent 50%)`,
          opacity: 0.1,
        }}
        animate={{
          background: [
            `radial-gradient(circle at 30% 30%, var(--color-primary-500) 0%, transparent 50%)`,
            `radial-gradient(circle at 70% 50%, var(--color-accent-500) 0%, transparent 50%)`,
            `radial-gradient(circle at 50% 70%, var(--color-primary-500) 0%, transparent 50%)`,
            `radial-gradient(circle at 30% 30%, var(--color-primary-500) 0%, transparent 50%)`,
          ],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
      />
      
      {/* Grid Pattern */}
      <div className="absolute inset-0 grid-pattern opacity-50" />
      
      {/* Memoized Particles - won't re-render on state changes */}
      <ParticlesContainer />
      
      {/* Parallax Orbs */}
      <motion.div
        style={{ y }}
        className="absolute top-20 left-[10%] w-[600px] h-[600px] orb orb-primary opacity-40"
      />
      <motion.div
        style={{ y: useTransform(scrollY, [0, 500], [0, 100]) }}
        className="absolute bottom-20 right-[10%] w-[500px] h-[500px] orb orb-accent opacity-30"
      />
      
      {/* Main Content */}
      <motion.div
        style={{ opacity }}
        className="container relative z-10"
      >
        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
          
          {/* Left Side - Main Text */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="text-left"
          >
            {/* Status Badge */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="mb-6"
            >
              <Badge variant="success" size="md" className="gap-2">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                </span>
                Available for new opportunities
              </Badge>
            </motion.div>
            
            {/* Name with gradient underline */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="mb-4"
            >
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
                <span className="text-[var(--text-primary)]">I'm </span>
                <span className="relative">
                  <span className="gradient-text">{personalInfo.name}</span>
                  <motion.span
                    className="absolute -bottom-2 left-0 h-1 bg-gradient-to-r from-[var(--color-primary-500)] to-[var(--color-accent-500)] rounded-full"
                    initial={{ width: 0 }}
                    animate={{ width: '100%' }}
                    transition={{ delay: 0.8, duration: 0.6 }}
                  />
                </span>
              </h1>
            </motion.div>
            
            {/* Dynamic Role Rotator */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="mb-6 h-12"
            >
              <div className="flex items-center gap-3">
                <span className="text-xl md:text-2xl text-[var(--text-muted)]">{"<"}</span>
                <span className="text-xl md:text-2xl font-semibold text-[var(--color-primary-400)]">
                  {currentRole}
                  <span className="inline-block w-0.5 h-6 bg-[var(--color-primary-400)] ml-1 animate-pulse" />
                </span>
                <span className="text-xl md:text-2xl text-[var(--text-muted)]">{"/>"}</span>
              </div>
            </motion.div>
            
            {/* Tagline with emphasis */}
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="text-base md:text-lg text-[var(--text-secondary)] max-w-lg mb-8"
            >
              Transforming <span className="text-[var(--text-primary)] font-medium">complex requirements</span> into{' '}
              <span className="text-[var(--text-primary)] font-medium">elegant, scalable solutions</span> — from satellite platforms to AI automation.
            </motion.p>
            
            {/* Quick Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-wrap gap-6"
            >
              {[
                { value: '9+', label: 'Years' },
                { value: '20+', label: 'Clients' },
                { value: '15+', label: 'Team Size' },
              ].map((stat) => (
                <motion.div
                  key={stat.label}
                  className="text-center"
                  whileHover={{ scale: 1.05, y: -2 }}
                >
                  <div className="text-2xl md:text-3xl font-bold gradient-text">{stat.value}</div>
                  <div className="text-xs text-[var(--text-muted)] uppercase tracking-wider">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
          
          {/* Right Side - Boot Sequence Terminal */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="relative hidden lg:flex items-center justify-center"
          >
            {/* Orbiting Tech Icons */}
            <div className="absolute inset-0 flex items-center justify-center">
              {orbitingTech.map((tech, index) => (
                <OrbitingIcon
                  key={index}
                  icon={tech.icon}
                  radius={tech.radius}
                  duration={tech.duration}
                  delay={tech.delay}
                  color={tech.color}
                />
              ))}
            </div>
            
            {/* Center Terminal - Boot Sequence */}
            <motion.div
              style={{
                x: useTransform(mouseXSpring, v => v * 3),
                y: useTransform(mouseYSpring, v => v * 3),
              }}
              className="relative z-10 w-[360px]"
            >
              <div className="rounded-2xl overflow-hidden border border-[var(--glass-border)] shadow-2xl shadow-[var(--color-primary-500)]/20">
                {/* Terminal Header */}
                <div className="bg-[var(--bg-secondary)] px-4 py-3 flex items-center gap-2 border-b border-[var(--glass-border)]">
                  <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-500" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500" />
                    <div className="w-3 h-3 rounded-full bg-green-500" />
                  </div>
                  <div className="flex-1 text-center">
                    <span className="text-xs text-[var(--text-muted)] font-mono">system-boot.sh</span>
                  </div>
                </div>
                
                {/* Terminal Body - Boot Sequence */}
                <div className="bg-[var(--bg-primary)]/95 backdrop-blur-xl p-4 space-y-2 min-h-[280px]">
                  <BootLine 
                    text="DEVELOPER PROFILE v9.0" 
                    delay={bootSequence.header} 
                    type="header" 
                  />
                  <BootLine 
                    text="Initializing system..." 
                    delay={bootSequence.init} 
                    type="info" 
                  />
                  <BootLine 
                    text="Loading core modules" 
                    delay={bootSequence.progress} 
                    type="loading"
                    showProgress
                    progressDuration={1200}
                  />
                  
                  <div className="pt-2">
                    <BootLine 
                      text="Mounting experience modules:" 
                      delay={bootSequence.loadingModules} 
                      type="info" 
                    />
                    <SkillLine name="frontend.ts" years={9} delay={bootSequence.frontend} />
                    <SkillLine name="backend.ts" years={6} delay={bootSequence.backend} />
                    <SkillLine name="architecture.ts" years={5} delay={bootSequence.architecture} />
                    <SkillLine name="cloud.ts" years={4} delay={bootSequence.cloud} />
                  </div>
                  
                  <div className="pt-2">
                    <BootLine 
                      text="Mounting skills: React, TypeScript, Node, AWS..." 
                      delay={bootSequence.mounting} 
                      type="success" 
                    />
                  </div>
                  
                  <div className="pt-2">
                    <BootLine 
                      text="System ready." 
                      delay={bootSequence.ready} 
                      type="success" 
                    />
                    <BootLine 
                      text={`Welcome to ${personalInfo.name.split(' ')[0]}'s portfolio.`}
                      delay={bootSequence.welcome} 
                      type="info" 
                    />
                  </div>
                  
                  <div className="pt-2">
                    <BootLine 
                      text="./status --availability" 
                      delay={bootSequence.status} 
                      type="command" 
                    />
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: (bootSequence.status + 400) / 1000 }}
                      className="font-mono text-xs md:text-sm text-emerald-400 pl-5 flex items-center gap-2 mt-1"
                    >
                      <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
                      </span>
                      Open for opportunities
                    </motion.div>
                  </div>
                </div>
              </div>
              
              {/* Glow effect behind terminal */}
              <div className="absolute -inset-4 bg-gradient-to-r from-[var(--color-primary-500)]/20 to-[var(--color-accent-500)]/20 rounded-3xl blur-2xl -z-10" />
            </motion.div>
          </motion.div>
        </div>
        
        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <motion.div
            className="relative flex flex-col items-center cursor-pointer group"
            whileHover={{ scale: 1.1 }}
            onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
          >
            <span className="text-xs text-[var(--text-muted)] uppercase tracking-widest mb-2 group-hover:text-[var(--color-primary-400)] transition-colors">
              Discover More
            </span>
            <motion.div
              className="w-6 h-10 rounded-full border-2 border-[var(--glass-border)] flex items-start justify-center p-2 group-hover:border-[var(--color-primary-400)] transition-colors"
            >
              <motion.div
                className="w-1.5 h-1.5 rounded-full bg-[var(--color-primary-400)]"
                animate={{ y: [0, 12, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              />
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.div>
      
      {/* Noise Overlay */}
      <div className="absolute inset-0 noise-overlay pointer-events-none" />
    </section>
  )
}
