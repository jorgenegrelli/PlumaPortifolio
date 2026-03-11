import Navbar from './components/Navbar'
import Hero from './components/Hero'
import WhyPluma from './components/WhyPluma'
import AIDemo from './components/AIDemo'
import Safety from './components/Safety'
import FinalCTA from './components/FinalCTA'
import Footer from './components/Footer'

function App() {
  return (
    <div className="antialiased">
      <Navbar />
      <main>
        <Hero />
        <WhyPluma />
        <AIDemo />
        <Safety />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  )
}

export default App
