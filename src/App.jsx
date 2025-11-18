import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Services from './components/Services'
import WhyUs from './components/WhyUs'
import References from './components/References'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 scroll-smooth">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <WhyUs />
        <References />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
