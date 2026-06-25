import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Experience from './components/Experience'
import Gallery from './components/Gallery'
import Education from './components/Education'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="bg-[#04040c] text-slate-100 min-h-screen overflow-x-hidden">
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Gallery />
      <Education />
      <Footer />
    </div>
  )
}
