import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Experience from './components/Experience'
import PhotoStory from './components/PhotoStory'
import Education from './components/Education'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="bg-white text-slate-900 min-h-screen overflow-x-hidden">
      <Navbar />
      <Hero />
      <About />
      <PhotoStory />
      <Experience />
      <Education />
      <Footer />
    </div>
  )
}
