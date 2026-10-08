import { BrowserRouter as Router, Routes, Route } from "react-router-dom" 
import Header from "./components/Header"
import Footer from "./components/Footer"
import BrinquedosCard from "./components/BrinquedosCard"
import Brinquedos from "./pages/Brinquedos"
import Contato from "./pages/Contato"
import Error from "./pages/Error"
import Home from "./pages/Home"
import Login from "./pages/Login"

const App = () => {
  return (
    <Router>
      <div className="min-h-screen flex flex-col justify-between bg-[#141414] pt-4">
        <Header/>
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/brinquedos" element={<Brinquedos/>}/>
            <Route path="/contato" element={<Contato/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="*" element={<Error/>}/>
          </Routes>
      </div>
      
    </Router>
  )
}

export default App
