import jsPDF from 'jspdf'
import { personalInfo, skills, experiences, education } from '@/data/resume'

// Colors
const PRIMARY_COLOR: [number, number, number] = [51, 115, 255] // #3373ff
const TEXT_DARK: [number, number, number] = [30, 30, 40]
const TEXT_GRAY: [number, number, number] = [100, 100, 110]
const TEXT_LIGHT: [number, number, number] = [140, 140, 150]

export function generateResumePDF() {
  const doc = new jsPDF({
    orientation: 'portrait',
    unit: 'mm',
    format: 'a4'
  })

  const pageWidth = doc.internal.pageSize.getWidth()
  const pageHeight = doc.internal.pageSize.getHeight()
  const margin = 20
  const contentWidth = pageWidth - margin * 2
  let y = margin

  // Helper functions
  const setFont = (style: 'normal' | 'bold' = 'normal', size = 10) => {
    doc.setFont('helvetica', style)
    doc.setFontSize(size)
  }

  const addText = (text: string, x: number, yPos: number, options?: { maxWidth?: number; align?: 'left' | 'center' | 'right' }) => {
    if (options?.maxWidth) {
      doc.text(text, x, yPos, { maxWidth: options.maxWidth, align: options.align })
    } else {
      doc.text(text, x, yPos, { align: options?.align })
    }
  }

  const addSection = (title: string) => {
    y += 8
    doc.setTextColor(...PRIMARY_COLOR)
    setFont('bold', 12)
    addText(title.toUpperCase(), margin, y)
    
    // Underline
    y += 2
    doc.setDrawColor(...PRIMARY_COLOR)
    doc.setLineWidth(0.5)
    doc.line(margin, y, margin + 40, y)
    
    y += 6
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
  // Name
  doc.setTextColor(...PRIMARY_COLOR)
  setFont('bold', 24)
  addText(personalInfo.name, pageWidth / 2, y, { align: 'center' })
  y += 8

  // Title
  doc.setTextColor(...TEXT_DARK)
  setFont('normal', 14)
  addText(personalInfo.title, pageWidth / 2, y, { align: 'center' })
  y += 5

  // Subtitle
  doc.setTextColor(...TEXT_GRAY)
  setFont('normal', 11)
  addText(personalInfo.subtitle, pageWidth / 2, y, { align: 'center' })
  y += 8

  // Contact Info Line
  doc.setTextColor(...TEXT_GRAY)
  setFont('normal', 9)
  const contactLine = `${personalInfo.email}  •  ${personalInfo.phone}  •  ${personalInfo.location}`
  addText(contactLine, pageWidth / 2, y, { align: 'center' })
  y += 4

  // Languages
  const languagesLine = personalInfo.languages.join('  •  ')
  addText(languagesLine, pageWidth / 2, y, { align: 'center' })
  y += 6

  // Divider
  doc.setDrawColor(220, 220, 225)
  doc.setLineWidth(0.3)
  doc.line(margin, y, pageWidth - margin, y)

  // === PROFESSIONAL SUMMARY ===
  addSection('Professional Summary')
  
  doc.setTextColor(...TEXT_DARK)
  setFont('normal', 10)
  const bioLines = doc.splitTextToSize(personalInfo.bio, contentWidth)
  doc.text(bioLines, margin, y)
  y += bioLines.length * 5 + 2

  // Highlights
  doc.setTextColor(...TEXT_GRAY)
  setFont('normal', 9)
  personalInfo.highlights.forEach(highlight => {
    addText(`• ${highlight}`, margin + 2, y)
    y += 4.5
  })

  // === EXPERIENCE ===
  addSection('Professional Experience')

  experiences.forEach((exp, index) => {
    checkPageBreak(45)

    // Company & Period
    doc.setTextColor(...TEXT_DARK)
    setFont('bold', 11)
    addText(exp.company, margin, y)
    
    doc.setTextColor(...TEXT_GRAY)
    setFont('normal', 9)
    addText(exp.period, pageWidth - margin, y, { align: 'right' })
    y += 4.5

    // Title
    doc.setTextColor(...PRIMARY_COLOR)
    setFont('normal', 10)
    addText(exp.title, margin, y)
    
    doc.setTextColor(...TEXT_LIGHT)
    setFont('normal', 9)
    addText(exp.location, pageWidth - margin, y, { align: 'right' })
    y += 4.5

    // Description
    doc.setTextColor(...TEXT_GRAY)
    setFont('normal', 9)
    const descLines = doc.splitTextToSize(exp.description, contentWidth)
    doc.text(descLines, margin, y)
    y += descLines.length * 4 + 2

    // Key Achievements (first 2)
    exp.achievements.slice(0, 2).forEach(achievement => {
      checkPageBreak(12)
      doc.setTextColor(...TEXT_DARK)
      setFont('normal', 9)
      const achText = `• ${achievement.title}: ${achievement.description}`
      const achLines = doc.splitTextToSize(achText, contentWidth - 4)
      doc.text(achLines, margin + 2, y)
      y += achLines.length * 4
      
      // Impact
      if (achievement.impact) {
        doc.setTextColor(...PRIMARY_COLOR)
        setFont('normal', 8)
        addText(`  Impact: ${achievement.impact}`, margin + 4, y)
        y += 4
      }
    })

    // Technologies
    doc.setTextColor(...TEXT_LIGHT)
    setFont('normal', 8)
    const techText = `Technologies: ${exp.technologies.slice(0, 6).join(', ')}`
    addText(techText, margin, y)
    y += 6

    if (index < experiences.length - 1) {
      y += 2
    }
  })

  // === SKILLS ===
  checkPageBreak(40)
  addSection('Technical Skills')

  const skillCategories = Object.entries(skills)
  const colWidth = contentWidth / 2

  skillCategories.forEach(([ , category], index) => {
    const col = index % 2
    const xPos = margin + col * colWidth
    
    if (col === 0 && index > 0) {
      y += 12
    }
    
    if (col === 0) {
      checkPageBreak(15)
    }

    const yPos = col === 0 ? y : y - 12

    doc.setTextColor(...TEXT_DARK)
    setFont('bold', 9)
    addText(category.title, xPos, yPos)

    doc.setTextColor(...TEXT_GRAY)
    setFont('normal', 8)
    const skillNames = category.items.map(s => s.name).join(', ')
    const skillLines = doc.splitTextToSize(skillNames, colWidth - 5)
    doc.text(skillLines, xPos, yPos + 4)
  })

  y += 20

  // === EDUCATION ===
  checkPageBreak(25)
  addSection('Education')

  doc.setTextColor(...TEXT_DARK)
  setFont('bold', 10)
  addText(education.degree, margin, y)
  
  doc.setTextColor(...TEXT_GRAY)
  setFont('normal', 9)
  addText(education.period, pageWidth - margin, y, { align: 'right' })
  y += 4.5

  doc.setTextColor(...TEXT_GRAY)
  setFont('normal', 9)
  addText(`${education.institution}, ${education.location}`, margin, y)
  y += 8

  // === FOOTER ===
  doc.setTextColor(...TEXT_LIGHT)
  setFont('normal', 8)
  const footerY = pageHeight - 10
  addText(`Generated from portfolio • ${new Date().toLocaleDateString()}`, pageWidth / 2, footerY, { align: 'center' })

  // Save the PDF
  doc.save(`${personalInfo.name.replace(' ', '_')}_Resume.pdf`)
}
