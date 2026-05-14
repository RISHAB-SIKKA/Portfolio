import About from "./Components/About/About"
import Contact from "./Components/Contact/Contact"
import Experience from "./Components/Experience/Experience"
import Home from "./Components/Home/Home"
import Navbar from "./Components/Navbar/Navbar"
import Projects from "./Components/Projects/Projects"

function App() {
  return (
    <div className="min-h-screen bg-[#0f0f0f] px-3 py-5 sm:px-5 sm:py-8 md:px-8">
      <div className="mx-auto max-w-4xl overflow-hidden rounded-lg border border-[#2a2a2a] bg-[#0f0f0f] font-mono text-[#e8e8e8] antialiased">
        <Navbar />
        <Home />
        <About />
        <Projects />
        <Experience />
        <Contact />
      </div>
    </div>
  )
}

export default App
