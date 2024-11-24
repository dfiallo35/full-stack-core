import { Route, Routes } from "react-router-dom"

import Home from "./pages/Home"
import About from "./pages/About"
import Gallery from "./pages/Gallery"


function App() {
  return (
    <body>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/gallery" element={<Gallery />}/>
        <Route path="/about" element={<About />}/>
      </Routes>
    </body>
  )
}

export default App
