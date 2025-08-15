import './index.css'
import Header from './jsx/Header.jsx'
import Home from './jsx/Home.jsx'
import About from './jsx/About.jsx'
import Gallery from './jsx/Gallery.jsx'
import Services from './jsx/Services.jsx'
import Contact from './jsx/Contact.jsx'
import Footer from './jsx/Footer.jsx'
import { useEffect } from "react"

function App() {
  
  useEffect(() => {
    // Scroll to top on page reload
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Header />
      <Home />
      <About />
      <Gallery />
      <Services />
      <Contact />
      <Footer />
    </>
  )
}

export default App
