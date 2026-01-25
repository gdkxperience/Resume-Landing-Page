import { ThemeProvider } from './lib/ThemeContext'
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
  return (
    <ThemeProvider>
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
    </ThemeProvider>
  )
}

export default App
