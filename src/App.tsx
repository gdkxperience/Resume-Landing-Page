import { useState, useCallback } from 'react'
import { SpeedInsights } from '@vercel/speed-insights/react'
import { ThemeProvider } from './lib/ThemeContext'
import { SplashScreen } from './components/SplashScreen'
import { 
  Navigation, 
  Hero, 
  AboutMe,
  Skills, 
  Experience, 
  CaseStudies,
  Metrics,
  HowIWork,
  Contact, 
  Footer 
} from './components'

function App() {
  const [showSplash, setShowSplash] = useState(true)
  
  const handleSplashComplete = useCallback(() => {
    setShowSplash(false)
  }, [])

  return (
    <ThemeProvider>
      {/* Splash Screen */}
      {showSplash && <SplashScreen onComplete={handleSplashComplete} />}
      
      <div className="relative min-h-screen bg-[var(--bg-primary)] text-[var(--text-primary)] overflow-hidden transition-colors duration-300">
        {/* Fixed Navigation */}
        <Navigation />
        
        {/* Main Content */}
        <main>
          {/* Hero Section */}
          <Hero />
          
          {/* About Me Section */}
          <AboutMe />
          
          {/* Metrics Section */}
          <Metrics />
          
          {/* Experience Timeline */}
          <Experience />
          
          {/* Skills & Technologies */}
          <Skills />
          
          {/* Case Studies */}
          <CaseStudies />
          
          {/* How I Work */}
          <HowIWork />
          
          {/* Contact Section */}
          <Contact />
        </main>
        
        {/* Footer */}
        <Footer />
        
        {/* Global Noise Overlay */}
        <div className="fixed inset-0 pointer-events-none noise-overlay" />
      </div>
      
      {/* Vercel Speed Insights */}
      <SpeedInsights />
    </ThemeProvider>
  )
}

export default App
