import { Routes,Route } from "react-router-dom"
import Home from "./components/views/Home"
import Collections from "./components/views/Collection"


const App = () => {
  return (
    <div className="min-h-screen bg-gradient-to-t from-gray-800 bg-repeat">

 
   <Routes>
      < Route path = "/" element ={<Home />} />
      < Route path = "/collections" element={<Collections />} />
   </Routes>
      
    
    </div>
  )
}

export default App
