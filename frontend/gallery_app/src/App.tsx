import { Route, Routes } from "react-router-dom"

import Home from "./pages/Home"
import About from "./pages/About"
import Gallery from "./pages/Gallery"
import Contact from "./pages/Contact"


function App() {
  return (
    <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/gallery" element={<Gallery />}/>
        <Route path="/about" element={<About />}/>
        <Route path="/contact" element={<Contact />}/>
    </Routes>
  )
}

export default App
