import Hero from "./Hero"
import Navbar from "./Navbar"
import bgSection from '../assets/img/bg-simplify-section-desktop.svg'


const Header = () => {
  return (
    <div className="min-h-[80vh]">
        <Navbar />
        <Hero />
    </div>
  )
}

export default Header