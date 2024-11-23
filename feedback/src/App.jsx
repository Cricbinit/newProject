import Home from "./components/Home"
import ResposiveAppBar from "./components/ResposiveAppBar"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Services from './components/Services';
import About from "./components/About";
const App = () => {
  return (
    <div>
   <Router future={{
v7_startTransition: true,
v7_relativeSplatPath: true,
}}>
   <ResposiveAppBar/>
   <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/services" element={<Services/>}/>
    <Route path="/about" element={<About/>}/>

   </Routes>
   </Router>
    </div>
  )
}

export default App