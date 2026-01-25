import jsPDF from 'jspdf'
import { personalInfo, skills, experiences, education } from '@/data/resume'
import georgiImage from '@/assets/Georgi.png'

// Colors
const PRIMARY_COLOR: [number, number, number] = [51, 115, 255] // #3373ff
const ACCENT_COLOR: [number, number, number] = [139, 92, 246] // Purple accent
const TEXT_DARK: [number, number, number] = [30, 30, 40]
const TEXT_GRAY: [number, number, number] = [80, 80, 90]
const TEXT_LIGHT: [number, number, number] = [120, 120, 130]
const BG_LIGHT: [number, number, number] = [248, 250, 252]
const SUCCESS_COLOR: [number, number, number] = [16, 185, 129]

// Load image and convert to base64
async function loadImageAsBase64(url: string): Promise<string> {
  return new Promise((resolve, reject) => {
    const img = new Image()
    img.crossOrigin = 'anonymous'
    img.onload = () => {
      const canvas = document.createElement('canvas')
      canvas.width = img.width
      canvas.height = img.height
      const ctx = canvas.getContext('2d')
      ctx?.drawImage(img, 0, 0)
      resolve(canvas.toDataURL('image/png'))
    }
    img.onerror = reject
    img.src = url
  })
}

export async function generateResumePDF() {
  const doc = new jsPDF({
    orientation: 'portrait',
    unit: 'mm',
    format: 'a4'
  })

  const pageWidth = doc.internal.pageSize.getWidth()
  const pageHeight = doc.internal.pageSize.getHeight()
  const margin = 15
  const contentWidth = pageWidth - margin * 2
  let y = 0

  // Helper functions
  const setFont = (style: 'normal' | 'bold' = 'normal', size = 10) => {
    doc.setFont('helvetica', style)
    doc.setFontSize(size)
  }

  const addText = (text: string, x: number, yPos: number, options?: { maxWidth?: number; align?: 'left' | 'center' | 'right' }) => {
    doc.text(text, x, yPos, { maxWidth: options?.maxWidth, align: options?.align })
  }

  const addSection = (title: string, icon?: string) => {
    y += 10
    
    // Section background bar
    doc.setFillColor(...BG_LIGHT)
    doc.roundedRect(margin, y - 5, contentWidth, 8, 2, 2, 'F')
    
    // Icon placeholder
    if (icon) {
      doc.setTextColor(...PRIMARY_COLOR)
      setFont('normal', 10)
      addText(icon, margin + 3, y)
    }
    
    doc.setTextColor(...PRIMARY_COLOR)
    setFont('bold', 11)
    addText(title.toUpperCase(), margin + (icon ? 10 : 3), y)
    
    y += 8
    doc.setTextColor(...TEXT_DARK)
  }

  const checkPageBreak = (neededSpace: number) => {
    if (y + neededSpace > pageHeight - 15) {
      doc.addPage()
      y = 15
      return true
    }
    return false
  }

  const addBulletPoint = (text: string, indent = 0) => {
    doc.setFillColor(...PRIMARY_COLOR)
    doc.circle(margin + indent + 2, y - 1.2, 0.8, 'F')
    doc.setTextColor(...TEXT_DARK)
    setFont('normal', 9)
    const lines = doc.splitTextToSize(text, contentWidth - indent - 8)
    doc.text(lines, margin + indent + 6, y)
    y += lines.length * 4.2
  }

  // === HEADER SECTION WITH GRADIENT BAR ===
  // Header background
  doc.setFillColor(...PRIMARY_COLOR)
  doc.rect(0, 0, pageWidth, 52, 'F')
  
  // Gradient overlay effect (darker at top)
  doc.setFillColor(30, 60, 150)
  doc.rect(0, 0, pageWidth, 15, 'F')

  // Load and add profile picture
  try {
    const imgData = await loadImageAsBase64(georgiImage)
    // Circular clip effect (draw white circle behind for clean edges)
    doc.setFillColor(255, 255, 255)
    doc.circle(pageWidth / 2, 28, 18, 'F')
    doc.addImage(imgData, 'PNG', pageWidth / 2 - 16, 12, 32, 32)
  } catch (e) {
    // Fallback: draw initials circle
    doc.setFillColor(255, 255, 255)
    doc.circle(pageWidth / 2, 28, 16, 'F')
    doc.setTextColor(...PRIMARY_COLOR)
    setFont('bold', 18)
    addText('GK', pageWidth / 2, 32, { align: 'center' })
  }

  y = 52

  // Name below header
  y += 8
  doc.setTextColor(...TEXT_DARK)
  setFont('bold', 22)
  addText(personalInfo.name, pageWidth / 2, y, { align: 'center' })
  y += 7

  // Title with accent
  doc.setTextColor(...PRIMARY_COLOR)
  setFont('bold', 12)
  addText(personalInfo.title, pageWidth / 2, y, { align: 'center' })
  y += 5

  // Subtitle
  doc.setTextColor(...TEXT_GRAY)
  setFont('normal', 10)
  addText(personalInfo.subtitle, pageWidth / 2, y, { align: 'center' })
  y += 8

  // Contact info in a nice row with icons
  const contactY = y
  doc.setTextColor(...TEXT_GRAY)
  setFont('normal', 8)
  
  // Email
  doc.setTextColor(...PRIMARY_COLOR)
  addText('✉', margin + 15, contactY)
  doc.setTextColor(...TEXT_GRAY)
  addText(personalInfo.email, margin + 20, contactY)
  
  // Phone
  doc.setTextColor(...PRIMARY_COLOR)
  addText('☎', pageWidth / 2 - 10, contactY)
  doc.setTextColor(...TEXT_GRAY)
  addText(personalInfo.phone, pageWidth / 2 - 5, contactY)
  
  // Location
  doc.setTextColor(...PRIMARY_COLOR)
  addText('📍', pageWidth - margin - 50, contactY)
  doc.setTextColor(...TEXT_GRAY)
  addText(personalInfo.location, pageWidth - margin - 45, contactY)
  
  y += 5

  // Languages badges
  const langY = y
  const langStartX = pageWidth / 2 - 40
  doc.setFillColor(...BG_LIGHT)
  personalInfo.languages.forEach((lang, i) => {
    const x = langStartX + i * 28
    doc.roundedRect(x, langY - 3, 26, 6, 1.5, 1.5, 'F')
    doc.setTextColor(...TEXT_GRAY)
    setFont('normal', 7)
    addText(lang, x + 13, langY, { align: 'center' })
  })
  
  y += 6
  
  // Divider
  doc.setDrawColor(230, 230, 235)
  doc.setLineWidth(0.3)
  doc.line(margin, y, pageWidth - margin, y)

  // === PROFESSIONAL SUMMARY ===
  addSection('Professional Summary', '👤')
  
  doc.setTextColor(...TEXT_DARK)
  setFont('normal', 9.5)
  const bioLines = doc.splitTextToSize(personalInfo.bio, contentWidth)
  doc.text(bioLines, margin, y)
  y += bioLines.length * 4.5 + 3

  // Highlights as styled bullets
  personalInfo.highlights.slice(0, 4).forEach(highlight => {
    addBulletPoint(highlight)
  })

  // === KEY METRICS BAR ===
  y += 4
  checkPageBreak(18)
  
  doc.setFillColor(...BG_LIGHT)
  doc.roundedRect(margin, y, contentWidth, 14, 3, 3, 'F')
  
  const metrics = [
    { value: '9+', label: 'Years Exp' },
    { value: '15+', label: 'Team Led' },
    { value: '20+', label: 'Clients' },
    { value: '99%', label: 'Uptime' },
  ]
  
  const metricWidth = contentWidth / 4
  metrics.forEach((metric, i) => {
    const x = margin + metricWidth * i + metricWidth / 2
    doc.setTextColor(...PRIMARY_COLOR)
    setFont('bold', 14)
    addText(metric.value, x, y + 6, { align: 'center' })
    doc.setTextColor(...TEXT_GRAY)
    setFont('normal', 7)
    addText(metric.label, x, y + 11, { align: 'center' })
  })
  
  y += 18

  // === EXPERIENCE ===
  addSection('Professional Experience', '💼')

  experiences.forEach((exp, index) => {
    checkPageBreak(50)

    // Company row with styled badge
    doc.setFillColor(...PRIMARY_COLOR)
    doc.setTextColor(255, 255, 255)
    setFont('bold', 8)
    const periodWidth = doc.getTextWidth(exp.period) + 6
    doc.roundedRect(pageWidth - margin - periodWidth, y - 4, periodWidth, 6, 1.5, 1.5, 'F')
    addText(exp.period, pageWidth - margin - periodWidth / 2, y - 0.5, { align: 'center' })
    
    doc.setTextColor(...TEXT_DARK)
    setFont('bold', 11)
    addText(exp.company, margin, y)
    y += 4.5

    // Title & Location
    doc.setTextColor(...PRIMARY_COLOR)
    setFont('bold', 9.5)
    addText(exp.title, margin, y)
    
    doc.setTextColor(...TEXT_LIGHT)
    setFont('normal', 8)
    addText(exp.location, pageWidth - margin, y, { align: 'right' })
    y += 4.5

    // Description
    doc.setTextColor(...TEXT_GRAY)
    setFont('normal', 8.5)
    const descLines = doc.splitTextToSize(exp.description, contentWidth)
    doc.text(descLines, margin, y)
    y += descLines.length * 3.8 + 2

    // Key Achievements (up to 3)
    exp.achievements.slice(0, 3).forEach(achievement => {
      checkPageBreak(14)
      
      doc.setTextColor(...TEXT_DARK)
      setFont('bold', 8.5)
      addText(`▸ ${achievement.title}`, margin + 2, y)
      y += 3.5
      
      doc.setTextColor(...TEXT_GRAY)
      setFont('normal', 8)
      const achLines = doc.splitTextToSize(achievement.description, contentWidth - 8)
      doc.text(achLines, margin + 6, y)
      y += achLines.length * 3.5
      
      // Impact badge
      if (achievement.impact) {
        doc.setFillColor(...SUCCESS_COLOR)
        doc.setTextColor(255, 255, 255)
        setFont('bold', 7)
        const impactText = `↑ ${achievement.impact}`
        const impactWidth = doc.getTextWidth(impactText) + 5
        doc.roundedRect(margin + 6, y - 1, impactWidth, 5, 1, 1, 'F')
        addText(impactText, margin + 8.5, y + 2.5)
        y += 5
      }
      y += 1
    })

    // Technologies as tags
    y += 1
    doc.setTextColor(...TEXT_LIGHT)
    setFont('normal', 7)
    const techText = `Tech: ${exp.technologies.slice(0, 8).join(' • ')}`
    addText(techText, margin, y)
    y += 5

    if (index < experiences.length - 1) {
      // Subtle divider between experiences
      doc.setDrawColor(240, 240, 245)
      doc.setLineWidth(0.2)
      doc.line(margin + 20, y, pageWidth - margin - 20, y)
      y += 4
    }
  })

  // === SKILLS ===
  checkPageBreak(45)
  addSection('Technical Skills', '⚡')

  const skillCategories = Object.entries(skills)
  const colWidth = contentWidth / 2

  let skillY = y
  skillCategories.forEach(([ , category], index) => {
    const col = index % 2
    const xPos = margin + col * colWidth
    
    if (col === 0 && index > 0) {
      skillY += 14
    }
    
    if (col === 0) {
      checkPageBreak(18)
    }

    const yPos = col === 0 ? skillY : skillY

    // Category header with colored dot
    doc.setFillColor(...ACCENT_COLOR)
    doc.circle(xPos + 2, yPos - 1, 1.2, 'F')
    
    doc.setTextColor(...TEXT_DARK)
    setFont('bold', 9)
    addText(category.title, xPos + 6, yPos)

    // Skills as flowing text
    doc.setTextColor(...TEXT_GRAY)
    setFont('normal', 8)
    const skillNames = category.items.map(s => s.name).join(' • ')
    const skillLines = doc.splitTextToSize(skillNames, colWidth - 10)
    doc.text(skillLines, xPos + 6, yPos + 4.5)
  })

  y = skillY + 24

  // === EDUCATION ===
  checkPageBreak(28)
  addSection('Education', '🎓')

  // Education card
  doc.setFillColor(...BG_LIGHT)
  doc.roundedRect(margin, y - 2, contentWidth, 16, 2, 2, 'F')
  
  doc.setTextColor(...TEXT_DARK)
  setFont('bold', 10)
  addText(education.degree, margin + 4, y + 3)
  
  doc.setTextColor(...PRIMARY_COLOR)
  setFont('bold', 8)
  addText(education.period, pageWidth - margin - 4, y + 3, { align: 'right' })
  
  doc.setTextColor(...TEXT_GRAY)
  setFont('normal', 9)
  addText(`${education.institution}`, margin + 4, y + 9)
  
  doc.setTextColor(...TEXT_LIGHT)
  setFont('normal', 8)
  addText(education.location, pageWidth - margin - 4, y + 9, { align: 'right' })
  
  y += 20

  // === AVAILABILITY BANNER ===
  checkPageBreak(15)
  
  doc.setFillColor(16, 185, 129, 0.1)
  doc.setFillColor(220, 252, 231)
  doc.roundedRect(margin, y, contentWidth, 10, 2, 2, 'F')
  
  doc.setFillColor(...SUCCESS_COLOR)
  doc.circle(margin + 8, y + 5, 2, 'F')
  
  doc.setTextColor(...SUCCESS_COLOR)
  setFont('bold', 9)
  addText('Available for New Opportunities', margin + 14, y + 6)
  
  doc.setTextColor(...TEXT_GRAY)
  setFont('normal', 8)
  addText('Full-time • Contract • Consulting', pageWidth - margin - 4, y + 6, { align: 'right' })

  // === FOOTER ===
  const footerY = pageHeight - 8
  doc.setDrawColor(230, 230, 235)
  doc.setLineWidth(0.2)
  doc.line(margin, footerY - 4, pageWidth - margin, footerY - 4)
  
  doc.setTextColor(...TEXT_LIGHT)
  setFont('normal', 7)
  addText(`Portfolio: georgi-krastev.dev`, margin, footerY)
  addText(`Generated ${new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}`, pageWidth / 2, footerY, { align: 'center' })
  addText(personalInfo.email, pageWidth - margin, footerY, { align: 'right' })

  // Save the PDF
  doc.save(`${personalInfo.name.replace(' ', '_')}_Resume.pdf`)
}
