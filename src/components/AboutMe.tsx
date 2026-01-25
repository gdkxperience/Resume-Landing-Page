import { motion } from 'framer-motion'
import { 
  MapPin, 
  Briefcase, 
  GraduationCap,
  Heart,
  Rocket,
  Coffee,
  Code2,
  Globe
} from 'lucide-react'
import { Card } from './ui/Card'
import { Badge } from './ui/Badge'
import { personalInfo, education } from '@/data/resume'
import georgiImage from '@/assets/Georgi.png'

const funFacts = [
  { icon: Rocket, text: "Deployed to 3 countries including China" },
  { icon: Coffee, text: "Fueled by curiosity and good coffee" },
  { icon: Code2, text: "9+ years crafting digital experiences" },
  { icon: Globe, text: "Worked with teams across EU, UK & Asia" },
]

const values = [
  {
    title: "Ship Fast, Learn Faster",
    description: "I believe in rapid iteration and getting real feedback early."
  },
  {
    title: "Clean Architecture",
    description: "Building systems that scale and are a joy to maintain."
  },
  {
    title: "User-Centric Design",
    description: "Every technical decision starts with the end user in mind."
  },
  {
    title: "Continuous Growth",
    description: "Always learning, always improving, always curious."
  }
]

export function AboutMe() {
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
    <section id="about" className="section relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 mesh-bg" />
      <div className="absolute top-20 right-[10%] w-[400px] h-[400px] orb orb-primary opacity-50" />
      <div className="absolute bottom-20 left-[5%] w-[300px] h-[300px] orb orb-accent opacity-40" />
      
      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <Badge variant="primary" size="md" className="mb-4">Get to Know Me</Badge>
          <h2 className="section-title">
            <span className="text-[var(--text-primary)]">About </span>
            <span className="gradient-text">Me</span>
          </h2>
          <p className="section-subtitle mx-auto">
            The person behind the code — my journey, values, and what drives me
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image & Quick Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            {/* Main Image */}
            <div className="relative">
              {/* Decorative Background */}
              <motion.div
                className="absolute -inset-4 bg-gradient-to-br from-[var(--color-primary-500)]/20 to-[var(--color-accent-500)]/20 rounded-3xl"
                animate={{ 
                  rotate: [0, 2, 0, -2, 0],
                }}
                transition={{ duration: 10, repeat: Infinity }}
              />
              
              {/* Image Container */}
              <div className="relative rounded-2xl overflow-hidden shadow-xl border border-[var(--glass-border)]">
                <img
                  src={georgiImage}
                  alt="Georgi Krastev"
                  className="w-full h-auto object-cover"
                />
                
                {/* Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg-primary)]/60 via-transparent to-transparent" />
                
                {/* Name Badge on Image */}
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="glass rounded-xl p-4">
                    <h3 className="text-xl font-bold text-[var(--text-primary)]">{personalInfo.name}</h3>
                    <p className="text-sm text-[var(--text-secondary)]">{personalInfo.title}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Cards */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="absolute -top-4 -right-4 md:right-4"
            >
              <Card variant="glass" padding="sm" className="flex items-center gap-2 shadow-lg">
                <MapPin className="w-4 h-4 text-[var(--color-primary-500)]" />
                <span className="text-sm font-medium text-[var(--text-primary)]">{personalInfo.location}</span>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="absolute -bottom-4 -left-4 md:left-4"
            >
              <Card variant="glass" padding="sm" className="flex items-center gap-2 shadow-lg">
                <Briefcase className="w-4 h-4 text-[var(--color-accent-500)]" />
                <span className="text-sm font-medium text-[var(--text-primary)]">{personalInfo.yearsOfExperience}+ Years Experience</span>
              </Card>
            </motion.div>
          </motion.div>

          {/* Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Bio */}
            <motion.div variants={itemVariants}>
              <h3 className="text-2xl font-bold text-[var(--text-primary)] mb-4">
                Hello! I'm Georgi
              </h3>
              <p className="text-[var(--text-secondary)] leading-relaxed mb-4">
                I'm a hands-on technical architect and senior full-stack engineer based in Sofia, Bulgaria. 
                With over 9 years of experience, I've built everything from satellite operations platforms 
                to fleet management systems processing thousands of transactions monthly.
              </p>
              <p className="text-[var(--text-secondary)] leading-relaxed">
                I thrive at the intersection of complex technical challenges and elegant user experiences. 
                Whether it's architecting a 50-step automation pipeline or leading a team of 15+ developers, 
                I bring the same passion for quality and attention to detail.
              </p>
            </motion.div>

            {/* Education */}
            <motion.div variants={itemVariants}>
              <Card variant="glass" padding="md" className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[var(--color-primary-500)]/20 to-[var(--color-accent-500)]/20 flex items-center justify-center flex-shrink-0">
                  <GraduationCap className="w-6 h-6 text-[var(--color-primary-500)]" />
                </div>
                <div>
                  <h4 className="font-semibold text-[var(--text-primary)]">{education.degree}</h4>
                  <p className="text-sm text-[var(--text-secondary)]">{education.institution}</p>
                  <p className="text-xs text-[var(--text-tertiary)]">{education.period} • {education.location}</p>
                </div>
              </Card>
            </motion.div>

            {/* Languages */}
            <motion.div variants={itemVariants}>
              <p className="text-sm text-[var(--text-tertiary)] mb-2 flex items-center gap-2">
                <Globe className="w-4 h-4" />
                Languages I Speak
              </p>
              <div className="flex flex-wrap gap-2">
                {personalInfo.languages.map((lang) => (
                  <Badge key={lang} variant="outline" size="md">{lang}</Badge>
                ))}
              </div>
            </motion.div>

            {/* Fun Facts */}
            <motion.div variants={itemVariants}>
              <p className="text-sm text-[var(--text-tertiary)] mb-3">Quick Facts</p>
              <div className="grid grid-cols-2 gap-3">
                {funFacts.map((fact, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center gap-2 text-sm text-[var(--text-secondary)]"
                  >
                    <fact.icon className="w-4 h-4 text-[var(--color-primary-500)] flex-shrink-0" />
                    <span>{fact.text}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Values Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-20"
        >
          <div className="text-center mb-10">
            <h3 className="text-2xl font-bold text-[var(--text-primary)] mb-2 flex items-center justify-center gap-2">
              <Heart className="w-6 h-6 text-[var(--color-accent-500)]" />
              What I Value
            </h3>
            <p className="text-[var(--text-secondary)]">Principles that guide every line of code I write</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card variant="glass" padding="md" className="h-full text-center group">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[var(--color-primary-500)]/20 to-[var(--color-accent-500)]/20 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                    <span className="text-lg font-bold gradient-text">{index + 1}</span>
                  </div>
                  <h4 className="font-semibold text-[var(--text-primary)] mb-2">{value.title}</h4>
                  <p className="text-sm text-[var(--text-secondary)]">{value.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
