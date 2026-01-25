import jsPDF from 'jspdf'

// Colors
const PRIMARY_COLOR: [number, number, number] = [51, 115, 255] // #3373ff
const TEXT_DARK: [number, number, number] = [30, 30, 40]
const TEXT_GRAY: [number, number, number] = [80, 80, 90]
const TEXT_LIGHT: [number, number, number] = [120, 120, 130]

// Resume content from docs/resume.md
const resumeContent = {
  name: 'GEORGI KRASTEV',
  title: 'Senior Full-Stack Engineer | Technical Architect | Platform Modernization Specialist',
  contact: 'Sofia, Bulgaria | +359 87 960 6986 | krustevgeorgi@yahoo.com',
  
  summary: `Hands-on technical architect with 9+ years architecting and shipping scalable, high-impact platforms across real-time systems (satellites), industrial automation (robots), fintech integrations (payments), and AI-driven automation. Proven expertise in legacy platform modernization, design system leadership, third-party integrations at scale, and rapid MVP delivery (3–4x faster than industry standard).`,
  
  coreCompetencies: [
    'Full-stack development (React/Vue/Node/AWS)',
    'System architecture & technical decision-making',
    'Design systems & component standardization',
    'Payment processing & SOAP/REST integrations',
    'Real-time data visualization & WebSocket systems',
    'Cloud infrastructure (AWS, GitHub Actions CI/CD)',
    'AI/automation workflows (n8n, custom nodes, LLMs)',
    'Cross-functional team leadership & vendor management'
  ],
  
  skills: {
    frontend: 'React (6+ yrs), Redux (6+ yrs), TypeScript (6+ yrs), Vue 3, Tailwind CSS (2+ yrs), Storybook, WebSockets',
    backend: 'Node.js (7+ yrs), Express (6+ yrs), MongoDB (6+ yrs), SQL (Advanced), Supabase, REST APIs',
    cloud: 'AWS (S3, CloudFront, EC2, Cognito, Lambda, RDS), Docker (Advanced), GitHub Actions CI/CD',
    integrations: 'REST APIs, SOAP/XML APIs, OAuth 2.0, n8n Automation, Payment Gateways, Webhook Systems',
    design: 'UI/UX Wireframing, Pixel Perfect Mockups, Figma, Design Systems',
    architecture: 'System Design, RBAC, Component Libraries, Performance Optimization'
  },
  
  experience: [
    {
      title: 'Principal Full-Stack Engineer / Solution Architect',
      company: 'Boutique Tech Consultancy (MVP Forge / ZenGroup)',
      location: 'Sofia, Bulgaria',
      period: 'January 2024 – Present',
      description: 'Leading technical delivery of AI automation services and rapid SaaS development.',
      achievements: [
        { name: 'Prezaredi.bg', detail: '20 corporate clients, ~400 fleet cards, 99%+ uptime, BORICA payment integration' },
        { name: 'Automated Reporting', detail: 'Saves 60-80 hours/month via 50-step n8n workflow with AI insights' },
        { name: 'TabiSurvey MVP', detail: 'Shipped in 3 weeks (4x faster than industry standard)' }
      ]
    },
    {
      title: 'Technical Lead & Platform Architect',
      company: 'EnduroSat',
      location: 'Sofia, Bulgaria',
      period: 'December 2022 – December 2025',
      description: 'Led complete architectural overhaul of Satellite Operations Platform.',
      achievements: [
        { name: 'Platform V2 Rewrite', detail: 'Load time 8s→2s, telemetry 5s→<500ms, React/Redux/Tailwind' },
        { name: 'Design System', detail: '20-25% codebase reduction, 30+ Storybook components' },
        { name: 'Customer Portal', detail: '20% reduction in support tickets via self-service' }
      ]
    },
    {
      title: 'Senior Frontend Engineer',
      company: 'DevCloud BG',
      location: 'Plovdiv, Bulgaria',
      period: '2019 – 2022',
      description: 'Built Robot Control Center for industrial silicon-wafer processing systems.',
      achievements: [
        { name: 'Robot Control Center', detail: 'WebSocket control, 90% error reduction, deployed in China' },
        { name: 'Training Reduction', detail: 'Operator training 4 weeks → 2 weeks' }
      ]
    },
    {
      title: 'Software Engineer',
      company: 'Aucoda',
      location: 'Manchester, UK',
      period: '2017 – 2019',
      description: 'Cross-platform application development platform.',
      achievements: [
        { name: 'OAuth Implementation', detail: 'Unified auth across iOS/Android/Web, 80% fewer auth bugs' }
      ]
    }
  ],
  
  education: {
    degree: 'Bachelor of Science in Computer Science',
    institution: 'University of Manchester',
    period: '2015 – 2017'
  },
  
  languages: ['Bulgarian – Native', 'English – Professional fluency']
}

export function generateResumePDF() {
  const doc = new jsPDF({
    orientation: 'portrait',
    unit: 'mm',
    format: 'a4'
  })

  const pageWidth = doc.internal.pageSize.getWidth()
  const pageHeight = doc.internal.pageSize.getHeight()
  const margin = 15
  const contentWidth = pageWidth - margin * 2
  let y = margin

  // Helper functions
  const setFont = (style: 'normal' | 'bold' = 'normal', size = 10) => {
    doc.setFont('helvetica', style)
    doc.setFontSize(size)
  }

  const addText = (text: string, x: number, yPos: number, options?: { maxWidth?: number; align?: 'left' | 'center' | 'right' }) => {
    doc.text(text, x, yPos, { maxWidth: options?.maxWidth, align: options?.align })
  }

  const addSection = (title: string) => {
    y += 6
    doc.setTextColor(...PRIMARY_COLOR)
    setFont('bold', 11)
    addText(title.toUpperCase(), margin, y)
    y += 1.5
    doc.setDrawColor(...PRIMARY_COLOR)
    doc.setLineWidth(0.4)
    doc.line(margin, y, pageWidth - margin, y)
    y += 5
    doc.setTextColor(...TEXT_DARK)
  }

  const checkPageBreak = (neededSpace: number) => {
    if (y + neededSpace > pageHeight - margin) {
      doc.addPage()
      y = margin
      return true
    }
    return false
  }

  // === HEADER ===
  doc.setTextColor(...PRIMARY_COLOR)
  setFont('bold', 20)
  addText(resumeContent.name, pageWidth / 2, y, { align: 'center' })
  y += 6

  doc.setTextColor(...TEXT_DARK)
  setFont('normal', 10)
  addText(resumeContent.title, pageWidth / 2, y, { align: 'center' })
  y += 5

  doc.setTextColor(...TEXT_GRAY)
  setFont('normal', 9)
  addText(resumeContent.contact, pageWidth / 2, y, { align: 'center' })
  y += 3

  // === PROFESSIONAL SUMMARY ===
  addSection('Professional Summary')
  
  doc.setTextColor(...TEXT_DARK)
  setFont('normal', 9)
  const summaryLines = doc.splitTextToSize(resumeContent.summary, contentWidth)
  doc.text(summaryLines, margin, y)
  y += summaryLines.length * 4 + 2

  // Core Competencies
  doc.setTextColor(...TEXT_GRAY)
  setFont('normal', 8)
  const compCols = 2
  const compColWidth = contentWidth / compCols
  resumeContent.coreCompetencies.forEach((comp, i) => {
    const col = i % compCols
    const row = Math.floor(i / compCols)
    if (col === 0 && i > 0) y += 0
    const xPos = margin + col * compColWidth
    const yPos = y + row * 3.5
    addText(`• ${comp}`, xPos, yPos)
  })
  y += Math.ceil(resumeContent.coreCompetencies.length / compCols) * 3.5 + 2

  // === TECHNICAL SKILLS ===
  addSection('Core Technical Skills')
  
  const skillEntries = Object.entries(resumeContent.skills)
  skillEntries.forEach(([category, skills]) => {
    checkPageBreak(10)
    doc.setTextColor(...TEXT_DARK)
    setFont('bold', 8)
    const catTitle = category.charAt(0).toUpperCase() + category.slice(1) + ':'
    addText(catTitle, margin, y)
    
    doc.setTextColor(...TEXT_GRAY)
    setFont('normal', 8)
    const skillLines = doc.splitTextToSize(skills, contentWidth - 25)
    doc.text(skillLines, margin + 22, y)
    y += skillLines.length * 3.5 + 1
  })
  y += 2

  // === EXPERIENCE ===
  addSection('Professional Experience')

  resumeContent.experience.forEach((exp) => {
    checkPageBreak(35)

    // Title & Period
    doc.setTextColor(...TEXT_DARK)
    setFont('bold', 10)
    addText(exp.title, margin, y)
    
    doc.setTextColor(...TEXT_GRAY)
    setFont('normal', 8)
    addText(exp.period, pageWidth - margin, y, { align: 'right' })
    y += 4

    // Company & Location
    doc.setTextColor(...PRIMARY_COLOR)
    setFont('normal', 9)
    addText(exp.company, margin, y)
    
    doc.setTextColor(...TEXT_LIGHT)
    setFont('normal', 8)
    addText(exp.location, pageWidth - margin, y, { align: 'right' })
    y += 4

    // Description
    doc.setTextColor(...TEXT_GRAY)
    setFont('normal', 8)
    const descLines = doc.splitTextToSize(exp.description, contentWidth)
    doc.text(descLines, margin, y)
    y += descLines.length * 3.5 + 2

    // Achievements
    exp.achievements.forEach(ach => {
      checkPageBreak(8)
      doc.setTextColor(...TEXT_DARK)
      setFont('bold', 8)
      addText(`▸ ${ach.name}:`, margin + 2, y)
      
      doc.setTextColor(...TEXT_GRAY)
      setFont('normal', 8)
      const achLines = doc.splitTextToSize(ach.detail, contentWidth - 35)
      doc.text(achLines, margin + 32, y)
      y += achLines.length * 3.5 + 1
    })
    
    y += 4
  })

  // === EDUCATION ===
  checkPageBreak(20)
  addSection('Education')

  doc.setTextColor(...TEXT_DARK)
  setFont('bold', 9)
  addText(resumeContent.education.degree, margin, y)
  
  doc.setTextColor(...TEXT_GRAY)
  setFont('normal', 8)
  addText(resumeContent.education.period, pageWidth - margin, y, { align: 'right' })
  y += 4

  doc.setTextColor(...TEXT_GRAY)
  setFont('normal', 9)
  addText(resumeContent.education.institution, margin, y)
  y += 6

  // === LANGUAGES ===
  addSection('Languages')
  
  doc.setTextColor(...TEXT_GRAY)
  setFont('normal', 9)
  addText(resumeContent.languages.join('  •  '), margin, y)

  // === FOOTER ===
  doc.setTextColor(...TEXT_LIGHT)
  setFont('normal', 7)
  const footerY = pageHeight - 8
  addText(`Portfolio: resume-landing-page-zeta.vercel.app`, margin, footerY)
  addText(`Generated ${new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long' })}`, pageWidth / 2, footerY, { align: 'center' })
  addText('krustevgeorgi@yahoo.com', pageWidth - margin, footerY, { align: 'right' })

  // Save the PDF
  doc.save('Georgi_Krastev_Resume.pdf')
}
